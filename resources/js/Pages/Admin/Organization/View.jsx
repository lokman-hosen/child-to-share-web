
import React from 'react';
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faEdit, faList, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const View = ({module,organization,availableDonationCount,activeWishCount,fulfilledWishCount,totalMembers}) => {
    return (
        <AuthenticatedLayout>
            <Head title="Organization Detail"/>
            <div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                <div
                                    className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                                    {organization?.user?.image ? (
                                        <img
                                            src={`/storage/${organization?.user?.image}`}
                                            alt={organization.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <i className="fas fa-school text-blue-500 text-4xl"></i>
                                    )}


                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl font-bold mb-2">{organization.name}</h1>
                                <p className="text-lg opacity-90">Serving the community since  {organization.created_at}</p>
                                <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-3">
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-users mr-1"></i> {totalMembers} Members
                                </span>
                                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-gift mr-1"></i> {fulfilledWishCount} Wishes Fulfilled
                                </span>
                                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-map-marker-alt mr-1"></i> {organization?.address}
                                </span>
                                </div>
                            </div>
                            <div className="ml-auto mt-4 md:mt-0">
                                <button
                                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                    Join Organization
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                        <div
                            className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-blue-500">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                                        <i className="fas fa-users text-blue-600"></i>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Members</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">{totalMembers}</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-green-500">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                                        <i className="fas fa-gift text-green-600"></i>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Wishes Fulfilled</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">{fulfilledWishCount}</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-yellow-500">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                                        <i className="fas fa-star text-yellow-600"></i>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Active Wishes</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">{activeWishCount}</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-purple-500">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                                        <i className="fas fa-hand-holding-heart text-purple-600"></i>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Donations</dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">{availableDonationCount}</div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white shadow rounded-lg p-6 mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Our Organization</h2>
                                <p className="text-gray-600 mb-4">{organization.description}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <i className="fas fa-clock mr-2"></i>
                                    <span>Joined ThreeWish: {organization.created_at}</span>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Recent Donations</h2>
                                    <Link
                                        href={route('donations.index')}
                                        className="text-sm text-blue-600 hover:text-blue-800">View All
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    <div className="donation-card bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 mr-4">
                                                <div
                                                    className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-book text-green-600"></i>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900">Children's Books
                                                    Collection</h3>
                                                <p className="text-sm text-gray-500">Donated by Sarah Johnson • 2 days
                                                    ago</p>
                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Delivered</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="donation-card bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 mr-4">
                                                <div
                                                    className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-tshirt text-blue-600"></i>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900">Winter Coats (Various
                                                    Sizes)</h3>
                                                <p className="text-sm text-gray-500">Donated by Robert Chen • 5 days
                                                    ago</p>
                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">In Progress</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="donation-card bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 mr-4">
                                                <div
                                                    className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-laptop text-purple-600"></i>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900">Laptops for Distance
                                                    Learning</h3>
                                                <p className="text-sm text-gray-500">Donated by Tech4Good Foundation • 1
                                                    week ago</p>
                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Delivered</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex text-center mt-4">
                                    <Link
                                        href={route('donations.index')}
                                        className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                        Load More Donations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white shadow rounded-lg p-6 mb-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Organization Members</h2>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{totalMembers} Members</span>
                                </div>

                                <div className="space-y-4">
                                    {totalMembers > 0 ?
                                        (
                                            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-shrink-0 mr-4">
                                                    <div
                                                        className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <span className="font-medium text-blue-600">M</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">Maria Rodriguez</h3>
                                                    <p className="text-sm text-gray-500">Principal</p>
                                                </div>
                                                <div className="text-right">
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>
                                                </div>
                                            </div>
                                        ) :
                                        (
                                            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">
                                                <div className="flex-1 text-center">
                                                    <p className="text-sm text-gray-500">No user</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                {totalMembers > 0 ?
                                    (
                                        <Link
                                            href={route('users.index')}
                                            className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                            View All Members
                                        </Link>
                                    ):(
                                        <button
                                            onClick={() => window.history.back()}
                                            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                            <span>Back</span>
                                        </button>
                                    )
                                }
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Organization Actions</h2>
                                <div className="space-y-3">
                                    <Link
                                        href={route('wishes.create')}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        <FontAwesomeIcon icon={faPlusCircle}/> Create Wish for Organization
                                    </Link>
                                    <Link
                                        href={route('organizations.edit', organization.id)}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        <FontAwesomeIcon icon={faEdit}/> Edit Organization
                                    </Link>

                                    <Link
                                        href={route('organizations.edit', organization.id)}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        <FontAwesomeIcon icon={faList}/> Organization List
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => window.history.back()}
                                        className="w-full flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                            <span>Back</span>
                                        </div>
                                    </button>
                                    {/*<button*/}
                                    {/*    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">*/}
                                    {/*    <i className="fas fa-envelope mr-2"></i> Message Organization*/}
                                    {/*</button>*/}
                                    {/*<button*/}
                                    {/*    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">*/}
                                    {/*    <i className="fas fa-share-alt mr-2"></i> Share Organization*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
};

export default View;
