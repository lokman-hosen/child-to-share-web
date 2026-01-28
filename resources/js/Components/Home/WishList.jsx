import React from 'react';
import {Link} from "@inertiajs/react";
import SingleWishItemMobile from "@/Components/Common/SingleWishItemMobile.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WishList = ({wishes, user}) => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-semibold text-accent section-title">
                        Recent Wishes from Children
                    </h2>
                    <Link
                        href={route('wish.index')}
                        className="text-primary font-medium hover:text-primary-dark flex items-center text-sm">
                        View All Wishes <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
                {wishes.length > 0 ? (
                    <>
                        {/* Mobile View - 2 columns */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-6">
                                {wishes.map((wish, index) => (
                                    <SingleWishItemMobile wish={wish} key={index} />
                                ))}
                            </div>
                        </div>

                        {/* Desktop View - Original layout */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {wishes.map((wish, index) => (
                                <SingleWishItem key={index} wish={wish}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-gray-600">No wishes found at the moment</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
export default WishList;
