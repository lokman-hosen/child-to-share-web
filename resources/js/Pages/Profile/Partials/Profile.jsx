import {Head, Link, usePage} from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {checkDonor, checkDonorWisher, checkWisher, getLoginUser} from "@/utils.jsx";
import {faCheckCircle, faTimesCircle, faEnvelope, faPhone, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function Profile({ user,availableDonationCount,donatedDonationCount,fulfilledWishCount,activeWishCount,totalWishCount }) {
    const authUser = getLoginUser();

    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                            {/* Profile Image - First Column */}
                            <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-6">
                                <div
                                    className="mx-auto md:mx-0 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md rounded-lg">
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
                            </div>

                            {/* User Info - Second Column */}
                            <div className="flex-1 text-center md:text-left w-full">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
                                <p className="text-sm text-gray-500 mb-3 md:mb-4">
                                    {/*Member Since {format(new Date(user.created_at), 'MMMM do, yyyy')}*/}
                                    Member Since {user.created_at}
                                </p>

                                {/* Stats Container */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {checkDonorWisher(user.role) && (
                                        <>
                                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                {totalWishCount} Wishes Created
                                            </span>
                                            <span
                                                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                0 Wishes Fulfilled
                                            </span>
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                {availableDonationCount} Active Donations
                                            </span>
                                        </>
                                    )}

                                    {checkDonor(user.role) && (
                                        <>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                0 Wishes Fulfilled
                                            </span>
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                {availableDonationCount} Active Donations
                                            </span>
                                        </>
                                    )}

                                    {checkWisher(user.role) && (
                                        <>
                                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                {totalWishCount} Wishes Created
                                            </span>
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                {fulfilledWishCount} Wishes Fulfilled
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Information</h3>
                            <dl className="space-y-2">
                                {/* Email with Verification */}
                                <div>
                                    <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3"/>
                                        <span>Email</span>
                                    </dt>
                                    <dd className="text-sm text-gray-900 flex items-center space-x-2 mt-1">
                                        <span>{user.email}</span>
                                        {user.email_verified_at ? (
                                            <div title="Email Verified">
                                                <FontAwesomeIcon
                                                    icon={faCheckCircle}
                                                    className="w-4 h-4 text-green-500"
                                                    title="Email Verified"
                                                />
                                            </div>

                                        ) : (
                                            <div title="Email Not Verified">
                                                <FontAwesomeIcon
                                                    icon={faTimesCircle}
                                                    className="w-4 h-4 text-gray-400"
                                                    title="Email Not Verified"
                                                />
                                            </div>
                                        )}
                                    </dd>
                                </div>

                                {/* Phone with Verification - Conditional Display */}
                                {(authUser.role === 'super_admin' || authUser.role === 'admin' || authUser.id === user.id) && (
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500 flex items-center space-x-1">
                                            <FontAwesomeIcon icon={faPhone} className="w-3 h-3"/>
                                            <span>Phone</span>
                                        </dt>
                                        <dd className="text-sm text-gray-900 flex items-center space-x-2 mt-1">
                                            <span>{user.phone}</span>
                                            {user.phone_verified_at ? (
                                                <div title="Phone Verified">
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        className="w-4 h-4 text-green-500"
                                                    />
                                                </div>
                                            ) : (
                                                <div title="Phone Not Verified">
                                                    <FontAwesomeIcon
                                                        icon={faTimesCircle}
                                                        className="w-4 h-4 text-gray-400"
                                                    />
                                                </div>

                                            )}
                                        </dd>
                                    </div>
                                )}

                                {/* Other fields */}
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Location/Address</dt>
                                    <dd className="text-sm text-gray-900">{user.address ?? 'n/a'}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                    <dd className="text-sm text-gray-900 uppercase">{user.gender ?? 'n/a'}</dd>
                                </div>
                            </dl>
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="mt-5 w-100 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                    <span>Back</span>
                                </div>
                            </button>
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

                    {(authUser.role === 'super-admin' && authUser.role === 'admin') || (authUser.id === user.id) &&
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
                                <div
                                    className="text-3xl font-bold text-yellow-600">{user?.organizations?.length ?? 0}</div>
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
