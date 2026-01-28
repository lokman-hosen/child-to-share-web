// Components/Common/UserProfileModal.jsx
import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import {Link, usePage} from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faChild,
    faUser,
    faHeart,
    faStar,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const UserProfileModal = ({isOpen, onClose, user, dataType, additionalData}) => {
    const loginUser = usePage().props.auth.user;

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
                    {/* Header with Larger Square Image */}
                    <div className="relative">
                        {/* Background Gradient */}
                        <div className="h-40 bg-gradient-to-r from-primary via-primary/90 to-primary-dark"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
                        >
                            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                        </button>

                        {/* Large Square User Image */}
                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                            <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary-dark p-2 shadow-2xl rounded-2xl">
                                <div className="w-full h-full bg-white rounded-xl overflow-hidden border-4 border-white shadow-lg">
                                    {user?.image ? (
                                        <img
                                            src={`/storage/${user.image}`}
                                            alt={user.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                                            <span className="text-primary font-bold text-4xl">
                                                {user?.name?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Adjusted padding for larger image */}
                    <div className="pt-20 pb-6 px-6">
                        {/* User Name and Role */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-accent mb-2">{user?.name}</h2>
                            {user?.role && (
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wide">
                                    {user.role}
                                </div>
                            )}
                        </div>

                        {/* User Information */}
                        <div className="space-y-4">
                            {loginUser && (
                                <>
                                    {/* Email */}
                                    {user?.email && (
                                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-primary w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Email</p>
                                                <p className="text-accent font-medium">{user.email}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Phone */}
                                    {user?.phone && (
                                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon icon={faPhone} className="text-secondary w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Phone</p>
                                                <p className="text-accent font-medium">{user.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {user?.gender && (
                                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faUser} className="text-primary w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">Gender</p>
                                        <p className="text-accent font-medium text-sm uppercase">{user.gender}</p>
                                    </div>
                                </div>
                            )}

                            {/* Address */}
                            {user?.address && (
                                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-accent font-medium text-sm">{user.address}</p>
                                    </div>
                                </div>
                            )}

                            {dataType === 'wish' &&
                                <>
                                    {/* Age Range (from wish) */}
                                    {additionalData?.age_range && (
                                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon icon={faChild} className="text-primary w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Age Range</p>
                                                <p className="text-accent font-medium">{additionalData.age_range} years</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Distance (from wish or donation) */}
                                    {additionalData?.distance && (
                                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon icon={faLocationDot} className="text-secondary w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Distance</p>
                                                <p className="text-accent font-medium">
                                                    {additionalData?.distance} km away
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            }

                            {dataType === 'donation' &&
                                <>
                                    {/* Distance (from wish or donation) */}
                                    {additionalData?.distance && (
                                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon icon={faLocationDot} className="text-secondary w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Distance</p>
                                                <p className="text-accent font-medium">
                                                    {additionalData?.distance} km away
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            }
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mt-8">
                            {loginUser ? (
                                <Link
                                    href={route('my.profile', user?.id)}
                                    className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    View Full Profile
                                </Link>
                            ) : (
                                <Link
                                    href={route('register')}
                                    className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Sign Up to Connect
                                </Link>
                            )}
                            <button
                                onClick={onClose}
                                className="flex-1 border border-primary/30 text-primary py-3 px-4 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
                            >
                                Close
                            </button>
                        </div>

                        {/* Decorative Elements */}
                        <div className="mt-6 flex justify-center space-x-2">
                            <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
                            <div className="h-1 w-4 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                            <div className="h-1 w-6 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default UserProfileModal;
