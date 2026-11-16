import React from 'react';
import { Link, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHand, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getFulfilmentStatus } from "@/utils.jsx";
import SafeImage from "@/Components/UI/SafeImage";
import Badge from "@/Components/UI/Badge";
import Button from "@/Components/UI/Button";

/**
 * "Your Current Wishes" with fulfilment requests (donor-wisher dashboard).
 * The previous file also contained hard-coded sample cards for other roles that were never rendered.
 */
const WishList = ({ userType, wishRequests = [] }) => {
    const handleFulfilStatus = (fulfilmentId) => {
        router.get('wish-fulfill-status', {
            'status': 'accepted_by_wisher',
            'fulfilment_id': fulfilmentId,
        });
    };

    if (userType !== 'donor-wisher' || !wishRequests || wishRequests.length === 0) return null;

    return (
        <section aria-labelledby="current-wishes">
            <div className="flex items-center justify-between gap-4">
                <h2 id="current-wishes" className="text-base font-semibold text-slate-900">Your Current Wishes</h2>
                <Link href={route('wish.fulfill.list')} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:underline">
                    View all <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
                </Link>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {wishRequests.map((wish) => {
                    const fulfil = wish.latest_fulfillment;
                    return (
                        <li key={wish.id} className="flex flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card">
                            <div className="relative aspect-[4/3] bg-slate-100">
                                <SafeImage
                                    src={wish.featured_image?.file_path ? `/storage/${wish.featured_image.file_path}` : null}
                                    alt={wish.title}
                                    fallbackIcon={faStar}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)]">
                                    {fulfil?.status ? (
                                        <Badge tone="success" className="whitespace-normal">{getFulfilmentStatus(fulfil.status)}</Badge>
                                    ) : (
                                        <Badge tone="warning">{wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}</Badge>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{wish.title}</h3>
                                <dl className="mt-2 space-y-1 text-sm text-slate-600">
                                    <div className="flex gap-1.5"><dt className="font-medium">Age Range:</dt><dd className="capitalize">{wish.age_range}</dd></div>
                                    <div className="flex gap-1.5"><dt className="font-medium">Wisher:</dt><dd className="truncate">{wish.user?.name}</dd></div>
                                </dl>
                                <div className="min-h-4 flex-1" />
                                {fulfil?.status === 'requested' ? (
                                    <Button onClick={() => handleFulfilStatus(fulfil.id)} size="sm" variant="primary" icon={faHandHoldingHand} className="w-full">
                                        Accept Contributor Fulfilment Request
                                    </Button>
                                ) : (
                                    <Button href={route('wish.fulfill.status.change', { 'fulfilment_id': fulfil?.id })} size="sm" variant="secondary" icon={faStar} className="w-full">
                                        Fulfilment Detail
                                    </Button>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default WishList;
