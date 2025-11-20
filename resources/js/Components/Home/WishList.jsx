import React from 'react';
import {Link} from "@inertiajs/react";
import SingleWishItemMobile from "@/Components/Common/SingleWishItemMobile.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WishList = ({wishes, user}) => {
    return (
        <section id="wishes" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Wishes from Children</h2>
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
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {wishes.map((wish, index) => (
                                <SingleWishItem key={index} wish={wish}/>
                            ))}
                        </div>

                        <div className="mx-auto text-center">
                            <Link
                                href={route('wish.index')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-400">
                                <FontAwesomeIcon icon={faStar} className="mr-2"/> Browse More Wishes
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                    </div>
                )}
                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        <Link
                            href={route('login')}
                            className="text-blue-600 mr-1">
                            Sign In
                        </Link>
                        to see more wishes and fulfill them
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WishList;
