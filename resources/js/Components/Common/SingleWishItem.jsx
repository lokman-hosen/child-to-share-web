import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faStar} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleWishItem = ({wish}) => {
    return (
        <Link href={route('wish.show', {id: wish.id})}>
            <div className="card wish-card bg-white rounded-lg shadow">

                <div className="bg-purple-100 flex items-center justify-center">
                    <div className="w-full bg-gray-100 overflow-hidden">
                        {wish.user.image ? (
                            <img
                                src={`/storage/${wish.user.image}`}
                                alt={wish.user.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src="https://www.shareicon.net/data/256x256/2016/08/04/806683_man_512x512.png"
                                alt={wish.user.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex flex-row">
                        <h3 className="text-lg font-medium text-gray-900">{wish.user.name},</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            {wish?.distance ? (
                                <span className="ml-1">{wish?.distance} km away</span>
                            ) : (
                                <span className="ml-1">Age : {wish.age_range} yrs</span>
                            )}
                        </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="bg-purple-100 rounded-full h-14 w-14 flex items-center justify-center">
                            {wish.featured_image?.file_path ? (
                                <img
                                    src={`/storage/${wish.featured_image.file_path}`}
                                    alt={wish.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faStar} className="text-gray-400 text-4xl"/>
                                </div>
                            )}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{wish.title}</p>
                            <p className="text-xs text-gray-500">
                                {wish.description && textLimit(wish.description, 12)}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {wish.category.name}
                        </span>
                        <span
                            className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {wish.status}
                        </span>
                        {wish.distance &&
                            <span
                                className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                Age: {wish.age_range} years
                            </span>
                        }

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleWishItem;
