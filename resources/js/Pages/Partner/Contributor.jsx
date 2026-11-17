import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faHeart, faHandHoldingHeart, faUserPlus, faCity } from '@fortawesome/free-solid-svg-icons';
import Pagination from "@/Components/Pagination.jsx";
import PageHero from "@/Components/UI/PageHero";
import SafeImage from "@/Components/UI/SafeImage";
import EmptyState from "@/Components/UI/EmptyState";
import Button from "@/Components/UI/Button";
import cn from "@/Components/UI/cn";

const ContributorsPage = ({ users, type, title, subTitle, module }) => {
    const [activeTab, setActiveTab] = useState('individuals');
    const userListData = users?.data || [];
    const userLinks = users?.links || [];
    const isDonor = type == 'donor';

    // Separate users into individuals and organizations
    const individuals = userListData.filter(user => (user.name !== user?.organization?.name));
    const organizations = userListData.filter((user, index, self) =>
        user.organization && index === self.findIndex((u) => u.organization?.id === user.organization?.id)
    );

    const tabs = [
        { id: 'individuals', label: 'Individual', icon: faUserPlus, count: individuals.length },
        { id: 'organizations', label: 'Organizations', icon: faCity, count: organizations.length },
    ];

    const onTabKey = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const next = activeTab === 'individuals' ? 'organizations' : 'individuals';
            setActiveTab(next);
            document.getElementById(`tab-${next}`)?.focus();
        }
    };

    const list = activeTab === 'individuals' ? individuals : organizations;

    return (
        <GuestLayout>
            <Head title={`${module}`}/>
            <PageHero eyebrow="Community" title={`Our ${title}`} description={subTitle} />

            <div className="container-page py-10 sm:py-12">
                <div role="tablist" aria-label={`${title} type`} className="inline-flex rounded-xl bg-slate-100 p-1" onKeyDown={onTabKey}>
                    {tabs.map((tab) => {
                        const selected = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                id={`tab-${tab.id}`}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                aria-controls={`panel-${tab.id}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition',
                                    selected ? 'bg-white text-slate-900 shadow-card' : 'text-slate-600 hover:text-slate-900',
                                )}
                            >
                                <FontAwesomeIcon icon={tab.icon} className="h-3.5 w-3.5" aria-hidden="true" />
                                {tab.label}
                                <span className={cn('rounded-full px-2 py-0.5 text-xs', selected ? 'bg-primary-50 text-primary-700' : 'bg-slate-200 text-slate-600')}>
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="mt-8">
                    {list.length > 0 ? (
                        <>
                            <p className="mb-5 text-sm text-slate-600">
                                Showing <span className="font-semibold text-slate-900">{list.length}</span>{' '}
                                {activeTab === 'individuals'
                                    ? (isDonor ? 'compassionate individual donors' : 'individual wish creators')
                                    : 'dedicated organizations'}
                            </p>
                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                {list.map((user) => {
                                    const isOrg = activeTab === 'organizations';
                                    const name = isOrg ? (user.organization?.name || user.name) : user.name;
                                    return (
                                        <li key={user.id} className="flex flex-col items-center rounded-card border border-slate-200/80 bg-white p-5 text-center shadow-card">
                                            <SafeImage
                                                src={user.image ? `/storage/${user.image}` : null}
                                                alt=""
                                                fallbackIcon={isOrg ? faBuilding : faUser}
                                                className={cn('h-24 w-24 ring-4 ring-primary-50', isOrg ? 'rounded-2xl object-contain bg-white' : 'rounded-full object-cover')}
                                                fallbackClassName={isOrg ? 'rounded-2xl' : 'rounded-full'}
                                            />
                                            <h2 className="mt-4 line-clamp-2 text-sm font-semibold text-slate-900">{name}</h2>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    ) : activeTab === 'individuals' ? (
                        <EmptyState
                            icon={faUserPlus}
                            title={isDonor ? 'No individual donors found' : 'No individual wish creators found'}
                            description={isDonor ? 'Be the first individual donor to join our community!' : 'Be the first to join our community!'}
                        />
                    ) : (
                        <EmptyState icon={faCity} title="No organizations found" description="Be the first organization to join us!" />
                    )}
                </div>

                {(userLinks.length > 1 && userListData.length > 1) && <Pagination links={userLinks} />}

                <section className="mx-auto mt-16 max-w-3xl rounded-card bg-gradient-to-r from-primary-50 to-secondary-50 p-8 text-center sm:p-10">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="h-8 w-8 text-primary-600" aria-hidden="true" />
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                        Want to Join Our {isDonor ? 'Contributors' : 'Wish Creators'}?
                    </h2>
                    <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                        Every contribution, big or small, makes a difference in a child's life. Join our community of givers today.
                    </p>
                    <Button href={route('register')} className="mt-6" icon={faHeart}>
                        {isDonor ? 'Become a Contributor' : 'Become a Wish Creator'}
                    </Button>
                </section>
            </div>
        </GuestLayout>
    );
};

export default ContributorsPage;
