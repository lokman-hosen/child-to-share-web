import React from 'react';
import {Link, router} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faHandHoldingHand, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@headlessui/react";
import {getFulfilmentStatus} from "@/utils.jsx";

const WishList = ({userType, wishRequests}) => {

    const handleFulfilStatus = (fulfilmentId) => {
        router.get('wish-fulfill-status', {
            'status' : 'accepted_by_wisher',
            'fulfilment_id' : fulfilmentId,
        })
    };
    return (
        <>
            {userType === 'donor' &&
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Wishes Near You</h3>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800"
                           onClick="showPage('browse-wishes-page')">View all</a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                                <span
                                    className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    3.2 km away
                                </span>
                            <div className="h-32 bg-blue-100 flex items-center justify-center">
                                <i className="fas fa-book-open text-blue-500 text-4xl"></i>
                            </div>
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                                <p className="mt-1 text-sm text-gray-500">Looking for children's story books for my
                                    7-year-old</p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="font-medium text-green-600">E</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                <a href="#"
                                   onClick="showPage('messages-page')"
                                   className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                    <i className="fas fa-star mr-2"></i> Fulfill Wish
                                </a>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                                <span
                                    className="distance-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    5.7 km away
                                </span>
                            <div className="h-32 bg-red-100 flex items-center justify-center">
                                <i className="fas fa-tshirt text-red-500 text-4xl"></i>
                            </div>
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                                <p className="mt-1 text-sm text-gray-500">Need a warm coat for winter, size 10-12</p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="font-medium text-blue-600">M</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Michael, 9</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                <a href="#"
                                   onClick="showPage('messages-page')"
                                   className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                    <i className="fas fa-star mr-2"></i> Fulfill Wish
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {userType === 'wisher' &&
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Current Wishes</h3>
                        <a href="#" className="text-sm text-purple-600 hover:text-purple-800">View all</a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                                <span
                                    className="status-badge bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    Pending
                                </span>
                            <div className="h-32 bg-purple-100 flex items-center justify-center">
                                <i className="fas fa-paint-brush text-purple-500 text-4xl"></i>
                            </div>
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                                <p className="mt-1 text-sm text-gray-500">Looking for paints, brushes and canvases for
                                    art class</p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <span className="font-medium text-purple-600">E</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                <button
                                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                                    <i className="fas fa-edit mr-2"></i> Edit Wish
                                </button>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg wish-card relative">
                                <span
                                    className="status-badge bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    Fulfilled
                                </span>
                            <div className="h-32 bg-blue-100 flex items-center justify-center">
                                <i className="fas fa-book-open text-blue-500 text-4xl"></i>
                            </div>
                            <div className="px-4 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                                <p className="mt-1 text-sm text-gray-500">Looking for children's story books for my
                                    7-year-old</p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="font-medium text-blue-600">E</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                <button
                                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                    <i className="fas fa-check mr-2"></i> Confirm Receipt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {(userType === 'donor-wisher' && wishRequests.length > 0)  &&
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Current Wishes</h3>
                        <Link
                            href={route('wish.fulfill.list')}
                            className="text-sm text-purple-600 hover:text-purple-800">View all</Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {wishRequests.length > 0 ? (
                            wishRequests.map((wish, index) => (
                                <div key={wish.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    {/* Card Image */}
                                    <div className="relative">
                                        <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                                            {wish.featured_image?.file_path ? (
                                                <img
                                                    src={`/storage/${wish.featured_image.file_path}`}
                                                    alt={wish.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faStar} className="text-gray-400 text-5xl" />
                                                </div>
                                            )}
                                        </div>
                                        {/* Status Badge */}
                                        <div className="absolute top-3 right-3">
                                            {wish.latest_fulfillment.status ? (
                                                <span className="status-badge bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                {getFulfilmentStatus(wish.latest_fulfillment.status)}
                                            </span>
                                            ) : (
                                                <span className="status-badge bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                                </span>
                                            ) }

                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            {wish.title}
                                        </h3>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <span className="font-medium mr-2">Age Range:</span>
                                                <span className="capitalize">{wish.age_range}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <span className="font-medium mr-2">Wisher:</span>
                                                <span>{wish.user.name}</span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                            { wish.latest_fulfillment.status === 'requested' ? (
                                                <Button
                                                    onClick={() => handleFulfilStatus(wish.latest_fulfillment.id)}
                                                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                                    <FontAwesomeIcon icon={faHandHoldingHand} className="mr-2" /> Accept Donor Fulfilment Request
                                                </Button>
                                            ) : (
                                                <Link
                                                    href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})}
                                                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                                    <FontAwesomeIcon icon={faStar} className="mr-2" /> Fulfilment Detail
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <FontAwesomeIcon icon={faStar} className="text-gray-300 text-6xl mb-4" />
                                <p className="text-gray-500 text-lg mb-2">No wishes found</p>
                                <p className="text-gray-400 text-sm mb-6">
                                    Start sharing items and make wishes come true
                                </p>
                                <Link
                                    href={route('wishes.create')}
                                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Create First Donation</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default WishList;
