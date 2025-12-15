import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getCommonOptions, getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faEdit, faSquarePlus, faTrash, faUpload} from "@fortawesome/free-solid-svg-icons";
import TextareaInput from "@/Components/TextareaInput.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";
import DateInput from "@/Components/DateInput.jsx";

const Form = ({genders,guardianRelations,user,module}) => {
    const fileInputRef = useRef(null);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        guardian_name: user?.guardian_name,
        guardian_phone: user?.guardian_phone,
        relationship: user?.relationship,
        gender: user?.gender,
        dob: user?.dob,
        _method: user ? 'PUT' : 'POST',
    });


    // Initialize form data when wish is provided (for editing)
    useEffect(() => {
        if (data.user) {
            setData((prevData) => ({
                ...prevData,
                name: user?.name || '',
                email: user?.email || '',
                phone: user?.phone || '',
                guardian_name: user?.guardian_name || '',
                guardian_phone: user?.guardian_phone || '',
                relationship: user?.relationship || '',
                gender: user?.gender || '',
                dob: user?.dob || '',
                _method: 'PUT',
            }));
        } else {
            setData('_method', 'POST');
            reset();
        }
    }, [user, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = user
            ? route('users.update', wish.id)
            : route('users.store');

        post(submitRoute, {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
            onError: (submissionErrors) => {
                console.error("Form submission errors:", submissionErrors);
            },
            preserveScroll: true,
        });
    };

    const relationOptions = getCommonOptions(guardianRelations);
    const genderOptions = getCommonOptions(genders);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TextInput
                    id="name"
                    label="Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    isFocused
                    autoComplete="name"
                    placeholder="Enter name"
                    required
                />
                <TextInput
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    autoComplete="username"
                    error={errors.email}
                    placeholder="Enater email"
                />

                <TextInput
                    id="phone"
                    label="Phone(11 digit)"
                    type="number"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                    placeholder="017********"
                />
                <SelectInput
                    id="gender"
                    label="Select Gender"
                    value={data.gender}
                    onChange={(e) => setData('gender', e.target.value)}
                    error={errors.gender}
                    options={genderOptions}
                    required
                />
                <DateInput
                    id="dob"
                    label="Date of Birth"
                    value={data.dob}
                    onChange={(value) => setData('dob', value)}
                    error={errors.dob}
                    placeholder="Select DOB"
                    required
                />
                <TextInput
                    id="guardian_name"
                    label="Guardian name"
                    type="text"
                    value={data.guardian_name}
                    onChange={(e) => setData('guardian_name', e.target.value)}
                    error={errors.guardian_name}
                    placeholder="Your guardian name"
                    required
                />
                <TextInput
                    id="guardian_phone"
                    label="Guardian Phone(11 digit)"
                    type="number"
                    value={data.guardian_phone}
                    onChange={(e) => setData('guardian_phone', e.target.value)}
                    error={errors.guardian_phone}
                    placeholder="017********"
                    required
                />

                <SelectInput
                    id="relationship"
                    label="Relation with guardian"
                    value={data.relationship}
                    onChange={(e) => setData('relationship', e.target.value)}
                    error={errors.relationship}
                    options={relationOptions}
                    required
                />
            </div>

            <div className="grid grid-cols-1 gap-6">

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
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEdit}/>
                            <span>Update User</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faSquarePlus}/>
                            <span>Create User</span>
                        </div>
                    )}
                </button>
            </div>
        </form>
    );
};

export default Form;
