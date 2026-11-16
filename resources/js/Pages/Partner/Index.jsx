import React from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBuilding, faChartLine, faHandshake, faStar, faGift } from '@fortawesome/free-solid-svg-icons';
import PageHero from "@/Components/UI/PageHero";
import Button from "@/Components/UI/Button";
import StatCard from "@/Components/UI/StatCard";
import SafeImage from "@/Components/UI/SafeImage";
import SectionHeader from "@/Components/UI/SectionHeader";
import EmptyState from "@/Components/UI/EmptyState";

const PartnersPage = ({ organizations = [], totalWishCount, totalDonationCount }) => {
    return (
        <GuestLayout>
            <Head title="Our Partners - ThreeWish"/>
            <PageHero
                eyebrow="Partners"
                title="Our Partners"
                description="Meet the incredible organizations that collaborate with ThreeWish to make children's wishes come true. Together, we're building a community of giving and learning."
            >
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href={route('register')} size="lg" icon={faUsers}>Become a Partner</Button>
                    <Button href="#partner-list" external size="lg" variant="secondary" icon={faBuilding}>View Partners</Button>
                </div>
            </PageHero>

            <div className="container-page py-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <StatCard icon={faHandshake} label="Trusted Partners" value={`${organizations.length}+`} />
                    <StatCard icon={faStar} label="Wishes Created" value={`${totalWishCount ?? 0}+`} tone="gold" />
                    <StatCard icon={faGift} label="Contributions Made" value={`${totalDonationCount ?? 0}+`} tone="success" />
                </div>

                <section id="partner-list" className="scroll-mt-24 pt-14" aria-labelledby="partner-list-heading">
                    <SectionHeader title={<span id="partner-list-heading">Our Trusted Partners</span>} />
                    {organizations.length > 0 ? (
                        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {organizations.map((organization) => (
                                <li key={organization.id} className="flex flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card">
                                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary-50/70 to-secondary-50/70 p-6">
                                        <SafeImage
                                            src={organization.user?.image ? `/storage/${organization.user.image}` : null}
                                            alt={organization.name}
                                            fallbackIcon={faBuilding}
                                            className="max-h-28 w-auto max-w-full object-contain"
                                            fallbackClassName="h-20 w-20 rounded-2xl"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3 className="text-base font-semibold text-slate-900">{organization.name}</h3>
                                        <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                                            <div>
                                                <dd className="text-lg font-bold text-primary-700 tabular-nums">{organization.total_wishes_count}</dd>
                                                <dt className="text-xs text-slate-500">Wishes</dt>
                                            </div>
                                            <div>
                                                <dd className="text-lg font-bold text-secondary-700 tabular-nums">{organization.total_donations_count}</dd>
                                                <dt className="text-xs text-slate-500">Contributions</dt>
                                            </div>
                                            <div>
                                                <dd className="text-lg font-bold text-slate-800 tabular-nums">
                                                    {organization.user?.dob ? organization.user.dob.split('-')[0] : '—'}
                                                </dd>
                                                <dt className="text-xs text-slate-500">Established</dt>
                                            </div>
                                        </dl>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <EmptyState className="mt-8" icon={faBuilding} title="No partners yet" />
                    )}
                </section>

                <section className="relative mt-16 overflow-hidden rounded-[1.75rem] bg-gradient-dark px-6 py-12 text-center shadow-pop sm:px-12 sm:py-16">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary-300/20 blur-3xl" />
                    <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Network of Impact</h2>
                    <p className="relative mx-auto mt-4 max-w-2xl text-lg text-primary-100">
                        Become a ThreeWish partner organization and amplify your impact. Connect with
                        children in need and help fulfill their wishes while engaging your community.
                    </p>
                    <div className="relative mt-8">
                        <Button href={route('register')} size="lg" variant="accent" icon={faChartLine}>Apply to Become a Partner</Button>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
};

export default PartnersPage;
