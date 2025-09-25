import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation List"/>
            <div className="px-10 py-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">My Donations</h1>

                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex">
                                <a href="#"
                                   className="border-b-2 border-blue-500 text-blue-600 px-4 py-4 text-sm font-medium">Active
                                    (5)</a>
                                <a href="#"
                                   className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">Pending
                                    (2)</a>
                                <a href="#"
                                   className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">Completed
                                    (12)</a>
                            </nav>
                        </div>

                        <ul className="divide-y divide-gray-200">
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-16 w-16 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-tshirt text-blue-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                                            <p className="text-sm text-gray-500">Size 10-12, Good condition</p>
                                            <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Clothing
                                                </span>
                                                <span
                                                    className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Pending pickup
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-500">Created 2 days ago</p>
                                        <div className="mt-2">
                                            <button
                                                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-16 w-16 bg-green-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-book-open text-green-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Children's Story
                                                Books</h3>
                                            <p className="text-sm text-gray-500">Set of 12 books, Like new</p>
                                            <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Books
                                                </span>
                                                <span
                                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Fulfilling wish
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-500">Created 5 days ago</p>
                                        <div className="mt-2">
                                            <button
                                                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-16 w-16 bg-yellow-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-laptop text-yellow-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Laptop</h3>
                                            <p className="text-sm text-gray-500">Dell Inspiron, 8GB RAM, Good
                                                condition</p>
                                            <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Electronics
                                                </span>
                                                <span
                                                    className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Available
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-500">Created 1 week ago</p>
                                        <div className="mt-2">
                                            <button
                                                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-16 w-16 bg-red-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-dumbbell text-red-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Soccer Equipment</h3>
                                            <p className="text-sm text-gray-500">Ball, cones, and practice jersey</p>
                                            <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Sports
                                                </span>
                                                <span
                                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Fulfilling wish
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-500">Created 1 week ago</p>
                                        <div className="mt-2">
                                            <button
                                                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-paint-brush text-purple-500 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                                            <p className="text-sm text-gray-500">Paints, brushes, and canvases</p>
                                            <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Art
                                                </span>
                                                <span
                                                    className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Available
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-gray-500">Created 2 weeks ago</p>
                                        <div className="mt-2">
                                            <button
                                                className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
