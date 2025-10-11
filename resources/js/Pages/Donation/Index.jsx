import React, {useEffect, useRef, useState} from 'react';
import {Head, router} from "@inertiajs/react";
import Hero from "@/Components/Donation/Hero.jsx";
import List from "@/Components/Donation/List.jsx";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import CTA from "@/Components/Donation/CTA.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import {getDropdownOptions, textLimit} from "@/utils.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SingleDonationItem from "@/Components/Common/SingleDonationIteam.jsx";
import SingleDonationIteamMobile from "@/Components/Common/SingleDonationIteamMobile.jsx";

const Index = ({donations, categories, filters, module}) => {
    const donationListData = donations?.data || [];
    const donationsLinks = donations?.links || [];
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

    // Get featured image URL
    const getFeaturedImage = (donation) => {
        if (donation.featured_image) {
            return donation.featured_image;
        }
        // Fallback to first image if featured_image is not available
        if (donation.images && donation.images.length > 0) {
            return donation.images[0].url;
        }
        // Default placeholder image
        return '/images/placeholder-donation.jpg';
    };

    // Format status with color
    const getStatusBadge = (status) => {
        const statusColors = {
            available: 'bg-green-100 text-green-800',
            pending: 'bg-yellow-100 text-yellow-800',
            completed: 'bg-gray-100 text-gray-800',
            reserved: 'bg-blue-100 text-blue-800',
        };

        const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800';
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <GuestLayout>
            <Head title="Donations"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="filter-section mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Left Title */}
                        <h2 className="text-xl font-semibold text-gray-900">Filter Donations</h2>

                        {/* Right Filters */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <SelectInput
                                className="w-full sm:w-auto md:w-[350px]"
                                id="category_id"
                                label="Select Category"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                options={categoryOptions}
                            />
                        </div>
                    </div>
                </div>

                {donationListData.length > 0 ? (
                    <>
                        {/* Mobile View - 2 columns */}
                        <div className="block md:hidden">
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {donationListData.map((donation, index) => (
                                    <SingleDonationIteamMobile donation={donation} key={index} />
                                ))}
                            </div>
                        </div>

                        {/* Desktop View - Original layout */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {donationListData.map((donation, index) => (
                                <SingleDonationItem key={index} donation={donation} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-gray-500 py-8">No donations found</p>
                        </div>
                    </div>
                )}

                {(donationsLinks.length > 1 && donationListData.length > 1) && <Pagination links={donationsLinks} />}
            </main>
            <CTA/>
        </GuestLayout>
    );
};

export default Index;