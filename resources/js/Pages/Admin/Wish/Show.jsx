import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router} from '@inertiajs/react';
import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrash,
    faChevronLeft,
    faChevronRight,
    faEye,
    faGift,
    faList,
    faStar, faCheck, faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Form from "@/Pages/Admin/Donation/Form.jsx";
import {Button} from "@headlessui/react";

export default function Show({module, wish, latestFulfillment}) {
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
            prevIndex === wish.files.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? wish.files.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleDelete = (fileId) => {
        if (confirm('Are you sure want to delete?')) {
            router.delete(route('wishes.file.delete', fileId), {
                preserveScroll: true,
            });
        }
    };

    const handleFeatureImage = (fileId) => {
        if (confirm('Are you sure want to make feature file?')) {
            router.get(route('wishes.file.feature', fileId), {
                preserveScroll: true,
            });
        }
    };

    const handleItemDelete = (itemId) => {
        if (confirm('Are you sure want to delete?')) {
            router.delete(route('wishes.destroy', itemId), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Donation List"/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-700 px-6 py-8 sm:px-8 sm:py-10">
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
                                        Item: {wish.title}
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-1 ${getStatusColor(wish.status)}`}>
                                            {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={route('wishes.index')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faList} className="text-blue-600" />
                                <span>View {module} List</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="border-t border-gray-200">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                                    {/* Left Column - Media Carousel */}
                                    <div className="lg:col-span-2">
                                        {/* Main Carousel */}
                                        {wish.files && wish.files.length > 0 && (
                                            <div className="relative">
                                                <h3 className="text-lg font-medium text-gray-900 mb-4">Media Gallery</h3>

                                                {/* Main Carousel Container */}
                                                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                                                    {/* Navigation Arrows */}
                                                    {wish.files.length > 1 && (
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
                                                    {wish.files.length > 1 && (
                                                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm z-10">
                                                            {currentIndex + 1} / {wish.files.length}
                                                        </div>
                                                    )}

                                                    {/* Featured Badge */}
                                                    {wish.files[currentIndex]?.is_featured == 1 && (
                                                        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
                                                    Featured
                                                </span>
                                                    )}

                                                    {/* Action Buttons Container - Positioned at bottom right */}
                                                    <div className="absolute bottom-3 right-3 flex space-x-2 z-10">
                                                        {/*{wish.files[currentIndex].is_featured == 0 &&*/}
                                                        {!wish.latest_fulfillment && (
                                                            <>
                                                                <button
                                                                    title={wish.files[currentIndex].file_type === 'image' ? 'Make Feature Image' : 'Make Feature Video'}
                                                                    onClick={() => handleFeatureImage(wish.files[currentIndex].id)}
                                                                    className="inline-flex items-center justify-center w-10 h-10 bg-yellow-200 hover:bg-yellow-300 text-yellow-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                                >
                                                                    <FontAwesomeIcon icon={faCheck}
                                                                                     className="w-4 h-4"/>
                                                                </button>
                                                                <button
                                                                    title={wish.files[currentIndex].file_type === 'image' ? 'Delete Image' : 'Delete Video'}
                                                                    onClick={() => handleDelete(wish.files[currentIndex].id)}
                                                                    className="inline-flex items-center justify-center w-10 h-10 bg-red-200 hover:bg-red-300 text-red-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash}
                                                                                     className="w-4 h-4"/>
                                                                </button>
                                                            </>
                                                        )}
                                                        {/*}*/}
                                                        <a
                                                            href={`/storage/${wish.files[currentIndex].file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center w-10 h-10 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                            title={wish.files[currentIndex].file_type === 'image' ? 'View Full Image' : 'Download Video'}
                                                        >
                                                            <FontAwesomeIcon icon={faEye} className="w-4 h-4"/>
                                                        </a>

                                                    </div>

                                                    {/* Main Media Display */}
                                                    <div className="aspect-video flex items-center justify-center">
                                                        {wish.files[currentIndex]?.file_type === 'image' ? (
                                                            <img
                                                                src={`/storage/${wish.files[currentIndex].file_path}`}
                                                                alt={`${wish.title} - Image ${currentIndex + 1}`}
                                                                className="w-full h-full object-contain max-h-96"
                                                            />
                                                        ) : (
                                                            <video
                                                                controls
                                                                className="w-full h-full max-h-96"
                                                            >
                                                                <source
                                                                    src={`/storage/${wish.files[currentIndex].file_path}`}
                                                                    type={wish.files[currentIndex].mime_type}
                                                                />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Thumbnail Navigation - Hidden on mobile, visible on desktop */}
                                                {wish.files.length > 1 && (
                                                    <div className="mt-4 hidden lg:block">
                                                        <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                                                            {wish.files.map((file, index) => (
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
                                            </div>
                                        )}

                                        {/* Fallback if no files */}
                                        {(!wish.files || wish.files.length === 0) && (
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
                                                        {wish.category?.name || 'N/A'}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Status:</dt>
                                                    <dd className="text-sm">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                    {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                                </span>
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Posted By:</dt>
                                                    <dd className="text-sm text-gray-900">
                                                        {wish.user?.name || 'Anonymous'}
                                                    </dd>
                                                </div>
                                                {wish?.create_by && (
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500">Organization:</dt>
                                                        <dd className="text-sm text-gray-900">
                                                            {wish?.create_by?.name}
                                                        </dd>
                                                    </div>
                                                )}
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Wisher Age Range:</dt>
                                                    <dd className="text-sm text-gray-900">
                                                        {wish.age_range} Years
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500">Created:</dt>
                                                    <dd className="text-sm text-gray-900">
                                                        {wish.created_at}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        {/* Description */}
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
                                            <p className="text-sm text-gray-700 whitespace-pre-line">
                                                {wish.description || 'No description provided.'}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 text-center">
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
                                            { !wish.latest_fulfillment && (
                                                <>
                                                    <Button
                                                        onClick={() => handleItemDelete(wish.id)}
                                                        className="flex-1 bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                                        <FontAwesomeIcon icon={faTrash}/> Delete
                                                    </Button>
                                                    <Link
                                                        href={route('wishes.edit',wish.id)}
                                                        className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                                        <FontAwesomeIcon icon={faEdit}/> Edit
                                                    </Link>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
