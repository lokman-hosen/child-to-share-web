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
    faChild
} from '@fortawesome/free-solid-svg-icons';

const UserProfileModal = ({isOpen, onClose, selectedUser, additionalData = {}}) => {
    const { wish, donation } = additionalData;
    const loginUser = usePage().props.auth.user;

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                    {/* Header with Larger Square Image */}
                    <div className="relative">
                        {/* Background Gradient */}
                        <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                        </button>

                        {/* Large Square User Image */}
                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 p-2 shadow-2xl rounded-2xl">
                                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                                    {selectedUser?.image ? (
                                        <img
                                            src={`/storage/${selectedUser.image}`}
                                            alt={selectedUser.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    ) : (
                                        <img
                                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                            alt={selectedUser?.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Adjusted padding for larger image */}
                    <div className="pt-20 pb-6 px-6">
                        {/* User Name and Role */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedUser?.name}</h2>
                            {/*<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium uppercase">*/}
                            {/*    {selectedUser?.role}*/}
                            {/*</div>*/}
                        </div>

                        {/* User Information */}
                        <div className="space-y-4">
                            {loginUser && (
                                <>
                                    {/* Email */}
                                    {selectedUser?.email && (
                                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Email</p>
                                                <p className="text-gray-900 font-medium">{selectedUser.email}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Phone */}
                                    {selectedUser?.phone && (
                                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                <FontAwesomeIcon icon={faPhone} className="text-green-600 w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500">Phone</p>
                                                <p className="text-gray-900 font-medium">{selectedUser.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Address */}
                            {selectedUser?.address && (
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-600 w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-gray-900 font-medium text-sm">{selectedUser.address}</p>
                                    </div>
                                </div>
                            )}

                            {/* Age Range (from wish) */}
                            {wish?.age_range && (
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faChild} className="text-purple-600 w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">Age Range</p>
                                        <p className="text-gray-900 font-medium">{wish.age_range} years</p>
                                    </div>
                                </div>
                            )}

                            {/* Distance (from wish or donation) */}
                            {(wish?.distance || donation?.distance) && (
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                        <span className="text-indigo-600 text-lg">📍</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">Distance</p>
                                        <p className="text-gray-900 font-medium">
                                            {wish?.distance || donation?.distance} km away
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mt-6">
                            {loginUser && (
                                <Link
                                    href={route('my.profile', selectedUser?.id)}
                                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                                >
                                    View Full Profile
                                </Link>
                            )}
                            <button
                                onClick={onClose}
                                className="flex-1 border bg-orange-200 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default UserProfileModal;
