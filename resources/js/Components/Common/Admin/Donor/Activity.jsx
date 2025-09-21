import React from 'react';
import {Link} from "@inertiajs/react";

const Activity = () => {
    return (
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
    );
};

export default Activity;
