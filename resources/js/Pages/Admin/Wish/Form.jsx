import React, { useEffect, useRef, useState } from 'react';
import {useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faEdit, faSquarePlus, faTrash, faUpload} from "@fortawesome/free-solid-svg-icons";
import TextareaInput from "@/Components/TextareaInput.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";

const Form = ({categories, wish, statuses, module, ageRanges, wishers}) => {
    const user = usePage().props.auth.user;

    const fileInputRef = useRef(null);
    const [donationImages, setDonationImages] = useState([]);
    const [selectedExistingImage, setSelectedExistingImage] = useState(null);
    const [isLoadingImages, setIsLoadingImages] = useState(false);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: wish?.title || '',
        category: wish?.category.name || '',
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
                category: wish?.category.name || '',
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
    const wisherOptions = getDropdownOptions(wishers, 'id', 'name');

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <TextInput
                    id="title"
                    label="Item Title/Name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g., Winter Coat, Story Books, etc."
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
                {user.userType === 'organization' &&
                    <SelectInput
                        id="user_id"
                        label="Select Wisher(Wish for)"
                        value={data.user_id}
                        onChange={(e) => setData('user_id', e.target.value)}
                        error={errors.user_id}
                        options={wisherOptions}
                        required
                    />
                }
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
                            Choose one image from existing donation images
                        </label>

                        {isLoadingImages ? (
                            <div className="text-center py-4">
                                <p className="text-gray-500">Loading donation images...</p>
                            </div>
                        ) : donationImages.length > 0 ? (
                            <div className="border border-gray-200 rounded-lg p-4">
                                <p className="text-sm text-gray-600 mb-3">
                                    Select one image from previous donations in this category:
                                </p>

                                {/* Selected Image Preview */}
                                {selectedExistingImage && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={selectedExistingImage.url}
                                                    alt={selectedExistingImage.alt_text || 'Selected donation image'}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                                <div>
                                                    <p className="text-sm font-medium text-green-800">
                                                        Selected Image
                                                    </p>
                                                    <p className="text-xs text-green-600">
                                                        {selectedExistingImage.file_name}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={clearSelectedImage}
                                                className="text-red-600 hover:text-red-800 text-sm font-medium"
                                            >
                                                <FontAwesomeIcon icon={faTrash} className="mr-1"/>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Image Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {donationImages.map((image) => {
                                        const isSelected = selectedExistingImage?.id === image.id;
                                        return (
                                            <div
                                                key={image.id}
                                                className={`relative border-2 rounded-lg cursor-pointer transition-all ${
                                                    isSelected
                                                        ? 'border-green-500 ring-2 ring-green-200'
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
                                                    <div
                                                        className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                                        ✓
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                {errors.attachments &&
                                    <p className="text-red-500">{errors.attachments}</p>
                                }
                                <p className="text-xs text-gray-500 mt-2">
                                    {selectedExistingImage ? '1 image selected' : 'Click to select one image'}
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

            {/* File Upload Section for new files - Show when no existing images or user wants to upload */}
            <div className={`grid grid-cols-1 gap-6 ${donationImages.length > 0 ? 'hidden' : ''}`}>
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        {donationImages.length > 0
                            ? "Or upload new images (png,jpg,jpeg. Min size: 800x500)"
                            : "Upload new images (png,jpg,jpeg. Min size: 800x500)"
                        }
                        {!wish && !selectedExistingImage && (
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
                                    <div key={index}
                                         className="flex items-center justify-between bg-gray-50 p-3 rounded">
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

            <div className="mt-8 flex justify-center space-x-4">
                {/* Back Button */}
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                >
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span>Back</span>
                    </div>
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50 transition-colors duration-200"
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
