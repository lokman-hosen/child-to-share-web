import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React, { useState } from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faPlus, faTable, faGridHorizontal} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";

export default function List({module, wishes}) {
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

    const wishListData = wishes?.data || [];
    const wishesLinks = wishes?.links || [];

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
                                        Choose the wishes you want to fullfill
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
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="w-2xl space-y-8">

                                {/* Mobile Card View (Always for mobile) */}
                                <div className="md:hidden space-y-4">
                                    {wishListData.length > 0 ? (
                                        wishListData.map((wish, index) => (
                                            <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                                {/* Card Image */}
                                                <div className="relative">
                                                    <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                        {wish.featured_image?.file_path ? (
                                                            <img
                                                                src={`/storage/${wish.featured_image.file_path}`}
                                                                alt={wish.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faStar} className="text-gray-400 text-4xl" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* Status Badge */}
                                                    <div className="absolute top-3 right-3">
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                            {wish.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <div className="p-4">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                        {wish.title}
                                                    </h3>

                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Age Range:</span>
                                                            <span className="capitalize">{wish.age_range}</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Wisher:</span>
                                                            <span>{wish.user.name}</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="font-medium mr-2">Created:</span>
                                                            <span>{wish.created_at}</span>
                                                        </div>
                                                    </div>

                                                    {/* Action Button */}
                                                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                                        <span className="text-sm text-gray-500">
                                                            {wish.created_at}
                                                        </span>
                                                        <Link
                                                            href={route('wishes.show', wish.id)}
                                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                        >
                                                            Fulfill Wish
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <p className="text-gray-500 text-lg mb-2">No wishes found</p>
                                        </div>
                                    )}
                                </div>

                                {/* Desktop View - Table or Grid based on toggle */}
                                <div className="hidden md:block">
                                    {viewMode === 'table' ? (
                                        /* Table View */
                                        <div className="overflow-x-auto bg-white shadow rounded-lg px-1 py-2">
                                            <table className="wish-table w-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Item Info.</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Wisher Name</th>
                                                    <th className="text-right px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {wishListData.length > 0 ? (
                                                    wishListData.map((wish, index) => (
                                                        <tr key={wish.id} className="hover:bg-gray-50 transition-colors">
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                                                            {wish.featured_image?.file_path ? (
                                                                                <img
                                                                                    src={`/storage/${wish.featured_image.file_path}`}
                                                                                    alt={wish.title}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                                                    <FontAwesomeIcon icon={faStar} className="text-gray-400"/>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className="text-lg font-medium text-gray-900">{wish.title}</h3>
                                                                            <p className="text-sm text-gray-500">Age range: {wish.age_range}, {textLimit(wish.description,10)}</p>
                                                                            <div className="mt-1 flex items-center">
                                                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                                {wish.status}
                                                                            </span>
                                                                            <span
                                                                                className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                                                {wish.created_at}
                                                                            </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </td>
                                                            <td className="p-6 border-b border-gray-100 text-gray-900 font-medium">
                                                                {wish.user.name}
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex flex-col items-end">
                                                                    <div className="mt-2">
                                                                        <Link
                                                                            href={route('wishes.show', wish.id)}
                                                                            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                                            Fulfill Wish
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="px-6 py-12 text-center">
                                                            <div className="text-center">
                                                                <p className="text-gray-500 text-lg mb-2">No wishes found</p>
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
                                            {wishListData.length > 0 ? (
                                                wishListData.map((wish, index) => (
                                                    <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                                        {/* Card Image */}
                                                        <div className="relative">
                                                            <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                                {wish.featured_image?.file_path ? (
                                                                    <img
                                                                        src={`/storage/${wish.featured_image.file_path}`}
                                                                        alt={wish.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                        <FontAwesomeIcon icon={faStar} className="text-gray-400 text-5xl" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* Status Badge */}
                                                            <div className="absolute top-3 right-3">
                                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(wish.status)}`}>
                                                                    {wish.status}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Card Content */}
                                                        <div className="p-5">
                                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                                {wish.title}
                                                            </h3>

                                                            <div className="space-y-2 mb-4">
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <span className="font-medium mr-2">Age Range:</span>
                                                                    <span className="capitalize">{wish.age_range}</span>
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-600">
                                                                    <span className="font-medium mr-2">Wisher:</span>
                                                                    <span>{wish.user.name}</span>
                                                                </div>
                                                            </div>

                                                            {/* Action Button */}
                                                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                                <span className="text-sm text-gray-500">
                                                                    {wish.created_at}
                                                                </span>
                                                                <Link
                                                                    href={route('wishes.show', wish.id)}
                                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                                >
                                                                    Fulfill Wish
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-span-full text-center py-12">
                                                    <p className="text-gray-500 text-lg mb-2">No wishes found</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                {wishesLinks.length > 1 && <Pagination data={wishes} links={wishesLinks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
