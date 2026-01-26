import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React, { useState } from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faPlus, faTable, faGridHorizontal, faEye} from "@fortawesome/free-solid-svg-icons";

export default function List({module, donations}) {
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

    const donationListData = donations?.data || [];
    const donationsLinks = donations?.links || [];

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

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`}/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-8 sm:px-8 sm:py-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faGift}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        {module} Items
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Share your items and make wishes come true
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
                                    >
                                        <FontAwesomeIcon icon={faGridHorizontal} className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={route('donations.create')}
                                    className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                                >
                                    <div className="animate-bounce">
                                        <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                                    </div>
                                    <span>Create New</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="w-2xl space-y-8">

                                {/* Mobile Card View (Always for mobile) */}
                                <div className="md:hidden space-y-4">
                                    {donationListData.length > 0 ? (
                                        donationListData.map((donation, index) => (
                                            <div key={donation.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                                {/* Card Image */}
                                                <div className="relative">
                                                    <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                        {donation.featured_image?.file_path ? (
                                                            <img
                                                                src={`/storage/${donation.featured_image.file_path}`}
                                                                alt={donation.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* Status Badge */}
                                                    <div className="absolute top-3 right-3">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                            {donation.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <div className="p-4">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                        {donation.title}
                                                    </h3>

                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Condition:</span>
                                                            <span className="capitalize">{donation.item_condition}</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Donor:</span>
                                                            <span>{donation.user.name}</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Created:</span>
                                                            <span>{donation.created_at}</span>
                                                        </div>
                                                    </div>

                                                    {/* Tags */}
                                                    {donation.auto_tags && (
                                                        <div className="mb-4">
                                                            <div className="flex flex-wrap gap-1">
                                                                {Array.isArray(donation.auto_tags)
                                                                    ? donation.auto_tags.map((tag, tagIndex) => (
                                                                        <span
                                                                            key={tagIndex}
                                                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                                                                        >
                                                                            {tag}
                                                                        </span>
                                                                    ))
                                                                    : donation.auto_tags.split(',').map((tag, tagIndex) => (
                                                                        <span
                                                                            key={tagIndex}
                                                                            className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                                                                        >
                                                                            {tag.trim()}
                                                                        </span>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Action Button */}
                                                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                                        <span className="text-sm text-gray-500">
                                                            {donation.created_at}
                                                        </span>
                                                        <Link
                                                            href={route('donations.show', donation.id)}
                                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <FontAwesomeIcon icon={faGift} className="text-gray-300 text-6xl mb-4" />
                                            <p className="text-gray-500 text-lg mb-2">No donations found</p>
                                            <p className="text-gray-400 text-sm mb-6">
                                                Start sharing items and make wishes come true
                                            </p>
                                            <Link
                                                href={route('donations.create')}
                                                className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                                <span>Create First Gift</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Desktop View - Table or Grid based on toggle */}
                                <div className="hidden md:block">
                                    {viewMode === 'table' ? (
                                        /* Table View */
                                        <div className="overflow-x-auto bg-white shadow rounded-lg px-1 py-2">
                                            <table className="wish-table w-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Item Info.</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Donor Name</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Status</th>
                                                    <th className="text-right px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {donationListData.length > 0 ? (
                                                    donationListData.map((donation, index) => (
                                                        <tr key={donation.id} className="hover:bg-gray-50 transition-colors">
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex items-center">
                                                                    <div className="h-20 w-20 bg-blue-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden border border-gray-200 flex-shrink-0">
                                                                        {donation.featured_image?.file_path ? (
                                                                            <img
                                                                                src={`/storage/${donation.featured_image.file_path}`}
                                                                                alt={donation.title}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                                                <FontAwesomeIcon icon={faGift} className="text-gray-400" />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div className="min-w-0 flex-1">
                                                                        <h3 className="text-lg font-semibold text-gray-900 truncate">{donation.title}</h3>
                                                                        <p className="text-sm text-gray-500 mt-1">Condition: {donation.item_condition}</p>
                                                                        <div className="mt-2 flex items-center flex-wrap gap-1">
                                                                            <span className="text-sm text-gray-500">Tags:</span>
                                                                            {donation.auto_tags && (
                                                                                Array.isArray(donation.auto_tags)
                                                                                    ? donation.auto_tags.slice(0, 3).map((tag, index) => (
                                                                                        <span
                                                                                            key={index}
                                                                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                                                                                        >
                                                                                            {tag}
                                                                                        </span>
                                                                                    ))
                                                                                    : donation.auto_tags.split(',').slice(0, 3).map((tag, index) => (
                                                                                        <span
                                                                                            key={index}
                                                                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                                                                                        >
                                                                                            {tag.trim()}
                                                                                        </span>
                                                                                    ))
                                                                            )}
                                                                            {(donation.auto_tags && (Array.isArray(donation.auto_tags) ? donation.auto_tags.length > 3 : donation.auto_tags.split(',').length > 3)) && (
                                                                                <span className="text-xs text-gray-400">+ more</span>
                                                                            )}
                                                                        </div>
                                                                        <div className="mt-2">
                                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                                                {donation.status}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100 text-gray-900 font-medium">
                                                                {donation.user.name}
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100 text-gray-900 font-medium">
                                                                <span className={`px-3 py-1 border rounded-md text-sm ${donation.status === 'donated' ?  'border-indigo-100 bg-indigo-600 text-white' : 'border-green-100 bg-green-600 text-white'}`}>
                                                                  {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                                                </span>
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex flex-col items-end space-y-2">
                                                                    <p className="text-sm text-gray-500 whitespace-nowrap">
                                                                        {donation.created_at}
                                                                    </p>
                                                                    <div className="flex space-x-2">
                                                                        <Link
                                                                            href={route('donations.show', donation.id)}
                                                                            className="ml-2 inline-flex items-center px-2 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-500 transition-colors duration-200"
                                                                            title="View Details"
                                                                        >
                                                                            <FontAwesomeIcon icon={faEye} size="lg"/>

                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="px-6 py-12 text-center">
                                                            <div className="text-center">
                                                                <FontAwesomeIcon icon={faGift} className="text-gray-300 text-5xl mb-4" />
                                                                <p className="text-gray-500 text-lg mb-2">No donations found</p>
                                                                <p className="text-gray-400 text-sm mb-6">
                                                                    Start by creating your first donation item
                                                                </p>
                                                                <Link
                                                                    href={route('donations.create')}
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
                                            {donationListData.length > 0 ? (
                                                donationListData.map((donation, index) => (
                                                    <div key={donation.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                                        {/* Card Image */}
                                                        <div className="relative">
                                                            <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                                {donation.featured_image?.file_path ? (
                                                                    <img
                                                                        src={`/storage/${donation.featured_image.file_path}`}
                                                                        alt={donation.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                        <FontAwesomeIcon icon={faGift} className="text-gray-400 text-5xl" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* Status Badge */}
                                                            <div className="absolute top-3 right-3">
                                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                                    {donation.status}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Card Content */}
                                                        <div className="p-5">
                                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                                {donation.title}
                                                            </h3>

                                                            <div className="space-y-2 mb-4">
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <span className="font-medium mr-2">Condition:</span>
                                                                    <span className="capitalize">{donation.item_condition}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <span className="font-medium mr-2">Donor:</span>
                                                                    <span>{donation.user.name}</span>
                                                                </div>
                                                            </div>

                                                            {/* Tags */}
                                                            {donation.auto_tags && (
                                                                <div className="mb-4">
                                                                    <div className="flex flex-wrap gap-1">
                                                                        {Array.isArray(donation.auto_tags)
                                                                            ? donation.auto_tags.slice(0, 3).map((tag, tagIndex) => (
                                                                                <span
                                                                                    key={tagIndex}
                                                                                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                                                                                >
                                                                                    {tag}
                                                                                </span>
                                                                            ))
                                                                            : donation.auto_tags.split(',').slice(0, 3).map((tag, tagIndex) => (
                                                                                <span
                                                                                    key={tagIndex}
                                                                                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                                                                                >
                                                                                    {tag.trim()}
                                                                                </span>
                                                                            ))
                                                                        }
                                                                        {(donation.auto_tags && (Array.isArray(donation.auto_tags) ? donation.auto_tags.length > 3 : donation.auto_tags.split(',').length > 3)) && (
                                                                            <span className="text-xs text-gray-400">+ more</span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Action Button */}
                                                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                                <span className="text-sm text-gray-500">
                                                                    {donation.created_at}
                                                                </span>
                                                                <Link
                                                                    href={route('donations.show', donation.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                                >
                                                                    View Details
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-span-full text-center py-12">
                                                    <FontAwesomeIcon icon={faGift} className="text-gray-300 text-6xl mb-4" />
                                                    <p className="text-gray-500 text-lg mb-2">No donations found</p>
                                                    <p className="text-gray-400 text-sm mb-6">
                                                        Start sharing items and make wishes come true
                                                    </p>
                                                    <Link
                                                        href={route('donations.create')}
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
                                {donationsLinks.length > 1 && <Pagination data={donations} links={donationsLinks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
