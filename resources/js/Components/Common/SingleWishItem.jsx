import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faStar, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleWishItemMobile = ({wish}) => {
    const getStatusBadge = (status) => {
        const statusColors = {
            available: 'bg-green-100 text-green-800',
            pending: 'bg-yellow-100 text-yellow-800',
            completed: 'bg-gray-100 text-gray-800',
            reserved: 'bg-primary/10 text-primary',
        };

        const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800';
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <>
            <Link href={route('wish.show', {id: wish.id})}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                    <div className="relative">
                        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                            {wish.user.image ? (
                                <img
                                    src={`/storage/${wish.user.image}`}
                                    alt={wish.user.name}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div
                                    className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faUserAlt} className="text-gray-400 text-8xl"/>
                                </div>
                            )}
                        </div>
                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                            WISH
                        </div>
                        {/* Wisher Image - Bottom Right Corner */}
                        <div className="absolute bottom-2 right-2">
                            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg border-2 border-primary/20 group-hover:border-primary transition-all duration-300"
                                 title={wish.user?.name || 'Wisher'}>

                                {wish.featured_image?.file_path ? (
                                    <img
                                        src={`/storage/${wish.featured_image.file_path}`}
                                        alt={wish.title}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center rounded-full">
                                        <FontAwesomeIcon icon={faStar} className="text-primary text-2xl"/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-row">
                            <h3 className="text-md font-bold text-accent group-hover:text-primary transition-colors duration-200">
                                For: {textLimit(wish.title, 40)}
                            </h3>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <div>
                                    <p className="text-gray-600 text-xs">
                                        {wish?.distance ? (
                                            <span className="flex items-center">
                                                <svg className="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {wish?.distance} km away
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <svg className="w-3 h-3 mr-1 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                {wish.age_range} yrs
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SingleWishItemMobile;
