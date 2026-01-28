import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import CTA from "@/Components/Wish/CTA.jsx";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import SingleWishItemMobile from "@/Components/Common/SingleWishItemMobile.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="filter-section mb-8">
                    {/* Title Row - Always on its own row */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                                <FontAwesomeIcon icon={faFilter} className="text-primary text-lg" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-accent">Filter Wishes</h2>
                                <p className="text-gray-600 text-sm mt-1">Find wishes that match your ability to help</p>
                            </div>
                        </div>
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

                    {/* Clear Filters Button */}
                    <div className="mt-6 flex justify-end">
                        {(categoryId || organizationId || ageRange || distanceRange) && (
                            <button
                                onClick={() => {
                                    setCategoryId('');
                                    setOrganizationId('');
                                    setAgeRange('');
                                    setDistanceRange('');
                                }}
                                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
                            >
                                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 mr-2" />
                                Clear All Filters
                                <svg className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {wishListData.length > 0 ? (
                    <>
                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-accent font-medium">
                                Found <span className="font-bold text-primary">{wishListData.length}</span> wishes matching your criteria
                            </p>
                        </div>

                        {/* Mobile View */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                {wishListData.map((wish, index) => (
                                    <SingleWishItemMobile wish={wish} key={index}/>
                                ))}
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {wishListData.map((wish, index) => (
                                <SingleWishItem key={index} wish={wish}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-accent mb-2">No Wishes Found</h3>
                            <p className="text-gray-600 mb-4">Try adjusting your filters or check back later for new wishes</p>
                            <button
                                onClick={() => {
                                    setCategoryId('');
                                    setOrganizationId('');
                                    setAgeRange('');
                                    setDistanceRange('');
                                }}
                                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
                            >
                                Clear Filters
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {(wishesLinks.length > 1 && wishListData.length > 1) && <Pagination links={wishesLinks}/>}
            </main>
            {/*<CTA user={user}/>*/}
        </GuestLayout>
    );
};

export default Index;
