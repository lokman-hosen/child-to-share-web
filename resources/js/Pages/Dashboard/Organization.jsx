import React from 'react';
import Activity from "@/Components/Common/Admin/Donor/Activity.jsx";
import Cards from "@/Components/Common/Admin/Donor/Cards.jsx";
import WishList from "@/Components/Common/Admin/Donor/WishList.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const OrganizationDashboard = ({availableDonationCount,donatedDonationCount,activeWishCount,fulfilledWishCount,user, totalMembers}) => {
    return (
        <div className="page active-page">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4 m-6">
                <div className="mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
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
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-2">{user.organization.name}</h1>
                            <p className="text-lg opacity-90 font-bold">Serving the community since {user.created_at}</p>
                            <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-3">
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-users mr-1"></i> {totalMembers} Members
                                </span>
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-gift mr-1"></i> {fulfilledWishCount} Wishes Fulfilled
                                </span>
                                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                    <i className="fas fa-map-marker-alt mr-1"></i> {user?.organization?.address}
                                </span>
                            </div>
                        </div>
                        {/*<div className="ml-auto mt-4 md:mt-0">*/}
                        {/*    <button*/}
                        {/*        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">*/}
                        {/*        Join Organization*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <div className="px-10 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                    <div className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-blue-500">
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

                    <div className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-green-500">
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

                    <div className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-yellow-500">
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

                    <div className="stats-card bg-white overflow-hidden shadow rounded-lg border-l-4 border-purple-500">
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
                    <div className="lg:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Organization</h2>
                            <p className="text-gray-600 mb-4">
                                {user?.organization?.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <i className="fas fa-clock mr-2"></i>
                                <span>Joined ThreeWish: {user?.organization?.created_at}</span>
                            </div>
                        </div>

                        {/*<div className="bg-white shadow rounded-lg p-6">*/}
                        {/*    <div className="flex justify-between items-center mb-6">*/}
                        {/*        <h2 className="text-xl font-semibold text-gray-900">Recent Donations</h2>*/}
                        {/*        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>*/}
                        {/*    </div>*/}

                        {/*    <div className="space-y-4">*/}
                        {/*        <div className="donation-card bg-gray-50 p-4 rounded-lg">*/}
                        {/*            <div className="flex items-center">*/}
                        {/*                <div className="flex-shrink-0 mr-4">*/}
                        {/*                    <div*/}
                        {/*                        className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">*/}
                        {/*                        <i className="fas fa-book text-green-600"></i>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="flex-1">*/}
                        {/*                    <h3 className="font-medium text-gray-900">Children's Books Collection</h3>*/}
                        {/*                    <p className="text-sm text-gray-500">Donated by Sarah Johnson • 2 days*/}
                        {/*                        ago</p>*/}
                        {/*                </div>*/}
                        {/*                <div className="text-right">*/}
                        {/*                    <span*/}
                        {/*                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Delivered</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div className="donation-card bg-gray-50 p-4 rounded-lg">*/}
                        {/*            <div className="flex items-center">*/}
                        {/*                <div className="flex-shrink-0 mr-4">*/}
                        {/*                    <div*/}
                        {/*                        className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">*/}
                        {/*                        <i className="fas fa-tshirt text-blue-600"></i>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="flex-1">*/}
                        {/*                    <h3 className="font-medium text-gray-900">Winter Coats (Various Sizes)</h3>*/}
                        {/*                    <p className="text-sm text-gray-500">Donated by Robert Chen • 5 days ago</p>*/}
                        {/*                </div>*/}
                        {/*                <div className="text-right">*/}
                        {/*                    <span*/}
                        {/*                        className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">In Progress</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div className="donation-card bg-gray-50 p-4 rounded-lg">*/}
                        {/*            <div className="flex items-center">*/}
                        {/*                <div className="flex-shrink-0 mr-4">*/}
                        {/*                    <div*/}
                        {/*                        className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">*/}
                        {/*                        <i className="fas fa-laptop text-purple-600"></i>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="flex-1">*/}
                        {/*                    <h3 className="font-medium text-gray-900">Laptops for Distance Learning</h3>*/}
                        {/*                    <p className="text-sm text-gray-500">Donated by Tech4Good Foundation • 1*/}
                        {/*                        week ago</p>*/}
                        {/*                </div>*/}
                        {/*                <div className="text-right">*/}
                        {/*                    <span*/}
                        {/*                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Delivered</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <button*/}
                        {/*        className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">*/}
                        {/*        Load More Donations*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>

                    {/*<div>*/}
                    {/*    <div className="bg-white shadow rounded-lg p-6 mb-8">*/}
                    {/*        <div className="flex justify-between items-center mb-6">*/}
                    {/*            <h2 className="text-xl font-semibold text-gray-900">Organization Members</h2>*/}
                    {/*            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">28 Members</span>*/}
                    {/*        </div>*/}

                    {/*        <div className="space-y-4">*/}
                    {/*            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">*/}
                    {/*                <div className="flex-shrink-0 mr-4">*/}
                    {/*                    <div*/}
                    {/*                        className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">*/}
                    {/*                        <span className="font-medium text-blue-600">M</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="flex-1">*/}
                    {/*                    <h3 className="font-medium text-gray-900">Maria Rodriguez</h3>*/}
                    {/*                    <p className="text-sm text-gray-500">Principal</p>*/}
                    {/*                </div>*/}
                    {/*                <div className="text-right">*/}
                    {/*                    <span*/}
                    {/*                        className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">*/}
                    {/*                <div className="flex-shrink-0 mr-4">*/}
                    {/*                    <div*/}
                    {/*                        className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">*/}
                    {/*                        <span className="font-medium text-green-600">J</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="flex-1">*/}
                    {/*                    <h3 className="font-medium text-gray-900">James Wilson</h3>*/}
                    {/*                    <p className="text-sm text-gray-500">Teacher</p>*/}
                    {/*                </div>*/}
                    {/*                <div className="text-right">*/}
                    {/*                    <span*/}
                    {/*                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Moderator</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">*/}
                    {/*                <div className="flex-shrink-0 mr-4">*/}
                    {/*                    <div*/}
                    {/*                        className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">*/}
                    {/*                        <span className="font-medium text-purple-600">S</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="flex-1">*/}
                    {/*                    <h3 className="font-medium text-gray-900">Sarah Johnson</h3>*/}
                    {/*                    <p className="text-sm text-gray-500">Parent Volunteer</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="member-card flex items-center p-3 rounded-lg hover:bg-gray-50">*/}
                    {/*                <div className="flex-shrink-0 mr-4">*/}
                    {/*                    <div*/}
                    {/*                        className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">*/}
                    {/*                        <span className="font-medium text-yellow-600">R</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="flex-1">*/}
                    {/*                    <h3 className="font-medium text-gray-900">Robert Chen</h3>*/}
                    {/*                    <p className="text-sm text-gray-500">Community Donor</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <button*/}
                    {/*            className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">*/}
                    {/*            View All Members*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*    <div className="bg-white shadow rounded-lg p-6">*/}
                    {/*        <h2 className="text-xl font-semibold text-gray-900 mb-4">Organization Actions</h2>*/}
                    {/*        <div className="space-y-3">*/}
                    {/*            <button*/}
                    {/*                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">*/}
                    {/*                <i className="fas fa-plus-circle mr-2"></i> Create Wish for Organization*/}
                    {/*            </button>*/}
                    {/*            <button*/}
                    {/*                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">*/}
                    {/*                <i className="fas fa-envelope mr-2"></i> Message Organization*/}
                    {/*            </button>*/}
                    {/*            <button*/}
                    {/*                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">*/}
                    {/*                <i className="fas fa-share-alt mr-2"></i> Share Organization*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default OrganizationDashboard;
