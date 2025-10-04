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
    return (
        <GuestLayout>
            <Head title="Donations"/>
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

                {donationListData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {donationListData.map((donation, index) => (
                            <SingleDonationItem key={index} donation={donation} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="grid grid-cols-1"><p className="text-center">No data found</p></div>
                    </div>
                )}

                {(donationsLinks.length > 1 && donationListData.length > 1)   && <Pagination links={donationsLinks} />}
            </main>
            <CTA/>
        </GuestLayout>
    );
};

export default Index;
