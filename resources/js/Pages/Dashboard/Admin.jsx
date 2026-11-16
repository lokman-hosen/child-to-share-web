import React from 'react';
import { faUsers, faHandHoldingHeart, faStar, faGift, faBuilding, faList } from '@fortawesome/free-solid-svg-icons';
import AppPage from '@/Components/UI/AppPage';
import QuickAction from '@/Components/UI/QuickAction';
import DashboardIntro from '@/Components/Common/Admin/DashboardIntro';

/**
 * Admin home. The previous version showed hard-coded sample figures and activity
 * ("5 Pending Users", "John Smith"…) with dead links; this shows real navigation only.
 */
const AdminDashboard = () => {
    const sections = [
        { href: route('users.index'), icon: faUsers, title: 'Users', description: 'Manage wishers and contributors' },
        { href: route('wish.fulfill.list'), icon: faHandHoldingHeart, title: 'Fulfill Wishes', description: 'Match gifts with open wishes' },
        { href: route('wishes.index'), icon: faStar, title: 'Wishes', description: 'Review and update wishes' },
        { href: route('donations.index'), icon: faGift, title: 'Gifts', description: 'Review and update gifts' },
        { href: route('organizations.index'), icon: faBuilding, title: 'Organizations', description: 'Partner organizations and members' },
        { href: route('categories.index'), icon: faList, title: 'Categories', description: 'Item categories used across the site' },
    ];

    return (
        <AppPage>
            <DashboardIntro title="Admin Dashboard" showNotice={false} />
            <section aria-labelledby="quick-actions" className="mt-8">
                <h2 id="quick-actions" className="text-base font-semibold text-slate-900">Quick Actions</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {sections.map((s) => <QuickAction key={s.title} {...s} />)}
                </div>
            </section>
        </AppPage>
    );
};

export default AdminDashboard;
