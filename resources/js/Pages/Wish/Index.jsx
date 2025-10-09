import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router} from "@inertiajs/react";
import List from "@/Components/Wish/List.jsx";
import CTA from "@/Components/Wish/CTA.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions} from "@/utils.jsx";

const Index = ({wishes,categories, filters, module}) => {
    const wishListData = wishes?.data || [];
    const wishesLinks = wishes?.links || [];
    const safeFilters = filters || [];
    const [categoryId, setCategoryId] = useState((safeFilters?.category_id) || '');
    const categoryOptions = getDropdownOptions(categories, 'id', 'name');

    // Use a ref to prevent useEffect from running on initial render for filters/sort
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        const query = {
            category_id: categoryId,
        };

        router.get(route('donation.index'), query, {
            preserveState: true,
            replace: true,
        });
    }, [categoryId]);

    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="filter-section">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Left Title */}
                        <h2 className="text-xl font-semibold text-gray-900">Filter Donations</h2>

                        {/* Right Filters */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <SelectInput
                                className="w-[350px]"
                                id="category_id"
                                label="Select Category"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                options={categoryOptions}
                            />
                        </div>
                    </div>

                </div>
                {wishListData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {wishListData.map((wish, index) => (
                            <SingleWishItem key={index} wish={wish}/>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                    </div>
                )}

                {(wishesLinks.length > 1 && wishListData.length > 1) && <Pagination links={wishesLinks}/>}
            </main>
            <CTA/>
        </GuestLayout>
    );
};

export default Index;
