import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faStar} from "@fortawesome/free-solid-svg-icons";
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
        <>
            <Link href={route('wish.show', {id: wish.id})}>
                <div className="product-card">
                    <div className="relative">
                        <div className="w-full bg-gray-100 flex items-center justify-center">
                            {wish.user.image ? (
                                <img
                                    src={`/storage/${wish.user.image}`}
                                    alt={wish.user.name}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                            ) : (
                                <img
                                    src="https://www.shareicon.net/data/256x256/2016/08/04/806683_man_512x512.png"
                                    alt={wish.user.name}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                            )}
                        </div>
                        <div className="badge badge-wish">WISH</div>
                        {/* Wisher Image - Bottom Right Corner */}
                        <div className="absolute bottom-2 right-2">
                            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-md border border-gray-200" title={wish.user?.name || 'Wisher'}>

                                {wish.featured_image?.file_path ? (
                                    <img
                                        src={`/storage/${wish.featured_image.file_path}`}
                                        alt={wish.title}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faStar} className="text-gray-400 text-4xl"/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-row">
                            <h3 className="text-md font-bold text-gray-900">For: {textLimit(wish.title, 40)}</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div>
                                    <p className="text-gray-600 text-sm">
                                        {wish?.distance ? (
                                            <span>Dis: {wish?.distance} km away</span>
                                        ) : (
                                            <span>Ag: {wish.age_range} yrs</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <button className="bg-black text-white hover:bg-gray-700 px-1 py-1 rounded text-sm">
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
