import React from 'react';
import { Link } from '@inertiajs/react';
import { faStar, faCircleCheck, faPlus, faUser, faGift } from '@fortawesome/free-solid-svg-icons';
import AppPage from '@/Components/UI/AppPage';
import StatCard from '@/Components/UI/StatCard';
import QuickAction from '@/Components/UI/QuickAction';
import DashboardIntro from '@/Components/Common/Admin/DashboardIntro';

const WisherDashboard = ({ activeWishCount, fulfilledWishCount }) => {
    return (
        <AppPage>
            <DashboardIntro
                title="Wisher Dashboard"
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link href={route('wishes.index')} className="rounded-card">
                    <StatCard icon={faStar} label="Active Wishes" value={activeWishCount} tone="primary" className="h-full hover:border-primary-200" />
                </Link>
                <Link href={route('wishes.index')} className="rounded-card">
                    <StatCard icon={faCircleCheck} label="Wishes Received" value={fulfilledWishCount} tone="success" className="h-full hover:border-primary-200" />
                </Link>
            </div>
            <section aria-labelledby="quick-actions" className="mt-10">
                <h2 id="quick-actions" className="text-base font-semibold text-slate-900">Quick Actions</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <QuickAction href={route('wishes.create')} icon={faPlus} title="Create Wish" description="Tap to have items" />
                    <QuickAction href={route('wishes.index')} icon={faStar} title="My Wishes" description="Track the status of your wishes" />
                    <QuickAction href={route('donation.index')} icon={faGift} title="Browse Gifts" description="See what contributors are sharing" />
                    <QuickAction href={route('my.profile')} icon={faUser} title="Your Profile" description="Keep your details up to date" />
                </div>
            </section>
        </AppPage>
    );
};

export default WisherDashboard;
