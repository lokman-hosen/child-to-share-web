import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";

export default function List({module, donations}) {
    return (
        <AuthenticatedLayout>
            <Head title="Donation List"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Donations List</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="w-2xl space-y-8">
                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="wish-table w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    {/*<th className="text-left px-3 py-5 border border-gray-300">#</th>*/}
                                    <th className="text-left px-3 py-5 border border-gray-300">Item Info.</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Donor Name</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {donations.data.length > 0 ? (
                                    donations.data.map((donation, index) => (
                                        <tr className="hover:bg-gray-50">
                                            {/*<td className="px-3 border border-gray-200 text-sm font-medium text-gray-800">*/}
                                            {/*    {donations?.from + index}*/}
                                            {/*</td>*/}
                                            <td className="p-3 border border-gray-200">
                                                <div className="flex items-center">
                                                    <div
                                                        className="h-16 w-16 bg-blue-100 rounded-md flex items-center justify-center mr-4">

                                                        {donation.featuredImage?.file_path ? (
                                                            <img
                                                                src={donation.featuredImage?.file_path}
                                                                alt={`${donation.name}'s image`}
                                                                className="h-10 w-10 rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm">
                                                                <img
                                                                    src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                                                                    alt={`${donation.name}'s image`}
                                                                    className="h-10 w-10 rounded-full object-cover"
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
                                            <td className="p-3 border border-gray-200">{donation.user.name}</td>
                                            <td className="p-3 border border-gray-200">
                                                <div className="flex flex-col items-end">
                                                    <p className="text-sm text-gray-500">Created {donation.created_at}</p>
                                                    <div className="mt-2">
                                                        <button
                                                            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="px-4 py-3 text-center text-gray-500 text-sm"
                                        >
                                            No users found
                                        </td>
                                    </tr>
                                )}

                                </tbody>
                            </table>
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
