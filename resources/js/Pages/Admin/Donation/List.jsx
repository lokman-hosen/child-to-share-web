import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Pagination from "@/Components/Admin/Pagination.jsx";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation List"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Donations List</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="w-2xl space-y-8">
                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="wish-table w-full">
                                <thead>
                                <tr>
                                    <th className="text-left p-3 border border-gray-300">#</th>
                                    <th className="text-left p-3 border border-gray-300">Image</th>
                                    <th className="text-left p-3 border border-gray-300">Title</th>
                                    <th className="text-left p-3 border border-gray-300">Note/Description</th>
                                    <th className="text-left p-3 border border-gray-300">Donor Name</th>
                                    <th className="text-left p-3 border border-gray-300">Created At</th>
                                    <th className="text-left p-3 border border-gray-300">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">1</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[70px] h-[50px]"
                                             src="https://static.vecteezy.com/system/resources/thumbnails/020/221/141/small_2x/1514-blue-bag-isolated-on-a-transparent-background-photo.jpg"
                                             alt="School Bag"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">School Supplies</td>
                                    <td className="p-3 border border-gray-300">Backpack with notebooks and pens</td>
                                    <td className="p-3 border border-gray-300">John Smith</td>
                                    <td className="p-3 border border-gray-300">2023-10-15</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                            className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                            className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">2</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[70px] h-[50px]"
                                             src="https://cdn.pixabay.com/photo/2014/08/26/21/49/books-428630_1280.jpg"
                                             alt="Books"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Children's Books</td>
                                    <td className="p-3 border border-gray-300">Educational books for elementary
                                        students
                                    </td>
                                    <td className="p-3 border border-gray-300">Sarah Johnson</td>
                                    <td className="p-3 border border-gray-300">2023-10-12</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                            className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                            className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">3</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[70px] h-[50px]"
                                             src="https://4.imimg.com/data4/NV/IH/MY-31881389/double-bed-mink-blanket.jpg"
                                             alt="Blanket"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Winter Blankets</td>
                                    <td className="p-3 border border-gray-300">Warm blankets for homeless shelter</td>
                                    <td className="p-3 border border-gray-300">Michael Brown</td>
                                    <td className="p-3 border border-gray-300">2023-10-08</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                            className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                            className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">4</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[70px] h-[50px]"
                                             src="https://static.scientificamerican.com/dam/m/2c8de8307baf9122/original/Processed_food.jpg"
                                             alt="Food"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Canned Food</td>
                                    <td className="p-3 border border-gray-300">Non-perishable food items for food bank
                                    </td>
                                    <td className="p-3 border border-gray-300">Emily Davis</td>
                                    <td className="p-3 border border-gray-300">2023-10-05</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                            className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                            className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">5</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[70px] h-[50px]"
                                             src="https://t3.ftcdn.net/jpg/02/46/70/82/360_F_246708269_WzeXfbrGzkX5axOatRwF0kagyBtGjXh5.jpg"
                                             alt="Medical Supplies"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Medical Kits</td>
                                    <td className="p-3 border border-gray-300">First aid supplies for community clinic
                                    </td>
                                    <td className="p-3 border border-gray-300">Robert Wilson</td>
                                    <td className="p-3 border border-gray-300">2023-10-01</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                            className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                            className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
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
