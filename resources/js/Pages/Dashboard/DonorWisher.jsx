import React from 'react';
import { Link } from '@inertiajs/react';
import { faGift, faStar, faCircleCheck, faPlus, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import AppPage from '@/Components/UI/AppPage';
import StatCard from '@/Components/UI/StatCard';
import QuickAction from '@/Components/UI/QuickAction';
import Button from '@/Components/UI/Button';
import DashboardIntro from '@/Components/Common/Admin/DashboardIntro';
import WishList from '@/Components/Common/Admin/Donor/WishList.jsx';

const DonorWisherDashboard = ({ availableDonationCount, donatedDonationCount, activeWishCount, fulfilledWishCount, wishRequests }) => {
    return (
        <AppPage>
            <DashboardIntro
                title="Dashboard"
                actions={<>
                    <Button href={route('donations.create')} icon={faGift} variant="secondary">Create Gift</Button>
                    <Button href={route('wishes.create')} icon={faStar}>Create Wish</Button>
                </>}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Link href={route('wishes.index')} className="rounded-card">
                    <StatCard icon={faStar} label="Active Wishes" value={activeWishCount} tone="primary" className="h-full hover:border-primary-200" />
                </Link>
                <Link href={route('wishes.index')} className="rounded-card">
                    <StatCard icon={faCircleCheck} label="Wishes Received" value={fulfilledWishCount} tone="success" className="h-full hover:border-primary-200" />
                </Link>
                <Link href={route('donations.index')} className="rounded-card">
                    <StatCard icon={faGift} label="Active Gifts" value={availableDonationCount} tone="gold" className="h-full hover:border-primary-200" />
                </Link>
                <Link href={route('donations.index')} className="rounded-card">
                    <StatCard icon={faHandHoldingHeart} label="Wishes Fulfilled" value={donatedDonationCount} tone="success" className="h-full hover:border-primary-200" />
                </Link>
            </div>

            <div className="mt-10">
                <WishList userType="donor-wisher" wishRequests={wishRequests} />
            </div>

            <section aria-labelledby="quick-actions" className="mt-10">
                <h2 id="quick-actions" className="text-base font-semibold text-slate-900">Quick Actions</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <QuickAction href={route('wishes.create')} icon={faPlus} title="Create Wish" description="Tap to have items" />
                    <QuickAction href={route('donations.create')} icon={faGift} title="Create Gift" description="Tap to share items" />
                    <QuickAction href={route('wish.fulfill.list')} icon={faHandHoldingHeart} title="Fulfill Wishes" description="Find wishes your gifts can fulfil" />
                </div>
            </section>
        </AppPage>
    );
};

export default DonorWisherDashboard;
