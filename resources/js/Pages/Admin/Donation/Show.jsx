import { confirmDialog } from '@/Components/UI/ConfirmDialog';
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
    faCheck, faArrowLeft, faStar, faArrowRightArrowLeft, faGifts
} from "@fortawesome/free-solid-svg-icons";
import Form from "@/Pages/Admin/Donation/Form.jsx";
import {Button} from "@headlessui/react";
import {getFulfilmentStatus, textLimit} from "@/utils.jsx";

export default function List({module, donation, wishes}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800';
            case 'reserved':
                return 'bg-yellow-100 text-yellow-800';
            case 'donated':
                return 'bg-slate-100 text-slate-800';
            default:
                return 'bg-slate-100 text-slate-800';
        }
    };

    // Helper function to get condition badge color
    const getConditionColor = (condition) => {
        switch (condition?.toLowerCase()) {
            case 'new':
                return 'bg-primary-100 text-primary-800';
            case 'like new':
                return 'bg-green-100 text-green-800';
            case 'good':
                return 'bg-yellow-100 text-yellow-800';
            case 'fair':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-slate-100 text-slate-800';
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

    const handleDelete = async (fileId) => {
        if (await confirmDialog({ title: 'Delete file', message: 'Are you sure want to delete?', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('donations.file.delete', fileId), {
                preserveScroll: true,
            });
        }
    };

    const handleFeatureImage = async (fileId) => {
        if (await confirmDialog({ title: 'Feature file', message: 'Are you sure want to make feature file?', confirmLabel: 'Make featured' })) {
            router.get(route('donations.file.feature', fileId), {
                preserveScroll: true,
            });
        }
    };

    const handleItemDelete = async (itemId) => {
        if (await confirmDialog({ title: 'Delete item', message: 'Are you sure want to delete?', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('donations.destroy', itemId), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Gift List"/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 sm:px-8 sm:py-10">
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
                                        Item: {donation.title}
                                    </h1>
                                    <p className="text-primary-100 text-sm mt-1">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-1 ${getStatusColor(donation.status)}`}>
                                            {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                        </span>
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-1 ${getConditionColor(donation.item_condition)}`}>
                                            {donation.item_condition}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={route('donations.index')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faList} className="text-primary-600" />
                                <span>View {module} List</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="border-t border-slate-200">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                                    {/* Left Column - Media Carousel */}
                                    <div className="lg:col-span-2">
                                        {/* Main Carousel */}
                                        {donation.files && donation.files.length > 0 && (
                                            <div className="relative">
                                                <h3 className="text-lg font-medium text-slate-900 mb-4">Media Gallery</h3>

                                                {/* Main Carousel Container */}
                                                <div className="relative bg-slate-100 rounded-lg overflow-hidden">
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
                                                        <span className="absolute top-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded z-10">
                                                    Featured
                                                </span>
                                                    )}

                                                    {/* Action Buttons Container - Positioned at bottom right */}
                                                    <div className="absolute bottom-3 right-3 flex space-x-2 z-10">
                                                        {/*{! donation.files[currentIndex].is_featured &&*/}
                                                        {!donation.latest_fulfillment && (
                                                            <>
                                                                <button
                                                                    title={donation.files[currentIndex].file_type === 'image' ? 'Make Feature Image' : 'Make Feature Video'}
                                                                    onClick={() => handleFeatureImage(donation.files[currentIndex].id)}
                                                                    className="inline-flex items-center justify-center w-10 h-10 bg-secondary-100 hover:bg-secondary-200 text-secondary-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                                >
                                                                    <FontAwesomeIcon icon={faCheck}
                                                                                     className="w-4 h-4"/>
                                                                </button>
                                                                <button
                                                                    title={donation.files[currentIndex].file_type === 'image' ? 'Delete Image' : 'Delete Video'}
                                                                    onClick={() => handleDelete(donation.files[currentIndex].id)}
                                                                    className="inline-flex items-center justify-center w-10 h-10 bg-red-200 hover:bg-red-300 text-red-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash}
                                                                                     className="w-4 h-4"/>
                                                                </button>
                                                            </>
                                                        )}
                                                        {/*}*/}
                                                        <a
                                                            href={`/storage/${donation.files[currentIndex].file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center w-10 h-10 bg-primary-200 hover:bg-primary-300 text-primary-800 rounded-full text-sm font-medium transition-colors shadow-md"
                                                            title={donation.files[currentIndex].file_type === 'image' ? 'View Full Image' : 'Download Video'}
                                                        >
                                                            <FontAwesomeIcon icon={faEye} className="w-4 h-4"/>
                                                        </a>

                                                    </div>

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

                                                {/* Thumbnail Navigation - Hidden on mobile, visible on desktop */}
                                                {donation.files.length > 1 && (
                                                    <div className="mt-4 hidden lg:block">
                                                        <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                                                            {donation.files.map((file, index) => (
                                                                <button
                                                                    key={file.id}
                                                                    onClick={() => goToSlide(index)}
                                                                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                                                                        index === currentIndex
                                                                            ? 'border-primary-500 ring-2 ring-primary-200'
                                                                            : 'border-slate-300 hover:border-slate-400'
                                                                    }`}
                                                                >
                                                                    {file.file_type === 'image' ? (
                                                                        <img
                                                                            src={`/storage/${file.file_path}`}
                                                                            alt={`Thumbnail ${index + 1}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                                                            <div className="text-center">
                                                                                <div className="text-lg">🎥</div>
                                                                                <span className="text-xs text-slate-600">Video</span>
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
                                        {(!donation.files || donation.files.length === 0) && (
                                            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                                                <div className="text-center text-slate-500">
                                                    <div className="text-4xl mb-2">📷</div>
                                                    <p>No media available</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column - Donation Details */}
                                    <div className="space-y-6">
                                        {/* Basic Information */}
                                        <div className="bg-slate-50 rounded-lg p-4">
                                            <h3 className="text-lg font-medium text-slate-900 mb-4">Basic Information</h3>
                                            <dl className="space-y-3">
                                                <div>
                                                    <dt className="text-sm font-medium text-slate-500">Category:</dt>
                                                    <dd className="text-sm text-slate-900">
                                                        {donation.category?.name || 'N/A'}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-slate-500">Item Condition:</dt>
                                                    <dd className="text-sm text-slate-900 capitalize">
                                                        {donation.item_condition}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-slate-500">Status:</dt>
                                                    <dd className="text-sm">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                    {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                                </span>
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-slate-500">Posted By:</dt>
                                                    <dd className="text-sm text-slate-900">
                                                        {donation.user?.name || 'Anonymous'}
                                                    </dd>
                                                </div>
                                                {donation.organization && (
                                                    <div>
                                                        <dt className="text-sm font-medium text-slate-500">Organization:</dt>
                                                        <dd className="text-sm text-slate-900">
                                                            {donation.organization.name}
                                                        </dd>
                                                    </div>
                                                )}
                                                <div>
                                                    <dt className="text-sm font-medium text-slate-500">Created:</dt>
                                                    <dd className="text-sm text-slate-900">
                                                        {donation.created_at}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        {/* Tags */}
                                        {donation.auto_tags && donation.auto_tags.length > 0 && (
                                            <div className="bg-slate-50 rounded-lg p-4">
                                                <h3 className="text-lg font-medium text-slate-900 mb-3">Tags</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {donation.auto_tags && (
                                                        Array.isArray(donation.auto_tags)
                                                            ? donation.auto_tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                                            {tag}
                                                        </span>
                                                            ))
                                                            : donation.auto_tags.split(',').map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2"
                                                                >
                                                            {tag.trim()}
                                                        </span>
                                                            ))
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Description */}
                                        <div className="bg-slate-50 rounded-lg p-4">
                                            <h3 className="text-lg font-medium text-slate-900 mb-3">Description</h3>
                                            <p className="text-sm text-slate-700 whitespace-pre-line">
                                                {donation.description || 'No description provided.'}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 text-center">
                                            {/* Back Button */}
                                            <button
                                                type="button"
                                                onClick={() => window.history.back()}
                                                className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                                    <span>Back</span>
                                                </div>
                                            </button>
                                            { !donation.latest_fulfillment && (
                                                <>
                                                    <Button
                                                        onClick={() => handleItemDelete(donation.id)}
                                                        className="flex-1 bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                                        <FontAwesomeIcon icon={faTrash}/> Delete
                                                    </Button>
                                                    <Link
                                                        href={route('donations.edit',donation.id)}
                                                        className="flex-1 bg-secondary-300 hover:bg-secondary-400 text-slate-900 font-medium py-2 px-4 rounded-md text-sm transition-colors">
                                                        <FontAwesomeIcon icon={faEdit}/> Edit
                                                    </Link>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                </div>
                                {wishes.length > 0 && (
                                    <div className="grid grid-cols-1 gap-6 p-6">
                                        <h3>Below is the wish list related with your gift. Choose anyone you like.</h3>
                                        <div className="overflow-x-auto bg-white shadow rounded-lg px-1 py-2">
                                            <table className="wish-table w-full">
                                                    <thead className="bg-slate-50">
                                                    <tr>
                                                        <th className="text-left px-6 py-4 border-b-2 border-slate-300 font-semibold text-slate-700">Item
                                                            Info.
                                                        </th>
                                                        <th className="text-left px-6 py-4 border-b-2 border-slate-300 font-semibold text-slate-700">Wisher</th>
                                                        <th className="text-left px-6 py-4 border-b-2 border-slate-300 font-semibold text-slate-700">Distance</th>
                                                        <th className="text-center px-6 py-4 border-b-2 border-slate-300 font-semibold text-slate-700">Status</th>
                                                        <th className="text-center px-6 py-4 border-b-2 border-slate-300 font-semibold text-slate-700">Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-200">
                                                        {wishes.map((wish, index) => (
                                                                <tr key={wish.id}
                                                                    className="hover:bg-slate-50 transition-colors">
                                                                    <td className="p-6 border-b border-slate-100">
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div
                                                                                    className="h-16 w-16 bg-primary-100 rounded-md flex items-center justify-center mr-4">
                                                                                    {wish.featured_image?.file_path ? (
                                                                                        <img
                                                                                            src={`/storage/${wish.featured_image.file_path}`}
                                                                                            alt={wish.title}
                                                                                            className="w-full h-full object-cover"
                                                                                        />
                                                                                    ) : (
                                                                                        <div
                                                                                            className="w-full h-full bg-slate-200 flex items-center justify-center overflow-hidden">
                                                                                            <FontAwesomeIcon icon={faStar}
                                                                                                             className="text-slate-400"/>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                                <div>
                                                                                    <h3 className="text-lg font-medium text-slate-900">{wish.title}</h3>
                                                                                    <p className="text-sm text-slate-500">Age
                                                                                        range: {wish.age_range}, {textLimit(wish.description, 10)}</p>
                                                                                    <div className="mt-1 flex items-center">
                                                                                <span
                                                                                    className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wish.status === 'fulfilled' ? 'bg-primary-100 text-primary-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                                    {wish.status}
                                                                                </span>
                                                                                        <span
                                                                                            className="ml-2 bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                                    {wish.created_at}
                                                                                </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </td>
                                                                    <td className="p-6 border-b border-slate-100">
                                                                        <div className="flex items-center">
                                                                            {/* Avatar Container - More elegant design */}
                                                                            <div className="relative group">
                                                                                {/* Image Container with enhanced styling */}
                                                                                <div
                                                                                    className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-100 flex items-center justify-center mr-5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-white group-hover:scale-105">
                                                                                    {wish.user.image ? (
                                                                                        <img
                                                                                            src={`/storage/${wish.user.image}`}
                                                                                            alt={wish.user.name}
                                                                                            className="w-full h-full object-cover"
                                                                                        />
                                                                                    ) : (
                                                                                        <div
                                                                                            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-50">
                                                                                            <FontAwesomeIcon
                                                                                                icon={faStar}
                                                                                                className="text-2xl text-gradient-to-r from-primary-400 to-primary-500"
                                                                                            />
                                                                                        </div>
                                                                                    )}
                                                                                </div>

                                                                                {/* Optional subtle glow effect on hover */}
                                                                                <div
                                                                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-200 to-primary-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                                                                            </div>

                                                                            {/* Name with enhanced typography */}
                                                                            <div>
                                                                                <h3 className="text-xl font-semibold text-slate-800 tracking-tight">
                                                                                    {wish.user.name}
                                                                                </h3>
                                                                                {/* Optional subtitle/tagline */}
                                                                                <p className="text-sm text-slate-500 mt-1 flex items-center">
                                                                                    <FontAwesomeIcon icon={faStar} className="text-red-400 mr-2 text-xs"/>
                                                                                    Wish Maker
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-6 border-b border-slate-100 text-slate-900 font-medium">
                                                                        {wish.distance ? `${wish.distance + 'km'}` : 'n/a'}
                                                                    </td>
                                                                    <td className="p-6 border-b border-slate-100">
                                                                        <div className="flex flex-col items-center">
                                                                            <div className="mt-2">
                                                                                {wish.latest_fulfillment ? (
                                                                                    <span
                                                                                        className="inline-flex items-center px-3 py-1 border border-primary-500 rounded-md text-sm text-white bg-primary-500">
                                                                                  {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                                                </span>
                                                                                ) : (
                                                                                    <span
                                                                                        className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wish.status === 'fulfilled' ? 'bg-primary-100 text-primary-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                                    {wish.status}
                                                                                </span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-6 border-b border-slate-100">
                                                                        <div className="flex flex-col items-end">
                                                                            <div className="mt-2">
                                                                                {wish.status == 'Fulfilled' ? (
                                                                                    <Link
                                                                                        href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})}
                                                                                    >
                                                                                    <span
                                                                                        className="inline-flex items-center px-4 py-2 bg-secondary-300 text-slate-900 text-sm font-semibold rounded-lg hover:bg-secondary-400 transition-colors duration-200"
                                                                                        title="Fulfillment Detail"
                                                                                    >
                                                                                        <FontAwesomeIcon
                                                                                            icon={faArrowRightArrowLeft}
                                                                                            size="md"/>
                                                                                    </span>
                                                                                    </Link>
                                                                                ) : !wish.latest_fulfillment ? (
                                                                                    <Link
                                                                                        href={route('wish.fulfill.detail', {
                                                                                            wishId: wish.id,
                                                                                            donationId: donation.id,
                                                                                        })}
                                                                                        className="inline-flex items-center px-4 py-2 bg-secondary-300 text-slate-900 text-sm font-semibold rounded-lg hover:bg-secondary-400 transition-colors duration-200"
                                                                                        title="Fulfill Wish"
                                                                                    >
                                                                                        <FontAwesomeIcon icon={faGifts}
                                                                                                         size="md"/>
                                                                                    </Link>
                                                                                ) : wish.latest_fulfillment?.status ? (
                                                                                    <Link
                                                                                        href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})}
                                                                                    >
                                                                                    <span
                                                                                        className="inline-flex items-center px-4 py-2 bg-secondary-300 text-slate-900 text-sm font-semibold rounded-lg hover:bg-secondary-400 transition-colors duration-200"
                                                                                        title="Fulfillment Detail"
                                                                                    >
                                                                                        <FontAwesomeIcon
                                                                                            icon={faArrowRightArrowLeft}
                                                                                            size="md"/>
                                                                                    </span>
                                                                                    </Link>
                                                                                ) : null

                                                                                }
                                                                                <Link
                                                                                    href={route('wish.show', wish.id)}
                                                                                    className="ml-2 inline-flex items-center px-2 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-500 transition-colors duration-200"
                                                                                    title="View Detail"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faEye}
                                                                                                     size="md"/>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
