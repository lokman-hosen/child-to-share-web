import React, {useState} from 'react';
import {Head, Link} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faChevronLeft,
    faChevronRight,
    faEdit,
    faEye,
    faGift,
    faList,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/Components/Donation/Hero.jsx";
import UserProfileModal from "@/Components/Common/UserProfileModal.jsx";

const Show = ({donation, module}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

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

    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };


    return (
        <GuestLayout>
            <Head title="Item Detail"/>
            <Hero
                title = {donation.title}
                subTitle = {donation.description}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="border-t border-gray-200">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                                    {/* Left Column - Media Carousel */}
                                    <div className="lg:col-span-2">
                                        {/* Main Carousel */}
                                        {donation.files && donation.files.length > 0 && (
                                            <div className="relative">
                                                <h3 className="text-lg font-medium text-gray-900 mb-4">Item: {donation.title}</h3>

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

                                                    {/* Action Buttons Container - Positioned at bottom right */}
                                                    <div className="absolute bottom-3 right-3 flex space-x-2 z-10">
                                                        <a
                                                            href={`/storage/${donation.files[currentIndex].file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center w-10 h-10 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded-full text-sm font-medium transition-colors shadow-md"
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

                                        {/* Wisher Info */}
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-sm">
                                            <p className="text-xs font-medium text-blue-800 uppercase tracking-wide mb-3">Donor</p>
                                            <div className="flex items-center space-x-4">
                                                    {/* User Avatar */}
                                                    <div className="relative flex-shrink-0">
                                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 p-0.5 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-200">
                                                            <div className="w-full h-full bg-white rounded-full p-1">
                                                                {donation.user.image ? (
                                                                    <img
                                                                        src={`/storage/${donation.user.image}`}
                                                                        alt={donation.user.name}
                                                                        className="w-full h-full object-cover rounded-full"
                                                                    />
                                                                ) : (
                                                                    <img
                                                                        src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                                        alt={donation.user.name}
                                                                        className="w-full h-full object-cover rounded-full"
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* Online indicator */}
                                                        <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                                                    </div>

                                                    {/* User Info */}
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                                                            {donation.user.name}
                                                        </h3>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            {donation?.distance ? (
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                    📍 {donation.distance} km away
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                                     Distance: "n/a"
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Chevron Icon */}
                                                <button
                                                    onClick={() => openModal(donation.user)}
                                                    className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
                                                >
                                                    <div
                                                        className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                             viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth={2} d="M9 5l7 7-7 7"/>
                                                        </svg>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
                                            <p className="text-sm text-gray-700 whitespace-pre-line">
                                                {donation.description || 'No description provided.'}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 text-center">
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.history.back();
                                                }}
                                                className="flex-1 bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
                                            >
                                                <FontAwesomeIcon icon={faBackward}/> Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* User Profile Modal */}
            <UserProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                user={selectedUser}
                dataType='donation'
                additionalData={donation}
            />
        </GuestLayout>
    );
};

export default Show;
