import React, {useState} from 'react';
import {Head, Link, router, usePage} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faChevronLeft,
    faChevronRight,
    faEye,
    faHandHoldingHand,
    faStar,
    faHeart,
    faMapMarkerAlt,
    faUserCircle,
    faCalendarAlt,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/Components/Donation/Hero.jsx";
import UserProfileModal from '@/Components/Common/UserProfileModal.jsx';
import {Button} from "@headlessui/react";

const Show = ({wish, module}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const user = usePage().props.auth.user;
    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800';
            case 'reserved':
                return 'bg-primary/10 text-primary';
            case 'donated':
                return 'bg-gray-100 text-gray-800';
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

    // Function to open modal
    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleFulfilStatus = (fulfilmentId) => {
        router.get(route('wish.fulfill.status.change'), {
            'fulfilment_id': fulfilmentId,
            'status': 'accepted_by_wisher',
        })
    };

    return (
        <GuestLayout>
            <Head title="Item Detail"/>
            <Hero
                title = {wish.title}
                subTitle = {wish.description}
            />
            <main className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Card Body */}
                    <div className="px-1 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="border-t border-gray-200">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 sm:p-6">
                                    {/* Left Column - Media Carousel */}
                                    <div className="lg:col-span-2">
                                        {/* Main Carousel */}
                                        {wish.files && wish.files.length > 0 && (
                                            <div className="relative">
                                                <h3 className="text-lg font-medium text-accent mb-4">Item: {wish.title}</h3>

                                                {/* Main Carousel Container */}
                                                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                                    {/* Navigation Arrows */}
                                                    {wish.files.length > 1 && (
                                                        <>
                                                            <button
                                                                onClick={prevSlide}
                                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-3 rounded-full hover:bg-primary shadow-lg hover:shadow-xl transition-all z-10"
                                                            >
                                                                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={nextSlide}
                                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-3 rounded-full hover:bg-primary shadow-lg hover:shadow-xl transition-all z-10"
                                                            >
                                                                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}

                                                    {/* Current Slide Indicator */}
                                                    {wish.files.length > 1 && (
                                                        <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1.5 rounded-lg text-sm z-10 font-medium shadow-md">
                                                            {currentIndex + 1} / {wish.files.length}
                                                        </div>
                                                    )}

                                                    {/* Featured Badge */}
                                                    {wish.files[currentIndex]?.is_featured === 1 && (
                                                        <span className="absolute top-4 right-4 bg-secondary text-accent text-xs px-3 py-1.5 rounded-lg z-10 font-bold shadow-md">
                                                            Featured
                                                        </span>
                                                    )}

                                                    {/* Action Buttons Container */}
                                                    <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                                                        <a
                                                            href={`/storage/${wish.files[currentIndex].file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors shadow-md border border-primary/20"
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
                                                                className="w-full h-full max-h-96 rounded-lg"
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

                                                {/* Thumbnail Navigation */}
                                                {wish.files.length > 1 && (
                                                    <div className="mt-4 hidden lg:block">
                                                        <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                                                            {wish.files.map((file, index) => (
                                                                <button
                                                                    key={file.id}
                                                                    onClick={() => goToSlide(index)}
                                                                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                                                                        index === currentIndex
                                                                            ? 'border-primary ring-2 ring-primary/20 shadow-md'
                                                                            : 'border-gray-300 hover:border-primary/50 hover:shadow-sm'
                                                                    }`}
                                                                >
                                                                    {file.file_type === 'image' ? (
                                                                        <img
                                                                            src={`/storage/${file.file_path}`}
                                                                            alt={`Thumbnail ${index + 1}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                                                                            <div className="text-center">
                                                                                <div className="text-lg text-primary">🎥</div>
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
                                            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                                                <div className="text-center text-gray-500">
                                                    <div className="text-4xl mb-2">📷</div>
                                                    <p className="text-gray-600">No media available</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column - Wish Details */}
                                    <div className="space-y-6">
                                        {/* Basic Information */}
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                                            <h3 className="text-lg font-medium text-accent mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faTag} className="text-primary mr-2" />
                                                Basic Information
                                            </h3>
                                            <dl className="space-y-4">
                                                {wish?.distance &&
                                                    <div className="flex items-start space-x-3">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">Distance:</dt>
                                                            <dd className="text-sm text-accent font-medium">
                                                                {wish.distance} km away from you
                                                            </dd>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="flex items-start space-x-3">
                                                    <FontAwesomeIcon icon={faTag} className="text-primary mt-1" />
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500">Category:</dt>
                                                        <dd className="text-sm text-accent font-medium">
                                                            {wish.category?.name || 'N/A'}
                                                        </dd>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <FontAwesomeIcon icon={faUserCircle} className="text-secondary mt-1" />
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500">Age Range:</dt>
                                                        <dd className="text-sm text-accent font-medium capitalize">
                                                            {wish.age_range} years
                                                        </dd>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <FontAwesomeIcon icon={faStar} className="text-primary mt-1" />
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500">Status:</dt>
                                                        <dd className="text-sm">
                                                            <span
                                                                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                                {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                                            </span>
                                                        </dd>
                                                    </div>
                                                </div>
                                                {wish.organization && (
                                                    <div className="flex items-start space-x-3">
                                                        <FontAwesomeIcon icon={faHeart} className="text-primary mt-1" />
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500">Organization:</dt>
                                                            <dd className="text-sm text-accent font-medium">
                                                                {wish.organization.name}
                                                            </dd>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="flex items-start space-x-3">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-secondary mt-1" />
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500">Created:</dt>
                                                        <dd className="text-sm text-accent font-medium">
                                                            {wish.created_at}
                                                        </dd>
                                                    </div>
                                                </div>
                                            </dl>
                                        </div>

                                        {/* Wisher Info */}
                                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 shadow-sm">
                                            <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3">Wish Creator</p>
                                            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => openModal(wish.user)}>
                                                {/* User Avatar - Clickable */}
                                                <div className="relative flex-shrink-0">
                                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark p-0.5 group-hover:from-primary-dark group-hover:to-primary transition-all duration-200">
                                                        <div className="w-full h-full bg-white rounded-full p-1">
                                                            {wish.user.image ? (
                                                                <img
                                                                    src={`/storage/${wish.user.image}`}
                                                                    alt={wish.user.name}
                                                                    className="w-full h-full object-cover rounded-full"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center">
                                                                    <span className="text-primary font-bold text-xl">
                                                                        {wish.user.name.charAt(0).toUpperCase()}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {/* Online indicator */}
                                                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                                                </div>

                                                {/* User Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors duration-200 truncate">
                                                        {wish.user.name}
                                                    </h3>
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        {wish?.distance ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                                📍 {wish.distance} km away
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                                                                👶 Age: {wish.age_range} yrs
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Chevron Icon */}
                                                <div className="text-gray-400 group-hover:text-primary transition-colors duration-200">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                                            <h3 className="text-lg font-medium text-accent mb-3">Description</h3>
                                            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                                                {wish.description || 'No description provided.'}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="space-y-3">
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.history.back();
                                                }}
                                                className="w-full inline-flex justify-center items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium py-3 px-4 rounded-xl text-sm transition-all duration-300 hover:shadow-lg"
                                            >
                                                <FontAwesomeIcon icon={faBackward} className="mr-2"/> Back to Wishes
                                            </Link>

                                            {wish.user_id === user?.id && (
                                                wish.latest_fulfillment?.status === 'requested' ? (
                                                    <Button
                                                        onClick={() => handleFulfilStatus(wish.latest_fulfillment.id)}
                                                        className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <FontAwesomeIcon icon={faHandHoldingHand} className="mr-2" /> Accept Contributor Fulfilment Request
                                                    </Button>
                                                ) : (
                                                    <Link
                                                        href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})}
                                                        className="w-full inline-flex justify-center items-center px-4 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <FontAwesomeIcon icon={faStar} className="mr-2" /> Fulfilment Detail
                                                    </Link>
                                                )
                                            )}
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
                dataType='wish'
                additionalData={wish}
            />
        </GuestLayout>
    );
};

export default Show;
