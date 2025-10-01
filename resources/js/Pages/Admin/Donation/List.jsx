import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faList, faPlus, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Form from "@/Pages/Admin/Donation/Form.jsx";

export default function List({module, donations}) {

    const donationListData = donations?.data || [];
    const donationsLinks = donations?.links || [];

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
                                        icon={faGift}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        {module} Items
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Share your items and make wishes come true
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={route('donations.index')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faPlus} className="text-blue-600" />
                                <span>Create New</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <div className="w-2xl space-y-8">
                                <div className="overflow-x-auto bg-white shadow rounded-lg px-1 py-2">
                                    <table className="wish-table w-full">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            {/*<th className="text-left px-3 py-5 border border-gray-300">#</th>*/}
                                            <th className="text-left px-3 py-5 border-b-2 border-gray-300">Item Info.</th>
                                            <th className="text-left px-3 py-5 border-b-2 border-gray-300">Donor Name</th>
                                            <th className="text-right px-3 py-5 border-b-2 border-gray-300">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                        {donationListData.length > 0 ? (
                                            donationListData.map((donation, index) => (
                                                <tr className="hover:bg-gray-50">
                                                    {/*<td className="px-3 border border-gray-200 text-sm font-medium text-gray-800">*/}
                                                    {/*    {donations?.from + index}*/}
                                                    {/*</td>*/}
                                                    <td className="p-3 border-b-1 border-gray-100">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="h-[100px] w-[100px] bg-blue-100 rounded-md flex items-center justify-center mr-4 overflow-hidden border border-gray-100">
                                                                {donation.featured_image?.file_path ? (
                                                                    <img
                                                                        src={`/storage/${donation.featured_image.file_path}`}
                                                                        alt={`${donation.name}'s image`}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                                                        <img
                                                                            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                                                                            alt={`${donation.name}'s image`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <h3 className="text-lg font-medium text-gray-900">{donation.title}</h3>
                                                                <p className="text-sm text-gray-500">Condition: {donation.item_condition}</p>
                                                                <div className="mt-1 flex items-center">
                                                                    <span className="text-sm text-gray-500 mr-2">Tags:</span>
                                                                    {donation.auto_tags && (
                                                                        Array.isArray(donation.auto_tags)
                                                                            ? donation.auto_tags.map((tag, index) => (
                                                                                <span
                                                                                    key={index}
                                                                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                                                            {tag}
                                                                        </span>
                                                                            ))
                                                                            : donation.auto_tags.split(',').map((tag, index) => (
                                                                                <span
                                                                                    key={index}
                                                                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2"
                                                                                >
                                                                            {tag.trim()}
                                                                        </span>
                                                                            ))
                                                                    )}
                                                                </div>
                                                                <div className="mt-1 flex items-center">
                                                                    <span className="text-sm text-gray-500 mr-2">Status:</span>
                                                                    <span
                                                                        className="bg-yellow-300 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                            {donation.status}
                                                        </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 border-b-1 border-gray-100">{donation.user.name}</td>
                                                    <td className="p-3 border-b-1 border-gray-100">
                                                        <div className="flex flex-col items-end">
                                                            <p className="text-sm text-gray-500">Created {donation.created_at}</p>
                                                            <div className="mt-2">
                                                                <Link
                                                                    href={route('donations.show', donation.id)}
                                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                                    View Details
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="px-4 py-3 text-center text-gray-500 text-sm">
                                                    No data found.
                                                    <Link
                                                        href={route('donations.create')}
                                                        class="underline text-blue-500 ml-1">
                                                        create new
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}

                                        </tbody>
                                    </table>
                                </div>
                                {donationsLinks.length > 1 && <Pagination data={donations} links={donationsLinks} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
