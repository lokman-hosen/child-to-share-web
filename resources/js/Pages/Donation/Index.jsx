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
                        {donationListData.map((donation) => (
                            <div key={donation.id} className="card donation-card bg-white rounded-lg shadow">
                                <div className="h-48 bg-green-100 flex items-center justify-center">
                                    <div className="h-48 w-full bg-gray-100 overflow-hidden">
                                        {donation.featured_image?.file_path ? (
                                            <img
                                                src={`/storage/${donation.featured_image.file_path}`}
                                                alt={donation.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-medium text-gray-900">{donation.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {donation.description && textLimit(donation.description, 12)}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center">
                                            <span className="text-green-600 font-medium">D</span>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{donation.user.name}</p>
                                            {/*<p className="text-xs text-gray-500">2.5 km away</p>*/}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        {/* Tags */}
                                        {donation.auto_tags && (
                                            <>
                                                {Array.isArray(donation.auto_tags)
                                                    ? donation.auto_tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex}
                                                              className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                                    ))
                                                    : donation.auto_tags.split(',').map((tag, tagIndex) => (
                                                        <span key={tagIndex}
                                                              className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            {tag.trim()}
                                        </span>
                                                    ))
                                                }
                                            </>
                                        )}

                                        <span
                                            className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {donation.category.name}
                        </span>
                                    </div>
                                </div>
                            </div>
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
