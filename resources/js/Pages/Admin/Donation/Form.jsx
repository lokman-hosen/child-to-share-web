import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import MultiSelectTextField from "@/Components/MultiSelectTextField.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import FileInputField from "@/Components/FileInputField.jsx";
import Checkbox from "@/Components/Checkbox.jsx";

const Form = ({categories, donation, statuses, module}) => {
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
        attachments: donation?.attachments || [],
        status: donation?.status || '',
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
                attachments: donation?.attachments || '',
                status: donation?.status || '',
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

        // The key fix is here:
        // Use the `put` method for updates and remove `forceFormData: true`
        if (donation) {
            put(submitRoute, {
                onSuccess: () => {
                    // No need to reset on update
                },
                onError: (submissionErrors) => {
                    console.error("Form submission errors:", submissionErrors);
                },
                preserveScroll: true,
            });
        } else {
            // Use the `post` method for creation
            post(submitRoute, {
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

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) {
            setData(`${field}_removed`, false);
        }
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
                <TextInput
                    id="description"
                    label="Description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="Enter iteam description"
                    required
                />
                <SelectInput
                    id="category_id"
                    label="Category"
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    error={errors.category_id}
                    options={categoryOptions}
                    required
                />
                <MultiSelectTextField
                    id="auto_tags"
                    label="Tags"
                    required={false}
                    value={tags}
                    onChange={setTags}
                    placeholder="Type tag and press enter..."
                    error={errors.auto_tags}
                />
                <SelectInput
                    id="status"
                    label="Status"
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    error={errors.status}
                    options={statusOptions}
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
                    placeholder="Enter iteam description"
                    required
                />

                <FileInputField
                    id="attachments"
                    label="Transaction File (PDF/Image)"
                    onFileChange={(file) => handleFileChange('attachments', file)}
                    currentFileUrl={data?.attachments || null}
                    error={errors.attachments}
                    accept="image/*,.pdf"
                    required={!donation}
                />

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
                            <i className="fas fa-edi mr-2"></i>
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
