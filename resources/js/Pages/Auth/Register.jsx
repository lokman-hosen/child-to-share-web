import React, { useState, useRef } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import TextInput from "@/Components/TextInputField.jsx";
import DateInput from "@/Components/DateInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import {getCommonOptions} from "@/utils.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {
    faSpinner,
    faSearch,
    faMapMarkerAlt,
    faClose, faUser, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "@headlessui/react";

export default function Register({genders}) {
    // State to manage the selected role
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);
    const autocompleteService = useRef(null);
    const placesService = useRef(null);

    // State to manage all form data
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        photo: null,
        gender: 'other',
        latitude: '',
        longitude: '',
        password: '',
        user_type: 'person'
    });

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

                    <form onSubmit={submit} className="space-y-6">
                        <div className="px-6 pb-8 mt-5">
                            <br/>
                            <h2 className="text-xl font-semibold mb-4">Sign Up As:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div
                                    onClick={() => setData('user_type', 'person')}
                                    className={`role-option p-5 text-center ${data.user_type === 'person' ? 'selected' : ''}`} data-user-type="person">
                                    <div className="text-4xl mb-3 text-green-500">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                    <h3 className="font-semibold">Person/Individual</h3>
                                </div>

                                <div
                                    onClick={() => setData('user_type', 'organization')}
                                    className={`role-option p-5 text-center ${data.user_type === 'organization' ? 'selected' : ''}`} data-user-type="organization">
                                    <div className="text-4xl mb-3 text-purple-500">
                                        <FontAwesomeIcon icon={faBuilding}/>
                                    </div>
                                    <h3 className="font-semibold">Organization</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <TextInput
                                    id="name"
                                    label={data.user_type === 'person' ? 'Full Name' : 'Organization Name'}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    error={errors.name}
                                    placeholder={data.user_type === 'person' ? 'Enter Name' : 'Enter Organization Name'}
                                    required
                                />

                                <TextInput
                                    id="phone"
                                    label={data.user_type === 'person' ? 'Phone(11 digit)' : 'Organization Phone(11 digit)'}
                                    type="number"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    error={errors.phone}
                                    placeholder="Phone number: 017********"
                                    required
                                />
                                <TextInput
                                    id="email"
                                    label={data.user_type === 'person' ? 'Email' : 'Organization Email'}
                                    value={data.email}
                                    type="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    error={errors.email}
                                    placeholder="Enter email address"
                                    {...(data.user_type === 'organization' ? {required: true} : {})}
                                />

                                <DateInput
                                    id="dob"
                                    label={data.user_type === 'person' ? 'Date of Birth' : 'Establishment Date'}
                                    value={data.dob}
                                    onChange={(value) => setData('dob', value)}
                                    error={errors.dob}
                                    placeholder={data.user_type === 'person' ? 'Select DOB' : 'Select Establishment Date'}
                                    required
                                />

                                {data.user_type === 'person' && (
                                    <SelectInput
                                        id="gender"
                                        label="Select Gender"
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        error={errors.gender}
                                        options={genderOptions}
                                        required
                                    />
                                )}

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

                            <div className="grid grid-cols-1 gap-6 mt-5">
                                <FileInput
                                    id="photo"
                                    label={data.user_type === 'person' ? 'Profile Photo(png,jpg,jpeg)' : 'Logo(png,jpg,jpeg)'}
                                    onFileChange={(file) => handleFileChange('photo', file)}
                                    currentFileUrl={data?.photo || null}
                                    error={errors.photo}
                                    accept="image/png, image/jpg, image/jpeg"
                                />
                            </div>

                            {/* Location Search Section */}
                            <div className="mt-6">
                                <label className="block text-gray-700 font-semibold mb-4">
                                    {data.user_type === 'person' ? ' Your Location' : ' Organization Location'} (Search and select)
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
                                                <FontAwesomeIcon icon={faClose} />
                                            </Button>
                                        )}
                                    </div>

                                    {/* Search Suggestions */}
                                    {searchSuggestions.length > 0 && (
                                        <div className="absolute z-[9999] w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
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
                                            <strong>Location set successfully!</strong><br />
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
