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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Gifts List</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="w-2xl space-y-8">
                        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex">
                                    <a href="#"
                                       className="border-b-2 border-red-500 text-red-600 px-4 py-4 text-sm font-medium">Fulfilment
                                        Requests (8)</a>
                                    <a href="#"
                                       className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">Pickup
                                        Requests (3)</a>
                                    <a href="#"
                                       className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">All
                                        Messages (24)</a>
                                </nav>
                            </div>

                            <div className="px-4 py-4 bg-gray-50 flex items-center justify-between">
                                <div className="flex-1">
                                    <input type="text" placeholder="Search requests..."
                                           className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"/>
                                </div>
                                <div className="ml-3">
                                    <select
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                                        <option>All Statuses</option>
                                        <option>New</option>
                                        <option>In Progress</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                            </div>

                            <ul className="divide-y divide-gray-200">
                                <li className="p-4 sm:p-6 task-highlight">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div
                                                className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                                <span className="font-medium text-blue-600">S</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Book Gift
                                                    Fulfilment</h3>
                                                <p className="text-sm text-gray-500">Contributor: Sarah Johnson → Wisher:
                                                    Emily, 7</p>
                                                <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    New Request
                                                </span>
                                                    <span
                                                        className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    3.2 km distance
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end space-y-2">
                                            <div className="flex space-x-2">
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                                                    Assign to Me
                                                </button>
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                    View Details
                                                </button>
                                            </div>
                                            <span className="text-xs text-gray-500">Received 2 hours ago</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div
                                                className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                                <span className="font-medium text-green-600">R</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Winter Coat
                                                    Fulfilment</h3>
                                                <p className="text-sm text-gray-500">Contributor: Robert Chen → Wisher:
                                                    Michael, 9</p>
                                                <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    In Progress
                                                </span>
                                                    <span
                                                        className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    5.7 km distance
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end space-y-2">
                                            <div className="flex space-x-2">
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                                                    Complete
                                                </button>
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                    View Details
                                                </button>
                                            </div>
                                            <span
                                                className="text-xs text-gray-500">Assigned to you • Started 1 day ago</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div
                                                className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                                <span className="font-medium text-purple-600">M</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Pickup Assistance
                                                    Request</h3>
                                                <p className="text-sm text-gray-500">Guardian: Maria Johnson → Contributor:
                                                    Sarah Johnson</p>
                                                <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    New Request
                                                </span>
                                                    <span
                                                        className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    3.2 km distance
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end space-y-2">
                                            <div className="flex space-x-2">
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                                                    Assign to Me
                                                </button>
                                                <button
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                    View Details
                                                </button>
                                            </div>
                                            <span className="text-xs text-gray-500">Received 3 hours ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Request Statistics</h2>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-red-600">8</div>
                                    <div className="text-sm font-medium text-gray-700">New Requests</div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">5</div>
                                    <div className="text-sm font-medium text-gray-700">In Progress</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">32</div>
                                    <div className="text-sm font-medium text-gray-700">Completed Today</div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-yellow-600">2.3h</div>
                                    <div className="text-sm font-medium text-gray-700">Avg. Response Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
