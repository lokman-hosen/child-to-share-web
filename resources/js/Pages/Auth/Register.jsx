import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import TextInput from "@/Components/TextInputField.jsx";
import DateInput from "@/Components/DateInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {Head, useForm} from "@inertiajs/react";
import {getCommonOptions} from "@/utils.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {
    faMapMarkerAlt,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Register({guardianRelations,genders}) {
    // State to manage the selected role
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState(null);

    // State to manage all form data
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        address: '',
        organization: '',
        photo: null,
        gender: '',
        latitude: '',
        longitude: '',
        guardian_name: '',
        guardian_phone: '',
        relationship: '',
        password: '',
        role: 'donor',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };


    const genderOptions = getCommonOptions(genders);
    const relationOptions = getCommonOptions(guardianRelations);

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) {
            setData(`${field}_removed`, false);
        }
    };

    // Handle location retrieval
    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            return;
        }

        setIsLocating(true);
        setLocationError(null);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setData(prevData => ({
                    ...prevData,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }));
                setIsLocating(false);
            },
            (error) => {
                setIsLocating(false);
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setLocationError("You have denied the request for Geolocation. Please enable it in your browser settings.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        setLocationError("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        setLocationError("The request to get user location timed out.");
                        break;
                    default:
                        setLocationError("An unknown error occurred.");
                        break;
                }
            }
        );
    };

    const locationText = setData.latitude && setData.longitude
        ? `Location acquired: (${setData.latitude.toFixed(2)}, ${setData.longitude.toFixed(2)})`
        : "Click the button to get your location.";

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 font-sans antialiased">
                <div className="container w-full lg:w-1/2 xl:w-1/2 mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold section-title">Join Our Community</h2>
                            <p className="text-lg text-gray-600 mt-2">Create an account to start sharing or making wishes</p>
                        </div>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="px-6 pb-8">
                                <h3 className="text-xl font-semibold mb-4">I want to:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div
                                        onClick={() => setData('role', 'donor')}
                                        className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${data.role === 'donor' ? 'border-green-400 shadow-md' : 'border-gray-200 hover:border-green-300'}`}
                                    >
                                        <div className="text-4xl mb-3">🎁</div>
                                        <h4 className="font-semibold">Donate</h4>
                                        <p className="text-sm text-gray-600 mt-2">Share items with children in need</p>
                                    </div>

                                    <div
                                        onClick={() => setData('role', 'wisher')}
                                        className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${data.role === 'wisher' ? 'border-orange-400 shadow-md' : 'border-gray-200 hover:border-orange-300'}`}
                                    >
                                        <div className="text-4xl mb-3">✨</div>
                                        <h4 className="font-semibold">Make a Wish</h4>
                                        <p className="text-sm text-gray-600 mt-2">Request items you need</p>
                                    </div>

                                    <div
                                        onClick={() => setData('role', 'leader')}
                                        className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${data.role === 'leader' ? 'border-blue-400 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
                                    >
                                        <div className="text-4xl mb-3">🌟</div>
                                        <h4 className="font-semibold">Lead a Community</h4>
                                        <p className="text-sm text-gray-600 mt-2">Organize sharing in your area</p>
                                    </div>
                                </div>

                                {/* Common Fields for all roles */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextInput
                                        id="name"
                                        label="Full Name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Enter name"
                                        required
                                    />

                                    <TextInput
                                        id="mobile"
                                        label="Mobile"
                                        value={data.mobile}
                                        onChange={(e) => setData('mobile', e.target.value)}
                                        error={errors.mobile}
                                        placeholder="Enter mobile number"
                                        required
                                    />
                                    <TextInput
                                        id="email"
                                        label="Email (optional)"
                                        value={data.email}
                                        type="email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        error={errors.email}
                                        placeholder="Enter email number"
                                        required
                                    />

                                    <DateInput
                                        id="dob"
                                        label="Date of Birth"
                                        value={data.dob}
                                        onChange={(value) => setData('dob', value)}
                                        error={errors.dob}
                                        placeholder="Select DOB"
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

                                    <TextInput
                                        id="organization"
                                        label="Organization/School"
                                        value={data.organization}
                                        onChange={(e) => setData('organization', e.target.value)}
                                        error={errors.organization}
                                        placeholder="Enter organization name"
                                        required
                                    />


                                    <FileInput
                                        id="photo"
                                        label="Photo"
                                        onFileChange={(file) => handleFileChange('photo', file)}
                                        currentFileUrl={data?.photo || null}
                                        error={errors.photo}
                                        accept="image/png, image/jpg, image/jpeg"
                                        required
                                    />

                                    <TextInput
                                        id="password"
                                        label="Password"
                                        value={data.password}
                                        type="password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        error={errors.password}
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>

                                {/* Wisher-specific fields (Conditional Rendering) */}
                                {data.role === 'wisher' && (

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextInput
                                            id="guardian_name"
                                            label="Guardian Name"
                                            value={data.guardian_name}
                                            onChange={(e) => setData('guardian_name', e.target.value)}
                                            error={errors.guardian_name}
                                            placeholder="Enter guardian number"
                                            required
                                        />
                                        <TextInput
                                            id="guardian_phone"
                                            label="Guardian Name"
                                            value={data.guardian_phone}
                                            onChange={(e) => setData('guardian_phone', e.target.value)}
                                            error={errors.guardian_phone}
                                            placeholder="Enter guardian phone number"
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
                                )}

                                <div className="grid grid-cols-1 gap-6 mt-5">
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Location
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex">
                                            <input
                                                type="text"
                                                readOnly
                                                className={`flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.location ? 'border-red-500' : ''}`}
                                                value={locationText}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={handleGetLocation}
                                                disabled={isLocating}
                                                className="bg-gray-200 px-4 rounded-r-lg border border-l-0 border-gray-300 hover:bg-gray-300 transition-colors"
                                            >
                                                {isLocating ? (
                                                    <FontAwesomeIcon icon={faSpinner} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                )}
                                            </button>
                                        </div>
                                        {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                                    </div>

                                    <TextareaInput
                                        id="address"
                                        label="Permanent Address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        error={errors.address}
                                        placeholder="Enter Address"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-center mt-4">
                                    <button type="submit"
                                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-4">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
