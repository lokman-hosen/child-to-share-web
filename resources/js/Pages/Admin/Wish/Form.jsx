import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSquarePlus, faTrash, faUpload} from "@fortawesome/free-solid-svg-icons";
import MultiSelectTextField from "@/Components/MultiSelectTextField.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";

const Form = ({categories, wish, module, ageRanges}) => {
    const fileInputRef = useRef(null);
    const [donationImages, setDonationImages] = useState([]);
    const [selectedExistingImages, setSelectedExistingImages] = useState([]);
    const [isLoadingImages, setIsLoadingImages] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: wish?.title || '',
        category: wish?.category.name || '',
        description: wish?.description || '',
        age_range: wish?.age_range || '',
        attachments: [], // For new file uploads
        existing_attachments: [], // For selected existing donation images
        status: wish?.status || 'available',
        _method: wish ? 'PUT' : 'POST',
    });

    // Fetch donation images when category changes
    useEffect(() => {
        if (data.category) {
            fetchDonationImages(data.category);
        } else {
            setDonationImages([]);
            setSelectedExistingImages([]);
        }
    }, [data.category]);

    // Initialize form data when wish is provided (for editing)
    useEffect(() => {
        if (wish) {
            const formattedTags = formatTags(wish.auto_tags);
            setData((prevData) => ({
                ...prevData,
                title: wish?.title || '',
                category: wish?.category.name || '',
                description: wish?.description || '',
                status: wish?.status || 'available',
                existing_attachments: wish?.existing_attachments || [],
                _method: 'PUT',
            }));

            // Set selected existing images if editing
            if (wish.existing_attachments) {
                setSelectedExistingImages(wish.existing_attachments);
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

    // Handle selection of existing donation images
    const handleExistingImageSelect = (image) => {
        const isSelected = selectedExistingImages.some(selected => selected.id === image.id);

        let newSelectedImages;
        if (isSelected) {
            // Remove if already selected
            newSelectedImages = selectedExistingImages.filter(selected => selected.id !== image.id);
        } else {
            // Add to selection
            newSelectedImages = [...selectedExistingImages, image];
        }

        setSelectedExistingImages(newSelectedImages);
        setData('existing_attachments', newSelectedImages.map(img => img.id));
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
                setSelectedExistingImages([]);
                setDonationImages([]);
            },
            onError: (submissionErrors) => {
                console.error("Form submission errors:", submissionErrors);
            },
            preserveScroll: true,
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setData('attachments', files);
        e.target.value = '';
    };

    const handleAddMoreFiles = (e) => {
        const files = Array.from(e.target.files);
        setData('attachments', [...data.attachments, ...files]);
        e.target.value = '';
    };

    const removeFile = (index) => {
        const newAttachments = data.attachments.filter((_, i) => i !== index);
        setData('attachments', newAttachments);
    };

    const ageRangeOptions = getStatusOptions(ageRanges);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TextInput
                    id="title"
                    label="Item Title/Name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g., Winter Coat, Story Books, etc."
                    required
                />

                <CustomCreatableSelect
                    id="category"
                    label="Category(type to create new)"
                    value={data.category}
                    onChange={(value) => setData('category', value)}
                    options={categories}
                    error={errors.category}
                    placeholder="Select or type to create new category"
                    required
                />

                <SelectInput
                    id="age_range"
                    label="Age range(Child)"
                    value={data.age_range}
                    onChange={(e) => setData('age_range', e.target.value)}
                    error={errors.age_range}
                    options={ageRangeOptions}
                    required
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                <TextareaInput
                    id="description"
                    label="Description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="Write why you are wishing for the item"
                    required
                />
            </div>

            {/* Donation Images Section - Show only when category is selected */}
            {data.category && (
                <div className={`grid grid-cols-1 gap-6 ${donationImages.length > 0 ? '' : 'hidden'}`}>
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Choose from existing donation images
                        </label>

                        {isLoadingImages ? (
                            <div className="text-center py-4">
                                <p className="text-gray-500">Loading donation images...</p>
                            </div>
                        ) : donationImages.length > 0 ? (
                            <div className="border border-gray-200 rounded-lg p-4">
                                <p className="text-sm text-gray-600 mb-3">
                                    Select images from previous donations in this category:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {donationImages.map((image) => {
                                        const isSelected = selectedExistingImages.some(selected => selected.id === image.id);
                                        return (
                                            <div
                                                key={image.id}
                                                className={`relative border-2 rounded-lg cursor-pointer transition-all ${
                                                    isSelected
                                                        ? 'border-indigo-500 ring-2 ring-indigo-200'
                                                        : 'border-gray-200 hover:border-gray-400'
                                                }`}
                                                onClick={() => handleExistingImageSelect(image)}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={image.alt_text || 'Donation image'}
                                                    className="w-full h-24 object-cover rounded-md"
                                                />
                                                {isSelected && (
                                                    <div className="absolute top-1 right-1 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                                        ✓
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    {selectedExistingImages.length} image(s) selected
                                </p>
                            </div>
                        ) : (
                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                <p className="text-gray-500">
                                    No donation images found for this category. Please upload new images below.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* File Upload Section for new files */}
            <div className={`grid grid-cols-1 gap-6 ${donationImages.length > 0 ? 'hidden' : ''}`}>
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Upload new images (png,jpg,jpeg. Min size: 800x500)
                        {!wish && data.existing_attachments.length === 0 && (
                            <span className="text-red-500">*</span>
                        )}
                    </label>

                    {/* Main File Input */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                            type="file"
                            ref={fileInputRef}
                            multiple
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md shadow-sm"
                        >
                            <FontAwesomeIcon icon={faUpload} className="mr-2"/>
                            {data.attachments.length > 0 ? 'Replace All Files' : 'Choose Files'}
                        </button>
                        <p className="mt-2 text-sm text-gray-500">
                            Upload images(min size: 800x500). Images will be automatically optimized.
                        </p>
                    </div>

                    {/* Add More Files Button */}
                    {data.attachments.length > 0 && (
                        <div className="text-center">
                            <input
                                type="file"
                                multiple
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={handleAddMoreFiles}
                                id="add-more-files"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('add-more-files')?.click()}
                                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                            >
                                <FontAwesomeIcon icon={faSquarePlus} className="mr-1"/>
                                Add More Files
                            </button>
                        </div>
                    )}

                    {/* Selected Files Preview */}
                    {data.attachments.length > 0 && (
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">New Files to Upload:</h4>
                            <div className="space-y-2">
                                {data.attachments.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-700">
                                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {errors.attachments && (
                        <p className="mt-1 text-sm text-red-600">{errors.attachments}</p>
                    )}
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50"
                >
                    {wish ? (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEdit}/>
                            <span>Update Wish</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faSquarePlus}/>
                            <span>Create Wish</span>
                        </div>
                    )}
                </button>
            </div>
        </form>
    );
};

export default Form;
