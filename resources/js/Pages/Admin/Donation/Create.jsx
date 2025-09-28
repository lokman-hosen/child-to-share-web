import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Form from './Form';

export default function Create({module,categories,statuses}) {
    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Donation Item</h1>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="w-2xl space-y-8">
                            <div className="mx-20 my-10">
                                <Form
                                    module={module}
                                    categories={categories}
                                    statuses={statuses}
                                />
                            </div>
                            <form className="mx-20 my-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                                        <input type="text"
                                               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                               placeholder="e.g., Winter Coat, Story Books, etc."/>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
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
                                        <label className="block text-sm font-medium text-gray-700">Condition</label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                            <option>Select condition</option>
                                            <option>New</option>
                                            <option>Like New</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Organization
                                            (optional)</label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                            <option>Select an organization</option>
                                            <option>Community Center A</option>
                                            <option>School B</option>
                                            <option>Youth Program C</option>
                                            <option>Create new organization</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="mt-3">
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea rows="3"
                                                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                  placeholder="Provide details about the item"></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Photos/Video</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                                        <span>Upload files</span>
                                                        <input type="file" className="sr-only" multiple/>
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                <p className="text-xs text-gray-500">Video length limit: 10 seconds</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-center mt-3">
                                        <input id="admin-assistance" name="admin-assistance" type="checkbox"
                                               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                               checked/>
                                        <label htmlFor="admin-assistance" className="ml-2 block text-sm text-gray-900">
                                            Request admin assistance for pickup/delivery
                                        </label>
                                    </div>

                                    <div className="w-48 m-auto mt-6">
                                        <button type="submit"
                                                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                             Create Donation
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
