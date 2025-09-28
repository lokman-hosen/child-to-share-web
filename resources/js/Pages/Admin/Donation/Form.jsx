import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faSquarePlus} from "@fortawesome/free-solid-svg-icons";

const TransferTypeForm = ({categories, donation, statuses, module}) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: donation?.title || '',
        item_condition: donation?.item_condition || '',
        category_id: donation?.category_id || '',
        description: donation?.description || '',
        auto_tags: donation?.auto_tags || '',
        status: donation?.status || '',
    });

    // We don't need a useEffect to set _method, Inertia handles that automatically
    // when you use `post` or `put`.
    useEffect(() => {
        if (donation) {
            setData((prevData) => ({
                ...prevData,
                title: donation?.title || '',
                item_condition: donation?.item_condition || '',
                category_id: donation?.category_id || '',
                description: donation?.description || '',
                auto_tags: donation?.auto_tags || '',
                status: donation?.status || '',
            }));
        } else {
            reset();
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
                },
                onError: (submissionErrors) => {
                    console.error("Form submission errors:", submissionErrors);
                },
                preserveScroll: true,
            });
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

export default TransferTypeForm;
