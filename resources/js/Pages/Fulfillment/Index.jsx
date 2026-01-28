import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faHandsHelping, faStar, faHeart, faMapMarkerAlt, faUsers, faChild, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/Components/Pagination.jsx";

const Index = ({fulfillList,activeDonorCount,fulfilledWishCount,totalWishCount, module}) => {
    const fulfillmentListData = fulfillList?.data || [];
    const fulfillmentLinks = fulfillList?.links || [];

    return (
        <GuestLayout>
            <Head title="Fulfilled Wishes"/>
            <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary-dark text-white py-16 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faHeart} className="text-white text-3xl" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Wish <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Fulfilled</span> Connections
                    </h1>

                    <div className="flex items-center justify-center mb-6">
                        <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                        <div className="h-1 w-12 bg-gradient-to-r from-secondary-dark to-secondary rounded-full mx-3"></div>
                        <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                    </div>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed">
                        Celebrating successful matches between generous donors and happy wishers
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Impact Stats */}
                <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-accent mb-8 text-center flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary mr-3" />
                        Fulfillment Impact
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">{fulfilledWishCount}</div>
                            <div className="text-accent font-medium">Total Fulfilled Wishes</div>
                            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className="text-center bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border border-secondary/20">
                            <div className="text-4xl font-bold text-secondary mb-2">{activeDonorCount}</div>
                            <div className="text-accent font-medium">Active Donors</div>
                            <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className="text-center bg-gradient-to-br from-primary-dark/5 to-primary-dark/10 rounded-xl p-6 border border-primary-dark/20">
                            <div className="text-4xl font-bold text-primary-dark mb-2">{totalWishCount}</div>
                            <div className="text-accent font-medium">Total Wishes</div>
                            <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-primary mx-auto mt-3 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Fulfillment Cards */}
                { fulfillmentListData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fulfillmentListData.map((wishFulfilment, index) => (
                            <div key={wishFulfilment.id} className="match-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white text-center">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-left">
                                            <span className="text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full">Match #{index+1}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold opacity-90">{wishFulfilment.updated_at}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{wishFulfilment.donation?.category?.name || 'Item'}</h3>
                                    <div className="h-1 w-16 bg-gradient-to-r from-secondary to-secondary-dark mx-auto rounded-full"></div>
                                </div>

                                {/* Connection Section */}
                                <div className="relative py-16 px-6">
                                    <div className="connector-line absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2"></div>

                                    {/* Donor */}
                                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                                        <div className="relative">
                                            {wishFulfilment.donation?.user?.image ? (
                                                <img
                                                    src={`/storage/${wishFulfilment.donation.user.image}`}
                                                    alt={wishFulfilment.donation.user.name}
                                                    className="w-36 h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl object-cover border-4 border-white shadow-xl"
                                                />
                                            ) : (
                                                <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 border-4 border-white shadow-xl flex items-center justify-center">
                                                    <span className="text-white font-bold text-2xl">
                                                        {wishFulfilment.donation?.user?.name?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                                                <FontAwesomeIcon icon={faHandsHelping} className="text-sm"/>
                                            </div>
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1.5 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                                Donor
                                            </div>
                                        </div>
                                    </div>

                                    {/* Wisher */}
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                                        <div className="relative">
                                            {wishFulfilment.wish?.user?.image ? (
                                                <img
                                                    src={`/storage/${wishFulfilment.wish.user.image}`}
                                                    alt={wishFulfilment.wish.user.name}
                                                    className="w-36 h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl object-cover border-4 border-white shadow-xl"
                                                />
                                            ) : (
                                                <div className="w-36 h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/40 border-4 border-white shadow-xl flex items-center justify-center">
                                                    <span className="text-accent font-bold text-2xl">
                                                        {wishFulfilment.wish?.user?.name?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="absolute -bottom-3 -right-3 bg-secondary text-accent rounded-full p-2 shadow-lg">
                                                <FontAwesomeIcon icon={faStar} className="text-sm"/>
                                            </div>
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-secondary-dark text-accent px-3 py-1.5 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                                Wisher
                                            </div>
                                        </div>
                                    </div>

                                    {/* Donation Item */}
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="relative">
                                            {wishFulfilment.donation?.featured_image?.file_path ? (
                                                <img
                                                    src={`/storage/${wishFulfilment.donation.featured_image.file_path}`}
                                                    alt={wishFulfilment.donation.title}
                                                    className="donation-circle w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                                />
                                            ) : (
                                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-white shadow-lg flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faGift} className="text-primary text-2xl"/>
                                                </div>
                                            )}
                                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full p-2 shadow-md">
                                                <FontAwesomeIcon icon={faGift} className="text-xs"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Information */}
                                <div className="border-t border-gray-100 p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h4 className="font-bold text-accent text-sm md:text-base">{wishFulfilment.donation?.user?.name || 'Donor'}</h4>
                                            <p className="text-xs text-gray-500">Generous Donor</p>
                                        </div>
                                        <div className="text-right">
                                            <h4 className="font-bold text-accent text-sm md:text-base">{wishFulfilment.wish?.user?.name || 'Wisher'}</h4>
                                            <p className="text-xs text-gray-500">Happy Wisher</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6">
                                        <p className="text-sm font-medium text-accent">Donated: {wishFulfilment.donation?.title || 'Item'}</p>
                                        {wishFulfilment.donation?.description && (
                                            <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                                                {wishFulfilment.donation.description}
                                            </p>
                                        )}
                                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                                            <span className="bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                                                Wish Fulfilled
                                            </span>
                                            {wishFulfilment.wish?.user?.address && (
                                                <span className="bg-gradient-to-r from-secondary/10 to-secondary/20 text-secondary text-xs font-semibold px-3 py-1.5 rounded-full border border-secondary/20 flex items-center">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 w-3 h-3" />
                                                    {wishFulfilment.wish.user.address}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-accent mb-2">No Fulfillments Yet</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            Be the first to make a connection! Browse wishes or donations to start fulfilling dreams.
                        </p>
                    </div>
                )}

                {(fulfillmentLinks.length > 1 && fulfillmentListData.length > 1) && <Pagination links={fulfillmentLinks} />}
            </main>
        </GuestLayout>
    );
};

export default Index;
