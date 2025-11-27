import React from 'react';
import {Link} from "@inertiajs/react";
import SingleWishItemMobile from "@/Components/Common/SingleWishItemMobile.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WishList = ({wishes, user}) => {
    return (
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 section-title">Recent Wishes from
                            Children</h2>
                        <Link
                            href={route('wish.index')}
                            className="text-gray-700 font-medium hover:text-gray-900 flex items-center text-sm">
                            View All Wishes <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                    {wishes.length > 0 ? (
                        <>
                            {/* Mobile View - 2 columns */}
                            <div className="block md:hidden">
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {wishes.map((wish, index) => (
                                        <SingleWishItemMobile wish={wish} key={index} />
                                    ))}
                                </div>
                            </div>

                            {/* Desktop View - Original layout */}
                            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {wishes.map((wish, index) => (
                                    <SingleWishItem key={index} wish={wish}/>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 mb-8">
                            <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                        </div>
                    )}
                </div>
            </section>
            );
            };

            export default WishList;
