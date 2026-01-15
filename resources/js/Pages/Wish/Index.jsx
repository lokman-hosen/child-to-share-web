import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import List from "@/Components/Wish/List.jsx";
import CTA from "@/Components/Wish/CTA.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import SingleWishItemMobile from "@/Components/Common/SingleWishItemMobile.jsx";

const Index = ({wishes,categories, filters, ageRanges, distanceRanges, organizations, module}) => {
    const user = usePage().props.auth.user;
    const wishListData = wishes?.data || [];
    const wishesLinks = wishes?.links || [];
    const safeFilters = filters || [];
    const [categoryId, setCategoryId] = useState((safeFilters?.category_id) || '');
    const [organizationId, setOrganizationId] = useState((safeFilters?.organization_id) || '');
    const [ageRange, setAgeRange] = useState((safeFilters?.age_range) || '');
    const [distanceRange, setDistanceRange] = useState((safeFilters?.distance_range) || '');
    const categoryOptions = getDropdownOptions(categories, 'id', 'name');
    const organizationOptions = getDropdownOptions(organizations, 'id', 'name');

    // Use a ref to prevent useEffect from running on initial render for filters/sort
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        const query = {
            category_id: categoryId,
            organization_id: organizationId,
            age_range: ageRange,
            distance_range: distanceRange,
        };

        router.get(route('wish.index'), query, {
            preserveState: true,
            replace: true,
        });
    }, [categoryId,ageRange,distanceRange, organizationId]);

    const ageRangeOptions = getStatusOptions(ageRanges);
    const distanceRangeOptions = getStatusOptions(distanceRanges);

    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="filter-section">
                    {/* Title Row - Always on its own row */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">Filter Wishes</h2>
                    </div>

                    {/* Filters Row - Responsive grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <SelectInput
                            className="w-full"
                            id="organization_id"
                            label="Organization"
                            value={organizationId}
                            onChange={(e) => setOrganizationId(e.target.value)}
                            options={organizationOptions}
                        />
                        <SelectInput
                            className="w-full"
                            id="category_id"
                            label="Category"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            options={categoryOptions}
                        />
                        <SelectInput
                            className="w-full"
                            id="age_range"
                            label="Age Range (Child)"
                            value={ageRange}
                            onChange={(e) => setAgeRange(e.target.value)}
                            options={ageRangeOptions}
                        />
                        {user && (
                            <SelectInput
                                className="w-full"
                                id="distance_range"
                                label="Distance from you"
                                value={distanceRange}
                                onChange={(e) => setDistanceRange(e.target.value)}
                                options={distanceRangeOptions}
                            />
                        )}
                    </div>
                </div>
                {wishListData.length > 0 ? (
                    <>
                        {/* Mobile View - 2 columns */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {wishListData.map((wish, index) => (
                                    <SingleWishItemMobile wish={wish} key={index}/>
                                ))}
                            </div>
                        </div>
                        {/* Desktop View - Original layout */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                            {wishListData.map((wish, index) => (
                                <SingleWishItem key={index} wish={wish}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                    </div>
                )}

                {(wishesLinks.length > 1 && wishListData.length > 1) && <Pagination links={wishesLinks}/>}
            </main>
            <CTA user={user}/>
        </GuestLayout>
    );
};

export default Index;
