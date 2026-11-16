import React, { useEffect, useState } from 'react';
import {useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, FormActions, FormSection, ImageUploader, SafeImage, cn } from "@/Components/UI";
import TextareaInput from "@/Components/TextareaInput.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";

const Form = ({categories, wish, statuses, module, ageRanges, wishers}) => {
    const user = usePage().props.auth.user;

    const [donationImages, setDonationImages] = useState([]);
    const [selectedExistingImage, setSelectedExistingImage] = useState(null);
    const [isLoadingImages, setIsLoadingImages] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: wish?.title || '',
        category: wish?.category?.name || '',
        description: wish?.description || '',
        age_range: wish?.age_range || '',
        attachments: [], // For new file uploads
        existing_attachment: null, // For single selected existing donation image
        status: wish?.status || 'available',
        user_id: wish?.user_id || '',
        _method: wish ? 'PUT' : 'POST',
    });


    // Fetch donation images when category changes
    useEffect(() => {
        if (data.category) {
            fetchDonationImages(data.category);
        } else {
            setDonationImages([]);
            setSelectedExistingImage(null);
        }
    }, [data.category]);

    // Initialize form data when wish is provided (for editing)
    useEffect(() => {
        if (wish) {
            setData((prevData) => ({
                ...prevData,
                title: wish?.title || '',
                category: wish?.category?.name || '',
                description: wish?.description || '',
                status: wish?.status || 'available',
                user_id: wish?.user_id || '',
                existing_attachment: wish?.existing_attachment || null,
                _method: 'PUT',
            }));

            // Set selected existing image if editing
            if (wish.existing_attachment) {
                setSelectedExistingImage(wish.existing_attachment);
            }
        } else {
            setData('_method', 'POST');
            reset();
        }
    }, [wish, setData, reset]);

    // Function to fetch donation images based on selected category
    const fetchDonationImages = async (categoryName) => {
        if (!categoryName) return;

        setIsLoadingImages(true);
        try {
            const response = await fetch(route('categories.donation-images', { category: categoryName }));
            const result = await response.json();

            if (result.success) {
                setDonationImages(result.images || []);
            } else {
                setDonationImages([]);
            }
        } catch (error) {
            console.error('Error fetching donation images:', error);
            setDonationImages([]);
        } finally {
            setIsLoadingImages(false);
        }
    };

    // Handle selection of existing donation image (single selection)
    const handleExistingImageSelect = (image) => {
        if (selectedExistingImage?.id === image.id) {
            // If clicking the same image, deselect it
            setSelectedExistingImage(null);
            setData('existing_attachment', null);
        } else {
            // Select new image
            setSelectedExistingImage(image);
            setData('existing_attachment', image.id);
        }
    };

    // Clear selected existing image
    const clearSelectedImage = () => {
        setSelectedExistingImage(null);
        setData('existing_attachment', null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = wish
            ? route('wishes.update', wish.id)
            : route('wishes.store');

        post(submitRoute, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setSelectedExistingImage(null);
                setDonationImages([]);
            },
            preserveScroll: true,
        });
    };

    const ageRangeOptions = getStatusOptions(ageRanges);
    const wisherOptions = getDropdownOptions(wishers, 'id', 'name');
    const canPickWisher = user.userType === 'organization' || user.role == 'super-admin';

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="What is the wish?" description="Tell contributors what the child needs and why.">
                <TextInput
                    id="title"
                    label="Item name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g. Winter coat, story books"
                    required
                />
                <CustomCreatableSelect
                    id="category"
                    label="Category"
                    value={data.category}
                    onChange={(value) => setData('category', value)}
                    options={categories}
                    error={errors.category}
                    placeholder="Pick or type a new category"
                    required
                />
                <SelectInput
                    id="age_range"
                    label="Child's age"
                    value={data.age_range}
                    onChange={(e) => setData('age_range', e.target.value)}
                    error={errors.age_range}
                    options={ageRangeOptions}
                    placeholder="Select an age range"
                    required
                />
                {canPickWisher && (
                    <SelectInput
                        id="user_id"
                        label="Wish for"
                        value={data.user_id}
                        onChange={(e) => setData('user_id', e.target.value)}
                        error={errors.user_id}
                        options={wisherOptions}
                        placeholder="Select a wisher"
                        required
                    />
                )}
                <TextareaInput
                    id="description"
                    label="Why is this wished for?"
                    className="md:col-span-2"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="A few words about the child and why this item would help…"
                    required
                />
            </FormSection>

            <FormSection
                title="Photo"
                description={wish ? 'New photos are added to the ones already uploaded.' : 'Pick a photo from an existing gift in this category, or upload your own.'}
                columns=""
            >
                {data.category && (
                    <div>
                        <p className="text-sm font-medium text-slate-800">Use a photo from a gift in “{data.category}”</p>
                        {isLoadingImages ? (
                            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-6" aria-busy="true" aria-label="Loading gift photos">
                                {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-square animate-pulse rounded-lg bg-slate-100" />)}
                            </div>
                        ) : donationImages.length > 0 ? (
                            <>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    {selectedExistingImage ? '1 photo selected. Tap it again to unselect.' : 'Tap a photo to use it for this wish.'}
                                </p>
                                <ul className="mt-3 grid max-h-80 grid-cols-3 gap-3 overflow-y-auto p-0.5 sm:grid-cols-5 lg:grid-cols-6">
                                    {donationImages.map((image) => {
                                        const isSelected = selectedExistingImage?.id === image.id;
                                        return (
                                            <li key={image.id}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleExistingImageSelect(image)}
                                                    aria-pressed={isSelected}
                                                    aria-label={image.alt_text || image.file_name || 'Gift photo'}
                                                    className={cn(
                                                        'relative block aspect-square w-full overflow-hidden rounded-lg ring-2 transition',
                                                        isSelected ? 'ring-primary-600' : 'ring-transparent hover:ring-slate-300',
                                                    )}
                                                >
                                                    <SafeImage src={image.url} alt="" className="h-full w-full object-cover" fallbackClassName="h-full w-full" />
                                                    {isSelected && (
                                                        <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white shadow-xs">
                                                            <FontAwesomeIcon icon={faCheck} className="h-3 w-3" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {selectedExistingImage && (
                                    <button type="button" onClick={clearSelectedImage} className="mt-2 text-xs font-medium text-slate-600 hover:text-danger-700">
                                        Clear selection
                                    </button>
                                )}
                            </>
                        ) : (
                            <p className="mt-1 text-sm text-slate-500">No gift photos in this category yet. Upload your own below.</p>
                        )}
                        <div className="my-5 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                            <span className="h-px flex-1 bg-slate-200" />or<span className="h-px flex-1 bg-slate-200" />
                        </div>
                    </div>
                )}

                <ImageUploader
                    id="attachments"
                    label="Upload photos"
                    hint="PNG or JPG, at least 800×500. Images are optimized automatically."
                    required={!wish && !selectedExistingImage}
                    files={data.attachments}
                    onChange={(files) => setData('attachments', files)}
                    error={errors.attachments}
                />
            </FormSection>

            <FormActions>
                <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>
                    {wish ? 'Save changes' : 'Create wish'}
                </Button>
            </FormActions>
        </form>
    );
};

export default Form;
