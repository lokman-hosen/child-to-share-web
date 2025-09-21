import React from 'react';

const Index = () => {
    return (
        <div id="dashboard-page" className="page active-page">
            <div className="px-10 py-8">
                <div className="flex items-left mb-6">
                    <div className="md:hidden flex items-center">
                        <button type="button" id="sidebar-mobile-menu-button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mt-1">Donor Dashboard</h1>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                    <i className="fas fa-star text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Wishes Fulfilled</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">12</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                    <i className="fas fa-gift text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Active Donations</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">5</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                    <i className="fas fa-comments text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Unread Messages</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">2</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                                    <i className="fas fa-users text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Organizations</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">3</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg mb-8">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <ul className="divide-y divide-gray-200">
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-check-circle text-green-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">You fulfilled a wish for
                                            books</p>
                                        <p className="text-sm text-gray-500">2 hours ago • 3.2 km away</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-plus-circle text-blue-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">You created a new donation
                                            item</p>
                                        <p className="text-sm text-gray-500">1 day ago • Winter coat</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-comment text-yellow-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">New message from Emily's
                                            guardian</p>
                                        <p className="text-sm text-gray-500">2 days ago • Regarding book donation</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Wishes Near You</h3>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800"
                           onClick="showPage('browse-wishes-page')">View all</a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                                <span
                                    className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    3.2 km away
                                </span>
                            <div className="h-32 bg-blue-100 flex items-center justify-center">
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
                            <div className="h-32 bg-red-100 flex items-center justify-center">
                                <i className="fas fa-tshirt text-red-500 text-4xl"></i>
                            </div>
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                                <p className="mt-1 text-sm text-gray-500">Need a warm coat for winter, size 10-12</p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="font-medium text-blue-600">M</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Michael, 9</p>
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
                </div>
            </div>
        </div>
    );
};

export default Index;
