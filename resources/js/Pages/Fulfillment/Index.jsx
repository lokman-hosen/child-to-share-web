import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faHandsHelping, faStar, faMapMarkerAlt, faUsers, faCheckCircle, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/Components/Pagination.jsx";
import PageHero from "@/Components/UI/PageHero";
import StatCard from "@/Components/UI/StatCard";
import SafeImage from "@/Components/UI/SafeImage";
import Badge from "@/Components/UI/Badge";
import EmptyState from "@/Components/UI/EmptyState";
import Button from "@/Components/UI/Button";

function Person({ user, role, icon, ring }) {
    return (
        <div className="flex min-w-0 flex-1 flex-col items-center text-center">
            <div className="relative">
                <SafeImage
                    src={user?.image ? `/storage/${user.image}` : null}
                    alt={user?.name || role}
                    fallbackIcon={faUser}
                    className={`h-20 w-20 rounded-2xl object-cover ring-4 sm:h-24 sm:w-24 ${ring}`}
                    fallbackClassName="rounded-2xl"
                />
                <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary-600 shadow-card">
                    <FontAwesomeIcon icon={icon} className="h-3 w-3" aria-hidden="true" />
                </span>
            </div>
            <p className="mt-3 w-full truncate text-sm font-semibold text-slate-900">{user?.name || role}</p>
            <p className="text-xs text-slate-500">{role === 'Contributor' ? 'Generous Contributor' : 'Happy Wisher'}</p>
        </div>
    );
}

const Index = ({ fulfillList, activeDonorCount, fulfilledWishCount, totalWishCount, module }) => {
    const fulfillmentListData = fulfillList?.data || [];
    const fulfillmentLinks = fulfillList?.links || [];

    return (
        <GuestLayout>
            <Head title="Fulfilled Wishes"/>
            <PageHero
                eyebrow="Fulfilled Wishes"
                title="Wish Fulfilled Connections"
                description="Celebrating successful matches between generous contributors and happy wishers"
            />

            <div className="container-page py-8 sm:py-12">
                <section aria-labelledby="impact-heading">
                    <h2 id="impact-heading" className="sr-only">Fulfillment Impact</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <StatCard icon={faCheckCircle} label="Total Fulfilled Wishes" value={fulfilledWishCount} tone="success" />
                        <StatCard icon={faHandsHelping} label="Active Contributors" value={activeDonorCount} tone="primary" />
                        <StatCard icon={faStar} label="Total Wishes" value={totalWishCount} tone="gold" />
                    </div>
                </section>

                {fulfillmentListData.length > 0 ? (
                    <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {fulfillmentListData.map((wishFulfilment, index) => (
                            <li key={wishFulfilment.id} className="flex flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card">
                                <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-3">
                                    <span className="text-xs font-semibold text-slate-500">Match #{index + 1}</span>
                                    <span className="text-xs text-slate-500">{wishFulfilment.updated_at}</span>
                                </div>

                                <div className="px-5 pt-6">
                                    <p className="text-center text-xs font-semibold uppercase tracking-wide text-primary-600">
                                        {wishFulfilment.donation?.category?.name || 'Item'}
                                    </p>
                                    <div className="mt-5 flex items-start gap-2">
                                        <Person user={wishFulfilment.donation?.user} role="Contributor" icon={faHandsHelping} ring="ring-primary-100" />
                                        <div className="flex shrink-0 flex-col items-center pt-4 sm:pt-6">
                                            <SafeImage
                                                src={wishFulfilment.donation?.featured_image?.file_path ? `/storage/${wishFulfilment.donation.featured_image.file_path}` : null}
                                                alt={wishFulfilment.donation?.title || 'Gift'}
                                                fallbackIcon={faGift}
                                                className="h-14 w-14 rounded-full object-cover ring-4 ring-secondary-100"
                                                fallbackClassName="rounded-full"
                                            />
                                            <FontAwesomeIcon icon={faArrowRight} className="mt-2 h-3 w-3 text-slate-300" aria-hidden="true" />
                                        </div>
                                        <Person user={wishFulfilment.wish?.user} role="Wisher" icon={faStar} ring="ring-secondary-100" />
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-1 flex-col border-t border-slate-100 px-5 py-4 text-center">
                                    <p className="text-sm font-medium text-slate-900">Donated: {wishFulfilment.donation?.title || 'Item'}</p>
                                    {wishFulfilment.donation?.description && (
                                        <p className="mt-1 line-clamp-2 text-xs text-slate-600">{wishFulfilment.donation.description}</p>
                                    )}
                                    <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                                        <Badge tone="success" icon={faCheckCircle}>Wish Fulfilled</Badge>
                                        {wishFulfilment.wish?.user?.address && (
                                            <Badge tone="neutral" icon={faMapMarkerAlt} className="max-w-full whitespace-normal text-left">
                                                {wishFulfilment.wish.user.address}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyState
                        className="mt-10"
                        icon={faUsers}
                        title="No Fulfillments Yet"
                        description="Be the first to make a connection! Browse wishes or donations to start fulfilling dreams."
                        action={<Button href={route('wish.index')} size="sm">Browse Wishes</Button>}
                    />
                )}

                {(fulfillmentLinks.length > 1 && fulfillmentListData.length > 1) && <Pagination links={fulfillmentLinks} />}
            </div>
        </GuestLayout>
    );
};

export default Index;
