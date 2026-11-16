import React, {useEffect, useRef, useState} from 'react';
import {Head, router} from "@inertiajs/react";
import Hero from "@/Components/Donation/Hero.jsx";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import FilterBar from "@/Components/UI/FilterBar";
import EmptyState from "@/Components/UI/EmptyState";
import Button from "@/Components/UI/Button";
import {getDropdownOptions, textLimit} from "@/utils.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SingleDonationItem from "@/Components/Common/SingleDonationIteam.jsx";

const Index = ({donations, categories, filters, organizations, module}) => {
    const donationListData = donations?.data || [];
    const donationsLinks = donations?.links || [];
    const safeFilters = filters || [];
    const [categoryId, setCategoryId] = useState((safeFilters?.category_id) || '');
    const [organizationId, setOrganizationId] = useState((safeFilters?.organization_id) || '');
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
            organization_id: organizationId,
        };

        router.get(route('donation.index'), query, {
            preserveState: true,
            replace: true,
        });
    }, [categoryId,organizationId]);

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
            reserved: 'bg-primary/10 text-primary',
        };

        const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800';
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    const organizationOptions = getDropdownOptions(organizations, 'id', 'name');
    const filtersActive = !!(categoryId || organizationId);
    const clearFilters = () => {
        setCategoryId('');
        setOrganizationId('');
    };
    const total = donations?.total ?? donationListData.length;

    return (
        <GuestLayout>
            <Head title="Gifts"/>
            <Hero/>
            <div className="container-page py-8 sm:py-12">
                <FilterBar
                    title="Filter Gifts"
                    description="Find gifts that match your interests"
                    active={filtersActive}
                    onClear={clearFilters}
                    columns="lg:grid-cols-2"
                >
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
                        label="Select Category"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        options={categoryOptions}
                    />
                </FilterBar>

                {donationListData.length > 0 ? (
                    <>
                        <p className="mb-5 mt-8 text-sm text-slate-600" aria-live="polite">
                            Showing <span className="font-semibold text-slate-900">{total}</span> gifts
                        </p>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {donationListData.map((donation) => (
                                <SingleDonationItem key={donation.id} donation={donation}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyState
                        className="mt-8"
                        icon={faGift}
                        title="No Gifts Found"
                        description="Check back later or try different filters"
                        action={filtersActive && <Button variant="secondary" size="sm" onClick={clearFilters}>Clear Filters</Button>}
                    />
                )}
                {(donationsLinks.length > 1 && donationListData.length > 1) && <Pagination links={donationsLinks} />}
            </div>
        </GuestLayout>
    );
};
export default Index;
