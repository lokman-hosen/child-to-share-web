import React from 'react';
import {Link} from "@inertiajs/react";

const DonationList = () => {
    return (
        <section id="donations" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Donations Available</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card donation-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-green-100 flex items-center justify-center">
                            <i className="fas fa-bicycle text-green-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Bicycle</h3>
                            <p className="text-gray-600 text-sm mt-1">Good condition bicycle, perfect for a teenager</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-green-600 font-medium">D</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">David, 16</p>
                                    <p className="text-xs text-gray-500">2.5 km away</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card donation-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-red-100 flex items-center justify-center">
                            <i className="fas fa-dumbbell text-red-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Sports Equipment</h3>
                            <p className="text-gray-600 text-sm mt-1">Soccer ball and other sports equipment for
                                team</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-red-600 font-medium">S</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Sam, 14</p>
                                    <p className="text-xs text-gray-500">6.3 km away</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card donation-card bg-white rounded-lg shadow">
                        <div className="h-40 bg-indigo-100 flex items-center justify-center">
                            <i className="fas fa-paint-brush text-indigo-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                            <p className="text-gray-600 text-sm mt-1">Paints, brushes and canvases for art class</p>
                            <div className="flex items-center mt-4">
                                <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-indigo-600 font-medium">A</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Anna, 12</p>
                                    <p className="text-xs text-gray-500">4.8 km away</p>
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
                            Register
                        </Link>
                        to see more
                        <Link
                            href={route('register')}
                            className="text-blue-600 mx-1">
                            donations
                        </Link>
                        and create your own
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonationList;
