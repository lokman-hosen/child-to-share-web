import React, { useEffect, useRef } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSquarePlus, faTrash, faUpload} from "@fortawesome/free-solid-svg-icons";
import MultiSelectTextField from "@/Components/MultiSelectTextField.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";

const Form = ({categories, donation, statuses, module}) => {
    const fileInputRef = useRef(null);

    // Convert auto_tags from string/array to the format MultiSelect expects
    const formatTags = (tags) => {
        if (!tags) return [];
        if (Array.isArray(tags)) {
            return tags.map(tag => ({
                label: tag,
                value: tag
            }));
        }
        if (typeof tags === 'string') {
            try {
                const parsedTags = JSON.parse(tags);
                if (Array.isArray(parsedTags)) {
                    return parsedTags.map(tag => ({
                        label: tag,
                        value: tag
                    }));
                }
            } catch (e) {
                // If it's a comma-separated string
                return tags.split(',').map(tag => tag.trim()).filter(tag => tag).map(tag => ({
                    label: tag,
                    value: tag
                }));
            }
        }
        return [];
    };

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: donation?.title || '',
        item_condition: donation?.item_condition || '',
        category_id: donation?.category_id || '',
        description: donation?.description || '',
        auto_tags: donation?.auto_tags || [],
        attachments: [], // Always start with empty array for new files
        status: donation?.status || 'available',
        remember: false, // Add remember field for the checkbox
    });

    // Convert auto_tags to the format MultiSelect expects
    const [tags, setTags] = React.useState(formatTags(donation?.auto_tags));

    // Update form data when tags change
    useEffect(() => {
        // Convert tags back to array of strings for form submission
        const tagValues = tags.map(tag => tag.value);
        setData('auto_tags', tagValues);
    }, [tags, setData]);

    useEffect(() => {
        if (donation) {
            const formattedTags = formatTags(donation.auto_tags);
            setTags(formattedTags);
            setData((prevData) => ({
                ...prevData,
                title: donation?.title || '',
                item_condition: donation?.item_condition || '',
                category_id: donation?.category_id || '',
                description: donation?.description || '',
                auto_tags: formattedTags.map(tag => tag.value),
                status: donation?.status || 'available',
                // Don't set attachments from donation as they're already stored
            }));
        } else {
            reset();
            setTags([]);
        }
    }, [donation, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = donation
            ? route('donations.update', donation.id)
            : route('donations.store');

        if (donation) {
            put(submitRoute, {
                forceFormData: true,
                onSuccess: () => {
                    // No need to reset on update
                },
                onError: (submissionErrors) => {
                    console.error("Form submission errors:", submissionErrors);
                },
                preserveScroll: true,
            });
        } else {
            post(submitRoute, {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    setTags([]);
                },
                onError: (submissionErrors) => {
                    console.error("Form submission errors:", submissionErrors);
                },
                preserveScroll: true,
            });
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setData('attachments', files);
        // Clear the input so the same file can be selected again if needed
        e.target.value = '';
    };

    const handleAddMoreFiles = (e) => {
        const files = Array.from(e.target.files);
        setData('attachments', [...data.attachments, ...files]);
        // Clear the input
        e.target.value = '';
    };

    const removeFile = (index) => {
        const newAttachments = data.attachments.filter((_, i) => i !== index);
        setData('attachments', newAttachments);
    };

    const statusOptions = getStatusOptions(statuses);
    const categoryOptions = getDropdownOptions(categories, 'id', 'name');

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TextInput
                    id="title"
                    label="Title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g., Winter Coat, Story Books, etc."
                    required
                />
                <TextInput
                    id="item_condition"
                    label="Item condition"
                    value={data.item_condition}
                    onChange={(e) => setData('item_condition', e.target.value)}
                    error={errors.item_condition}
                    placeholder="e.g., good, new, Like new or excellent etc."
                    required
                />
                <SelectInput
                    id="category_id"
                    label="Select category"
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    error={errors.category_id}
                    options={categoryOptions}
                    required
                />
                <MultiSelectTextField
                    id="auto_tags"
                    label="Tags(write and press enter)"
                    value={tags}
                    onChange={setTags}
                    placeholder="Type tag and press enter..."
                    error={errors.auto_tags}
                    required
                />
                { donation &&
                    <SelectInput
                        id="status"
                        label="Status"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        error={errors.status}
                        options={statusOptions}
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
                    placeholder="Enter item description"
                    required
                />

                {/* File Upload Section */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Attachments (images(min size: 500x400) & Videos(max length: 30s))
                        {!donation && (
                            <span className="text-red-500">*</span>
                        )}

                    </label>

                    {/* Main File Input */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                            type="file"
                            ref={fileInputRef}
                            multiple
                            accept="image/png, image/jpg, image/jpeg,video/mp4"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md shadow-sm"
                        >
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            {data.attachments.length > 0 ? 'Replace All Files' : 'Choose Files'}
                        </button>
                        <p className="mt-2 text-sm text-gray-500">
                            Upload images(min size: 500x400) and videos(max length: 30s). Images will be automatically optimized.
                        </p>
                    </div>

                    {/* Add More Files Button - Only show if there are already files */}
                    {data.attachments.length > 0 && (
                        <div className="text-center">
                            <input
                                type="file"
                                multiple
                                accept="image/png, image/jpg, image/jpeg,video/mp4"
                                onChange={handleAddMoreFiles}
                                id="add-more-files"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('add-more-files')?.click()}
                                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                            >
                                <FontAwesomeIcon icon={faSquarePlus} className="mr-1" />
                                Add More Files
                            </button>
                        </div>
                    )}

                    {/* Selected Files Preview */}
                    {data.attachments.length > 0 && (
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
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
                                            <FontAwesomeIcon icon={faTrash} />
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

                <div className="flex items-center">
                    <Checkbox
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) =>
                            setData('remember', e.target.checked)
                        }
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Request admin assistance for pickup/delivery</label>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50"
                >
                    {donation ? (
                        // Button content for Update User
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEdit}/>
                            <span>Edit Donation</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faSquarePlus}/>
                            <span>Create Donation</span>
                        </div>
                    )}
                </button>
            </div>
        </form>
    );
};

export default Form;