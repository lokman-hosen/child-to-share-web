// ConfirmationReceiptPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    faCalendar, faCheckCircle,
    faEnvelope,
    faLocation, faMapMarked, faMars,
    faMessage,
    faPhone,
    faStar, faTimesCircle,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {format} from "date-fns";
import {checkDonor, checkDonorWisher, checkWisher, textLimit} from "@/utils.jsx";

const ConfirmationReceiptPage = ({
                                     fulfilment,
                                     wisher,
                                     donor,
                                     wish,
                                     donation,
                                     userType, // 'wisher', 'donor', or 'admin'
                                     initialMessages = []
                                 }) => {
    const { auth } = usePage().props;
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const chatContainerRef = useRef(null);
    const fileInputRef = useRef(null);

    // User data based on user type
    const currentUser = auth.user;
    const otherUser = userType === 'wisher' ? donor : wisher;
    const wishItem = wish;
    const donationItem = donation;

    // Scroll to bottom of chat
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() && !selectedFile) return;

        const messageData = {
            text: newMessage,
            file: selectedFile,
            timestamp: new Date().toISOString(),
            senderId: currentUser.id,
            senderName: currentUser.name,
            senderType: userType
        };

        // In real implementation, this would be an API call
        setMessages([...messages, messageData]);
        setNewMessage('');
        setSelectedFile(null);

        // Simulate API call
        // await axios.post('/api/chat/messages', messageData);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
            setSelectedFile(file);
        } else {
            alert('File size must be less than 10MB');
        }
    };

    const removeSelectedFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Confirmation Receipt" />
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - User Information */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Admin View (Both Users) */}
                            {(userType === 'admin' || userType === 'super-admin') && (
                                <div className="grid grid-cols-1">
                                    {/* Donor Card */}
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <div className="border-b border-gray-200 pb-6">
                                            <h3>Donor Info</h3>
                                            <div
                                                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                                                {/* Profile Image - First Column */}
                                                <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-6">
                                                    <div
                                                        className="mx-auto md:mx-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md rounded-lg">
                                                        {donor.image ? (
                                                            <img
                                                                src={`/storage/${donor.image}`}
                                                                alt={donor.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <img
                                                                src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                                alt={donor.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                </div>

                                                {/* User Info - Second Column */}
                                                <div className="flex-1 text-center md:text-left w-full">
                                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{donor.name}</h2>
                                                    <p className="text-sm text-gray-500 mb-3 md:mb-4">
                                                        Member
                                                        Since {format(new Date(donor.created_at), 'MMMM do, yyyy')}
                                                    </p>

                                                    <dl className="space-y-2">
                                                        {/* Email with Verification */}
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/>
                                                                <span>Email : </span>
                                                                <span>{donor.email}</span>
                                                                {donor.email_verified_at ? (
                                                                    <div title="Email Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faCheckCircle}
                                                                            className="w-4 h-4 text-green-500"
                                                                            title="Email Verified"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div title="Email Not Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faTimesCircle}
                                                                            className="w-4 h-4 text-gray-400"
                                                                            title="Email Not Verified"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </dt>
                                                        </div>

                                                        {/* Phone with Verification - Conditional Display */}
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faPhone} className="w-3 h-3"/>
                                                                <span>Phone : </span>
                                                                <span>{donor.phone}</span>
                                                                {donor.phone_verified_at ? (
                                                                    <div title="Phone Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faCheckCircle}
                                                                            className="w-4 h-4 text-green-500"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div title="Phone Not Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faTimesCircle}
                                                                            className="w-4 h-4 text-gray-400"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </dt>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faLocation} className="w-3 h-3"/>
                                                                <span>Location/Address : </span>
                                                                <span>{donor.address ?? 'n/a'}</span>
                                                            </dt>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faMars} className="w-3 h-3"/>
                                                                <span>Gender : </span>
                                                                <span>{donor.gender ?? 'n/a'}</span>
                                                            </dt>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Wisher Card */}
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <div className="border-b border-gray-200 pb-6">
                                            <h3>Wisher Info</h3>
                                            <div
                                                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                                                {/* Profile Image - First Column */}
                                                <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-6">
                                                    <div
                                                        className="mx-auto md:mx-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md rounded-lg">
                                                        {wisher.image ? (
                                                            <img
                                                                src={`/storage/${wisher.image}`}
                                                                alt={wisher.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <img
                                                                src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                                alt={wisher.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                </div>

                                                {/* User Info - Second Column */}
                                                <div className="flex-1 text-center md:text-left w-full">
                                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{wisher.name}</h2>
                                                    <p className="text-sm text-gray-500 mb-3 md:mb-4">
                                                        Member
                                                        Since {format(new Date(wisher.created_at), 'MMMM do, yyyy')}
                                                    </p>

                                                    <dl className="space-y-2">
                                                        {/* Email with Verification */}
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/>
                                                                <span>Email : </span>
                                                                <span>{wisher.email}</span>
                                                                {wisher.email_verified_at ? (
                                                                    <div title="Email Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faCheckCircle}
                                                                            className="w-4 h-4 text-green-500"
                                                                            title="Email Verified"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div title="Email Not Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faTimesCircle}
                                                                            className="w-4 h-4 text-gray-400"
                                                                            title="Email Not Verified"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </dt>
                                                        </div>

                                                        {/* Phone with Verification - Conditional Display */}
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faPhone} className="w-3 h-3"/>
                                                                <span>Phone : </span>
                                                                <span>{wisher.phone}</span>
                                                                {wisher.phone_verified_at ? (
                                                                    <div title="Phone Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faCheckCircle}
                                                                            className="w-4 h-4 text-green-500"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div title="Phone Not Verified">
                                                                        <FontAwesomeIcon
                                                                            icon={faTimesCircle}
                                                                            className="w-4 h-4 text-gray-400"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </dt>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faLocation} className="w-3 h-3"/>
                                                                <span>Location/Address : </span>
                                                                <span>{wisher.address ?? 'n/a'}</span>
                                                            </dt>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                                <FontAwesomeIcon icon={faMars} className="w-3 h-3"/>
                                                                <span>Gender : </span>
                                                                <span>{wisher.gender ?? 'n/a'}</span>
                                                            </dt>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {/* Wisher/Donor View (Other User Info) */}
                            {fulfilment.donation.user_id !== currentUser.id && (
                                <div className="bg-white shadow rounded-lg p-6">
                                    <div className="border-gray-200 pb-6">
                                        <h3>Donor Info</h3>
                                        <div
                                            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                                            {/* Profile Image - First Column */}
                                            <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-6">
                                                <div
                                                    className="mx-auto md:mx-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md rounded-lg">
                                                    {donor.image ? (
                                                        <img
                                                            src={`/storage/${donor.image}`}
                                                            alt={donor.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                            alt={donor.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            {/* User Info - Second Column */}
                                            <div className="flex-1 text-center md:text-left w-full">
                                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{donor.name}</h2>
                                                <p className="text-sm text-gray-500 mb-3 md:mb-4">
                                                    Member Since {format(new Date(donor.created_at), 'MMMM do, yyyy')}
                                                </p>

                                                <dl className="space-y-2">
                                                    {/* Email with Verification */}
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/>
                                                            <span>Email : </span>
                                                            <span>{donor.email}</span>
                                                            {donor.email_verified_at ? (
                                                                <div title="Email Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faCheckCircle}
                                                                        className="w-4 h-4 text-green-500"
                                                                        title="Email Verified"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div title="Email Not Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faTimesCircle}
                                                                        className="w-4 h-4 text-gray-400"
                                                                        title="Email Not Verified"
                                                                    />
                                                                </div>
                                                            )}
                                                        </dt>
                                                    </div>

                                                    {/* Phone with Verification - Conditional Display */}
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faPhone} className="w-3 h-3"/>
                                                            <span>Phone : </span>
                                                            <span>{donor.phone}</span>
                                                            {donor.phone_verified_at ? (
                                                                <div title="Phone Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faCheckCircle}
                                                                        className="w-4 h-4 text-green-500"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div title="Phone Not Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faTimesCircle}
                                                                        className="w-4 h-4 text-gray-400"
                                                                    />
                                                                </div>
                                                            )}
                                                        </dt>
                                                    </div>
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faLocation} className="w-3 h-3"/>
                                                            <span>Location/Address : </span>
                                                            <span>{donor.address ?? 'n/a'}</span>
                                                        </dt>
                                                    </div>
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faMars} className="w-3 h-3"/>
                                                            <span>Gender : </span>
                                                            <span>{donor.gender ?? 'n/a'}</span>
                                                        </dt>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {fulfilment.wish.user_id !== currentUser.id && (
                                <div className="bg-white shadow rounded-lg p-6">
                                    <div className="border-gray-200 pb-6">
                                        <h3>Wisher Info</h3>
                                        <div
                                            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                                            {/* Profile Image - First Column */}
                                            <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-6">
                                                <div
                                                    className="mx-auto md:mx-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md rounded-lg">
                                                    {wisher.image ? (
                                                        <img
                                                            src={`/storage/${wisher.image}`}
                                                            alt={wisher.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                            alt={wisher.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            {/* User Info - Second Column */}
                                            <div className="flex-1 text-center md:text-left w-full">
                                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{wisher.name}</h2>
                                                <p className="text-sm text-gray-500 mb-3 md:mb-4">
                                                    Member Since {format(new Date(wisher.created_at), 'MMMM do, yyyy')}
                                                </p>

                                                <dl className="space-y-2">
                                                    {/* Email with Verification */}
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/>
                                                            <span>Email : </span>
                                                            <span>{wisher.email}</span>
                                                            {wisher.email_verified_at ? (
                                                                <div title="Email Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faCheckCircle}
                                                                        className="w-4 h-4 text-green-500"
                                                                        title="Email Verified"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div title="Email Not Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faTimesCircle}
                                                                        className="w-4 h-4 text-gray-400"
                                                                        title="Email Not Verified"
                                                                    />
                                                                </div>
                                                            )}
                                                        </dt>
                                                    </div>

                                                    {/* Phone with Verification - Conditional Display */}
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faPhone} className="w-3 h-3"/>
                                                            <span>Phone : </span>
                                                            <span>{wisher.phone}</span>
                                                            {wisher.phone_verified_at ? (
                                                                <div title="Phone Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faCheckCircle}
                                                                        className="w-4 h-4 text-green-500"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div title="Phone Not Verified">
                                                                    <FontAwesomeIcon
                                                                        icon={faTimesCircle}
                                                                        className="w-4 h-4 text-gray-400"
                                                                    />
                                                                </div>
                                                            )}
                                                        </dt>
                                                    </div>
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faLocation} className="w-3 h-3"/>
                                                            <span>Location/Address : </span>
                                                            <span>{wisher.address ?? 'n/a'}</span>
                                                        </dt>
                                                    </div>
                                                    <div>
                                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                                            <FontAwesomeIcon icon={faMars} className="w-3 h-3"/>
                                                            <span>Gender : </span>
                                                            <span>{wisher.gender ?? 'n/a'}</span>
                                                        </dt>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Wish/Donation Information */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="w-4 h-4 mr-2 text-gray-400"
                                    />
                                    {userType === 'wisher' ? 'Donation Details' : 'Wish Details'}
                                </h3>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div
                                                className="h-24 w-24 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                                {wish.featured_image?.file_path ? (
                                                    <img
                                                        src={`/storage/${wish.featured_image.file_path}`}
                                                        alt={wish.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                        <FontAwesomeIcon icon={faStar} className="text-gray-400"/>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">{wish.title}</h3>
                                                <p className="text-sm text-gray-500">Age
                                                    range: {wish.age_range}yrs, {textLimit(wish.description, 10)}</p>
                                                <div className="mt-1 flex items-center">
                                                    <div>
                                                        <span
                                                            className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                        {wish.status}
                                                    </span>
                                                        <span
                                                            className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                        {wish.created_at}
                                                    </span>
                                                    </div>
                                                    <br/>
                                                    <div>
                                                        {wish.latest_fulfilment?.status && (
                                                            <>
                                                            <span
                                                                className="ml-2 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                Donor: {wish.latest_fulfilment?.donation?.user?.name}
                                                            </span>
                                                                <span
                                                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                Donor Message: {wish.latest_fulfilment?.note}
                                                            </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Admin Controls */}
                                {userType === 'admin' && (
                                    <div className="mt-8 pt-6 border-t">
                                        <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="w-4 h-4 mr-2 text-gray-400"
                                            />
                                            Admin Actions
                                        </h4>
                                        <div className="flex space-x-3">
                                            <button
                                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium">
                                                Mark as Resolved
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-md text-sm font-medium">
                                                Flag Issue
                                            </button>
                                            <Link
                                                href={`/admin/transactions/${donationItem?.transaction_id}`}
                                                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
                                            >
                                                View Transaction Logs
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Chat */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                                {/* Chat Header */}
                                <div className="px-6 py-4 border-b">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                            <FontAwesomeIcon
                                                icon={faMessage}
                                                className="w-4 h-4 mr-2 text-gray-400"
                                            />
                                            Direct Chat
                                        </h3>
                                        <div className="text-sm text-gray-500">
                                            {userType === 'admin' && (
                                                <span className="flex items-center">
                                              <Shield className="w-4 h-4 mr-1"/>
                                              Admin View
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Chat between {wisher.name} and {donor.name}
                                    </p>
                                </div>

                                {/* Chat Messages */}
                                <div
                                    ref={chatContainerRef}
                                    className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]"
                                >
                                    {messages.length === 0 ? (
                                        <div className="text-center py-8 text-gray-500">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="w-4 h-4 mr-2 text-gray-400"
                                            />
                                            <p>No messages yet</p>
                                            <p className="text-sm mt-1">Start the conversation!</p>
                                        </div>
                                    ) : (
                                        messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`flex ${message.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div
                                                    className={`max-w-[70%] rounded-lg px-4 py-2 ${message.senderId === currentUser.id
                                                        ? 'bg-blue-100 text-blue-900 rounded-br-none'
                                                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                    <span className="font-medium text-sm">
                                                      {message.senderId === currentUser.id ? 'You' : message.senderName}
                                                    </span>
                                                                                <span className="text-xs text-gray-500">
                                                      {new Date(message.timestamp).toLocaleTimeString([], {
                                                          hour: '2-digit',
                                                          minute: '2-digit'
                                                      })}
                                                    </span>
                                                    </div>

                                                    {message.text && (
                                                        <p className="text-sm mb-2">{message.text}</p>
                                                    )}

                                                    {message.file && (
                                                        <div
                                                            className={`flex items-center p-2 rounded ${message.senderId === currentUser.id
                                                                ? 'bg-blue-50'
                                                                : 'bg-gray-50'
                                                            }`}>
                                                            <FontAwesomeIcon
                                                                icon={faUser}
                                                                className="w-4 h-4 mr-2 text-gray-400"
                                                            />
                                                            <span className="text-sm truncate flex-1">
                                                            {message.file.name || message.file}
                                                          </span>
                                                            <button className="ml-2 text-blue-600 hover:text-blue-800">
                                                                <FontAwesomeIcon
                                                                    icon={faUser}
                                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                                />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Chat Input */}
                                {userType !== 'admin' && (
                                    <div className="border-t p-4">
                                        {/* Selected File Preview */}
                                        {selectedFile && (
                                            <div
                                                className="mb-3 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <FontAwesomeIcon
                                                        icon={faUser}
                                                        className="w-4 h-4 mr-2 text-gray-400"
                                                    />
                                                    <span className="text-sm truncate flex-1">
                                                    {selectedFile.name}
                                                  </span>
                                                </div>
                                                <button
                                                    onClick={removeSelectedFile}
                                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faUser}
                                                        className="w-4 h-4 mr-2 text-gray-400"
                                                    />
                                                </button>
                                            </div>
                                        )}

                                        <form onSubmit={handleSendMessage} className="space-y-3">
                                              <textarea
                                                  value={newMessage}
                                                  onChange={(e) => setNewMessage(e.target.value)}
                                                  placeholder="Type your message..."
                                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                  rows="2"
                                              />

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        onChange={handleFileSelect}
                                                        className="hidden"
                                                        id="file-upload"
                                                    />
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faUser}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        Attach
                                                    </label>

                                                    <div className="text-xs text-gray-500">
                                                        Max 10MB
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={(!newMessage.trim() && !selectedFile) || isUploading}
                                                    className="flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isUploading ? (
                                                        <>
                                                            <div
                                                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FontAwesomeIcon
                                                                icon={faUser}
                                                                className="w-4 h-4 mr-2 text-gray-400"
                                                            />
                                                            Send
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {/* Admin Chat Note */}
                                {userType === 'admin' && (
                                    <div className="p-6 text-center text-gray-500 border-t">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="w-4 h-4 mr-2 text-gray-400"
                                        />
                                        <p className="text-sm">
                                            As an admin, you can monitor the conversation.
                                            <br/>
                                            You cannot participate in this chat.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ConfirmationReceiptPage;
