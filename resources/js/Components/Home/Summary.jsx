import React from 'react';
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleCheck, faHandHoldingHeart, faFaceSmile, faBuilding } from '@fortawesome/free-solid-svg-icons';

const fmt = (n) => new Intl.NumberFormat().format(Number(n) || 0);

/**
 * Impact stats band. Shows the real counts immediately (the previous version
 * animated from 0 and displayed 0 until scrolled into view).
 */
const Summary = ({ activeDonorCount, activeWisherCount, totalWishCount, fulfilWishCount, community }) => {
    const stats = [
        { label: 'Total Wishes', value: totalWishCount, icon: faStar, href: route('wish.index') },
        { label: 'Wishes Fulfilled', value: fulfilWishCount, icon: faCircleCheck, href: route('fulfillment.index') },
        { label: 'Active Contributors', value: activeDonorCount, icon: faHandHoldingHeart, href: route('donor.list') },
        { label: 'Happy Wishers', value: activeWisherCount, icon: faFaceSmile, href: route('wisher.list') },
        { label: 'Organizations', value: community, icon: faBuilding, href: route('partner') },
    ];

    return (
        <section aria-labelledby="impact-heading" className="bg-primary-800">
            <div className="container-page py-14 sm:py-16">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-200">Our Impact</p>
                    <h2 id="impact-heading" className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Building compassionate communities through the joy of giving
                    </h2>
                </div>
                <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {stats.map((s, i) => (
                        <li key={s.label} className={i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''}>
                            <Link
                                href={s.href}
                                className="group flex h-full flex-col items-center rounded-2xl bg-white/[0.07] px-4 py-6 text-center ring-1 ring-inset ring-white/10 transition hover:bg-white/[0.12]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-secondary-200">
                                    <FontAwesomeIcon icon={s.icon} className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="mt-3 text-3xl font-bold tracking-tight text-white tabular-nums sm:text-4xl">{fmt(s.value)}</span>
                                <span className="mt-1 text-sm font-medium text-primary-100">{s.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Summary;
