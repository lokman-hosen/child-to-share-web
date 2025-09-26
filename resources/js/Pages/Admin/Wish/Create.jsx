import React from 'react';
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

const Create = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Create a New Wish</h1>

                {/*<div className="bg-white shadow rounded-lg p-6 mb-6">*/}
                {/*    <h2 className="text-lg font-medium text-gray-900 mb-4">Wish Catalog</h2>*/}
                {/*    <p className="text-sm text-gray-500 mb-4">Choose from common wish items or create a custom wish</p>*/}

                {/*    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-purple-50 border border-purple-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-book-open text-purple-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Books</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-blue-50 border border-blue-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-tshirt text-blue-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Clothing</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-laptop text-yellow-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Electronics</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-green-50 border border-green-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-dumbbell text-green-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Sports</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-red-50 border border-red-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-paint-brush text-red-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Art Supplies</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-music text-indigo-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Musical Instruments</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-pink-50 border border-pink-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-gamepad text-pink-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Games & Toys</p>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="catalog-item bg-gray-50 border border-gray-200 rounded-lg p-4 text-center cursor-pointer">*/}
                {/*            <i className="fas fa-ellipsis-h text-gray-500 text-2xl mb-2"></i>*/}
                {/*            <p className="text-sm font-medium">Custom Wish</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="bg-white shadow rounded-lg p-6">
                    {/*<h2 className="text-lg font-medium text-gray-900 mb-4">Create Custom Wish</h2>*/}

                    <form className="mx-20 my-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Wish Name</label>
                                <input type="text"
                                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                       placeholder="e.g., Winter Coat, Story Books, etc."/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                    <option>Select a category</option>
                                    <option>Books</option>
                                    <option>Clothing</option>
                                    <option>Toys</option>
                                    <option>Electronics</option>
                                    <option>Sports Equipment</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Age Range</label>
                                <select
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                    <option>Select age range</option>
                                    <option>0-5 years</option>
                                    <option>6-10 years</option>
                                    <option>11-15 years</option>
                                    <option>16+ years</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Organization
                                    (optional)</label>
                                <select
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                    <option>Select an organization</option>
                                    <option>Community Center A</option>
                                    <option>School B</option>
                                    <option>Youth Program C</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="mt-3">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea rows="3"
                                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                          placeholder="Tell us more about your wish and why it's important to you"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Photos/Video
                                    (Optional)</label>
                                <div
                                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none">
                                                <span>Upload files</span>
                                                <input type="file" className="sr-only" multiple/>
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        <p className="text-xs text-gray-500">Video length limit: 30 seconds</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-48 m-auto mt-6">
                                <button type="submit"
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    <i className="fas fa-plus-circle mr-2"></i> Create Wish
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
