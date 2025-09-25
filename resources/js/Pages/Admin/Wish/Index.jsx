import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Wishes"/>
            <div id="browse-wishes-page">
                    <div className="px-10 py-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Browse Wishes</h1>

                        <div className="bg-white shadow rounded-lg p-4 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Search
                                        Radius</label>
                                    <select
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                        <option>10 km</option>
                                        <option>25 km</option>
                                        <option>50 km</option>
                                        <option>100 km</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                        <option>All Categories</option>
                                        <option>Books</option>
                                        <option>Clothing</option>
                                        <option>Toys</option>
                                        <option>Electronics</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                                    <select
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                        <option>Any Age</option>
                                        <option>0-5 years</option>
                                        <option>6-10 years</option>
                                        <option>11-15 years</option>
                                        <option>16+ years</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                                    <select
                                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                        <option>All Organizations</option>
                                        <option>Community Center A</option>
                                        <option>School B</option>
                                        <option>Youth Program C</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <i className="fas fa-filter mr-2"></i> Apply Filters
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                3.2 km away
                            </span>
                                <div className="h-40 bg-blue-100 flex items-center justify-center">
                                    <i className="fas fa-book-open text-blue-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                                    <p className="mt-1 text-sm text-gray-500">Looking for children's story books for my
                                        7-year-old</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                <span className="font-medium text-green-600">E</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                Community Center A
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                5.7 km away
                            </span>
                                <div className="h-40 bg-red-100 flex items-center justify-center">
                                    <i className="fas fa-tshirt text-red-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                                    <p className="mt-1 text-sm text-gray-500">Need a warm coat for winter, size
                                        10-12</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <span className="font-medium text-blue-600">M</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Michael, 9</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                School B
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                8.1 km away
                            </span>
                                <div className="h-40 bg-yellow-100 flex items-center justify-center">
                                    <i className="fas fa-laptop text-yellow-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Laptop for School</h3>
                                    <p className="mt-1 text-sm text-gray-500">Need a laptop for online learning and
                                        homework</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                                <span className="font-medium text-purple-600">J</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Jessica, 15</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                Youth Program C
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                2.5 km away
                            </span>
                                <div className="h-40 bg-green-100 flex items-center justify-center">
                                    <i className="fas fa-bicycle text-green-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Bicycle</h3>
                                    <p className="mt-1 text-sm text-gray-500">Looking for a bicycle to get to school and
                                        work</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                                <span className="font-medium text-red-600">D</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">David, 16</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                Community Center A
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                6.3 km away
                            </span>
                                <div className="h-40 bg-pink-100 flex items-center justify-center">
                                    <i className="fas fa-dumbbell text-pink-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Sports Equipment</h3>
                                    <p className="mt-1 text-sm text-gray-500">Need soccer ball and other sports
                                        equipment for team</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                                <span className="font-medium text-indigo-600">S</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Sam, 14</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                School B
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                            <span
                                className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                4.8 km away
                            </span>
                                <div className="h-40 bg-indigo-100 flex items-center justify-center">
                                    <i className="fas fa-paint-brush text-indigo-500 text-4xl"></i>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                                    <p className="mt-1 text-sm text-gray-500">Looking for paints, brushes and canvases
                                        for art class</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                                                <span className="font-medium text-pink-600">A</span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Anna, 12</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <i className="fas fa-building mr-1"></i>
                                                Youth Program C
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <a href="#"
                                       onClick="showPage('messages-page')"
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <i className="fas fa-star mr-2"></i> Fulfill Wish
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-8">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span
                                        className="font-medium">6</span> of <span
                                        className="font-medium">24</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                         aria-label="Pagination">
                                        <a href="#"
                                           className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            <span className="sr-only">Previous</span>
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                        <a href="#"
                                           className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                                        <a href="#"
                                           className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                                        <a href="#"
                                           className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                                        <a href="#"
                                           className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                            <span className="sr-only">Next</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
