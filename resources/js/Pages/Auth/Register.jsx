import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import TextInput from "@/Components/TextInputField.jsx";
import DateInput from "@/Components/DateInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import {getCommonOptions, getDropdownOptions} from "@/utils.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";
import LocationPicker from '@/Components/LocationPicker';

export default function Register({guardianRelations,genders, organizations}) {
    // State to manage the selected role
    const [selectedLocation, setSelectedLocation] = useState(null);

    // State to manage all form data
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
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

    // Handle location selection from map
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setData({
            ...data,
            latitude: location.lat,
            longitude: location.lng
        });
    };

    const organizationOptions = getDropdownOptions(organizations, 'id', 'name');

    return (
        <GuestLayout>
            <Head title="Register"/>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                        <h1 className="text-3xl font-bold mb-2">Join ThreeWish</h1>
                        <p className="text-lg">Create an account to start sharing or making wishes</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="px-6 pb-8">
                            <br/>
                            <h2 className="text-xl font-semibold mb-4">I want to:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div
                                    onClick={() => setData('role', 'donor')}
                                    className={`role-option p-5 text-center ${data.role === 'donor' ? 'selected' : ''}`} data-role="donor">
                                    <div className="text-4xl mb-3 text-green-500">🎁</div>
                                    <h3 className="font-semibold">Donate Items(Donor)</h3>
                                    <p className="text-sm text-gray-600 mt-2">Share items with children in need</p>
                                </div>

                                <div
                                    onClick={() => setData('role', 'wisher')}
                                    className={`role-option p-5 text-center ${data.role === 'wisher' ? 'selected' : ''}`} data-role="wisher">
                                    <div className="text-4xl mb-3 text-purple-500">✨</div>
                                    <h3 className="font-semibold">Make a Wish(Wisher)</h3>
                                    <p className="text-sm text-gray-600 mt-2">Request items you need</p>
                                </div>
                            </div>
                            {data.role === 'wisher' &&
                                <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Child Information</h3>
                            }

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
                                    id="phone"
                                    label="Phone Number"
                                    type="number"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    error={errors.phone}
                                    placeholder={data.role === 'wisher' ? 'Enter guardian phone number' : 'Enter phone number'}
                                    required
                                />
                                <TextInput
                                    id="email"
                                    label="Email"
                                    value={data.email}
                                    type="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    error={errors.email}
                                    placeholder="Enter email address"
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

                                <SelectInput
                                    id="gender"
                                    label="Select Gender"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    error={errors.gender}
                                    options={genderOptions}
                                    required
                                />

                                <CustomCreatableSelect
                                    id="organization"
                                    label="Organization/School(type to create new)"
                                    value={data.organization}
                                    onChange={(value) => setData('organization', value)}
                                    options={organizations}
                                    error={errors.organization}
                                    placeholder="Select or type to create new organization"
                                    required
                                />

                                <FileInput
                                    id="photo"
                                    label="Profile Photo(png,jpg,jpeg)"
                                    onFileChange={(file) => handleFileChange('photo', file)}
                                    currentFileUrl={data?.photo || null}
                                    error={errors.photo}
                                    accept="image/png, image/jpg, image/jpeg"
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
                                <>
                                    <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Guardian Information</h3>
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
                                            label="Guardian Phone"
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
                                </>
                            )}

                            {/* Location Picker Section */}
                            <div className="mt-6">
                                <label className="block text-gray-700 font-semibold mb-4">
                                    Select Your Location
                                    <span className="text-red-500">*</span>
                                </label>

                                <LocationPicker
                                    onLocationSelect={handleLocationSelect}
                                    initialPosition={selectedLocation}
                                />

                                {selectedLocation ? (
                                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-700 text-sm">
                                            <strong>Location set successfully!</strong><br />
                                            Latitude: {selectedLocation.lat.toFixed(6)}<br />
                                            Longitude: {selectedLocation.lng.toFixed(6)}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-yellow-700 text-sm">
                                            Please select your location on the map above. You can click "Use My Current Location" or click anywhere on the map.
                                        </p>
                                    </div>
                                )}

                                {(errors.latitude || errors.longitude) && (
                                    <p className="mt-2 text-sm text-red-600">
                                        Location is required. Please select your location on the map.
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-5">
                                <TextareaInput
                                    id="address"
                                    label="Present Address(optional)"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    error={errors.address}
                                    placeholder="Enter Address"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!selectedLocation || processing}
                                className={`w-full mt-5 py-3 rounded-lg font-semibold text-lg transition-colors focus:ring-4 focus:ring-purple-200 ${
                                    !selectedLocation || processing
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                        : 'bg-purple-600 text-white hover:bg-purple-700'
                                }`}
                            >
                                {processing ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                                        Creating Account...
                                    </>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                            <p className="text-center mt-6 text-gray-600">
                                Already have an account?
                                <Link
                                    href={route('login')}
                                    className="text-purple-600 font-semibold hover:underline ml-1"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </GuestLayout>
    );
}