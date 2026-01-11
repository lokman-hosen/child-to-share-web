import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React, { useState } from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPlus,
    faTable,
    faGridHorizontal,
    faEye,
    faArrowRightArrowLeft, faGifts
} from "@fortawesome/free-solid-svg-icons";
import {getFulfilmentStatus, textLimit} from "@/utils.jsx";

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
                                        Choose the wishes you want to fulfill
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
                                {/* Mobile Card View (Always for mobile) */}
                                <div className="md:hidden space-y-4">
                                    {wishListData.length > 0 ? (
                                        wishListData.map((wish, index) => (
                                            <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                                {/* Card Header with Status */}
                                                <div
                                                    className="flex justify-between items-start p-4 border-b border-gray-100">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                                                            {wish.featured_image?.file_path ? (
                                                                <img
                                                                    src={`/storage/${wish.featured_image.file_path}`}
                                                                    alt={wish.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <div
                                                                    className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="text-gray-400"/>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                                                                {wish.title}
                                                            </h3>
                                                            <p className="text-xs text-gray-500">
                                                                Age range: {wish.age_range}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wish.status === 'fulfilled' ? 'bg-indigo-100 text-indigo-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {wish.status}
                                                    </span>
                                                </div>

                                                {/* Card Content */}
                                                <div className="p-4">
                                                    {/* Item Information */}
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Item
                                                            Information</h4>
                                                        <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                                                            {textLimit(wish.description, 30)}
                                                        </p>
                                                        <div className="flex items-center text-xs text-gray-500">
                                                            <span className="mr-2">Created:</span>
                                                            <span>{wish.created_at}</span>
                                                        </div>
                                                    </div>

                                                    {/* Wisher Information */}
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Wisher</h4>
                                                        <div className="flex items-center space-x-3">
                                                            <div
                                                                className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden border-2 border-white">
                                                                {wish.user.image ? (
                                                                    <img
                                                                        src={`/storage/${wish.user.image}`}
                                                                        alt={wish.user.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <FontAwesomeIcon icon={faStar}
                                                                                     className="text-purple-400 text-sm"/>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-900">{wish.user.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Distance and Fulfillment Status in one row */}
                                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <h4 className="text-sm font-medium text-gray-700 mb-1">Distance</h4>
                                                            <p className="text-sm text-gray-900 font-medium">
                                                                {wish.distance ? `${wish.distance}km` : 'n/a'}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            {/*<h4 className="text-sm font-medium text-gray-700 mb-1">Fulfillment</h4>*/}
                                                            <div>
                                                                {wish.latest_fulfillment ? (
                                                                    <span
                                                                        className="inline-flex items-center px-3 py-1 border border-blue-500 rounded-md text-sm font-medium text-white bg-blue-500">
                                                                      {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="inline-flex items-center px-3 py-1 border border-blue-500 rounded-md text-sm font-medium text-white bg-blue-500">
                                                                    {wish.status}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="pt-3 border-t border-gray-100">
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {/* Fulfill Wish Button */}
                                                            {!wish.latest_fulfillment ? (
                                                                <Link
                                                                    href={route('wish.fulfill.detail', wish.id)}
                                                                    className="inline-flex items-center justify-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200 w-full"
                                                                    title="Fulfill Wish"
                                                                >
                                                                    <FontAwesomeIcon icon={faGifts} size="md"/>
                                                                    <span className="ml-2">Fulfill Wish</span>
                                                                </Link>
                                                            ) : wish.latest_fulfillment?.status ? (
                                                                <Link
                                                                    href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})}
                                                                    className="w-full"
                                                                >
                                                                    <span
                                                                        className="inline-flex items-center justify-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200 w-full"
                                                                        title="Fulfillment Detail"
                                                                    >
                                                                        <FontAwesomeIcon icon={faArrowRightArrowLeft} size="md"/>
                                                                        <span className="ml-2">View Fulfillment</span>
                                                                    </span>
                                                                </Link>
                                                            ) : null
                                                            }

                                                            {/* View Detail Button */}
                                                            <Link
                                                                href={route('wish.show', wish.id)}
                                                                className="inline-flex items-center justify-center px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-600 transition-colors duration-200 w-full"
                                                                title="View Detail"
                                                            >
                                                                <FontAwesomeIcon icon={faEye} size="md"/>
                                                                <span className="ml-2">View Details</span>
                                                            </Link>
                                                        </div>
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
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Item
                                                        Info.
                                                    </th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Wisher</th>
                                                    <th className="text-left px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Distance</th>
                                                    <th className="text-center px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Fulfilment
                                                        status
                                                    </th>
                                                    <th className="text-center px-6 py-4 border-b-2 border-gray-300 font-semibold text-gray-700">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                {wishListData.length > 0 ? (
                                                    wishListData.map((wish, index) => (
                                                        <tr key={wish.id}
                                                            className="hover:bg-gray-50 transition-colors">
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div
                                                                            className="h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                                                            {wish.featured_image?.file_path ? (
                                                                                <img
                                                                                    src={`/storage/${wish.featured_image.file_path}`}
                                                                                    alt={wish.title}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <div
                                                                                    className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                                                    <FontAwesomeIcon icon={faStar}
                                                                                                     className="text-gray-400"/>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <h3 className="text-lg font-medium text-gray-900">{wish.title}</h3>
                                                                            <p className="text-sm text-gray-500">Age
                                                                                range: {wish.age_range}, {textLimit(wish.description, 10)}</p>
                                                                            <div className="mt-1 flex items-center">
                                                                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wish.status === 'fulfilled' ? 'bg-indigo-100 text-indigo-800' : 'bg-yellow-100 text-yellow-800'}`}>
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
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex items-center">
                                                                    {/* Avatar Container - More elegant design */}
                                                                    <div className="relative group">
                                                                        {/* Image Container with enhanced styling */}
                                                                        <div
                                                                            className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-white group-hover:scale-105">
                                                                            {wish.user.image ? (
                                                                                <img
                                                                                    src={`/storage/${wish.user.image}`}
                                                                                    alt={wish.user.name}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            ) : (
                                                                                <div
                                                                                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
                                                                                    <FontAwesomeIcon
                                                                                        icon={faStar}
                                                                                        className="text-2xl text-gradient-to-r from-purple-400 to-pink-500"
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* Optional subtle glow effect on hover */}
                                                                        <div
                                                                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                                                                    </div>

                                                                    {/* Name with enhanced typography */}
                                                                    <div>
                                                                        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
                                                                            {wish.user.name}
                                                                        </h3>
                                                                        {/* Optional subtitle/tagline */}
                                                                        <p className="text-sm text-gray-500 mt-1 flex items-center">
                                                                            <FontAwesomeIcon icon={faStar} className="text-red-400 mr-2 text-xs"/>
                                                                            Wish Maker
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100 text-gray-900 font-medium">
                                                                {wish.distance ? `${wish.distance + 'km'}` : 'n/a'}
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex flex-col items-center">
                                                                    <div className="mt-2">
                                                                        { wish.latest_fulfillment ? (
                                                                            <span
                                                                                className="inline-flex items-center px-3 py-1 border border-blue-500 rounded-md text-sm text-white bg-blue-500">
                                                                              {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                                            </span>
                                                                        ) : (
                                                                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${wish.status === 'fulfilled' ? 'bg-indigo-100 text-indigo-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                                {wish.status}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="p-6 border-b border-gray-100">
                                                                <div className="flex flex-col items-end">
                                                                    <div className="mt-2">
                                                                        { wish.status == 'Fulfilled' ? (
                                                                                <Link
                                                                                    href={route('wish.fulfill.status.change',{'fulfilment_id': wish.latest_fulfillment?.id})}
                                                                                >
                                                                                <span
                                                                                    className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                                                                                    title="Fulfillment Detail"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} size="md"/>
                                                                                </span>
                                                                                </Link>
                                                                            ) : !wish.latest_fulfillment ? (
                                                                            <Link
                                                                                href={route('wish.fulfill.detail', wish.id)}
                                                                                className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                                                                                title="Fulfill Wish"
                                                                            >
                                                                                <FontAwesomeIcon icon={faGifts} size="md"/>
                                                                            </Link>
                                                                        ) : wish.latest_fulfillment?.status ? (
                                                                            <Link
                                                                            href={route('wish.fulfill.status.change',{'fulfilment_id': wish.latest_fulfillment?.id})}
                                                                            >
                                                                                <span
                                                                                    className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                                                                                    title="Fulfillment Detail"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} size="md"/>
                                                                                </span>
                                                                            </Link>
                                                                        ) : null

                                                                        }
                                                                        <Link
                                                                            href={route('wish.show', wish.id)}
                                                                            className="ml-2 inline-flex items-center px-2 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-500 transition-colors duration-200"
                                                                            title="View Detail"
                                                                        >
                                                                            <FontAwesomeIcon icon={faEye} size="md"/>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="px-6 py-12 text-center">
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
                                                    <div key={wish.id}
                                                         className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                                        {/* Card Image */}
                                                        <div className="relative">
                                                            <div
                                                                className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                                                {wish.featured_image?.file_path ? (
                                                                    <img
                                                                        src={`/storage/${wish.featured_image.file_path}`}
                                                                        alt={wish.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                                        <FontAwesomeIcon icon={faStar} className="text-gray-400 text-5xl" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* Status Badge */}
                                                            <div className="absolute top-3 right-3">
                                                                { wish.latest_fulfillment ? (
                                                                    <span
                                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-500">
                                                                      {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                                                    </span>
                                                                ) : (
                                                                    <span
                                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-500">
                                                                    {wish.status}
                                                                    </span>
                                                                )}
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
                                                                { wish.latest_fulfillment?.status === 'requested' ? (
                                                                    <Link
                                                                        href={route('wish.fulfill.detail', wish.id)}
                                                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                                    >
                                                                        Fulfill Wish
                                                                    </Link>
                                                                ) : (
                                                                    <span
                                                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                                                    Fulfillment Detail
                                                                    </span>
                                                                )}
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
