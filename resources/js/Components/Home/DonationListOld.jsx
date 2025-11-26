import React from 'react';
import {Link} from "@inertiajs/react";
import SingleDonationItem from "@/Components/Common/SingleDonationIteam.jsx";
import SingleDonationIteamMobile from "@/Components/Common/SingleDonationIteamMobile.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";

const DonationList = ({donations, user}) => {
    return (
         <section id="donations" className="py-16 bg-gray-50">
         {/*<section id="donations" className="py-16 bg-white">*/}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Donations from Donor</h2>
                {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
                {/*    {donations.map((donation, index) => (*/}
                {/*        <SingleDonationItem key={index} donation={donation} />*/}
                {/*    ))}*/}
                {/*</div>*/}

                {donations.length > 0 ? (
                    <>
                        {/* Mobile View - 2 columns */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {donations.map((donation, index) => (
                                    <SingleDonationIteamMobile donation={donation} key={index} />
                                ))}
                            </div>
                        </div>

                        {/* Desktop View - Original layout */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {donations.map((donation, index) => (
                                <SingleDonationItem key={index} donation={donation} />
                            ))}
                        </div>
                        <div className="mx-auto text-center">
                            <Link
                                href={route('donation.index')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-400">
                                <FontAwesomeIcon icon={faGift} className="mr-2"/> Browse More Donations
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-gray-500 py-8">No donations found</p>
                        </div>
                    </div>
                )}

                {!user && (
                    <div className="text-center mt-8">
                        <p className="text-gray-600">
                            <Link
                                href={route('login')}
                                className="text-blue-600 mr-1">
                                Sign In
                            </Link>
                            to see more donations and create your own
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default DonationList;
