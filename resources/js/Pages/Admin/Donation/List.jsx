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
                                    <th className="text-left px-3 py-5 border border-gray-300">#</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Image</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Title</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Item condition</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Donor Name</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Created At</th>
                                    <th className="text-left px-3 py-5 border border-gray-300">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {donations.data.length > 0 ? (
                                    donations.data.map((donation, index) => (
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-3 border border-gray-200 text-sm font-medium text-gray-800">
                                                {donations?.from + index}
                                            </td>
                                            <td className="p-3 border border-gray-200">
                                                <img className="w-[70px] h-[50px]"
                                                     src="https://static.vecteezy.com/system/resources/thumbnails/020/221/141/small_2x/1514-blue-bag-isolated-on-a-transparent-background-photo.jpg"
                                                     alt="School Bag"/>
                                            </td>
                                            <td className="p-3 border border-gray-200">{donation.title}</td>
                                            <td className="p-3 border border-gray-200">{donation.item_condition}</td>
                                            <td className="p-3 border border-gray-200">{donation.user.name}</td>
                                            <td className="p-3 border border-gray-200">{donation.created_at}</td>
                                            <td className="p-3 border border-gray-200">
                                                <button
                                                    className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                                                    <i
                                                        className="fas fa-edit"></i></button>
                                                <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                                    className="fas fa-trash"></i></button>
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
