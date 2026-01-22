import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router} from '@inertiajs/react';
import React, { useState } from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPlus,
    faTable,
    faGridHorizontal,
    faBuilding,
    faEnvelope,
    faPhone, faMarker, faLocation, faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {getFulfilmentStatus, textLimit} from "@/utils.jsx";

export default function List({module, organizations}) {
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

    const organizationListData = organizations?.data || [];
    const organizationsLinks = organizations?.links || [];

    // Status badge color function
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

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`}/>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-8 sm:px-8 sm:py-10">
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
                                        {module}
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Create New Organization to contribute
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
                                    href={route('wishes.create')}
                                    className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                                >
                                    <div className="animate-bounce">
                                        <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                                    </div>
                                    <span>Create New</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="w-2xl space-y-8">
                                {/* Desktop View - Table or Grid based on toggle */}
                                <div className="hidden md:block">
                                    {viewMode === 'table' ? (
                                        /* Table View */
                                        <div className="overflow-x-auto bg-white shadow rounded-lg px-1 py-2">
                                            <table className="wish-table w-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Org. Name</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Contact</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Address</th>
                                                    <th className="text-right px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {organizationListData.length > 0 ? (
                                                    organizationListData.map((organization, index) => (
                                                        <tr key={organization.id} className="hover:bg-gray-50 transition-colors">
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                                                            {organization.user?.image ? (
                                                                                <img
                                                                                    src={`/storage/${organization.user.image}`}
                                                                                    alt={organization.name}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                                                    <FontAwesomeIcon icon={faBuilding} className="text-gray-400"/>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className="text-lg font-medium text-gray-900">{organization.name}</h3>
                                                                            <p className="text-sm text-gray-500">Since: {organization.created_at}</p>
                                                                            <div className="mt-1 flex items-center">
                                                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                                Status: {organization.is_active}
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </td>
                                                            <td className="p-6 border-b text-gray-600 font-medium">
                                                                <FontAwesomeIcon icon={faEnvelope} /> {organization.contact_email} <br/>
                                                                <FontAwesomeIcon icon={faPhone} /> {organization.contact_phone}
                                                            </td>
                                                            <td className="p-6 border-b text-gray-600">
                                                                 <FontAwesomeIcon icon={faLocationDot}/> {organization.address}
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex flex-col items-end">
                                                                    <div className="mt-2">
                                                                        <Link
                                                                            href={route('organizations.show', organization.id)}
                                                                            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                                            Detail
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="px-6 py-12 text-center">
                                                            <div className="text-center">
                                                                <FontAwesomeIcon icon={faStar}
                                                                                 className="text-gray-300 text-5xl mb-4"/>
                                                                <p className="text-gray-500 text-lg mb-2">No wishes
                                                                    found</p>
                                                                <p className="text-gray-400 text-sm mb-6">
                                                                    Start by creating your first donation item
                                                                </p>
                                                                <Link
                                                                    href={route('wishes.create')}
                                                                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                                                >
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                    <span>Create First Donation</span>
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
                                        <>
                                        edfwe
                                        </>
                                    )}
                                </div>

                                {/* Pagination */}
                                {organizationsLinks.length > 1 && <Pagination data={organizations} links={organizationsLinks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
