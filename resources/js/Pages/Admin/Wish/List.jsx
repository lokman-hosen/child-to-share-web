import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router} from '@inertiajs/react';
import React, {useEffect, useRef, useState} from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faPlus, faTable, faGridHorizontal, faFilter, faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {getDropdownOptions, getFulfilmentStatus, getStatusOptions, textLimit, wishAndDonationType} from "@/utils.jsx";
import TextInput from "@/Components/TextInputField.jsx";
import SelectInput from "@/Components/SelectInput.jsx";

export default function List({module, wishes, categories, filters, ageRanges, distanceRanges, organizations,wishStatus}) {
    const params = new URLSearchParams(window.location.search)
    const orgId = params.get('organization_id') || '';
    const catId = params.get('category_id') || '';
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
    const [showFilters, setShowFilters] = useState(true); // For mobile filter toggle
    const [activeFilterCount, setActiveFilterCount] = useState(0);

    const wishListData = wishes?.data || [];
    const wishesLinks = wishes?.links || [];
    const safeFilters = filters || [];

    const [categoryId, setCategoryId] = useState((safeFilters?.category_id) || catId);
    const [organizationId, setOrganizationId] = useState((safeFilters?.organization_id) || orgId);
    const [ageRange, setAgeRange] = useState((safeFilters?.age_range) || '');
    const [distanceRange, setDistanceRange] = useState((safeFilters?.distance_range) || '');
    const [searchCommon, setSearchCommon] = useState((safeFilters?.searchCommon) || '');
    const [type, setType] = useState((safeFilters?.type) || '');
    const [status, setStatus] = useState((safeFilters?.status) || '');


    const categoryOptions = getDropdownOptions(categories, 'id', 'name');
    const organizationOptions = getDropdownOptions(organizations, 'id', 'name');
    const ageRangeOptions = getStatusOptions(ageRanges);
    const wishStatusOptions = getStatusOptions(wishStatus);

    // Use a ref to prevent useEffect from running on initial render for filters/sort
    const initialRender = useRef(true);

    // Calculate active filters count
    useEffect(() => {
        let count = 0;
        if (organizationId) count++;
        if (searchCommon) count++;
        if (categoryId) count++;
        if (ageRange) count++;
        if (type) count++;
        if (status) count++;
        if (distanceRange) count++;
        setActiveFilterCount(count);
    }, [organizationId, categoryId, ageRange, distanceRange,searchCommon,type,status]);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        const query = {
            category_id: categoryId,
            organization_id: organizationId,
            search_common: searchCommon,
            age_range: ageRange,
            distance_range: distanceRange,
            type: type,
            status: status,
        };

        router.get(route('wishes.index'), query, {
            preserveState: true,
            replace: true,
        });
    }, [categoryId, ageRange, distanceRange, organizationId, searchCommon,type,status]);

    // Clear all filters
    const clearAllFilters = () => {
        setOrganizationId('');
        setSearchCommon('');
        setCategoryId('');
        setAgeRange('');
        setDistanceRange('');
        setType('');
        setStatus('');
    };

    // Status badge color function
    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800';
            case 'reserved':
                return 'bg-yellow-100 text-yellow-800';
            case 'donated':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleFulfilStatus = (fulfilmentId) => {
        router.get('wish-fulfill-status', {
            'status' : 'accepted_by_wisher',
            'fulfilment_id' : fulfilmentId,
        })
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`}/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-2 py-2 sm:px-8 sm:py-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        {module} Items
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Start making wishes and find the items you need
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* View Toggle - Desktop Only */}
                                <div className="hidden md:flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('table')}
                                        className={`p-2 rounded-md transition-all duration-200 ${
                                            viewMode === 'table'
                                                ? 'bg-white text-blue-600 shadow-sm'
                                                : 'text-white hover:bg-white hover:bg-opacity-10'
                                        }`}
                                        title="Table View"
                                    >
                                        <FontAwesomeIcon icon={faTable} className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-md transition-all duration-200 ${
                                            viewMode === 'grid'
                                                ? 'bg-white text-blue-600 shadow-sm'
                                                : 'text-white hover:bg-white hover:bg-opacity-10'
                                        }`}
                                        title="Grid View"
                                    >
                                        <FontAwesomeIcon icon={faGridHorizontal} className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={route('wishes.create')}
                                    className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                                    <span>Create New</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            {/* Enhanced Filter Section */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                {/* Filter Header - Always visible */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                    <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FontAwesomeIcon icon={faFilter} className="text-blue-600 text-lg" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Filter Wishes</h2>
                                            <p className="text-sm text-gray-500">
                                                Find specific wishes by organization, category, or age range
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        {/* Mobile Filter Toggle */}
                                        <button
                                            onClick={() => setShowFilters(!showFilters)}
                                            className="md:hidden inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={showFilters ? faTimes : faFilter} className="mr-2" />
                                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                                            {activeFilterCount > 0 && (
                                                <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                                                    {activeFilterCount}
                                                </span>
                                            )}
                                        </button>

                                        {/* Active Filters Count - Desktop */}
                                        {activeFilterCount > 0 && (
                                            <div className="hidden md:flex items-center space-x-2">
                                                <span className="text-sm text-gray-500">
                                                    {activeFilterCount} active filter{activeFilterCount !== 1 ? 's' : ''}
                                                </span>
                                                <button
                                                    onClick={clearAllFilters}
                                                    className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} className="mr-1.5 w-3 h-3" />
                                                    Clear All
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Filter Fields - Responsive Grid */}
                                <div className={`${showFilters ? 'block' : 'hidden md:block'} transition-all duration-300`}>
                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {/* Search Input - Enhanced with icon */}
                                        <div className="relative">
                                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                                                Common Search
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 w-4 h-4" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="search"
                                                    value={searchCommon}
                                                    onChange={(e) => setSearchCommon(e.target.value)}
                                                    placeholder="Search by title, description..."
                                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                                                />
                                                {searchCommon && (
                                                    <button
                                                        onClick={() => setSearchCommon('')}
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="text-gray-400 hover:text-gray-600 w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {/* Organization Select */}
                                        <div>
                                            <label htmlFor="organization_id" className="block text-sm font-medium text-gray-700 mb-2">
                                                Organization
                                            </label>
                                            <select
                                                id="organization_id"
                                                value={organizationId}
                                                onChange={(e) => setOrganizationId(e.target.value)}
                                                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                            >
                                                <option value="">All Organizations</option>
                                                {organizationOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="organization_id" className="block text-sm font-medium text-gray-700 mb-2">
                                                Wish Type(Single/organization)
                                            </label>
                                            <select
                                                id="type"
                                                value={type}
                                                onChange={(e) => setType(e.target.value)}
                                                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                            >
                                                <option value="">Select Type</option>
                                                {wishAndDonationType().map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Category Select */}
                                        <div>
                                            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-2">
                                                Category
                                            </label>
                                            <select
                                                id="category_id"
                                                value={categoryId}
                                                onChange={(e) => setCategoryId(e.target.value)}
                                                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                            >
                                                <option value="">All Categories</option>
                                                {categoryOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Age Range Select */}
                                        <div>
                                            <label htmlFor="age_range" className="block text-sm font-medium text-gray-700 mb-2">
                                                Age Range (Child)
                                            </label>
                                            <select
                                                id="age_range"
                                                value={ageRange}
                                                onChange={(e) => setAgeRange(e.target.value)}
                                                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                            >
                                                <option value="">All Age Ranges</option>
                                                {ageRangeOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                                                Status
                                            </label>
                                            <select
                                                id="status"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                            >
                                                <option value="">All Status</option>
                                                {wishStatusOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Distance Range Select (Conditional) */}
                                        {/*{distanceRangeOptions.length > 0 && (*/}
                                        {/*    <div>*/}
                                        {/*        <label htmlFor="distance_range" className="block text-sm font-medium text-gray-700 mb-2">*/}
                                        {/*            Distance from you*/}
                                        {/*        </label>*/}
                                        {/*        <select*/}
                                        {/*            id="distance_range"*/}
                                        {/*            value={distanceRange}*/}
                                        {/*            onChange={(e) => setDistanceRange(e.target.value)}*/}
                                        {/*            className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"*/}
                                        {/*        >*/}
                                        {/*            <option value="">Any Distance</option>*/}
                                        {/*            {distanceRangeOptions.map(option => (*/}
                                        {/*                <option key={option.value} value={option.value}>*/}
                                        {/*                    {option.label}*/}
                                        {/*                </option>*/}
                                        {/*            ))}*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                    </div>

                                    {/* Clear Filters Button - Mobile Only */}
                                    {activeFilterCount > 0 && (
                                        <div className="mt-4 md:hidden">
                                            <button
                                                onClick={clearAllFilters}
                                                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                                            >
                                                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                                                Clear All Filters ({activeFilterCount})
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Card View (Always for mobile) */}
                            <div className="md:hidden space-y-4">
                                {wishListData.length > 0 ? (
                                    wishListData.map((wish, index) => (
                                        <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                            {/* Card Image */}
                                            <div className="relative">
                                                <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                    {wish.featured_image?.file_path ? (
                                                        <img
                                                            src={`/storage/${wish.featured_image.file_path}`}
                                                            alt={wish.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                            <FontAwesomeIcon icon={faStar} className="text-gray-400 text-4xl" />
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Status Badge */}
                                                <div className="absolute top-3 right-3">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                        {wish.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    {wish.title}
                                                </h3>

                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="font-medium mr-2">Age Range:</span>
                                                        <span className="capitalize">{wish.age_range}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="font-medium mr-2">Wisher:</span>
                                                        <span>{wish.user.name}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="font-medium mr-2">Created:</span>
                                                        <span>{wish.created_at}</span>
                                                    </div>
                                                </div>

                                                {/* Action Button */}
                                                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                                    <span className="text-sm text-gray-500">
                                                        {wish.created_at}
                                                    </span>
                                                    {wish.latest_fulfillment ? (
                                                        <span className="px-3 py-1 border border-blue-500 rounded-md text-sm font-medium text-white bg-blue-500">
                                                            {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                        </span>
                                                    ) : (
                                                        <span className="px-3 py-1 border border-blue-500 rounded-md text-sm font-medium text-white bg-blue-500">
                                                            {wish.status}
                                                        </span>
                                                    )}
                                                    <Link
                                                        href={route('wishes.show', wish.id)}
                                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                    >
                                                        Detail
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <FontAwesomeIcon icon={faStar} className="text-gray-300 text-6xl mb-4"/>
                                        <p className="text-gray-500 text-lg mb-2">No wishes found</p>
                                        <p className="text-gray-400 text-sm mb-6">
                                            Start making wishes and find the items you need
                                        </p>
                                        <Link
                                            href={route('wishes.create')}
                                            className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faPlus}/>
                                            <span>Create First Gift</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Desktop View - Table or Grid based on toggle */}
                            <div className="hidden md:block">
                                {viewMode === 'table' ? (
                                    /* Table View */
                                    <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Item Info.</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Wisher Name</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Fulfilment status</th>
                                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                            {wishListData.length > 0 ? (
                                                wishListData.map((wish, index) => (
                                                    <tr key={wish.id} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center">
                                                                <div className="h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                                                                    {wish.featured_image?.file_path ? (
                                                                        <img
                                                                            src={`/storage/${wish.featured_image.file_path}`}
                                                                            alt={wish.title}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center">
                                                                            <FontAwesomeIcon icon={faStar} className="text-gray-400"/>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="ml-4">
                                                                    <h3 className="text-sm font-medium text-gray-900">{wish.title}</h3>
                                                                    <p className="text-sm text-gray-500">Age range: {wish.age_range}yrs</p>
                                                                    <div className="mt-1 flex flex-wrap gap-1">
                                                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">
                                                                            {wish.status}
                                                                        </span>
                                                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
                                                                            {wish.created_at}
                                                                        </span>
                                                                        {wish.latest_fulfillment?.status === 'requested' && (
                                                                            <>
                                                                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">
                                                                                    Contributor: {wish.latest_fulfillment?.donation?.user?.name}
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-900">
                                                            {wish.user.name}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {wish.latest_fulfillment ? (
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                    {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                                    {wish.status}
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            {wish.latest_fulfillment?.status === 'requested' ? (
                                                                <button
                                                                    onClick={() => handleFulfilStatus(wish.latest_fulfillment.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                                                >
                                                                    Confirm Receipt
                                                                </button>
                                                            ) : (
                                                                <Link
                                                                    href={route('wishes.show', wish.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                                                >
                                                                    Detail
                                                                </Link>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="px-6 py-12 text-center">
                                                        <div className="text-center">
                                                            <FontAwesomeIcon icon={faStar}
                                                                             className="text-gray-300 text-5xl mb-4"/>
                                                            <p className="text-gray-500 text-lg mb-2">No wishes
                                                                found</p>
                                                            <p className="text-gray-400 text-sm mb-6">
                                                                Start by creating your first donation item
                                                            </p>
                                                            <Link
                                                                href={route('wishes.create')}
                                                                className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                                <span>Create First Gift</span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    /* Grid View */
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {wishListData.length > 0 ? (
                                            wishListData.map((wish, index) => (
                                                <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                                    {/* Card Image */}
                                                    <div className="relative">
                                                        <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                            {wish.featured_image?.file_path ? (
                                                                <img
                                                                    src={`/storage/${wish.featured_image.file_path}`}
                                                                    alt={wish.title}
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                    <FontAwesomeIcon icon={faStar} className="text-gray-400 text-5xl" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        {/* Status Badge */}
                                                        <div className="absolute top-3 right-3">
                                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                                {wish.status}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Card Content */}
                                                    <div className="p-5">
                                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                            {wish.title}
                                                        </h3>

                                                        <div className="space-y-2 mb-4">
                                                            <div className="flex items-center text-sm text-gray-600">
                                                                <span className="font-medium mr-2">Age Range:</span>
                                                                <span className="capitalize">{wish.age_range}</span>
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-600">
                                                                <span className="font-medium mr-2">Wisher:</span>
                                                                <span>{wish.user.name}</span>
                                                            </div>
                                                            {wish.latest_fulfillment?.status === 'requested' && (
                                                                <div className="mt-2 p-2 bg-purple-50 rounded-lg">
                                                                    <p className="text-xs text-purple-800 font-medium">
                                                                        Contributor: {wish.latest_fulfillment?.donation?.user?.name}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Action Button */}
                                                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                            <span className="text-sm text-gray-500">
                                                                {wish.created_at}
                                                            </span>
                                                            {wish.latest_fulfillment?.status === 'requested' ? (
                                                                <button
                                                                    onClick={() => handleFulfilStatus(wish.latest_fulfillment.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                                                >
                                                                    Confirm Receipt
                                                                </button>
                                                            ) : (
                                                                <Link
                                                                    href={route('wishes.show', wish.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                                                >
                                                                    Detail
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-span-full text-center py-12">
                                                <FontAwesomeIcon icon={faStar} className="text-gray-300 text-6xl mb-4" />
                                                <p className="text-gray-500 text-lg mb-2">No wishes found</p>
                                                <p className="text-gray-400 text-sm mb-6">
                                                    Start sharing items and make wishes come true
                                                </p>
                                                <Link
                                                    href={route('wishes.create')}
                                                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faPlus} />
                                                    <span>Create First Gift</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Pagination */}
                            {wishesLinks.length > 1 && <Pagination data={wishes} links={wishesLinks} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
