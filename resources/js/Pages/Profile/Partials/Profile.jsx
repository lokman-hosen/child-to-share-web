import {Head, Link, usePage} from "@inertiajs/react";
import React from "react";
import { format } from 'date-fns';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {checkDonor, checkDonorWisher, checkWisher} from "@/utils.jsx";

export default function Profile({ user,availableDonationCount,donatedDonationCount,fulfilledWishCount,activeWishCount,totalWishCount }) {
    const authUser = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <div
                            className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-6 overflow-hidden border-4 border-white shadow-md">
                            {user.image ? (
                                <img
                                    src={`/storage/${user.image}`}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500">Member
                                Since {format(new Date(user.created_at), 'MMMM do, yyyy')}</p>
                            {checkDonorWisher(user.role) &&
                                <div className="mt-2 flex items-center">
                                     <span
                                         className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                        {totalWishCount} Wishes Created
                                    </span>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                        0 Wishes Fulfilled
                                    </span>
                                    <span
                                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {availableDonationCount} Active Donations
                                    </span>
                                </div>
                            }

                            {checkDonor(user.role) &&
                                <div className="mt-2 flex items-center">
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                        0 Wishes Fulfilled
                                    </span>
                                    <span
                                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {availableDonationCount} Active Donations
                                    </span>
                                </div>
                            }

                            {checkWisher(user.role) &&
                                <div className="mt-2 flex items-center">
                                    <span
                                        className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                                        {totalWishCount} Wishes Created
                                    </span>
                                    <span
                                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {fulfilledWishCount} Wishes Fulfilled
                                    </span>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Information</h3>
                            <dl className="space-y-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="text-sm text-gray-900">{user.email}</dd>
                                </div>

                                {(authUser.role === 'super_admin' && authUser.role === 'admin') || (authUser.id === user.id) &&
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                        <dd className="text-sm text-gray-900">{user.phone}</dd>
                                    </div>
                                }

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Location/Address</dt>
                                    <dd className="text-sm text-gray-900">{user.address ?? 'n/a'}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                    <dd className="text-sm text-gray-900 uppercase">{user.gender ?? 'n/a'}</dd>
                                </div>
                            </dl>
                        </div>

                        {/*<div>*/}
                        {/*    <h3 className="text-lg font-medium text-gray-900 mb-2">Preferences</h3>*/}
                        {/*    <dl className="space-y-2">*/}
                        {/*        <div>*/}
                        {/*            <dt className="text-sm font-medium text-gray-500">Default Search Radius</dt>*/}
                        {/*            <dd className="text-sm text-gray-900">10 km</dd>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <dt className="text-sm font-medium text-gray-500">Notification Settings</dt>*/}
                        {/*            <dd className="text-sm text-gray-900">Email & In-App</dd>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <dt className="text-sm font-medium text-gray-500">Admin Assistance</dt>*/}
                        {/*            <dd className="text-sm text-gray-900">Enabled by default</dd>*/}
                        {/*        </div>*/}
                        {/*    </dl>*/}
                        {/*</div>*/}
                    </div>

                    {/*{user.organizations.length > 0 && (*/}
                    {/*    <div className="mt-6">*/}
                    {/*        <h3 className="text-lg font-medium text-gray-900 mb-2">Your Organizations</h3>*/}
                    {/*        <ul className="space-y-2">*/}
                    {/*            <li className="flex items-center">*/}
                    {/*                <div*/}
                    {/*                    className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">*/}
                    {/*                    <i className="fas fa-building text-blue-500 text-sm"></i>*/}
                    {/*                </div>*/}
                    {/*                <span className="text-sm text-gray-900">Community Center A</span>*/}
                    {/*            </li>*/}
                    {/*            <li className="flex items-center">*/}
                    {/*                <div*/}
                    {/*                    className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-2">*/}
                    {/*                    <i className="fas fa-school text-green-500 text-sm"></i>*/}
                    {/*                </div>*/}
                    {/*                <span className="text-sm text-gray-900">School B</span>*/}
                    {/*            </li>*/}
                    {/*            <li className="flex items-center">*/}
                    {/*                <div*/}
                    {/*                    className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">*/}
                    {/*                    <i className="fas fa-child text-purple-500 text-sm"></i>*/}
                    {/*                </div>*/}
                    {/*                <span className="text-sm text-gray-900">Youth Program C</span>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {(authUser.role === 'super_admin' && authUser.role === 'admin') || (authUser.id === user.id) &&
                        <div className="mt-6 flex">
                            <Link
                                href={route('profile.update')}
                                className="inline-flex items-center px-4 py-2 border border-yellow-300 rounded-md shadow-sm text-sm font-medium text-yellow-700 bg-yellow-300 hover:bg-yellow-50">
                                <i className="fas fa-edit mr-2"></i> Edit Profile
                            </Link>
                            <Link
                                href={route('user.password.form')}
                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                <i className="fas fa-lock mr-2"></i> Change Password
                            </Link>
                        </div>
                    }
                </div>

                {checkDonorWisher(user.role) && (
                    <div className="bg-white shadow rounded-lg p-6 mt-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Impact</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-blue-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Wishes Fulfilled</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-green-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Children Helped</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-yellow-600">{user?.organizations?.length ?? 0}</div>
                                <div className="text-sm font-medium text-gray-700">Organizations Supported</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-purple-600">{donatedDonationCount}</div>
                                <div className="text-sm font-medium text-gray-700">Items Donated</div>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-purple-600">{totalWishCount}</div>
                                <div className="text-sm font-medium text-gray-700">Wishes Created</div>
                            </div>
                            <div className="blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-blue-600">{activeWishCount}</div>
                                <div className="text-sm font-medium text-gray-700">Active Wishes</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-yellow-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Donor Connections</div>
                            </div>
                        </div>
                    </div>
                )}

                {checkDonor(user.role) && (
                    <div className="bg-white shadow rounded-lg p-6 mt-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Impact</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-blue-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Wishes Fulfilled</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-green-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Children Helped</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-yellow-600">{user.organizations?.length ?? 0}</div>
                                <div className="text-sm font-medium text-gray-700">Organizations Supported</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-purple-600">{donatedDonationCount}</div>
                                <div className="text-sm font-medium text-gray-700">Items Donated</div>
                            </div>
                        </div>
                    </div>
                )}

                { checkWisher(user.role) && (
                    <div className="bg-white shadow rounded-lg p-6 mt-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Wish History</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-purple-600">{totalWishCount}</div>
                                <div className="text-sm font-medium text-gray-700">Wishes Created</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-green-600">{fulfilledWishCount}</div>
                                <div className="text-sm font-medium text-gray-700">Wishes Fulfilled</div>
                            </div>
                            <div className="blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-blue-600">{activeWishCount}</div>
                                <div className="text-sm font-medium text-gray-700">Active Wishes</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-yellow-600">0</div>
                                <div className="text-sm font-medium text-gray-700">Donor Connections</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
