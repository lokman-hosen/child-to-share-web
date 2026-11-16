import React from 'react';
import { faGift, faStar, faHandHoldingHeart, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import AppPage from '@/Components/UI/AppPage';
import StatCard from '@/Components/UI/StatCard';
import QuickAction from '@/Components/UI/QuickAction';
import DashboardIntro from '@/Components/Common/Admin/DashboardIntro';
import { Link } from '@inertiajs/react';

const DonorDashboard = ({ availableDonationCount, donatedDonationCount }) => {
    return (
        <AppPage>
            <DashboardIntro
                title="Contributor Dashboard"
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link href={route('donations.index')} className="rounded-card focus-visible:outline-none">
                    <StatCard icon={faGift} label="Active Gifts" value={availableDonationCount} tone="primary" className="h-full hover:border-primary-200" />
                </Link>
                <Link href={route('donations.index')} className="rounded-card">
                    <StatCard icon={faStar} label="Wishes Fulfilled" value={donatedDonationCount} tone="success" className="h-full hover:border-primary-200" />
                </Link>
            </div>
            <section aria-labelledby="quick-actions" className="mt-10">
                <h2 id="quick-actions" className="text-base font-semibold text-slate-900">Quick Actions</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <QuickAction href={route('donations.create')} icon={faPlus} title="Create Gift" description="Tap to share items" />
                    <QuickAction href={route('wish.fulfill.list')} icon={faHandHoldingHeart} title="Fulfill Wishes" description="Find wishes your gifts can fulfil" />
                    <QuickAction href={route('my.profile')} icon={faUser} title="Your Profile" description="Keep your details up to date" />
                </div>
            </section>
        </AppPage>
    );
};

export default DonorDashboard;
