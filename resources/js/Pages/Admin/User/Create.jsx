import React from 'react';
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faList, faStar} from "@fortawesome/free-solid-svg-icons";
import Form from "@/Pages/Admin/User/Form.jsx";


const Create = ({guardianRelations,genders,module}) => {
    return (
        <AuthenticatedLayout>
            <Head title={`${module} Create`} />
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    {/* Beautiful Card Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-8 sm:px-8 sm:py-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            {/* Title Section */}
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                <div
                                    className="h-12 w-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-white text-xl"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                        Create Item You {module} For
                                    </h1>
                                    <p className="text-blue-100 text-sm mt-1">
                                        Share wishes you like to have
                                    </p>
                                </div>
                            </div>


                            {/* Action Button */}
                            <Link
                                href={route('wishes.index')}
                                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                            >
                                <FontAwesomeIcon icon={faList} className="text-blue-600"/>
                                <span>View {module} List</span>
                            </Link>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                        <div className="space-y-8">
                            <Form
                                module={module}
                                genders={genders}
                                guardianRelations={guardianRelations}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};


export default Create;
