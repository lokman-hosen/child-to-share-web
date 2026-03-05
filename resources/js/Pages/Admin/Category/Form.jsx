import React, {useEffect, useRef, useState} from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft, faClose,
    faEdit, faMapMarkerAlt,
    faSearch,
    faSpinner,
    faSquarePlus,
    faTrash,
    faUpload
} from "@fortawesome/free-solid-svg-icons";
import MultiSelectTextField from "@/Components/MultiSelectTextField.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {Button} from "@headlessui/react";

const Form = ({category, statuses}) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: category?.name || '',
        description: category?.description || '',
        is_active: category?.is_active || 1,
    });


    useEffect(() => {
        if (category) {
            setData((prevData) => ({
                ...prevData,
                name: category?.name || '',
                description: category?.description || '',
                is_active: category?.is_active ||'',
            }));
        } else {
            reset();
        }
    }, [category, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category) {
            // UPDATE (PUT)
            put(route('categories.update', category.id), {
                onSuccess: () => {
                    reset();
                },
                onError: (errors) => {
                    console.error("Update errors:", errors);
                },
                preserveScroll: true,
            });
        } else {
            // STORE (POST)
            post(route('categories.store'), {
                onSuccess: () => {
                    reset();
                },
                onError: (errors) => {
                    console.error("Store errors:", errors);
                },
                preserveScroll: true,
            });
        }
    };

    const statusOptions = getStatusOptions(statuses);


    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <TextInput
                    id="name"
                    label="Name/Title"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    placeholder="Enter category name"
                    required
                />
                <SelectInput
                    id="status"
                    label="Status"
                    value={data.is_active}
                    onChange={(e) => setData('is_active', e.target.value)}
                    error={errors.is_active}
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
                    placeholder="Write about the category.."
                />
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
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50"
                >
                    {category ? (
                        // Button content for Update User
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEdit}/>
                            <span>Update</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faSquarePlus}/>
                            <span>Create</span>
                        </div>
                    )}
                </button>
            </div>
        </form>
    );
};

export default Form;
