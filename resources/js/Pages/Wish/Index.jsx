import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head} from "@inertiajs/react";
import List from "@/Components/Wish/List.jsx";
import CTA from "@/Components/Wish/CTA.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";

const Index = ({wishes,categories,module}) => {
    const wishListData = wishes?.data || [];
    const wishesLinks = wishes?.links || [];
    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="filter-section">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Filter Wishes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select
                                className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                                <option>All Categories</option>
                                <option>Books</option>
                                <option>Clothing</option>
                                <option>Toys</option>
                                <option>Electronics</option>
                                <option>Sports Equipment</option>
                            </select>
                            <select
                                className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                                <option>All Age Groups</option>
                                <option>0-5 years</option>
                                <option>6-10 years</option>
                                <option>11-15 years</option>
                                <option>16+ years</option>
                            </select>
                            <select
                                className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                                <option>Sort By: Newest</option>
                                <option>Sort By: Closest</option>
                                <option>Sort By: Urgent</option>
                            </select>
                        </div>
                    </div>
                </div>
                {wishListData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {wishListData.map((wish, index) => (
                            <SingleWishItem key={index} wish={wish} />
                        ))}
                    </div>
                ): (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                    </div>
                )}
            </main>
            <CTA/>
        </GuestLayout>
    );
};

export default Index;
