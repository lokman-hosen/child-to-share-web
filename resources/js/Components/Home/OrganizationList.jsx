import React from 'react';

const OrganizationList = () => {
    return (
        <section id="organizations" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Partner Organizations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="org-card">
                        <div className="h-32 bg-blue-100 flex items-center justify-center">
                            <i className="fas fa-building text-blue-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Community Center A</h3>
                            <p className="text-gray-600 text-sm mt-1">Serving the downtown community since 2010</p>
                            <div className="mt-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                15 Members
                            </span>
                                <span
                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                32 Wishes Fulfilled
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className="org-card">
                        <div className="h-32 bg-green-100 flex items-center justify-center">
                            <i className="fas fa-school text-green-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">School B</h3>
                            <p className="text-gray-600 text-sm mt-1">Elementary school serving grades K-5</p>
                            <div className="mt-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                28 Members
                            </span>
                                <span
                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                47 Wishes Fulfilled
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className="org-card">
                        <div className="h-32 bg-purple-100 flex items-center justify-center">
                            <i className="fas fa-child text-purple-500 text-4xl"></i>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-medium text-gray-900">Youth Program C</h3>
                            <p className="text-gray-600 text-sm mt-1">After-school programs for teens</p>
                            <div className="mt-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                12 Members
                            </span>
                                <span
                                    className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                18 Wishes Fulfilled
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizationList;
