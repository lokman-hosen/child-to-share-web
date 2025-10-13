import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleWishItemMobile = ({wish}) => {
    const getStatusBadge = (status) => {
        const statusColors = {
            available: 'bg-green-100 text-green-800',
            pending: 'bg-yellow-100 text-yellow-800',
            completed: 'bg-gray-100 text-gray-800',
            reserved: 'bg-blue-100 text-blue-800',
        };

        const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800';
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    return (
        <Link href={route('wish.show', { id: wish.id })}>
            <div
                key={wish.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
                {/* Feature Image Container with Wisher Image Overlay */}
                <div className="relative bg-gray-100">
                    {/* Feature Image */}
                    {wish.featured_image?.file_path ? (
                        <img
                            src={`/storage/${wish.featured_image.file_path}`}
                            alt={wish.title}
                            className="w-full h-32 object-cover"
                        />
                    ) : (
                        <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faStar} className="text-gray-400 text-4xl"/>
                        </div>
                    )}

                    {/* Wisher Image - Bottom Right Corner */}
                    <div className="absolute bottom-2 right-2">
                        <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border border-gray-200" title={wish.user?.name || 'Wisher'}>
                            {wish.user?.image ? (
                                <img
                                    src={`/storage/${wish.user.image}`}
                                    alt={wish.user?.name || 'Wisher'}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <img
                                    src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                    alt={wish.user?.name || 'Wisher'}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-3">
                    {/* Title */}
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 leading-tight">
                        {textLimit(wish.title, 40)}
                    </h3>

                    {/* Status and Age/Distance */}
                    <div className="flex flex-wrap gap-1">
                        {getStatusBadge(wish.status)}

                        {wish?.distance ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-500">
                               {wish.distance} km away
                           </span>
                        ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-500">
                               Age: {wish.age_range} yrs
                           </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleWishItemMobile;
