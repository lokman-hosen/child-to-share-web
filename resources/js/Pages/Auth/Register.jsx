import React, {useState, useRef, useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import TextInput from "@/Components/TextInputField.jsx";
import DateInput from "@/Components/DateInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import {getCommonOptions, getDropdownOptions} from "@/utils.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {
    faInfoCircle,
    faSpinner,
    faSearch,
    faMapMarkerAlt,
    faClose, faEnvelope, faCheckCircle, faRedo,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import {Button} from "@headlessui/react";

export default function Register({guardianRelations,genders, organizations}) {
    // State to manage the selected role
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);
    const autocompleteService = useRef(null);
    const placesService = useRef(null);

    // OTP Verification States
    const [currentStep, setCurrentStep] = useState('email'); // 'email', 'otp', 'form'
    const [otp, setOtp] = useState('');
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [otpError, setOtpError] = useState('');

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
        be_leader: false,
    });

    // Countdown timer for OTP resend
    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    // Initialize Google Maps services
    React.useEffect(() => {
        if (window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
            placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
        } else {
            // Load Google Maps JavaScript API
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAiV7CEW81cpKDTZtZ_AR3hL1BcW4b6PzM&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                autocompleteService.current = new window.google.maps.places.AutocompleteService();
                placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
            };
            document.head.appendChild(script);
        }
    }, []);


    // Send OTP to email
    const sendOtp = async () => {
        if (!data.email) {
            setOtpError('Please enter your email address');
            return;
        }

        setIsSendingOtp(true);
        setOtpError('');

        try {
            const response = await fetch(route('otp.send'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    email: data.email,
                    type: 'email'
                })
            });

            const result = await response.json();

            if (result.success) {
                setOtpSent(true);
                setCurrentStep('otp');
                setCountdown(60); // 60 seconds countdown
            } else {
                setOtpError(result.message || 'Failed to send OTP. Please try again.');
            }
        } catch (error) {
            setOtpError('Network error. Please check your connection/refresh page and try again.');
        } finally {
            setIsSendingOtp(false);
        }
    };

    // Verify OTP
    const verifyOtp = async () => {
        if (!otp || otp.length !== 4) {
            setOtpError('Please enter a valid 4-digit OTP');
            return;
        }

        setIsVerifyingOtp(true);
        setOtpError('');

        try {
            const response = await fetch(route('otp.verify'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    email: data.email,
                    otp: otp,
                    type: 'email'
                })
            });

            const result = await response.json();

            if (result.success) {
                setCurrentStep('form');
                setOtpError('');
            } else {
                setOtpError(result.message || 'Invalid OTP. Please try again.');
            }
        } catch (error) {
            setOtpError('Verification failed. Please try again.');
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    // Resend OTP
    const resendOtp = async () => {
        if (countdown > 0) return;

        setIsSendingOtp(true);
        setOtpError('');

        try {
            const response = await fetch(route('otp.send'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    email: data.email,
                    type: 'email'
                })
            });

            const result = await response.json();

            if (result.success) {
                setCountdown(60);
                setOtpError('');
            } else {
                setOtpError(result.message || 'Failed to resend OTP. Please try again.');
            }
        } catch (error) {
            setOtpError('Network error. Please try again.');
        } finally {
            setIsSendingOtp(false);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password'),
        });
    };

    const genderOptions = getCommonOptions(genders);
    //const relationOptions = getCommonOptions(guardianRelations);

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) {
            setData(`${field}_removed`, false);
        }
    };

    // Search for locations using Google Maps Places Autocomplete
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.length < 2) {
            setSearchSuggestions([]);
            return;
        }

        // Clear previous timeout
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        // Set new timeout for debouncing (300ms delay)
        searchTimeoutRef.current = setTimeout(async () => {
            if (!autocompleteService.current) {
                console.error('Google Maps Autocomplete service not available');
                return;
            }

            setIsSearching(true);
            try {
                // Use Google Maps Places Autocomplete
                autocompleteService.current.getPlacePredictions(
                    {
                        input: query,
                        componentRestrictions: { country: 'bd' }, // Restrict to Bangladesh
                        types: ['geocode', 'establishment'], // Get addresses and places
                    },
                    (predictions, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
                            setSearchSuggestions(predictions);
                        } else {
                            setSearchSuggestions([]);
                        }
                        setIsSearching(false);
                    }
                );
            } catch (error) {
                console.error('Search error:', error);
                setSearchSuggestions([]);
                setIsSearching(false);
            }
        }, 300);
    };

    // Handle selection from search suggestions
    const handleSuggestionSelect = (prediction) => {
        if (!placesService.current) {
            console.error('Google Maps Places service not available');
            return;
        }

        setIsSearching(true);

        // Get place details to get coordinates
        placesService.current.getDetails(
            {
                placeId: prediction.place_id,
                fields: ['geometry', 'formatted_address', 'name']
            },
            (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                    const location = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    };

                    setData({
                        ...data,
                        latitude: location.lat,
                        longitude: location.lng,
                        address: place.formatted_address || prediction.description
                    });

                    setSearchQuery(place.formatted_address || prediction.description);
                    setSearchSuggestions([]);
                }
                setIsSearching(false);
            }
        );
    };

    // Alternative: Use OpenStreetMap as fallback if Google Maps is not available
    const handleSearchFallback = (query) => {
        setSearchQuery(query);

        if (query.length < 3) {
            setSearchSuggestions([]);
            return;
        }

        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        searchTimeoutRef.current = setTimeout(async () => {
            setIsSearching(true);
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?` +
                    `format=json&` +
                    `q=${encodeURIComponent(query)}&` +
                    `countrycodes=bd&` +
                    `limit=8&` +
                    `addressdetails=1`
                );

                const results = await response.json();
                setSearchSuggestions(results);
            } catch (error) {
                console.error('Search error:', error);
                setSearchSuggestions([]);
            } finally {
                setIsSearching(false);
            }
        }, 500);
    };

    // Handle selection from OpenStreetMap fallback
    const handleSuggestionSelectFallback = (suggestion) => {
        const location = {
            lat: parseFloat(suggestion.lat),
            lng: parseFloat(suggestion.lon)
        };

        setData({
            ...data,
            latitude: location.lat,
            longitude: location.lng,
            address: suggestion.display_name
        });

        setSearchQuery(suggestion.display_name);
        setSearchSuggestions([]);
    };

    // Clear search input
    const handleClearSearch = () => {
        setSearchQuery('');
        setSearchSuggestions([]);
        setData({
            ...data,
            latitude: '',
            longitude: ''
        });

        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }
    };

    // const calculateAge = (dobString) => {
    //     if (!dobString) return 0;
    //     const today = new Date();
    //     const birthDate = new Date(dobString);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     const monthDiff = today.getMonth() - birthDate.getMonth();
    //
    //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // };

    // Check if Google Maps is available
    const isGoogleMapsAvailable = !!window.google;

    return (
        <GuestLayout>
            <Head title="Register"/>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                        <h1 className="text-3xl font-bold mb-2">Join ThreeWish</h1>
                        <p className="text-lg">Create an account to start sharing or making wishes</p>
                    </div>

                    {/* Step Indicator */}
                    <div className="flex justify-center mb-8 mt-2">
                        <div className="flex items-center space-x-4">
                            <div className={`flex flex-col items-center ${currentStep === 'email' ? 'text-purple-600' : currentStep === 'otp' ? 'text-blue-600' : 'text-green-600'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'email' ? 'bg-purple-100 border-2 border-purple-600' : currentStep === 'otp' ? 'bg-blue-100 border-2 border-blue-600' : 'bg-green-100 border-2 border-green-600'}`}>
                                    1
                                </div>
                                <span className="text-xs mt-1">Email</span>
                            </div>
                            <div className={`w-12 h-1 ${currentStep === 'otp' || currentStep === 'form' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            <div className={`flex flex-col items-center ${currentStep === 'otp' ? 'text-blue-600' : currentStep === 'form' ? 'text-green-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'otp' ? 'bg-blue-100 border-2 border-blue-600' : currentStep === 'form' ? 'bg-green-100 border-2 border-green-600' : 'bg-gray-100 border-2 border-gray-300'}`}>
                                    2
                                </div>
                                <span className="text-xs mt-1">Verify</span>
                            </div>
                            <div className={`w-12 h-1 ${currentStep === 'form' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                            <div className={`flex flex-col items-center ${currentStep === 'form' ? 'text-green-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'form' ? 'bg-green-100 border-2 border-green-600' : 'bg-gray-100 border-2 border-gray-300'}`}>
                                    3
                                </div>
                                <span className="text-xs mt-1">Register</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 1: Email Verification */}
                    {currentStep === 'email' && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-purple-500 mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
                                <p className="text-gray-600">We'll send a verification code to your email address</p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <TextInput
                                    id="email"
                                    label="Email Address"
                                    value={data.email}
                                    type="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    error={errors.email || otpError}
                                    placeholder="Enter your email address"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={sendOtp}
                                    disabled={isSendingOtp || !data.email}
                                    className={`w-full mt-5  my-10 py-3 rounded-lg font-semibold text-lg transition-colors focus:ring-4 focus:ring-purple-200 ${
                                        isSendingOtp || !data.email
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-purple-600 text-white hover:bg-purple-700'
                                    }`}
                                >
                                    {isSendingOtp ? (
                                        <>
                                            <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                                            Sending OTP...
                                        </>
                                    ) : (
                                        'Send Verification Code'
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: OTP Verification */}
                    {currentStep === 'otp' && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-blue-500 mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter Verification Code</h2>
                                <p className="text-gray-600">
                                    We sent a 4-digit code to <strong>{data.email}</strong>
                                </p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter 4-digit OTP
                                    </label>
                                    <input
                                        type="text"
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                                            setOtp(value);
                                        }}
                                        placeholder="Enter OTP"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-xl font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        maxLength={4}
                                    />
                                    {otpError && (
                                        <p className="mt-2 text-sm text-red-600">{otpError}</p>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={verifyOtp}
                                    disabled={isVerifyingOtp || otp.length !== 4}
                                    className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors focus:ring-4 focus:ring-blue-200 ${
                                        isVerifyingOtp || otp.length !== 4
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                                >
                                    {isVerifyingOtp ? (
                                        <>
                                            <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                                            Verifying...
                                        </>
                                    ) : (
                                        'Verify Code'
                                    )}
                                </button>

                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        onClick={resendOtp}
                                        disabled={countdown > 0}
                                        className={`text-sm ${countdown > 0 ? 'text-gray-400' : 'text-blue-600 hover:text-blue-800'}`}
                                    >
                                        <FontAwesomeIcon icon={faRedo} className="mr-1" />
                                        {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend code'}
                                    </button>
                                </div>

                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep('email')}
                                        className="text-sm text-gray-600 hover:text-gray-800"
                                    >
                                        ← Change email address
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Registration Form */}
                    {currentStep === 'form' && (
                        <form onSubmit={submit} className="space-y-6">
                            <div className="px-6 pb-8">
                                <div className="text-center mb-6">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-500 mb-2"/>
                                    <p className="text-green-600 font-semibold">Email verified successfully!</p>
                                </div>
                                <br/>
                                <h2 className="text-xl font-semibold mb-4">I want to:</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div
                                        onClick={() => setData('role', 'donor')}
                                        className={`role-option p-5 text-center ${data.role === 'donor' ? 'selected' : ''}`}
                                        data-role="donor">
                                        <div className="text-4xl mb-3 text-green-500">🎁</div>
                                        <h3 className="font-semibold">Donate Items(Donor)</h3>
                                        <p className="text-sm text-gray-600 mt-2">Share items with children in need</p>
                                    </div>

                                    <div
                                        onClick={() => setData('role', 'wisher')}
                                        className={`role-option p-5 text-center ${data.role === 'wisher' ? 'selected' : ''}`}
                                        data-role="wisher">
                                        <div className="text-4xl mb-3 text-purple-500">✨</div>
                                        <h3 className="font-semibold">Make a Wish(Wisher)</h3>
                                        <p className="text-sm text-gray-600 mt-2">Request items you need</p>
                                    </div>
                                </div>
                                {data.role === 'wisher' &&
                                    <div className="mb-3">
                                        <h3 className="text-lg font-semibold mt-4 text-gray-800">Child Information</h3>
                                        <p className="text-sm text-indigo-500">User guardian email and phone if you dont
                                            have</p>
                                    </div>
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
                                        placeholder={data.role === 'wisher' ? 'Guardian phone: 017********' : 'Phone number: 017********'}
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

                                    {/*<CustomCreatableSelect*/}
                                    {/*    id="organization"*/}
                                    {/*    label="Organization/Institution/School(type to create new)"*/}
                                    {/*    value={data.organization}*/}
                                    {/*    onChange={(value) => setData('organization', value)}*/}
                                    {/*    options={organizations}*/}
                                    {/*    error={errors.organization}*/}
                                    {/*    placeholder="Select or type to create new organization"*/}
                                    {/*    required*/}
                                    {/*/>*/}

                                    {data?.role === 'wisher' &&
                                        <FileInput
                                            id="photo"
                                            label="Profile Photo(png,jpg,jpeg)"
                                            onFileChange={(file) => handleFileChange('photo', file)}
                                            currentFileUrl={data?.photo || null}
                                            error={errors.photo}
                                            accept="image/png, image/jpg, image/jpeg"
                                            required
                                        />
                                    }

                                    <TextInput
                                        id="password"
                                        label="Password(min 8 character)"
                                        value={data.password}
                                        type="password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        error={errors.password}
                                        placeholder="Enter password. Min 8 character"
                                        required
                                    />
                                </div>
                                {/*<div className="grid grid-cols-1 gap-6">*/}
                                {/*    <div className="flex items-center mt-3">*/}
                                {/*        <Checkbox*/}
                                {/*            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"*/}
                                {/*            name="be_leader"*/}
                                {/*            checked={data.be_leader}*/}
                                {/*            onChange={(e) =>*/}
                                {/*                setData('be_leader', e.target.checked)*/}
                                {/*            }*/}
                                {/*        />*/}
                                {/*        <label htmlFor="be_leader-me" className="ml-2 block text-sm text-gray-700">Want to be community leader?</label>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        { data.be_leader &&*/}
                                {/*            <span className="text-blue-500 font-semibold">*/}
                                {/*               <FontAwesomeIcon icon={faInfoCircle} /> Community leaders help facilitate and validate the donation process*/}
                                {/*           </span>*/}
                                {/*        }*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/* Wisher-specific fields (Conditional Rendering) */}
                                {/*{(data.role === 'wisher' || (data.role === 'donor' && calculateAge(data.dob) < 18)) && (*/}
                                {/*    <>*/}
                                {/*        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Guardian Information</h3>*/}
                                {/*        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                                {/*            <TextInput*/}
                                {/*                id="guardian_name"*/}
                                {/*                label="Guardian Name"*/}
                                {/*                value={data.guardian_name}*/}
                                {/*                onChange={(e) => setData('guardian_name', e.target.value)}*/}
                                {/*                error={errors.guardian_name}*/}
                                {/*                placeholder="Enter guardian name"*/}
                                {/*                required*/}
                                {/*            />*/}
                                {/*            <TextInput*/}
                                {/*                id="guardian_phone"*/}
                                {/*                label="Guardian Phone"*/}
                                {/*                value={data.guardian_phone}*/}
                                {/*                onChange={(e) => setData('guardian_phone', e.target.value)}*/}
                                {/*                error={errors.guardian_phone}*/}
                                {/*                placeholder="Guardian phone: 017********"*/}
                                {/*                required*/}
                                {/*            />*/}
                                {/*            <SelectInput*/}
                                {/*                id="relationship"*/}
                                {/*                label="Relation with guardian"*/}
                                {/*                value={data.relationship}*/}
                                {/*                onChange={(e) => setData('relationship', e.target.value)}*/}
                                {/*                error={errors.relationship}*/}
                                {/*                options={relationOptions}*/}
                                {/*                required*/}
                                {/*            />*/}
                                {/*        </div>*/}
                                {/*    </>*/}
                                {/*)}*/}

                                {/* Location Search Section */}
                                <div className="mt-6">
                                    <label className="block text-gray-700 font-semibold mb-4">
                                        Your Location (Search and select)
                                        <span className="text-red-600">*</span>
                                    </label>

                                    {/* Location Search */}
                                    <div className="mb-4 relative">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    isGoogleMapsAvailable
                                                        ? handleSearch(e.target.value)
                                                        : handleSearchFallback(e.target.value)
                                                }
                                                placeholder="Search location (address, city, landmark...)"
                                                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <FontAwesomeIcon
                                                icon={faSearch}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            />
                                            {isSearching && (
                                                <FontAwesomeIcon
                                                    icon={faSpinner}
                                                    spin
                                                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400"
                                                />
                                            )}

                                            {searchQuery && (
                                                <Button
                                                    onClick={handleClearSearch}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    <FontAwesomeIcon icon={faClose}/>
                                                </Button>
                                            )}
                                        </div>

                                        {/* Search Suggestions */}
                                        {searchSuggestions.length > 0 && (
                                            <div
                                                className="absolute z-[9999] w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                                {searchSuggestions.map((suggestion, index) => (
                                                    <div
                                                        key={isGoogleMapsAvailable ? suggestion.place_id : index}
                                                        onClick={() =>
                                                            isGoogleMapsAvailable
                                                                ? handleSuggestionSelect(suggestion)
                                                                : handleSuggestionSelectFallback(suggestion)
                                                        }
                                                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                                    >
                                                        <div className="flex items-start">
                                                            <FontAwesomeIcon
                                                                icon={faMapMarkerAlt}
                                                                className="text-blue-500 mt-1 mr-3 flex-shrink-0"
                                                            />
                                                            <div>
                                                                <div className="font-medium text-gray-900">
                                                                    {isGoogleMapsAvailable
                                                                        ? suggestion.structured_formatting.main_text
                                                                        : suggestion.display_name.split(',').slice(0, 2).join(',')
                                                                    }
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {isGoogleMapsAvailable
                                                                        ? suggestion.structured_formatting.secondary_text
                                                                        : suggestion.display_name.split(',').slice(2).join(',')
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {(errors.latitude || errors.longitude) && (
                                        <p className="mt-2 text-sm text-red-600">
                                            Location is required. Please search and select your location.
                                        </p>
                                    )}

                                    {data.latitude && data.longitude && (
                                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-green-700 text-sm">
                                                <strong>Location set successfully!</strong><br/>
                                                Coordinates captured for better service matching.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-6 mt-5 hidden">
                                    <TextareaInput
                                        id="address"
                                        label="Present Address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        error={errors.address}
                                        placeholder="Enter your Address"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full mt-5 py-3 rounded-lg font-semibold text-lg transition-colors focus:ring-4 focus:ring-purple-200 ${
                                        processing
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-purple-600 text-white hover:bg-purple-700'
                                    }`}
                                >
                                    {processing ? (
                                        <>
                                            <FontAwesomeIcon icon={faSpinner} spin className="mr-2"/>
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
                    )
                    }
                </div>
            </main>
        </GuestLayout>
    );
}
