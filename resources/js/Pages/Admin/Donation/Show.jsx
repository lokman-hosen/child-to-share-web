import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function List({module, donation}) {

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

    // Helper function to get condition badge color
    const getConditionColor = (condition) => {
        switch (condition?.toLowerCase()) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'like new':
                return 'bg-green-100 text-green-800';
            case 'good':
                return 'bg-yellow-100 text-yellow-800';
            case 'fair':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Donation List"/>
            <div className="px-10 py-8">
                {/* Breadcrumb */}
                <nav className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href={route('donations.index')} className="text-gray-500 hover:text-gray-700">
                                {module}
                            </Link>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-700">{donation.title}</li>
                    </ol>
                </nav>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{donation.title}</h1>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Donation details and information
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(donation.status)}`}>
                                {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                            </span>
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(donation.item_condition)}`}>
                                {donation.item_condition}
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                            {/* Left Column - Media Gallery */}
                            <div className="lg:col-span-2">
                                {/* Featured Image */}
                                {donation.featured_image && (
                                    <div className="mb-6">
                                        <img
                                            src={`/storage/${donation.featured_image.file_path}`}
                                            alt={donation.title}
                                            className="w-full h-96 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                )}

                                {/* Media Gallery */}
                                {donation.files && donation.files.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Media Gallery</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {donation.files.map((file, index) => (
                                                <div key={file.id} className="relative group mb-2">
                                                    {file.file_type === 'image' ? (
                                                        <a
                                                            href={`/storage/${file.file_path}`}
                                                            target = "_blank"
                                                        >
                                                            <img
                                                                src={`/storage/${file.file_path}`}
                                                                alt={`${donation.title} - Image ${index + 1}`}
                                                                className="w-full object-cover rounded-lg shadow-md cursor-pointer hover:shadow-md transition-shadow"
                                                            />
                                                        </a>
                                                    ) : (
                                                        <div
                                                            className="w-full object-cover bg-gray-100 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
                                                            <div className="text-center">
                                                                <video width="500" height="400" controls>
                                                                    <source src={`/storage/${file.file_path}`} type="video/mp4"/>
                                                                    <source src={`/storage/${file.file_path}`} type="video/ogg"/>
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {file.is_featured === 1 && (
                                                        <span
                                                            className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Donation Details */}
                            <div className="space-y-6">
                                {/* Basic Information */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                                    <dl className="space-y-3">
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Category:</dt>
                                            <dd className="text-sm text-gray-900">
                                                {donation.category?.name || 'N/A'}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Item Condition:</dt>
                                            <dd className="text-sm text-gray-900 capitalize">
                                                {donation.item_condition}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Status:</dt>
                                            <dd className="text-sm">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                    {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                                </span>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Posted By:</dt>
                                            <dd className="text-sm text-gray-900">
                                                {donation.user?.name || 'Anonymous'}
                                            </dd>
                                        </div>
                                        {donation.organization && (
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Organization:</dt>
                                                <dd className="text-sm text-gray-900">
                                                    {donation.organization.name}
                                                </dd>
                                            </div>
                                        )}
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Created:</dt>
                                            <dd className="text-sm text-gray-900">
                                                {donation.created_at}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                {/* Tags */}
                                {donation.auto_tags && donation.auto_tags.length > 0 && (
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="text-lg font-medium text-gray-900 mb-3">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {donation.auto_tags && (
                                                Array.isArray(donation.auto_tags)
                                                    ? donation.auto_tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                                            {tag}
                                                        </span>
                                                    ))
                                                    : donation.auto_tags.split(',').map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2"
                                                        >
                                                            {tag.trim()}
                                                        </span>
                                                    ))
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">
                                        {donation.description || 'No description provided.'}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 text-center">
                                    {donation.status === 'available' && (
                                        <button
                                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                           <FontAwesomeIcon icon={faTrash}/> Delete Item
                                        </button>
                                    )}
                                    <a
                                        href={route('donations.edit',donation.id)}
                                        className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                        <FontAwesomeIcon icon={faEdit}/> Edit Item
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
