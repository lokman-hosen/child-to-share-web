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

const Form = ({organization}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);
    const autocompleteService = useRef(null);
    const placesService = useRef(null);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: organization?.name || '',
        contact_phone: organization?.contact_phone || '',
        contact_email: organization?.contact_email || '',
        address: organization?.address || '',
        latitude: organization?.user?.latitude || '',
        longitude: organization?.user?.longitude || '',
        is_active: organization?.is_active ||'',

        // We will add the _method field dynamically in handleSubmit
        _method: organization ? 'PUT' : 'POST',
    });


    useEffect(() => {
        if (organization) {
            setData((prevData) => ({
                ...prevData,
                name: organization?.name || '',
                contact_phone: organization?.contact_phone || '',
                contact_email: organization?.contact_email || '',
                address: organization?.address || '',
                latitude: organization?.user?.latitude || '',
                longitude: organization?.user?.longitude || '',
                is_active: organization?.is_active ||'',
                // Don't set attachments from donation as they're already stored
                _method: 'PUT', // Ensure method spoofing is set for updates
            }));
        } else {
            setData('_method', 'POST'); // Reset for new member creation
            reset();
        }
    }, [organization, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = organization
            ? route('organizations.update', organization.id)
            : route('organizations.store');

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

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <TextInput
                    id="name"
                    label="Organization Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    placeholder="e.g., Winter Coat, Story Books, etc."
                    required
                />
                <TextInput
                    id="phone"
                    label="Organization Phone(11 digit)"
                    type="number"
                    value={data.contact_phone}
                    onChange={(e) => setData('contact_phone', e.target.value)}
                    error={errors.contact_phone}
                    placeholder="Your contact_phone"
                    required
                />

                <TextInput
                    id="email"
                    label="Organization Email"
                    type="email"
                    value={data.contact_email}
                    onChange={(e) => setData('contact_email', e.target.value)}
                    autoComplete="username"
                    error={errors.contact_email}
                    placeholder="Your contact_email"
                    required
                />

                <FileInput
                    id="photo"
                    helpText="Size: max 2 MB"
                    label="Logo(png,jpg,jpeg)"
                    onFileChange={(file) => handleFileChange('image', file)}
                    currentFileUrl={data?.user?.image || null}
                    error={errors.image}
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
                    <div className="mb-2 relative">
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
                    {data.address &&
                        <div className="text-gray-400 text-sm">Current address : {data.address}</div>
                    }
                </div>
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
                    {organization ? (
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
