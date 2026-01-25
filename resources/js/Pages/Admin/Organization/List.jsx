import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, Link, router } from '@inertiajs/react';
import React, { useState } from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPlus,
    faTable,
    faGridHorizontal,
    faBuilding,
    faEnvelope,
    faPhone,
    faLocationDot,
    faCalendar,
    faExternalLinkAlt,
    faEdit,
    faEye
} from "@fortawesome/free-solid-svg-icons";
import {getStatus} from "@/utils.jsx";

export default function List({ module, organizations }) {
    const [viewMode, setViewMode] = useState('table');

    const organizationListData = organizations?.data || [];
    const organizationsLinks = organizations?.links || [];

    const getStatusColor = (status) => {
        switch (status) {
            case '1':
                return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case '0':
                return 'bg-rose-100 text-rose-800 border-rose-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Main Card Container */}
                <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                    {/* Card Header with Gradient */}
                    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
                        </div>

                        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                            {/* Title Section */}
                            <div className="flex items-center space-x-5">
                                <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                                    <FontAwesomeIcon
                                        icon={faBuilding}
                                        className="text-white text-2xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                        {module} Management
                                    </h1>
                                    <p className="text-blue-100 text-lg opacity-90">
                                        Manage and organize all your partner organizations
                                    </p>
                                </div>
                            </div>

                            {/* Actions Section */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                {/* View Toggle */}
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-1.5 border border-white/30">
                                    <button
                                        onClick={() => setViewMode('table')}
                                        className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                            viewMode === 'table'
                                                ? 'bg-white text-indigo-600 shadow-lg'
                                                : 'text-white hover:bg-white/20'
                                        }`}
                                        title="Table View"
                                    >
                                        <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                            viewMode === 'grid'
                                                ? 'bg-white text-indigo-600 shadow-lg'
                                                : 'text-white hover:bg-white/20'
                                        }`}
                                        title="Grid View"
                                    >
                                        <FontAwesomeIcon icon={faGridHorizontal} className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Create Button */}
                                <Link
                                    href={route('organizations.create')}
                                    className="group inline-flex items-center justify-center space-x-3 bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3.5 px-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/50"
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-white/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <FontAwesomeIcon icon={faPlus} className="relative text-lg" />
                                    </div>
                                    <span className="text-lg">Create Organization</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-4 sm:px-8 py-8">
                        {/* Stats Bar */}
                        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Total Organizations</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">{organizations.total || 0}</p>
                                    </div>
                                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBuilding} className="text-blue-600 text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Active</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">
                                            {organizationListData.filter(o => getStatus(o.is_active)).length}
                                        </p>
                                    </div>
                                    <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <div className="h-3 w-3 bg-emerald-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Inactive</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">
                                            {organizationListData.filter(o => getStatus(o.is_active)).length}
                                        </p>
                                    </div>
                                    <div className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                        <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">This Month</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                                    </div>
                                    <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCalendar} className="text-purple-600 text-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {/* Desktop View */}
                            <div className="hidden md:block">
                                {viewMode === 'table' ? (
                                    /* Table View */
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                            <tr>
                                                <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                    Organization
                                                </th>
                                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                    Contact Information
                                                </th>
                                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                    Location
                                                </th>
                                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-5 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                            {organizationListData.length > 0 ? (
                                                organizationListData.map((organization) => (
                                                    <tr key={organization.id} className="hover:bg-gray-50 transition-colors duration-200 group">
                                                        <td className="px-8 py-6">
                                                            <div className="flex items-center space-x-5">
                                                                <div className="h-16 w-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-gray-200">
                                                                    {organization.user?.image ? (
                                                                        <img
                                                                            src={`/storage/${organization.user.image}`}
                                                                            alt={organization.name}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <FontAwesomeIcon icon={faBuilding} className="text-indigo-500 text-2xl" />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                                        {organization.name}
                                                                    </h3>
                                                                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                                                                        <FontAwesomeIcon icon={faCalendar} className="w-3 h-3 mr-2" />
                                                                        Since: {organization.created_at}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-6">
                                                            <div className="space-y-2">
                                                                <div className="flex items-center text-sm text-gray-700">
                                                                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-3 text-gray-400" />
                                                                    <span className="truncate max-w-[200px]">{organization.contact_email}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-700">
                                                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3 text-gray-400" />
                                                                    <span>{organization.contact_phone || 'N/A'}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-6">
                                                            <div className="flex items-center text-sm text-gray-700">
                                                                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-3 text-gray-400" />
                                                                <span className="truncate max-w-[180px]">{organization.address || 'No address provided'}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-6">
                                                            {getStatus(organization.is_active)}
                                                        </td>
                                                        <td className="px-6 py-6">
                                                            <div className="flex justify-end space-x-3">
                                                                <Link
                                                                    href={route('organizations.show', organization.id)}
                                                                    className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 hover:text-white hover:from-indigo-600 hover:to-blue-600 border border-indigo-200 hover:border-indigo-600 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group/view"
                                                                >
                                                                    <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-2 group-hover/view:animate-pulse" />
                                                                    View
                                                                </Link>
                                                                <Link
                                                                    href={route('organizations.edit', organization.id)}
                                                                    className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 hover:text-white hover:from-emerald-600 hover:to-teal-600 border border-emerald-200 hover:border-emerald-600 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group/edit"
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4 mr-2 group-hover/edit:animate-pulse" />
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="px-8 py-16 text-center">
                                                        <div className="max-w-md mx-auto">
                                                            <div className="h-24 w-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                                                                <FontAwesomeIcon icon={faBuilding} className="text-gray-300 text-4xl" />
                                                            </div>
                                                            <h3 className="text-2xl font-semibold text-gray-700 mb-3">No Organizations Found</h3>
                                                            <p className="text-gray-500 mb-8">
                                                                Start by adding your first organization to manage partnerships and collaborations.
                                                            </p>
                                                            <Link
                                                                href={route('organizations.create')}
                                                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                                <span>Create First Organization</span>
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
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                                        {organizationListData.length > 0 ? (
                                            organizationListData.map((organization) => (
                                                <div
                                                    key={organization.id}
                                                    className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
                                                >
                                                    {/* Card Header */}
                                                    <div className="relative h-48 overflow-hidden">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
                                                        {organization.user?.image ? (
                                                            <img
                                                                src={`/storage/${organization.user.image}`}
                                                                alt={organization.name}
                                                                className="w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-700"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faBuilding} className="text-white text-6xl opacity-50" />
                                                            </div>
                                                        )}
                                                        {/* Status Badge */}
                                                        <div className="absolute top-4 right-4">
                                                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(organization.is_active)} backdrop-blur-sm`}>
                                                                {organization.is_active ? 'Active' : 'Inactive'}
                                                            </span>
                                                        </div>
                                                        {/* Organization Name */}
                                                        <div className="absolute bottom-4 left-4 right-4">
                                                            <h3 className="text-xl font-bold text-white line-clamp-2">
                                                                {organization.name}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    {/* Card Content */}
                                                    <div className="p-6">
                                                        <div className="space-y-4">
                                                            {/* Contact Info */}
                                                            <div className="space-y-3">
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                                                                    <span className="truncate">{organization.contact_email}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                                                                    <span>{organization.contact_phone || 'N/A'}</span>
                                                                </div>
                                                                <div className="flex items-start text-sm text-gray-600">
                                                                    <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                                                    <span className="line-clamp-2">{organization.address || 'No address provided'}</span>
                                                                </div>
                                                            </div>

                                                            {/* Created Date */}
                                                            <div className="pt-4 border-t border-gray-100">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center text-sm text-gray-500">
                                                                        <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                                                                        Since {new Date(organization.created_at).toLocaleDateString()}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Action Buttons */}
                                                            <div className="pt-4 flex space-x-3">
                                                                <Link
                                                                    href={route('organizations.show', organization.id)}
                                                                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 hover:text-white hover:from-indigo-600 hover:to-blue-600 border border-indigo-200 hover:border-indigo-600 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group/view"
                                                                >
                                                                    <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-2 group-hover/view:animate-pulse" />
                                                                    View Details
                                                                </Link>
                                                                <Link
                                                                    href={route('organizations.edit', organization.id)}
                                                                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:text-white hover:from-gray-600 hover:to-gray-700 border border-gray-200 hover:border-gray-600 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                                                    title="Edit"
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-span-full">
                                                {/* Same empty state as table view */}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Mobile View */}
                            <div className="md:hidden">
                                <div className="p-4">
                                    {organizationListData.length > 0 ? (
                                        <div className="space-y-4">
                                            {organizationListData.map((organization) => (
                                                <div key={organization.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="h-16 w-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            {organization.user?.image ? (
                                                                <img
                                                                    src={`/storage/${organization.user.image}`}
                                                                    alt={organization.name}
                                                                    className="w-full h-full object-cover rounded-lg"
                                                                />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faBuilding} className="text-indigo-500" />
                                                            )}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-start justify-between">
                                                                <div>
                                                                    <h3 className="font-semibold text-gray-900 truncate">{organization.name}</h3>
                                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(organization.is_active)}`}>
                                                                        {organization.is_active || 'Inactive'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3 space-y-2">
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                                                                    <span className="truncate">{organization.contact_email}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                                                                    <span className="truncate">{organization.address || 'No address'}</span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 flex justify-end space-x-2">
                                                                <Link
                                                                    href={route('organizations.show', organization.id)}
                                                                    className="inline-flex items-center px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors"
                                                                >
                                                                    View
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <div className="h-20 w-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                                                <FontAwesomeIcon icon={faBuilding} className="text-gray-300 text-3xl" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Organizations</h3>
                                            <p className="text-gray-500 text-sm mb-6">
                                                Add your first organization to get started
                                            </p>
                                            <Link
                                                href={route('organizations.create')}
                                                className="inline-flex items-center space-x-2 bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                                <span>Create Organization</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        {organizationsLinks.length > 1 && (
                            <div className="mt-8 px-6">
                                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                                    <Pagination data={organizations} links={organizationsLinks} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
