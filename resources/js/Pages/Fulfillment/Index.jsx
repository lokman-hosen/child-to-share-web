import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faHandsHelping, faStar} from "@fortawesome/free-solid-svg-icons";
import SingleDonationIteamMobile from "@/Components/Common/SingleDonationIteamMobile.jsx";
import Pagination from "@/Components/Pagination.jsx";

const Index = ({fulfillList, module}) => {
    const fulfillmentListData = fulfillList?.data || [];
    const fulfillmentLinks = fulfillList?.links || [];
    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Wish Fulfilled
                        Connections</h1>
                    <p className="text-xl max-w-3xl mx-auto">Celebrating successful matches between donors and
                        wishers</p>
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="container mx-auto">
                    { fulfillmentListData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {fulfillmentListData.map((wishFulfilment, index) => (
                                <div className="match-card bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <div key={wishFulfilment.id}
                                        className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-white text-center">
                                        <div className="flex justify-between items-center">
                                            <div className="text-left">
                                                <span
                                                    className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">Match #{index+1}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold">{wishFulfilment.updated_at}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mt-2 mb-8">{wishFulfilment.donation.category.name}</h3>
                                    </div>

                                    <div className="relative py-12 px-6">
                                        <div className="connector-line"></div>

                                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className="relative">
                                                {wishFulfilment.donation?.user.image ? (
                                                    <img
                                                        src={`/storage/${wishFulfilment.donation.user.image}`}
                                                        alt={wishFulfilment.donation.user.name}
                                                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"
                                                    />
                                                ) : (
                                                    <img
                                                        src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                        alt={wishFulfilment.donation.user.name}
                                                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"
                                                    />
                                                )}
                                                <div
                                                    className="absolute -bottom-3 -right-3 bg-blue-500 text-white rounded-full px-2 py-1 shadow-lg">
                                                    <FontAwesomeIcon icon={faHandsHelping} className="text-sm"/>
                                                </div>
                                                <div
                                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                                    Donor
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className="relative">
                                                {wishFulfilment.wish?.user.image ? (
                                                    <img
                                                        src={`/storage/${wishFulfilment.wish.user.image}`}
                                                        alt={wishFulfilment.wish.user.name}
                                                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"
                                                    />
                                                ) : (
                                                    <img
                                                        src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                        alt={wishFulfilment.wish.user.name}
                                                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"
                                                    />
                                                )}
                                                <div
                                                    className="absolute -bottom-3 -right-2 bg-purple-500 text-white rounded-full px-2 py-1 shadow-lg">
                                                    <FontAwesomeIcon icon={faStar} className="text-sm"/>
                                                </div>
                                                <div
                                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                                    Wisher
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                            <div className="relative">
                                                {wishFulfilment.donation.featured_image?.file_path ? (
                                                    <img
                                                        src={`/storage/${wishFulfilment.donation.featured_image.file_path}`}
                                                        alt={wishFulfilment.donation.title}
                                                        className="donation-circle w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl"/>
                                                    </div>
                                                )}
                                                <div
                                                    className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 badge-pulse shadow-md">
                                                    <i className="fas fa-gift text-xs"></i>
                                                </div>
                                                {/*<div*/}
                                                {/*    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">*/}
                                                {/*    Donation*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <div>
                                                <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">{wishFulfilment.donation.user.name}</h4>
                                                {/*<p className="text-xs text-gray-500">Donor</p>*/}
                                            </div>
                                            <div className="text-right">
                                                <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">{wishFulfilment.wish.user.name}</h4>
                                                {/*<p className="text-xs text-gray-500">Wisher</p>*/}
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <p className="text-sm font-medium text-gray-700">Donated: {wishFulfilment.donation.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{wishFulfilment.donation.description}</p>
                                            <div className="mt-3 flex justify-center space-x-2">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                    Wish Fulfilled
                                                </span>
                                                {wishFulfilment.donation.user.address &&
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                        {wishFulfilment.wish.user.address}
                                                    </span>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="text-center">
                            <p>No Data Found</p>
                        </div>
                    )}

                    {(fulfillmentLinks.length > 1 && fulfillmentListData.length > 1) && <Pagination links={fulfillmentLinks} />}


                    {/*<div className="mt-12 bg-white rounded-2xl shadow-md p-8">*/}
                    {/*    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fulfillment Impact</h2>*/}
                    {/*    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">*/}
                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>*/}
                    {/*            <div className="text-gray-600">Matches Displayed</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-4xl font-bold text-green-600 mb-2">127</div>*/}
                    {/*            <div className="text-gray-600">Total Fulfilled Wishes</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-4xl font-bold text-purple-600 mb-2">89</div>*/}
                    {/*            <div className="text-gray-600">Active Donors</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-4xl font-bold text-pink-600 mb-2">42</div>*/}
                    {/*            <div className="text-gray-600">Cities Reached</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </main>
        </GuestLayout>
    );
};

export default Index;
