// ConfirmationReceiptPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    faCalendar,
    faEnvelope,
    faLocation,
    faMessage,
    faPhone,
    faStar,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
/*import {
    User,
    Package,
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Upload,
    Send,
    Paperclip,
    X,
    Download,
    Shield
} from 'lucide-react';*/

const ConfirmationReceiptPage = ({
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
                            {userType === 'admin' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Wisher Card */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="w-5 h-5 mr-2 text-green-600"
                                                />
                                                Wisher Information
                                            </h3>
                                            <span
                                                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                                                Wisher
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Name</p>
                                                <p className="font-medium">{wisher.name}</p>
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Phone</p>
                                                    <div className="flex items-center mt-1">
                                                        <FontAwesomeIcon
                                                            icon={faPhone}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        <a
                                                            href={`tel:${wisher.phone}`}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {wisher.phone}
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-gray-500">Email</p>
                                                    <div className="flex items-center mt-1">
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        <a
                                                            href={`mailto:${wisher.email}`}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {wisher.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {wisher.address && (
                                                <div>
                                                    <p className="text-sm text-gray-500">Address</p>
                                                    <div className="flex items-start mt-1">
                                                        <FontAwesomeIcon
                                                            icon={faLocation}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        <p className="text-gray-700">{wisher.address}</p>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="pt-4 border-t">
                                                <Link
                                                    href={`/admin/users/${wisher.id}`}
                                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    View Full Profile →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Donor Card */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                />
                                                Donor Information
                                            </h3>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        Donor
                      </span>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Name</p>
                                                <p className="font-medium">{donor.name}</p>
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Phone</p>
                                                    <div className="flex items-center mt-1">
                                                        <FontAwesomeIcon
                                                            icon={faPhone}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        <a
                                                            href={`tel:${donor.phone}`}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {donor.phone}
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-gray-500">Email</p>
                                                    <div className="flex items-center mt-1">
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className="w-4 h-4 mr-2 text-gray-400"
                                                        />
                                                        <a
                                                            href={`mailto:${donor.email}`}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            {donor.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t">
                                                <Link
                                                    href={`/admin/users/${donor.id}`}
                                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    View Full Profile →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Wisher/Donor View (Other User Info) */}
                            {userType !== 'admin' && (
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="w-4 h-4 mr-2 text-gray-400"
                                            />
                                            {userType === 'wisher' ? 'Donor Information' : 'Wisher Information'}
                                        </h3>
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                                            userType === 'wisher'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-green-100 text-green-800'
                                        }`}>
                                          {userType === 'wisher' ? 'Donor' : 'Wisher'}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Full Name</p>
                                                <p className="text-lg font-medium">{otherUser.name}</p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Phone Number</p>
                                                <div className="flex items-center mt-1">
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                        className="w-4 h-4 mr-2 text-gray-400"
                                                    />
                                                    <a
                                                        href={`tel:${otherUser.phone}`}
                                                        className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        {otherUser.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Email Address</p>
                                                <div className="flex items-center mt-1">
                                                    <FontAwesomeIcon
                                                        icon={faEnvelope}
                                                        className="w-4 h-4 mr-2 text-gray-400"
                                                    />
                                                    <a
                                                        href={`mailto:${otherUser.email}`}
                                                        className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                                                    >
                                                        {otherUser.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {otherUser.address && (
                                            <div>
                                                <p className="text-sm text-gray-500">Delivery Address</p>
                                                <div className="flex items-start mt-1 p-4 bg-gray-50 rounded-lg">
                                                    <FontAwesomeIcon
                                                        icon={faLocation}
                                                        className="w-4 h-4 mr-2 text-gray-400"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{otherUser.address}</p>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            {otherUser.city}, {otherUser.state} {otherUser.zip_code}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    <Link
                                                        href={userType === 'wisher'
                                                            ? `/donors/${donor.id}/profile`
                                                            : `/wishers/${wisher.id}/profile`
                                                        }
                                                        className="inline-flex items-center justify-center w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >
                                                        View Full Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Item</p>
                                            <p className="font-medium text-lg">
                                                {userType === 'wisher' ? donationItem?.item_name : wishItem?.title}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Category</p>
                                            <span
                                                className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                                            {userType === 'wisher' ? donationItem?.category : wishItem?.category}
                                          </span>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Status</p>
                                            <span
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                                    donationItem?.status === 'delivered'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {donationItem?.status || 'pending'}
                                              </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Date</p>
                                            <div className="flex items-center">
                                                <FontAwesomeIcon
                                                    icon={faCalendar}
                                                    className="w-4 h-4 mr-2 text-gray-400"
                                                />
                                                <p className="font-medium">
                                                    {formatDate(donationItem?.created_at || new Date())}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Transaction ID</p>
                                            <p className="font-mono font-medium text-gray-900">
                                                {donationItem?.transaction_id || 'N/A'}
                                            </p>
                                        </div>

                                        <div className="pt-4">
                                            <Link
                                                href={userType === 'wisher'
                                                    ? `/donations/${donationItem?.id}`
                                                    : `/wishes/${wishItem?.id}`
                                                }
                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                View Full Details →
                                            </Link>
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
