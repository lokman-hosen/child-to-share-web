import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    return (
        <AuthenticatedLayout>
            <Head title="Wishes"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wishes</h1>

                <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex">
                            <a href="#"
                               className="border-b-2 border-purple-500 text-purple-600 px-4 py-4 text-sm font-medium">Active
                                (3)</a>
                            <a href="#"
                               className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">Fulfilled
                                (5)</a>
                            <a href="#"
                               className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium">All
                                Wishes (8)</a>
                        </nav>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        <li className="p-4 sm:p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div
                                        className="h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                                        <i className="fas fa-paint-brush text-purple-500 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                                        <p className="text-sm text-gray-500">Paints, brushes and canvases for art
                                            class</p>
                                        <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Pending
                                                </span>
                                            <span
                                                className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Created 3 days ago
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
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
                                        className="h-16 w-16 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                                        <i className="fas fa-book-open text-blue-500 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                                        <p className="text-sm text-gray-500">Children's story books for 7-year-old</p>
                                        <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Fulfilled
                                                </span>
                                            <span
                                                className="ml-2 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Contributor: Sarah Johnson
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="mt-2">
                                        <button
                                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                                            Confirm Receipt
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
                                        <i className="fas fa-tshirt text-red-500 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                                        <p className="text-sm text-gray-500">Size 10-12, for winter season</p>
                                        <div className="mt-1 flex items-center">
                                                <span
                                                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    In Progress
                                                </span>
                                            <span
                                                className="ml-2 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    Contributor: Robert Chen
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
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

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Wish History</h2>
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wish
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contributor
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-book-open text-blue-500"></i>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">Story Books</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Fulfilled</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 days ago</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sarah Johnson</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 bg-yellow-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-laptop text-yellow-500"></i>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">Laptop</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Fulfilled</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 week ago</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Michael Brown</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mr-4">
                                            <i className="fas fa-dumbbell text-green-500"></i>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">Soccer Equipment</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Fulfilled</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 weeks ago</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Community Center</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
