import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Form from './Form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faList} from "@fortawesome/free-solid-svg-icons";

export default function Edit({module,categories,statuses,wish,ageRanges,wishers}) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${wish.title}`} />
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-8 sm:px-8 sm:py-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faGift}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        Edit {module} Item
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Share your items and make wishes come true
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                href={route('donations.index')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faList} className="text-blue-600" />
                                <span>View {module} List</span>
                            </Link>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <Form
                                module={module}
                                categories={categories}
                                statuses={statuses}
                                wish={wish}
                                ageRanges={ageRanges}
                                wishers={wishers}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
