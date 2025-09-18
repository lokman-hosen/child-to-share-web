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
            <Head title="Register"/>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                        <h1 className="text-3xl font-bold mb-2">Join ThreeWish</h1>
                        <p className="text-lg">Create an account to start sharing or making wishes</p>
                    </div>

                    <div className="px-6 pt-6">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center text-purple-600">
                                <div
                                    className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">1
                                </div>
                                <span className="ml-2 font-semibold">Select Role</span>
                            </div>
                            <div className="h-1 flex-grow bg-gray-200 mx-2"></div>
                            <div className="flex items-center text-gray-400">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">2
                                </div>
                                <span className="ml-2 font-semibold">Account Details</span>
                            </div>
                            <div className="h-1 flex-grow bg-gray-200 mx-2"></div>
                            <div className="flex items-center text-gray-400">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">3
                                </div>
                                <span className="ml-2 font-semibold">Confirmation</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="px-6 pb-8">
                            <br/>
                            <h2 className="text-xl font-semibold mb-4">I want to:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div
                                    onClick={() => setData('role', 'donor')}
                                    className="role-option p-5 text-center" data-role="donor">
                                    <div className="text-4xl mb-3 text-green-500">🎁</div>
                                    <h3 className="font-semibold">Donate Items</h3>
                                    <p className="text-sm text-gray-600 mt-2">Share items with children in need</p>
                                </div>

                                <div
                                    onClick={() => setData('role', 'wisher')}
                                    className="role-option p-5 text-center" data-role="wisher">
                                    <div className="text-4xl mb-3 text-purple-500">✨</div>
                                    <h3 className="font-semibold">Make a Wish</h3>
                                    <p className="text-sm text-gray-600 mt-2">Request items you need</p>
                                </div>

                                <div
                                    onClick={() => setData('role', 'leader')}
                                    className="role-option p-5 text-center" data-role="leader">
                                    <div className="text-4xl mb-3 text-blue-500">🌟</div>
                                    <h3 className="font-semibold">Community Leader</h3>
                                    <p className="text-sm text-gray-600 mt-2">Organize sharing in your area</p>
                                </div>
                            </div>
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
                                    placeholder={data.role === 'wisher' ? 'Enter guardian mobile number' : 'Enter mobile number'}
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

                                <TextInput
                                    id="organization"
                                    label="Organization/School"
                                    value={data.organization}
                                    onChange={(e) => setData('organization', e.target.value)}
                                    error={errors.organization}
                                    placeholder="Enter organization name"
                                />


                                <FileInput
                                    id="photo"
                                    label="Photo"
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
                                            className={`flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent ${(errors.latitude || errors.longitude) ? 'border-red-500' : ''}`}
                                            value={locationText}
                                        />

                                        <button
                                            type="button"
                                            onClick={handleGetLocation}
                                            disabled={isLocating}
                                            className="bg-gray-200 px-4 rounded-r-lg border border-l-0 border-gray-300 hover:bg-gray-300 transition-colors"
                                        >
                                            {isLocating ? (
                                                <FontAwesomeIcon icon={faSpinner}/>
                                            ) : (
                                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                            )}
                                        </button>
                                    </div>
                                    {(data.latitude || data.longitude) ?
                                        <div id="emailHelp" className="text-green-600 text-xs">
                                            Thanks, you set your location..
                                        </div>
                                        :
                                        <div id="emailHelp" className="text-red-600 text-xs">
                                            Location not given. Click on location icon to provide your location.
                                        </div>
                                    }

                                    {(errors.latitude || errors.longitude) &&
                                        <p className="mt-1 text-sm text-red-600">Location required. Click on
                                            "location icon" to provide location</p>}
                                </div>

                                <TextareaInput
                                    id="address"
                                    label="Permanent Address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    error={errors.address}
                                    placeholder="Enter Address"
                                />
                            </div>

                            <button type="submit"
                                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors focus:ring-4 focus:ring-purple-200">
                                Create Account
                            </button>
                            <p className="text-center mt-6 text-gray-600">
                                Already have an account? <a href="login-new.html"
                                                            className="text-purple-600 font-semibold hover:underline">Log
                                In</a>
                            </p>
                        </div>
                    </form>


                </div>
            </main>
        </GuestLayout>
    );
}
