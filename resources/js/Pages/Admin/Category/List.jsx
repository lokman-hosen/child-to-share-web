import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, Link, router } from '@inertiajs/react';
import React, {useEffect, useRef, useState} from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPlus,
    faTable,
    faGridHorizontal,
    faBuilding,
    faEnvelope,
    faPhone,
    faLocationDot,
    faCalendar,
    faExternalLinkAlt,
    faEdit,
    faEye, faFilter, faTimes, faSearch, faListDots
} from "@fortawesome/free-solid-svg-icons";
import {getStatus, getStatusOptions, wishAndDonationType} from "@/utils.jsx";

export default function List({ module, filters, categories }) {
    const [showFilters, setShowFilters] = useState(true); // For mobile filter toggle
    const [activeFilterCount, setActiveFilterCount] = useState(0);

    const categoryListData = categories?.data || [];
    const categoryLinks = categories?.links || [];
    const safeFilters = filters || [];
    const [searchCommon, setSearchCommon] = useState((safeFilters?.searchCommon) || '');
    const [status, setStatus] = useState((safeFilters?.status) || '');


    // Use a ref to prevent useEffect from running on the initial render for filters/sort
    const initialRender = useRef(true);

    // Calculate active filters count
    useEffect(() => {
        let count = 0;
        if (searchCommon) count++;
        if (status) count++;
        setActiveFilterCount(count);
    }, [searchCommon,status]);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        const query = {
            search_common: searchCommon,
            status: status,
        };

        router.get(route('categories.index'), query, {
            preserveState: true,
            replace: true,
        });
    }, [searchCommon,status]);

    // Clear all filters
    const clearAllFilters = () => {
        setSearchCommon('');
        setStatus('');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case '1':
                return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case '0':
                return 'bg-rose-100 text-rose-800 border-rose-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Main Card Container */}
                <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    {/* Card Header with Gradient */}
                    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
                        </div>

                        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                            {/* Title Section */}
                            <div className="flex items-center space-x-5">
                                <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                                    <FontAwesomeIcon
                                        icon={faListDots}
                                        className="text-white text-2xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                        {module} Management
                                    </h1>
                                    <p className="text-blue-100 text-lg opacity-90">
                                        Manage categories for wishes and gifts
                                    </p>
                                </div>
                            </div>

                            {/* Actions Section */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                {/* View Toggle */}

                                {/* Create Button */}
                                <Link
                                    href={route('categories.create')}
                                    className="group inline-flex items-center justify-center space-x-3 bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3.5 px-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/50"
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-white/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <FontAwesomeIcon icon={faPlus} className="relative text-lg" />
                                    </div>
                                    <span className="text-lg">Create Category</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-4 sm:px-8 py-8">

                        {/* Enhanced Filter Section */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                            {/* Filter Header - Always visible */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFilter} className="text-blue-600 text-lg" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-900">Filter Category</h2>
                                        <p className="text-sm text-gray-500">
                                            Find specific name, status
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
                                <div
                                    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                    {/* Search Input - Enhanced with icon */}
                                    <div className="relative">
                                        <label htmlFor="search"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Common Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FontAwesomeIcon icon={faSearch} className="text-gray-400 w-4 h-4"/>
                                            </div>
                                            <input
                                                type="text"
                                                id="search"
                                                value={searchCommon}
                                                onChange={(e) => setSearchCommon(e.target.value)}
                                                placeholder="Search by name.."
                                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                                            />
                                            {searchCommon && (
                                                <button
                                                    onClick={() => setSearchCommon('')}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} className="text-gray-400 hover:text-gray-600 w-4 h-4"/>
                                                </button>
                                            )}
                                        </div>
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
                                            {getStatusOptions().map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Clear Filters Button - Mobile Only */}
                                {activeFilterCount > 0 && (
                                    <div className="mt-4 md:hidden">
                                        <button
                                            onClick={clearAllFilters}
                                            className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faTimes} className="mr-2"/>
                                            Clear All Filters ({activeFilterCount})
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
                            {/* Desktop View */}
                            <div className="hidden md:block">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                        <tr>
                                            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Total Wish
                                            </th>
                                            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Total Gift
                                            </th>
                                            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-5 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                        {categoryListData.length > 0 ? (
                                            categoryListData.map((category) => (
                                                <tr key={category.id}
                                                    className="hover:bg-gray-50 transition-colors duration-200 group">

                                                    <td className="px-6 py-6">
                                                        {category.name}
                                                    </td>
                                                    <td className="px-6 py-6" title="Click to see wishes">
                                                       <div className="text-blue-700" >
                                                           <Link href={route('wishes.index',{
                                                               'category_id': category.id
                                                           })}>
                                                               {category.wishes_count}
                                                           </Link>
                                                       </div>
                                                    </td>
                                                    <td className="px-6 py-6" title="Click to see donations">
                                                        <div className="text-blue-800">
                                                            <Link href={route('donations.index',{
                                                                'category_id': category.id
                                                            })}>
                                                            </Link>
                                                            {category.donations_count}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-6">
                                                        {getStatus(category.is_active)}
                                                    </td>
                                                    <td className="px-6 py-6">
                                                        <div className="flex justify-end space-x-3">
                                                            <Link
                                                                href={route('categories.edit', category.id)}
                                                                className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 hover:text-white hover:from-emerald-600 hover:to-teal-600 border border-emerald-200 hover:border-emerald-600 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group/edit"
                                                            >
                                                                <FontAwesomeIcon icon={faEdit}
                                                                                 className="w-4 h-4 mr-2 group-hover/edit:animate-pulse"/>
                                                                Edit
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="px-8 py-16 text-center">
                                                    <div className="max-w-md mx-auto">
                                                        <div
                                                            className="h-24 w-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                                                            <FontAwesomeIcon icon={faBuilding}
                                                                             className="text-gray-300 text-4xl"/>
                                                        </div>
                                                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">No
                                                            Category Found</h3>
                                                        <p className="text-gray-500 mb-8">
                                                            Start by adding your first organization to manage
                                                            partnerships and collaborations.
                                                        </p>
                                                        <Link
                                                            href={route('categories.create')}
                                                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                                        >
                                                            <FontAwesomeIcon icon={faPlus}/>
                                                            <span>Create First Categories</span>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        {/* Pagination */}
                        {categoryLinks.length > 1 && (
                            <div className="mt-8 px-6">
                                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                                    <Pagination data={categories} links={categoryLinks}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
