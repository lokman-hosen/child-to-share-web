import React from 'react';
import {Link} from "@inertiajs/react";

const WishList = () => {
    return (
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
    );
};

export default WishList;
