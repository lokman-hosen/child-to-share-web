import React, {useState} from 'react';
import {Head, Link, router, usePage} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faChevronLeft,
    faChevronRight,
    faEye,
    faHandHoldingHand,
    faStar,
    faHeart,
    faMapMarkerAlt,
    faUserCircle,
    faCalendarAlt,
    faTag, faInfoCircle, faBuilding, faSync
} from "@fortawesome/free-solid-svg-icons";
import UserProfileModal from '@/Components/Common/UserProfileModal.jsx';
import UIButton from "@/Components/UI/Button";
import Badge, { statusTone } from "@/Components/UI/Badge";
import MediaGallery from "@/Components/UI/MediaGallery";
import { Avatar } from "@/Components/Common/Navbar.jsx";

const Show = ({wish, module}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const user = usePage().props.auth.user;
    // Function to open modal
    const openModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleFulfilStatus = (fulfilmentId) => {
        router.get(route('wish.fulfill.status.change'), {
            'fulfilment_id': fulfilmentId,
            'status': 'accepted_by_wisher',
        })
    };

    const goBack = (e) => {
        e.preventDefault();
        if (window.history.length > 1) window.history.back();
        else router.visit(route('wish.index'));
    };

    const details = [
        wish?.distance && { icon: faMapMarkerAlt, label: 'Distance', value: `${wish.distance} km away from you` },
        wish.user.organization && { icon: faBuilding, label: 'Organization', value: wish.user.organization?.name || 'N/A' },
        { icon: faTag, label: 'Category', value: wish.category?.name || 'N/A' },
        { icon: faUserCircle, label: 'Age Range', value: `${wish.age_range} years` },
        { icon: faCalendarAlt, label: 'Created', value: wish.created_at },
    ].filter(Boolean);

    return (
        <GuestLayout>
            <Head title="Item Detail"/>
            <div className="container-page py-6 sm:py-10">
                <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                    <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
                        <li><Link href={route('home')} className="hover:text-slate-800">Home</Link></li>
                        <li aria-hidden="true">/</li>
                        <li><Link href={route('wish.index')} className="hover:text-slate-800">Wishes</Link></li>
                        <li aria-hidden="true">/</li>
                        <li className="max-w-[16rem] truncate font-medium text-slate-800" aria-current="page">{wish.title}</li>
                    </ol>
                </nav>

                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Media */}
                    <div className="lg:col-span-7">
                        <MediaGallery files={wish.files} title={wish.title} />
                    </div>

                    {/* Details */}
                    <div className="space-y-5 lg:col-span-5">
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge tone="primary" icon={faStar}>Wish</Badge>
                                <Badge tone={statusTone(wish.status)} dot>
                                    {wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}
                                </Badge>
                            </div>
                            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                <span className="sr-only">Item: </span>{wish.title}
                            </h1>
                        </div>

                        {/* Wisher */}
                        <button
                            type="button"
                            onClick={() => openModal(wish.user)}
                            className="group flex w-full items-center gap-4 rounded-card border border-slate-200/80 bg-white p-4 text-left shadow-card transition hover:border-primary-200"
                        >
                            <Avatar user={wish.user} size="h-14 w-14" className="text-lg" />
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-primary-600">Wish Creator</span>
                                <span className="block truncate text-base font-semibold text-slate-900 group-hover:text-primary-700">{wish.user.name}</span>
                                <span className="block text-sm text-slate-500">
                                    {wish?.distance ? `${wish.distance} km away` : `Age: ${wish.age_range} yrs`}
                                </span>
                            </span>
                            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 text-slate-400 group-hover:text-primary-600" aria-hidden="true" />
                            <span className="sr-only">View profile</span>
                        </button>

                        {/* Basic Information */}
                        <section className="rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                                <FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4 text-primary-600" aria-hidden="true" />
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

                        {/* Description */}
                        <section className="rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                            <h2 className="text-sm font-semibold text-slate-900">Description</h2>
                            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                                {wish.description || 'No description provided.'}
                            </p>
                        </section>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            {wish.user_id === user?.id && (
                                wish.latest_fulfillment?.status === 'requested' ? (
                                    <UIButton onClick={() => handleFulfilStatus(wish.latest_fulfillment.id)} variant="accent" size="lg" icon={faHandHoldingHand}>
                                        Accept Contributor Fulfilment Request
                                    </UIButton>
                                ) : (
                                    <UIButton href={route('wish.fulfill.status.change', {'fulfilment_id': wish.latest_fulfillment?.id})} size="lg" icon={faStar}>
                                        Fulfilment Detail
                                    </UIButton>
                                )
                            )}
                            <UIButton href={route('wish.index')} onClick={goBack} variant="secondary" size="lg" icon={faChevronLeft}>
                                Back to Wishes
                            </UIButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Profile Modal */}
            <UserProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                user={selectedUser}
                dataType='wish'
                additionalData={wish}
            />
        </GuestLayout>
    );
};

export default Show;
