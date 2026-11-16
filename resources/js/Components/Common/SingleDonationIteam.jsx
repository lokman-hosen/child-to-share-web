import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGift } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { textLimit } from "@/utils.jsx";
import SafeImage from "@/Components/UI/SafeImage";
import { Avatar } from "@/Components/Common/Navbar.jsx";

/** Gift card (responsive; used on Home and /donation). */
const SingleDonationItem = ({ donation }) => {
    return (
        <Link
            href={route('donation.show', { id: donation.id })}
            className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <SafeImage
                    src={donation.featured_image?.file_path ? `/storage/${donation.featured_image.file_path}` : null}
                    alt={donation.title}
                    fallbackIcon={faGift}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-secondary-100/95 px-2.5 py-1 text-xs font-semibold text-secondary-800 shadow-xs backdrop-blur">
                    <FontAwesomeIcon icon={faGift} className="h-3 w-3" aria-hidden="true" />
                    Contribution
                </span>
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
                {donation.category?.name && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary-600">{donation.category.name}</p>
                )}
                <h3 className="mt-1 text-base font-semibold leading-snug text-slate-900 group-hover:text-primary-700">
                    {textLimit(donation.title || '', 40)}
                </h3>
                {donation.description && (
                    <p className="mt-1.5 line-clamp-2 text-sm text-slate-600">{textLimit(donation.description, 90)}</p>
                )}

                <div className="min-h-4 flex-1" />
                <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <Avatar user={donation.user} size="h-8 w-8" className="ring-0 text-xs" />
                        <p className="truncate text-sm font-medium text-slate-700">
                            <span className="sr-only">Gifted by </span>{donation.user?.name}
                        </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-700">
                        View
                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default SingleDonationItem;
