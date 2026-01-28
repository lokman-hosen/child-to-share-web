import React from 'react';
import {Link} from "@inertiajs/react";
import SingleDonationItem from "@/Components/Common/SingleDonationIteam.jsx";
import SingleDonationIteamMobile from "@/Components/Common/SingleDonationIteamMobile.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";

const DonationList = ({donations, user}) => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-semibold text-accent section-title">Recent Gifts from Donors</h2>
                    <Link
                        href={route('donation.index')}
                        className="text-primary font-medium hover:text-primary-dark flex items-center text-sm">
                        View All Gifts <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
                {donations.length > 0 ? (
                    <>
                        {/* Mobile View - 2 columns */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                {donations.map((donation, index) => (
                                    <SingleDonationIteamMobile donation={donation} key={index} />
                                ))}
                            </div>
                        </div>
                        {/* Desktop View - Original layout */}
                        <div
                            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {donations.map((donation, index) => (
                                <SingleDonationItem key={index} donation={donation}/>
                            ))}
                        </div>
                    </>

                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-gray-600 py-8">No gifts found at the moment</p>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default DonationList;
