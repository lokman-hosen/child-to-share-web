import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar, faUser, faLocationDot, faChild } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { textLimit } from "@/utils.jsx";
import SafeImage from "@/Components/UI/SafeImage";

/**
 * Wish card (responsive; used on Home and /wish).
 * Large photo = the wisher, round inset = the wished item (same data mapping as before).
 */
const SingleWishItem = ({ wish }) => {
    return (
        <Link
            href={route('wish.show', { id: wish.id })}
            className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <SafeImage
                    src={wish.user?.image ? `/storage/${wish.user.image}` : null}
                    alt={wish.user?.name ? `Photo of ${wish.user.name}` : ''}
                    fallbackIcon={faUser}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 30%' }}
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary-700 shadow-xs backdrop-blur">
                    <FontAwesomeIcon icon={faStar} className="h-3 w-3" aria-hidden="true" />
                    Wish
                </span>
                <div className="absolute -bottom-0 right-3 translate-y-1/2" title={wish.title}>
                    <SafeImage
                        src={wish.featured_image?.file_path ? `/storage/${wish.featured_image.file_path}` : null}
                        alt={wish.title}
                        fallbackIcon={faStar}
                        className="h-16 w-16 rounded-full border-4 border-white bg-white object-cover shadow-card"
                        fallbackClassName="rounded-full"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4 pt-5 sm:p-5">
                {wish.category?.name && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{wish.category.name}</p>
                )}
                <h3 className="mt-1 pr-16 text-base font-semibold leading-snug text-slate-900 group-hover:text-primary-700">
                    For: {textLimit(wish.title || '', 40)}
                </h3>

                <div className="min-h-4 flex-1" />
                <div className="flex items-center justify-between pt-4">
                    <p className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                        {wish?.distance ? (
                            <>
                                <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
                                {wish.distance} km away
                            </>
                        ) : wish.age_range ? (
                            <>
                                <FontAwesomeIcon icon={faChild} className="h-3.5 w-3.5 text-secondary-500" aria-hidden="true" />
                                {wish.age_range} yrs
                            </>
                        ) : null}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
                        View
                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default SingleWishItem;
