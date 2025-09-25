import React from 'react';
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

const Index = () => {
    return (
        <AuthenticatedLayout>
            <Head title="Message List"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 h-full mx-20 my-10">
                        <div className="border-r border-gray-200 bg-gray-50 overflow-y-auto">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Conversations</h2>
                            </div>
                            <ul className="divide-y divide-gray-200">
                                <li className="p-4 hover:bg-white cursor-pointer border-r-2 border-blue-500 bg-white">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-green-600">E</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Emily's Guardian</p>
                                            <p className="text-xs text-gray-500">Hi, thank you for the books!</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2 hours ago</span>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">2</span>
                                    </div>
                                </li>
                                <li className="p-4 hover:bg-white cursor-pointer">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-blue-600">M</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Michael's Guardian</p>
                                            <p className="text-xs text-gray-500">When can we arrange pickup?</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">1 day ago</span>
                                    </div>
                                </li>
                                <li className="p-4 hover:bg-white cursor-pointer">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-purple-600">J</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Jessica's Guardian</p>
                                            <p className="text-xs text-gray-500">The laptop works perfectly!</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">3 days ago</span>
                                    </div>
                                </li>
                                <li className="p-4 hover:bg-white cursor-pointer">
                                    <div className="flex items-center">
                                        <div
                                            className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-red-600">D</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">David's Guardian</p>
                                            <p className="text-xs text-gray-500">Thanks for the bicycle!</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">1 week ago</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2 flex flex-col">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Emily's Guardian</h2>
                                <p className="text-sm text-gray-500">Fulfilling wish: Story Books</p>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 chat-container">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div
                                            className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-green-600">E</span>
                                        </div>
                                        <div className="bg-white rounded-lg py-2 px-4 chat-message">
                                            <p className="text-sm">Hi, thank you so much for offering to donate the
                                                books!</p>
                                            <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start justify-end">
                                        <div className="bg-blue-100 rounded-lg py-2 px-4 chat-message">
                                            <p className="text-sm">You're welcome! My daughter loved these books and I
                                                hope Emily will too.</p>
                                            <p className="text-xs text-gray-500 mt-1">10:18 AM</p>
                                        </div>
                                        <div
                                            className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ml-3">
                                            <span className="font-medium text-blue-600">D</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div
                                            className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-green-600">E</span>
                                        </div>
                                        <div className="bg-white rounded-lg py-2 px-4 chat-message">
                                            <p className="text-sm">She will be thrilled! When would be a good time to
                                                pick them up?</p>
                                            <p className="text-xs text-gray-500 mt-1">10:20 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start justify-end">
                                        <div className="bg-blue-100 rounded-lg py-2 px-4 chat-message">
                                            <p className="text-sm">I've requested admin assistance for pickup. They'll
                                                contact you to arrange a time.</p>
                                            <p className="text-xs text-gray-500 mt-1">10:22 AM</p>
                                        </div>
                                        <div
                                            className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ml-3">
                                            <span className="font-medium text-blue-600">D</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div
                                            className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <span className="font-medium text-green-600">E</span>
                                        </div>
                                        <div className="bg-white rounded-lg py-2 px-4 chat-message">
                                            <p className="text-sm">Perfect, thank you! I'll wait for their call.</p>
                                            <p className="text-xs text-gray-500 mt-1">10:25 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex items-center">
                                    <input type="text" placeholder="Type your message..."
                                           className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                                    <button
                                        className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                        <i className="fas fa-paperclip"></i>
                                    </button>
                                    <button
                                        className="ml-1 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                        <i className="fas fa-image"></i>
                                    </button>
                                    <button
                                        className="ml-1 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
