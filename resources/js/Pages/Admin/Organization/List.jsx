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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Organization List</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="w-2xl space-y-8">
                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="organization-table w-full">
                                <thead>
                                <tr>
                                    <th className="text-left p-3 border border-gray-300">#</th>
                                    <th className="text-left p-3 border border-gray-300">Logo</th>
                                    <th className="text-left p-3 border border-gray-300">Name</th>
                                    <th className="text-left p-3 border border-gray-300">Phone</th>
                                    <th className="text-left p-3 border border-gray-300">Email</th>
                                    <th className="text-left p-3 border border-gray-300">Address</th>
                                    <th className="text-left p-3 border border-gray-300">Description</th>
                                    <th className="text-left p-3 border border-gray-300">Created At</th>
                                    <th className="text-left p-3 border border-gray-300">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">1</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png" alt="Charity Foundation Logo"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Hope Charity Foundation</td>
                                    <td className="p-3 border border-gray-300">+1-555-0123</td>
                                    <td className="p-3 border border-gray-300">contact@hopefoundation.org</td>
                                    <td className="p-3 border border-gray-300">123 Main Street, New York, NY</td>
                                    <td className="p-3 border border-gray-300">Providing education support for underprivileged children</td>
                                    <td className="p-3 border border-gray-300">2023-08-15</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">2</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2017/01/31/14/26/charity-2025118_1280.png" alt="Green Earth Logo"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Green Earth Initiative</td>
                                    <td className="p-3 border border-gray-300">+1-555-0456</td>
                                    <td className="p-3 border border-gray-300">info@greenearth.org</td>
                                    <td className="p-3 border border-gray-300">456 Oak Avenue, San Francisco, CA</td>
                                    <td className="p-3 border border-gray-300">Environmental conservation and sustainability projects</td>
                                    <td className="p-3 border border-gray-300">2023-07-22</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">3</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2016/08/25/07/30/red-cross-1618908_1280.png" alt="Health Aid Logo"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Health Aid International</td>
                                    <td className="p-3 border border-gray-300">+1-555-0789</td>
                                    <td className="p-3 border border-gray-300">support@healthaid.org</td>
                                    <td className="p-3 border border-gray-300">789 Health Drive, Chicago, IL</td>
                                    <td className="p-3 border border-gray-300">Medical assistance and healthcare services worldwide</td>
                                    <td className="p-3 border border-gray-300">2023-09-10</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">4</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png" alt="Education First Logo"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Education First Alliance</td>
                                    <td className="p-3 border border-gray-300">+1-555-0321</td>
                                    <td className="p-3 border border-gray-300">admin@educationfirst.org</td>
                                    <td className="p-3 border border-gray-300">321 Learning Lane, Boston, MA</td>
                                    <td className="p-3 border border-gray-300">Promoting access to quality education for all children</td>
                                    <td className="p-3 border border-gray-300">2023-06-05</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-3 border border-gray-300 text-sm font-medium text-gray-800">5</td>
                                    <td className="p-3 border border-gray-300">
                                        <img className="w-[100px]" src="https://cdn.pixabay.com/photo/2017/01/31/14/26/charity-2025118_1280.png" alt="Animal Rescue Logo"/>
                                    </td>
                                    <td className="p-3 border border-gray-300">Animal Rescue Network</td>
                                    <td className="p-3 border border-gray-300">+1-555-0654</td>
                                    <td className="p-3 border border-gray-300">help@animalrescue.org</td>
                                    <td className="p-3 border border-gray-300">654 Pet Way, Seattle, WA</td>
                                    <td className="p-3 border border-gray-300">Rescuing and rehabilitating abandoned animals</td>
                                    <td className="p-3 border border-gray-300">2023-08-30</td>
                                    <td className="p-3 border border-gray-300">
                                        <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i className="fas fa-edit"></i></button>
                                        <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i className="fas fa-trash"></i></button>
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
