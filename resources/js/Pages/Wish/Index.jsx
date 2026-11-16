import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import Pagination from "@/Components/Pagination.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FilterBar from "@/Components/UI/FilterBar";
import EmptyState from "@/Components/UI/EmptyState";
import Button from "@/Components/UI/Button";

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

    const filtersActive = !!(categoryId || organizationId || ageRange || distanceRange);
    const clearFilters = () => {
        setCategoryId('');
        setOrganizationId('');
        setAgeRange('');
        setDistanceRange('');
    };
    const total = wishes?.total ?? wishListData.length;

    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <div className="container-page py-8 sm:py-12">
                <FilterBar
                    title="Filter Wishes"
                    description="Find wishes that match your ability to help"
                    active={filtersActive}
                    onClear={clearFilters}
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
                </FilterBar>

                {wishListData.length > 0 ? (
                    <>
                        <p className="mb-5 mt-8 text-sm text-slate-600" aria-live="polite">
                            Found <span className="font-semibold text-slate-900">{total}</span> wishes matching your criteria
                        </p>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {wishListData.map((wish) => (
                                <SingleWishItem key={wish.id} wish={wish}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyState
                        className="mt-8"
                        icon={faStar}
                        title="No Wishes Found"
                        description="Try adjusting your filters or check back later for new wishes"
                        action={filtersActive && <Button variant="secondary" size="sm" onClick={clearFilters}>Clear Filters</Button>}
                    />
                )}

                {(wishesLinks.length > 1 && wishListData.length > 1) && <Pagination links={wishesLinks}/>}
            </div>
        </GuestLayout>
    );
};

export default Index;
