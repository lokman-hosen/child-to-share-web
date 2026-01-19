import React, {useState} from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGridHorizontal, faPlus, faStar, faTable, faUsers, faEnvelope, faPhone, faVenusMars, faMapMarkerAlt, faCalendar, faBuilding, faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

export default function Index({module, users }) {
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

    const userListData = users?.data || [];
    const usersLinks = users?.links || [];

    // Helper function to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Helper function to calculate age from DOB
    const calculateAge = (dob) => {
        if (!dob) return 'N/A';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    // Get status badge color
    const getStatusBadge = (user) => {
        if (user.is_active) {
            return { text: 'Active', class: 'bg-blue-100 text-blue-800' };
        }else {
            return { text: 'Inactive', class: 'bg-red-100 text-red-800' };
        }
        if (user.is_verified) {
            return { text: 'Verified', class: 'bg-green-100 text-green-800' };
        }
        return { text: 'Pending', class: 'bg-yellow-100 text-yellow-800' };
    };

    // Get gender icon and color
    const getGenderInfo = (gender) => {
        switch(gender) {
            case 'male': return { icon: '♂', color: 'text-blue-600' };
            case 'female': return { icon: '♀', color: 'text-pink-600' };
            default: return { icon: '⚧', color: 'text-purple-600' };
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`}/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-2 py-2 sm:px-8 sm:py-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        {module} List
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Manage all users in the system
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* View Toggle - Desktop Only */}
                                <div className="hidden md:flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('table')}
                                        className={`p-2 rounded-md transition-all duration-200 ${
                                            viewMode === 'table'
                                                ? 'bg-white text-blue-600 shadow-sm'
                                                : 'text-white hover:bg-white hover:bg-opacity-10'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faTable} className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-md transition-all duration-200 ${
                                            viewMode === 'grid'
                                                ? 'bg-white text-blue-600 shadow-sm'
                                                : 'text-white hover:bg-white hover:bg-opacity-10'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faGridHorizontal} className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={route('users.create')}
                                    className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                                >
                                    <div className="animate-bounce">
                                        <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                                    </div>
                                    <span>Add New User(wisher)</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="w-2xl space-y-8">

                                {/* Mobile Card View (Always for mobile) */}
                                <div className="md:hidden space-y-4">
                                    {userListData.length > 0 ? (
                                        userListData.map((user) => {
                                            const status = getStatusBadge(user);
                                            const genderInfo = getGenderInfo(user.gender);
                                            return (
                                                <div key={user.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                                    {/* Card Header with Status */}
                                                    <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                                {user.image ? (
                                                                    <img
                                                                        src={`/storage/${user.image}`}
                                                                        alt={user.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <span className="text-lg font-semibold text-blue-600">
                                                                        {user.name.charAt(0).toUpperCase()}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                                                                <p className="text-sm text-gray-500">{user.email}</p>
                                                            </div>
                                                        </div>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.class}`}>
                                                            {status.text}
                                                        </span>
                                                    </div>

                                                    {/* Card Content */}
                                                    <div className="p-4">
                                                        <div className="space-y-3">
                                                            <div className="grid grid-cols-2 gap-3">
                                                                <div className="flex items-center text-sm">
                                                                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2 w-4 h-4" />
                                                                    <span className="text-gray-600">{user.phone || 'N/A'}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm">
                                                                    <FontAwesomeIcon icon={faVenusMars} className="text-gray-400 mr-2 w-4 h-4" />
                                                                    <span className={`capitalize ${genderInfo.color}`}>
                                                                        {user.gender} {genderInfo.icon}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-3">
                                                                <div className="flex items-center text-sm">
                                                                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400 mr-2 w-4 h-4" />
                                                                    <span className="text-gray-600">
                                                                        {formatDate(user.dob)} ({calculateAge(user.dob)} yrs)
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center text-sm">
                                                                    {user.organization ? (
                                                                        <>
                                                                            <FontAwesomeIcon icon={faBuilding} className="text-gray-400 mr-2 w-4 h-4" />
                                                                            <span className="text-gray-600 truncate">{user.organization.name}</span>
                                                                        </>
                                                                    ) : (
                                                                        <span className="text-gray-400 text-sm">No organization</span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {user.guardian_name && (
                                                                <div className="bg-blue-50 rounded-lg p-3">
                                                                    <p className="text-xs font-medium text-blue-800 mb-1">Guardian Info</p>
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <div>
                                                                            <p className="text-xs text-gray-600">Name:</p>
                                                                            <p className="text-sm font-medium text-gray-900">{user.guardian_name}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs text-gray-600">Phone:</p>
                                                                            <p className="text-sm font-medium text-gray-900">{user.guardian_phone || 'N/A'}</p>
                                                                        </div>
                                                                        {user.relationship && (
                                                                            <div className="col-span-2">
                                                                                <p className="text-xs text-gray-600">Relationship:</p>
                                                                                <p className="text-sm font-medium text-gray-900 capitalize">{user.relationship}</p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {user.address && (
                                                                <div className="flex items-start text-sm">
                                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-2 w-4 h-4 mt-0.5" />
                                                                    <span className="text-gray-600 line-clamp-2">{user.address}</span>
                                                                </div>
                                                            )}

                                                            {/* Verification Status */}
                                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                                <div className="space-x-3">
                                                                    <span className={`inline-flex items-center text-xs ${user.email_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                        <FontAwesomeIcon icon={user.email_verified_at ? faCheckCircle : faTimesCircle} className="mr-1 w-3 h-3" />
                                                                        Email
                                                                    </span>
                                                                    <span className={`inline-flex items-center text-xs ${user.phone_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                        <FontAwesomeIcon icon={user.phone_verified_at ? faCheckCircle : faTimesCircle} className="mr-1 w-3 h-3" />
                                                                        Phone
                                                                    </span>
                                                                </div>
                                                                <span className="text-xs text-gray-500">
                                                                    Joined: {formatDate(user.created_at)}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Action Button */}
                                                        <div className="flex justify-end items-center pt-4 border-t border-gray-100 mt-4">
                                                            <Link
                                                                href={route('my.profile', user.id)}
                                                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                            >
                                                                View Details
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="text-center py-12">
                                            <FontAwesomeIcon icon={faUsers} className="text-gray-300 text-6xl mb-4" />
                                            <p className="text-gray-500 text-lg mb-2">No users found</p>
                                            <p className="text-gray-400 text-sm mb-6">
                                                Start by adding your first user to the system
                                            </p>
                                            <Link
                                                href={route('users.create')}
                                                className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                                <span>Add First User</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Desktop View - Table or Grid based on toggle */}
                                <div className="hidden md:block">
                                    {viewMode === 'table' ? (
                                        /* Table View */
                                        <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        User Information
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Contact & Demographics
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Guardian & Organization
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Status & Actions
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                {userListData.length > 0 ? (
                                                    userListData.map((user) => {
                                                        const status = getStatusBadge(user);
                                                        const genderInfo = getGenderInfo(user.gender);
                                                        return (
                                                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                                                {/* User Information Column */}
                                                                <td className="px-6 py-4">
                                                                    <div className="flex items-center">
                                                                        <div className="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                                                                            {user.image ? (
                                                                                <img
                                                                                    src={`/storage/${user.image}`}
                                                                                    alt={user.name}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <div className="w-full h-full flex items-center justify-center">
                                                                                    <span className="text-lg font-semibold text-blue-600">
                                                                                        {user.name.charAt(0).toUpperCase()}
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="ml-4">
                                                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                                            {user.email &&  <div className="text-sm text-gray-500">{user.email}</div>}
                                                                            <div className="mt-1 flex items-center">
                                                                                <span className="text-xs text-gray-500">
                                                                                    Role: {user.role}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                {/* Contact & Demographics Column */}
                                                                <td className="px-6 py-4">
                                                                    <div className="space-y-2">
                                                                        { user.phone &&
                                                                            <div className="flex items-center text-sm text-gray-900">
                                                                                <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2 w-4 h-4" />
                                                                                {user.phone}
                                                                            </div>
                                                                        }
                                                                        <div className="flex items-center text-sm">
                                                                            <FontAwesomeIcon icon={faVenusMars} className="text-gray-400 mr-2 w-4 h-4" />
                                                                            <span className={`capitalize ${genderInfo.color}`}>
                                                                                {user.gender} {genderInfo.icon}
                                                                            </span>
                                                                            <span className="mx-2">•</span>
                                                                            <span className="text-gray-600">{calculateAge(user.dob)} yrs</span>
                                                                        </div>
                                                                        <div className="text-sm text-gray-600">
                                                                            DOB: {formatDate(user.dob)}
                                                                        </div>
                                                                        {user.address && (
                                                                            <div className="text-sm text-gray-600 truncate max-w-xs">
                                                                                {user.address}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </td>

                                                                {/* Guardian & Organization Column */}
                                                                <td className="px-6 py-4">
                                                                    <div className="space-y-3">
                                                                        {user.guardian_name ? (
                                                                            <div>
                                                                                <p className="text-xs font-medium text-gray-500 mb-1">Guardian</p>
                                                                                <p className="text-sm font-medium text-gray-900">{user.guardian_name}</p>
                                                                                <div className="flex items-center text-xs text-gray-600">
                                                                                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-3 h-3" />
                                                                                    {user.guardian_phone || 'N/A'}
                                                                                    {user.relationship && (
                                                                                        <span className="ml-2 capitalize text-gray-500">
                                                                                            ({user.relationship})
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                            <p className="text-sm text-gray-400">No guardian info</p>
                                                                        )}

                                                                        {user.organization && (
                                                                            <div className="pt-2 border-t border-gray-100">
                                                                                <p className="text-xs font-medium text-gray-500 mb-1">Organization</p>
                                                                                <div className="flex items-center">
                                                                                    <FontAwesomeIcon icon={faBuilding} className="text-gray-400 mr-2 w-4 h-4" />
                                                                                    <span className="text-sm text-gray-900 truncate max-w-xs">
                                                                                        {user.organization.name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </td>

                                                                {/* Status & Actions Column */}
                                                                <td className="px-6 py-4">
                                                                    <div className="flex flex-col items-end space-y-3">
                                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${status.class}`}>
                                                                            {status.text}
                                                                        </span>

                                                                        <div className="flex space-x-2">
                                                                            <span className={`inline-flex items-center text-xs ${user.email_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                                <FontAwesomeIcon icon={user.email_verified_at ? faCheckCircle : faTimesCircle} className="mr-1 w-3 h-3" />
                                                                                Email
                                                                            </span>
                                                                            <span className={`inline-flex items-center text-xs ${user.phone_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                                <FontAwesomeIcon icon={user.phone_verified_at ? faCheckCircle : faTimesCircle} className="mr-1 w-3 h-3" />
                                                                                Phone
                                                                            </span>
                                                                        </div>

                                                                        <div className="text-xs text-gray-500 text-right">
                                                                            Created: {formatDate(user.created_at)}
                                                                        </div>

                                                                        <div className="flex space-x-2">
                                                                            <Link
                                                                                href={route('my.profile', user.id)}
                                                                                className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                                                            >
                                                                                View
                                                                            </Link>
                                                                            <Link
                                                                                href={route('users.edit', user.id)}
                                                                                className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                                                            >
                                                                                Edit
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="px-6 py-12 text-center">
                                                            <div className="text-center">
                                                                <FontAwesomeIcon icon={faUsers}
                                                                                 className="text-gray-300 text-5xl mb-4"/>
                                                                <p className="text-gray-500 text-lg mb-2">No users found</p>
                                                                <p className="text-gray-400 text-sm mb-6">
                                                                    Start by adding your first user to the system
                                                                </p>
                                                                <Link
                                                                    href={route('users.create')}
                                                                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                                                >
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                    <span>Add First User</span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        /* Grid View */
                                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {userListData.length > 0 ? (
                                                userListData.map((user) => {
                                                    const status = getStatusBadge(user);
                                                    const genderInfo = getGenderInfo(user.gender);
                                                    return (
                                                        <div key={user.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                                            {/* Card Header */}
                                                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
                                                                <div className="flex items-center justify-between mb-4">
                                                                    <div className="flex items-center space-x-3">
                                                                        <div className="h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                                            {user.image ? (
                                                                                <img
                                                                                    src={`/storage/${user.image}`}
                                                                                    alt={user.name}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <span className="text-xl font-semibold text-blue-600">
                                                                                    {user.name.charAt(0).toUpperCase()}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                                                {user.name}
                                                                            </h3>
                                                                            <p className="text-sm text-gray-500">{user.email}</p>
                                                                        </div>
                                                                    </div>
                                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.class}`}>
                                                                        {status.text}
                                                                    </span>
                                                                </div>

                                                                {/* Quick Info */}
                                                                <div className="grid grid-cols-2 gap-3">
                                                                    <div className="flex items-center text-sm text-gray-600">
                                                                        <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4" />
                                                                        <span>{user.phone || 'N/A'}</span>
                                                                    </div>
                                                                    <div className="flex items-center text-sm text-gray-600">
                                                                        <FontAwesomeIcon icon={faVenusMars} className={`mr-2 w-4 h-4 ${genderInfo.color}`} />
                                                                        <span className="capitalize">{user.gender}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Card Body */}
                                                            <div className="p-6">
                                                                <div className="space-y-4">
                                                                    {/* Age and DOB */}
                                                                    <div className="flex items-center justify-between">
                                                                        <div>
                                                                            <p className="text-xs font-medium text-gray-500">Age</p>
                                                                            <p className="text-lg font-semibold text-gray-900">{calculateAge(user.dob)} years</p>
                                                                        </div>
                                                                        <div className="text-right">
                                                                            <p className="text-xs font-medium text-gray-500">Date of Birth</p>
                                                                            <p className="text-sm text-gray-900">{formatDate(user.dob)}</p>
                                                                        </div>
                                                                    </div>

                                                                    {/* Guardian Info */}
                                                                    {user.guardian_name && (
                                                                        <div className="bg-blue-50 rounded-lg p-4">
                                                                            <p className="text-xs font-medium text-blue-800 mb-2">Guardian</p>
                                                                            <p className="text-sm font-medium text-gray-900 mb-1">{user.guardian_name}</p>
                                                                            <div className="flex items-center justify-between text-sm text-gray-600">
                                                                                <span>{user.guardian_phone || 'N/A'}</span>
                                                                                {user.relationship && (
                                                                                    <span className="capitalize text-gray-500">({user.relationship})</span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {/* Organization */}
                                                                    {user.organization && (
                                                                        <div className="flex items-center">
                                                                            <FontAwesomeIcon icon={faBuilding} className="text-gray-400 mr-3 w-5 h-5" />
                                                                            <div>
                                                                                <p className="text-xs font-medium text-gray-500">Organization</p>
                                                                                <p className="text-sm text-gray-900 truncate">{user.organization.name}</p>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {/* Address */}
                                                                    {user.address && (
                                                                        <div className="flex items-start">
                                                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-3 w-5 h-5 mt-0.5" />
                                                                            <div className="flex-1">
                                                                                <p className="text-xs font-medium text-gray-500">Address</p>
                                                                                <p className="text-sm text-gray-900 line-clamp-2">{user.address}</p>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {/* Verification Status */}
                                                                    <div className="pt-4 border-t border-gray-100">
                                                                        <p className="text-xs font-medium text-gray-500 mb-2">Verification Status</p>
                                                                        <div className="flex items-center space-x-4">
                                                                            <span className={`inline-flex items-center text-sm ${user.email_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                                <FontAwesomeIcon icon={user.email_verified_at ? faCheckCircle : faTimesCircle} className="mr-1.5 w-4 h-4" />
                                                                                Email
                                                                            </span>
                                                                            <span className={`inline-flex items-center text-sm ${user.phone_verified_at ? 'text-green-600' : 'text-gray-400'}`}>
                                                                                <FontAwesomeIcon icon={user.phone_verified_at ? faCheckCircle : faTimesCircle} className="mr-1.5 w-4 h-4" />
                                                                                Phone
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Card Footer */}
                                                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="text-sm text-gray-500">
                                                                        Joined {formatDate(user.created_at)}
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        <Link
                                                                            href={route('my.profile', user.id)}
                                                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                                        >
                                                                            View Details
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <div className="col-span-full text-center py-12">
                                                    <FontAwesomeIcon icon={faUsers} className="text-gray-300 text-6xl mb-4" />
                                                    <p className="text-gray-500 text-lg mb-2">No users found</p>
                                                    <p className="text-gray-400 text-sm mb-6">
                                                        Start by adding your first user to the system
                                                    </p>
                                                    <Link
                                                        href={route('users.create')}
                                                        className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                        <span>Add First User</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                {usersLinks.length > 1 && <Pagination data={users} links={usersLinks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
