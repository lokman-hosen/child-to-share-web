
import React from 'react';
import Activity from "@/Components/Common/Admin/Donor/Activity.jsx";
import Cards from "@/Components/Common/Admin/Donor/Cards.jsx";
import WishList from "@/Components/Common/Admin/Donor/WishList.jsx";

const AdminDashboard = () => {
    return (
        <div id="dashboard-page" className="page active-page">
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg data-card">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                                    <i className="fas fa-users text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Pending Users</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">5</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500"
                                   onClick="showPage('user-management-page')">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg data-card">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                    <i className="fas fa-clipboard-check text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Pending Moderation
                                        </dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">12</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500"
                                   onClick="showPage('content-moderation-page')">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg data-card">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                    <i className="fas fa-inbox text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Fulfilment
                                            Requests
                                        </dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">8</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500"
                                   onClick="showPage('admin-inbox-page')">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg data-card">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                    <i className="fas fa-tasks text-white"></i>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Active Tasks</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">15</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500"
                                   onClick="showPage('logistics-page')">
                                    View all
                                </a>
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
                                    <div className="bg-red-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-user-plus text-red-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">New user registration requires
                                            approval</p>
                                        <p className="text-sm text-gray-500">Community Leader application from John
                                            Smith</p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="text-xs text-gray-500">10 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center">
                                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Content flagged for review</p>
                                        <p className="text-sm text-gray-500">Wish item "Winter Coat" flagged by
                                            automated system</p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="text-xs text-gray-500">45 minutes ago</span>
                                    </div>
                                </div>
                            </li>
                            <li className="p-4 sm:p-6">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                                        <i className="fas fa-gift text-blue-600"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">New Fulfilment request</p>
                                        <p className="text-sm text-gray-500">Contributor Sarah Johnson wants to fulfill a wish
                                            for books</p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="text-xs text-gray-500">2 hours ago</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <a href="#" className="quick-action" onClick="showPage('user-management-page')">
                            <div className="bg-red-100 p-3 rounded-md inline-flex">
                                <i className="fas fa-user-check text-red-600 text-xl"></i>
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-900">Approve Users</p>
                        </a>
                        <a href="#" className="quick-action" onClick="showPage('content-moderation-page')">
                            <div className="bg-yellow-100 p-3 rounded-md inline-flex">
                                <i className="fas fa-eye text-yellow-600 text-xl"></i>
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-900">Moderate Content</p>
                        </a>
                        <a href="#" className="quick-action" onClick="showPage('admin-inbox-page')">
                            <div className="bg-blue-100 p-3 rounded-md inline-flex">
                                <i className="fas fa-inbox text-blue-600 text-xl"></i>
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-900">Process Requests</p>
                        </a>
                        <a href="#" className="quick-action" onClick="showPage('org-management-page')">
                            <div className="bg-green-100 p-3 rounded-md inline-flex">
                                <i className="fas fa-building text-green-600 text-xl"></i>
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-900">Manage Orgs</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
