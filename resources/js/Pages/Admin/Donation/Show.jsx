import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function List({module, donation}) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Carousel navigation functions
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === donation.files.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? donation.files.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
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
                            {/* Left Column - Media Carousel */}
                            <div className="lg:col-span-2">
                                {/* Main Carousel */}
                                {donation.files && donation.files.length > 0 && (
                                    <div className="relative">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Media Gallery</h3>

                                        {/* Main Carousel Container */}
                                        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                                            {/* Navigation Arrows */}
                                            {donation.files.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevSlide}
                                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                                                    >
                                                        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={nextSlide}
                                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                                                    >
                                                        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                                                    </button>
                                                </>
                                            )}

                                            {/* Current Slide Indicator */}
                                            {donation.files.length > 1 && (
                                                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm z-10">
                                                    {currentIndex + 1} / {donation.files.length}
                                                </div>
                                            )}

                                            {/* Featured Badge */}
                                            {donation.files[currentIndex]?.is_featured === 1 && (
                                                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
                                                    Featured
                                                </span>
                                            )}

                                            {/* Main Media Display */}
                                            <div className="aspect-video flex items-center justify-center">
                                                {donation.files[currentIndex]?.file_type === 'image' ? (
                                                    <img
                                                        src={`/storage/${donation.files[currentIndex].file_path}`}
                                                        alt={`${donation.title} - Image ${currentIndex + 1}`}
                                                        className="w-full h-full object-contain max-h-96"
                                                    />
                                                ) : (
                                                    <video
                                                        controls
                                                        className="w-full h-full max-h-96"
                                                    >
                                                        <source
                                                            src={`/storage/${donation.files[currentIndex].file_path}`}
                                                            type={donation.files[currentIndex].mime_type}
                                                        />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                )}
                                            </div>
                                        </div>

                                        {/* Thumbnail Navigation */}
                                        {donation.files.length > 1 && (
                                            <div className="mt-4">
                                                <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                                                    {donation.files.map((file, index) => (
                                                        <button
                                                            key={file.id}
                                                            onClick={() => goToSlide(index)}
                                                            className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                                                                index === currentIndex
                                                                    ? 'border-blue-500 ring-2 ring-blue-200'
                                                                    : 'border-gray-300 hover:border-gray-400'
                                                            }`}
                                                        >
                                                            {file.file_type === 'image' ? (
                                                                <img
                                                                    src={`/storage/${file.file_path}`}
                                                                    alt={`Thumbnail ${index + 1}`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                                    <div className="text-center">
                                                                        <div className="text-lg">🎥</div>
                                                                        <span className="text-xs text-gray-600">Video</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Download/View Full Button */}
                                        <div className="mt-4 text-center flex justify-center">
                                            <a
                                                href={`/storage/${donation.files[currentIndex].file_path}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded-md text-sm font-medium transition-colors"
                                            >
                                                {donation.files[currentIndex].file_type === 'image' ? 'View Full Image' : 'Download Video'}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {/* Fallback if no files */}
                                {(!donation.files || donation.files.length === 0) && (
                                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <div className="text-4xl mb-2">📷</div>
                                            <p>No media available</p>
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