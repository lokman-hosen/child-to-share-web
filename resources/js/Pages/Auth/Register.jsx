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
    faClose, faUser, faBuilding, faGift, faStar, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import AuthShell from "@/Components/UI/AuthShell";
import Alert from "@/Components/UI/Alert";
import UIButton from "@/Components/UI/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "@headlessui/react";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";

function ChoiceCard({ selected, onSelect, icon, title, desc, tone = 'primary' }) {
    return (
    <button
        type="button"
        role="radio"
        aria-checked={selected}
        onClick={onSelect}
        className={`flex flex-1 items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
            selected
                ? (tone === 'primary' ? 'border-primary-500 bg-primary-50/60' : 'border-secondary-400 bg-secondary-50')
                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        }`}
    >
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg ${
            selected ? (tone === 'primary' ? 'bg-primary-600 text-white' : 'bg-secondary-300 text-slate-900') : 'bg-slate-100 text-slate-500'
        }`}>
            {icon}
        </span>
        <span className="min-w-0">
            <span className="block font-semibold text-slate-900">{title}</span>
            <span className="block text-sm text-slate-500">{desc}</span>
        </span>
        <FontAwesomeIcon icon={faCircleCheck} className={`ml-auto h-5 w-5 shrink-0 ${selected ? (tone === 'primary' ? 'text-primary-600' : 'text-secondary-600') : 'text-transparent'}`} aria-hidden="true" />
    </button>
    );
}

function SectionTitle({ step, children }) {
    return (
    <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary-700">{step}</span>
        {children}
    </h2>
    );
}

export default function Register({guardianRelations,genders,organizations}) {
    // State to manage the selected role
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);
    const autocompleteService = useRef(null);
    const placesService = useRef(null);

    // Preselect the role passed by "Sign Up as Contributor / Wisher" links (?role=donor|wisher).
    const initialRole = (() => {
        try {
            const r = new URLSearchParams(window.location.search).get('role');
            return ['donor', 'wisher'].includes(r) ? r : 'donor';
        } catch (e) {
            return 'donor';
        }
    })();

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
        user_type: 'person',
        role: initialRole,

        organization: '',
        guardian_name: '',
        guardian_phone: '',
        relationship: '',

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
    const relationOptions = getCommonOptions(guardianRelations);

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

    const calculateAge = (dobString) => {
        if (!dobString) return 0;
        const today = new Date();
        const birthDate = new Date(dobString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    // Check if Google Maps is available
    const isGoogleMapsAvailable = !!window.google;

    const radioKeys = (field, values) => (e) => {
        if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(e.key)) return;
        e.preventDefault();
        const idx = values.indexOf(data[field]);
        const next = values[(idx + (['ArrowRight', 'ArrowDown'].includes(e.key) ? 1 : -1) + values.length) % values.length];
        setData(field, next);
    };

    return (
        <GuestLayout>
            <Head title="Register"/>
            <AuthShell
                wide
                title="Join ThreeWish"
                subtitle="Create an account to start sharing or making wishes"
                footer={<>
                    Already have an account?
                    <Link href={route('login')} className="ml-1 font-semibold text-primary-700 hover:underline">Log In</Link>
                </>}
            >
                <form onSubmit={submit} className="space-y-10">
                    <section className="space-y-4">
                        <SectionTitle step="1">Sign Up As:</SectionTitle>
                        <div role="radiogroup" aria-label="Sign Up As" className="flex flex-col gap-3 sm:flex-row" onKeyDown={radioKeys('user_type', ['person', 'organization'])}>
                            <ChoiceCard
                                selected={data.user_type === 'person'}
                                onSelect={() => setData('user_type', 'person')}
                                icon={<FontAwesomeIcon icon={faUser} className="h-4 w-4" />}
                                title="Person/Individual"
                                desc="Register as an individual"
                            />
                            <ChoiceCard
                                tone="gold"
                                selected={data.user_type === 'organization'}
                                onSelect={() => setData('user_type', 'organization')}
                                icon={<FontAwesomeIcon icon={faBuilding} className="h-4 w-4" />}
                                title="Organization"
                                desc="Register as an organization"
                            />
                        </div>

                        <h3 className="pt-2 text-sm font-semibold text-slate-800">I want to:</h3>
                        <div role="radiogroup" aria-label="I want to" className="flex flex-col gap-3 sm:flex-row" onKeyDown={radioKeys('role', ['donor', 'wisher'])}>
                            <ChoiceCard
                                selected={data.role === 'donor'}
                                onSelect={() => setData('role', 'donor')}
                                icon={<FontAwesomeIcon icon={faGift} className="h-4 w-4" />}
                                title="Donate Items"
                                desc="Share items with children"
                            />
                            <ChoiceCard
                                tone="gold"
                                selected={data.role === 'wisher'}
                                onSelect={() => setData('role', 'wisher')}
                                icon={<FontAwesomeIcon icon={faStar} className="h-4 w-4" />}
                                title="Make a Wish"
                                desc="Request items you need"
                            />
                        </div>
                    </section>

                    <section className="space-y-5">
                        <SectionTitle step="2">{data.user_type === 'person' ? 'Your details' : 'Organization details'}</SectionTitle>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <TextInput
                                id="name"
                                label={data.user_type === 'person' ? 'Full Name' : 'Organization Name'}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                error={errors.name}
                                placeholder={data.user_type === 'person' ? 'Enter Name' : 'Enter Organization Name'}
                                autoComplete={data.user_type === 'person' ? 'name' : 'organization'}
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
                                autoComplete="tel"
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
                                autoComplete="email"
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
                                <>
                                    <CustomCreatableSelect
                                        id="organization"
                                        label="Org/Institution/School(select or type to create new)"
                                        value={data.organization}
                                        onChange={(value) => setData('organization', value)}
                                        options={organizations}
                                        error={errors.organization}
                                        placeholder="Select or type to create new organization"
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
                                </>
                            )}

                            <TextInput
                                id="password"
                                label="Password(min 8 character)"
                                value={data.password}
                                type="password"
                                onChange={(e) => setData('password', e.target.value)}
                                error={errors.password}
                                placeholder="Enter password. Min 8 character"
                                autoComplete="new-password"
                                required
                            />

                            <FileInput
                                id="photo"
                                label={data.user_type === 'person' ? 'Profile Photo(png,jpg,jpeg)' : 'Logo(png,jpg,jpeg)'}
                                onFileChange={(file) => handleFileChange('photo', file)}
                                currentFileUrl={data?.photo || null}
                                error={errors.photo}
                                accept="image/png, image/jpg, image/jpeg"
                            />
                        </div>
                    </section>

                    {/* Wisher-specific fields (Conditional Rendering) */}
                    {(data.user_type === 'person' && calculateAge(data.dob) < 18 && data.role !== 'donor') && (
                        <section className="space-y-5 rounded-xl border border-secondary-200 bg-secondary-50/60 p-5">
                            <h2 className="text-base font-semibold text-slate-900">Guardian Information</h2>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <TextInput
                                    id="guardian_name"
                                    label="Guardian Name"
                                    value={data.guardian_name}
                                    onChange={(e) => setData('guardian_name', e.target.value)}
                                    error={errors.guardian_name}
                                    placeholder="Enter guardian name"
                                />
                                <TextInput
                                    id="guardian_phone"
                                    label="Guardian Phone"
                                    value={data.guardian_phone}
                                    onChange={(e) => setData('guardian_phone', e.target.value)}
                                    error={errors.guardian_phone}
                                    placeholder="Guardian phone: 017********"
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
                        </section>
                    )}

                    {/* Location Search Section */}
                    <section className="space-y-4">
                        <SectionTitle step="3">
                            <label htmlFor="location-search">
                                {data.user_type === 'person' ? 'Your Location' : 'Organization Location'} (Search and select)
                                <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>
                            </label>
                        </SectionTitle>

                        <div className="relative">
                            <div className="relative">
                                <input
                                    id="location-search"
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        isGoogleMapsAvailable
                                            ? handleSearch(e.target.value)
                                            : handleSearchFallback(e.target.value)
                                    }
                                    placeholder="Search location (address, city, landmark...)"
                                    autoComplete="off"
                                    role="combobox"
                                    aria-expanded={searchSuggestions.length > 0}
                                    aria-controls="location-suggestions"
                                    aria-autocomplete="list"
                                    className={`form-control pl-10 pr-16 ${(errors.latitude || errors.longitude) ? 'form-control-error' : ''}`}
                                />
                                <FontAwesomeIcon icon={faSearch} className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                                {isSearching && (
                                    <FontAwesomeIcon icon={faSpinner} spin className="absolute right-11 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-label="Searching" />
                                )}
                                {searchQuery && (
                                    <Button
                                        onClick={handleClearSearch}
                                        aria-label="Clear location search"
                                        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                                    >
                                        <FontAwesomeIcon icon={faClose} className="h-4 w-4" aria-hidden="true"/>
                                    </Button>
                                )}
                            </div>

                            {/* Search Suggestions */}
                            {searchSuggestions.length > 0 && (
                                <ul id="location-suggestions" role="listbox" className="absolute z-[9999] mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-pop">
                                    {searchSuggestions.map((suggestion, index) => {
                                        // Decide per suggestion: Google predictions have place_id/structured_formatting,
                                        // OpenStreetMap results have display_name. (A global flag could flip mid-search
                                        // when the Google script finished loading, which crashed the page.)
                                        const isGoogle = !!suggestion?.structured_formatting;
                                        const select = () => isGoogle
                                            ? handleSuggestionSelect(suggestion)
                                            : handleSuggestionSelectFallback(suggestion);
                                        const main = isGoogle
                                            ? suggestion.structured_formatting.main_text
                                            : (suggestion?.display_name || '').split(',').slice(0, 2).join(',');
                                        const secondary = isGoogle
                                            ? suggestion.structured_formatting.secondary_text
                                            : (suggestion?.display_name || '').split(',').slice(2).join(',');
                                        return (
                                            <li
                                                key={suggestion?.place_id || index}
                                                role="option"
                                                aria-selected="false"
                                                tabIndex={0}
                                                onClick={select}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault();
                                                        select();
                                                    }
                                                }}
                                                className="flex cursor-pointer items-start gap-3 px-4 py-3 hover:bg-primary-50 focus:bg-primary-50 focus:outline-none"
                                            >
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 h-3.5 w-3.5 shrink-0 text-primary-600" aria-hidden="true" />
                                                <span>
                                                    <span className="block text-sm font-medium text-slate-900">{main}</span>
                                                    <span className="block text-xs text-slate-500">{secondary}</span>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>

                        {(errors.latitude || errors.longitude) && (
                            <p className="text-xs font-medium text-danger-700" role="alert">
                                Location is required. Please search and select your location.
                            </p>
                        )}

                        {data.latitude && data.longitude && (
                            <Alert tone="success" title="Location set successfully!">
                                Coordinates captured for better service matching.
                            </Alert>
                        )}

                        <div className="hidden">
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
                    </section>

                    <UIButton type="submit" size="lg" className="w-full" disabled={processing} loading={processing}>
                        {processing ? 'Creating Account...' : 'Create Account'}
                    </UIButton>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
