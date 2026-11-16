import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGift, faStar, faCircleCheck, faLocationDot, faBuilding, faPlus, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import AppPage from '@/Components/UI/AppPage';
import StatCard from '@/Components/UI/StatCard';
import QuickAction from '@/Components/UI/QuickAction';
import SafeImage from '@/Components/UI/SafeImage';

const OrganizationDashboard = ({ availableDonationCount, donatedDonationCount, activeWishCount, fulfilledWishCount, user, totalMembers }) => {
    return (
        <AppPage>
            {/* Organization banner */}
            <section className="relative overflow-hidden rounded-[1.25rem] bg-gradient-dark p-6 text-white shadow-card sm:p-8">
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary-300/20 blur-3xl" />
                <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                    <SafeImage
                        src={user.image ? `/storage/${user.image}` : null}
                        alt={user.name}
                        fallbackIcon={faBuilding}
                        className="h-24 w-24 shrink-0 rounded-2xl bg-white object-contain p-1 ring-4 ring-white/20"
                        fallbackClassName="rounded-2xl"
                    />
                    <div className="min-w-0">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{user.organization?.name}</h1>
                        <p className="mt-1 text-primary-100">Serving the community since {user.created_at}</p>
                        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-sm md:justify-start">
                            <li className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                                <FontAwesomeIcon icon={faUsers} className="h-3.5 w-3.5" aria-hidden="true" /> {totalMembers} Members
                            </li>
                            <li className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                                <FontAwesomeIcon icon={faGift} className="h-3.5 w-3.5" aria-hidden="true" /> {fulfilledWishCount} Wishes Fulfilled
                            </li>
                            {user?.organization?.address && (
                                <li className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                                    <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5" aria-hidden="true" /> {user.organization.address}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard icon={faUsers} label="Total Members" value={totalMembers} tone="primary" />
                <StatCard icon={faCircleCheck} label="Wishes Fulfilled" value={fulfilledWishCount} tone="success" />
                <StatCard icon={faStar} label="Active Wishes" value={activeWishCount} tone="gold" />
                <StatCard icon={faGift} label="Total Gifts" value={availableDonationCount} tone="neutral" />
            </div>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-3">
                <section className="rounded-card border border-slate-200/80 bg-white p-6 shadow-card lg:col-span-2" aria-labelledby="about-org">
                    <h2 id="about-org" className="text-base font-semibold text-slate-900">About Organization</h2>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                        {user?.organization?.description || 'No description provided.'}
                    </p>
                </section>
                <section aria-labelledby="quick-actions" className="space-y-3">
                    <h2 id="quick-actions" className="text-base font-semibold text-slate-900">Quick Actions</h2>
                    <QuickAction href={route('wishes.create')} icon={faPlus} title="Create Wish" description="Tap to have items" />
                    <QuickAction href={route('donations.create')} icon={faGift} title="Create Gift" description="Tap to share items" />
                    <QuickAction href={route('wish.fulfill.list')} icon={faHandHoldingHeart} title="Fulfill Wishes" description="Find wishes your gifts can fulfil" />
                </section>
            </div>
        </AppPage>
    );
};

export default OrganizationDashboard;
