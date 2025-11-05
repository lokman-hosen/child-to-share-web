import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInputField';
import {Button, Transition} from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import SelectInput from "@/Components/SelectInput.jsx";
import React, {useRef, useState} from "react";
import {getCommonOptions} from "@/utils.jsx";
import DateInput from "@/Components/DateInput.jsx";
import FileInput from "@/Components/FileInput.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faClose,
    faEdit,
    faMapMarkerAlt,
    faSave,
    faSearch,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
    user,
    guardianRelations,
    genders
}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);
    const autocompleteService = useRef(null);
    const placesService = useRef(null);

    //const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            guardian_name: user?.guardian_name,
            guardian_phone: user?.guardian_phone,
            relationship: user?.relationship,
            gender: user?.gender,
            dob: user?.dob,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route('user.profile.update'),{
            forceFormData: true,
            onSuccess: () => {
                //reset();
                //setTags([]);
            },
            onError: (submissionErrors) => {
                console.error("Form submission errors:", submissionErrors);
            },
            preserveScroll: true,
        });
    };

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) {
            setData(`${field}_removed`, false);
        }
    };

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

    const relationOptions = getCommonOptions(guardianRelations);
    const genderOptions = getCommonOptions(genders);

    return (
        <section>
            <div className="flex flex-col sm:flex-row items-center border-b border-gray-200 pb-6 gap-6">
                {/* User Image */}
                <div
                    className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md flex-shrink-0 order-2 sm:order-1">
                    {user.image ? (
                        <img
                            src={`/storage/${user.image}`}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Text Content */}
                <div className="text-center sm:text-left order-1 sm:order-2">
                    <h2 className="text-2xl font-medium text-gray-900">
                        Profile Information
                    </h2>

                    <p className="mt-1 text-md text-gray-600">
                        Update your account's profile information and email address.
                    </p>
                </div>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <TextInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                        isFocused
                        autoComplete="name"
                        placeholder="Your name"
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
                        placeholder="Your email"
                    />

                    <TextInput
                        id="phone"
                        label="Phone"
                        type="number"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        error={errors.phone}
                        placeholder="Your phone"
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

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                        />
                        <TextInput
                            id="guardian_phone"
                            label="Guardian Phone"
                            type="number"
                            value={data.guardian_phone}
                            onChange={(e) => setData('guardian_phone', e.target.value)}
                            error={errors.guardian_phone}
                            placeholder="Your guardian phone"
                        />

                        <SelectInput
                            id="relationship"
                            label="Relation with guardian"
                            value={data.relationship}
                            onChange={(e) => setData('relationship', e.target.value)}
                            error={errors.relationship}
                            options={relationOptions}
                        />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FileInput
                        id="photo"
                        label="Profile Photo(png,jpg,jpeg)"
                        onFileChange={(file) => handleFileChange('photo', file)}
                        currentFileUrl={data?.photo || null}
                        error={errors.photo}
                        accept="image/png, image/jpg, image/jpeg"
                    />
                </div>
                <div className="grid grid-cols-1 gap-6">
                        {/* Location Search Section */}
                        <div className="mt-1">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Your Location (Search and select)
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
                    </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
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
                    <PrimaryButton
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50"
                        disabled={processing}>
                        <FontAwesomeIcon icon={faSave}/> Update
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
