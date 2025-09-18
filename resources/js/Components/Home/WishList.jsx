import React from 'react';
import {Link} from "@inertiajs/react";

const WishList = () => {
    return (
        <section id="wishes" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Wishes from Children</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card wish-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-purple-100 flex items-center justify-center">
                            <i className="fas fa-book-open text-purple-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                            <p className="text-gray-600 text-sm mt-1">Looking for children's story books for my
                                7-year-old</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-purple-600 font-medium">E</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                    <p className="text-xs text-gray-500">3.2 km away</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card wish-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-blue-100 flex items-center justify-center">
                            <i className="fas fa-tshirt text-blue-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                            <p className="text-gray-600 text-sm mt-1">Need a warm coat for winter, size 10-12</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-blue-600 font-medium">M</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Michael, 9</p>
                                    <p className="text-xs text-gray-500">5.7 km away</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card wish-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-yellow-100 flex items-center justify-center">
                            <i className="fas fa-laptop text-yellow-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Laptop for School</h3>
                            <p className="text-gray-600 text-sm mt-1">Need a laptop for online learning and homework</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-yellow-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-yellow-600 font-medium">J</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Jessica, 15</p>
                                    <p className="text-xs text-gray-500">8.1 km away</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        <Link
                            href={route('register')}
                            className="text-blue-600 mr-1">
                            Sign Up
                        </Link>
                        to see more
                        <Link
                            href={route('register')}
                            className="text-blue-600 mx-1">
                            wishes
                        </Link>
                        and fulfill them
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WishList;
