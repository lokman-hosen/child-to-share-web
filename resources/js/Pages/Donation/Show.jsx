import React, {useState} from 'react';
import {Head, Link, router} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faGift,
    faTag,
    faShieldAlt,
    faCalendarAlt,
    faBuilding,
    faBox,
} from "@fortawesome/free-solid-svg-icons";
import UserProfileModal from "@/Components/Common/UserProfileModal.jsx";
import UIButton from "@/Components/UI/Button";
import Badge, { statusTone } from "@/Components/UI/Badge";
import MediaGallery from "@/Components/UI/MediaGallery";
import { Avatar } from "@/Components/Common/Navbar.jsx";

const Show = ({donation, module}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const goBack = (e) => {
        e.preventDefault();
        if (window.history.length > 1) window.history.back();
        else router.visit(route('donation.index'));
    };

    const tags = !donation.auto_tags || donation.auto_tags.length === 0
        ? []
        : Array.isArray(donation.auto_tags)
            ? donation.auto_tags
            : donation.auto_tags.split(',').map((t) => t.trim());

    const details = [
        { icon: faBox, label: 'Category', value: donation.category?.name || 'N/A' },
        { icon: faShieldAlt, label: 'Item Condition', value: <span className="capitalize">{donation.item_condition}</span> },
        donation.organization && { icon: faBuilding, label: 'Organization', value: donation.organization.name },
        { icon: faCalendarAlt, label: 'Created', value: donation.created_at },
    ].filter(Boolean);

    return (
        <GuestLayout>
            <Head title="Item Detail"/>
            <div className="container-page py-6 sm:py-10">
                <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                    <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
                        <li><Link href={route('home')} className="hover:text-slate-800">Home</Link></li>
                        <li aria-hidden="true">/</li>
                        <li><Link href={route('donation.index')} className="hover:text-slate-800">Gifts</Link></li>
                        <li aria-hidden="true">/</li>
                        <li className="max-w-[16rem] truncate font-medium text-slate-800" aria-current="page">{donation.title}</li>
                    </ol>
                </nav>

                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                        <MediaGallery files={donation.files} title={donation.title} />
                    </div>

                    <div className="space-y-5 lg:col-span-5">
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge tone="gold" icon={faGift}>Contribution</Badge>
                                <Badge tone={statusTone(donation.status)} dot>
                                    {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                                </Badge>
                            </div>
                            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                <span className="sr-only">Item: </span>{donation.title}
                            </h1>
                        </div>

                        {/* Contributor */}
                        <button
                            type="button"
                            onClick={() => openModal(donation.user)}
                            className="group flex w-full items-center gap-4 rounded-card border border-slate-200/80 bg-white p-4 text-left shadow-card transition hover:border-primary-200"
                        >
                            <Avatar user={donation.user} size="h-14 w-14" className="text-lg" />
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-primary-600">Contributor</span>
                                <span className="block truncate text-base font-semibold text-slate-900 group-hover:text-primary-700">{donation.user.name}</span>
                                <span className="block text-sm text-slate-500">
                                    {donation?.distance ? `${donation.distance} km away` : 'Distance: n/a'}
                                </span>
                            </span>
                            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-slate-400 group-hover:text-primary-600" aria-hidden="true" />
                            <span className="sr-only">View profile</span>
                        </button>

                        <section className="rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                                <FontAwesomeIcon icon={faTag} className="h-4 w-4 text-primary-600" aria-hidden="true" />
                                Basic Information
                            </h2>
                            <dl className="mt-4 divide-y divide-slate-100">
                                {details.map((d) => (
                                    <div key={d.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                                        <dt className="flex items-center gap-2 text-slate-500">
                                            <FontAwesomeIcon icon={d.icon} className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                                            {d.label}
                                        </dt>
                                        <dd className="text-right font-medium text-slate-900">{d.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        {tags.length > 0 && (
                            <section className="rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                                <h2 className="text-sm font-semibold text-slate-900">Tags</h2>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {tags.map((tag, i) => (
                                        <li key={i}><Badge tone="primary">{tag}</Badge></li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <section className="rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                            <h2 className="text-sm font-semibold text-slate-900">Description</h2>
                            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                                {donation.description || 'No description provided.'}
                            </p>
                        </section>

                        <UIButton href={route('donation.index')} onClick={goBack} variant="secondary" size="lg" icon={faChevronLeft} className="w-full">
                            Back to Gifts
                        </UIButton>
                    </div>
                </div>
            </div>

            {/* User Profile Modal */}
            <UserProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                user={selectedUser}
                dataType='donation'
                additionalData={donation}
            />
        </GuestLayout>
    );
};

export default Show;
