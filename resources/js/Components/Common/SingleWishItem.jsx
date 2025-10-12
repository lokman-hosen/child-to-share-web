import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faStar} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleWishItem = ({wish}) => {
    return (
        <Link href={route('wish.show', {id: wish.id})}>
            <div className="card wish-card bg-white rounded-lg shadow">

                <div className="h-[240px] bg-purple-100 flex items-center justify-center">
                    <div className="h-[240px] w-full bg-gray-100 overflow-hidden">
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
                </div>
                <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">{wish.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{wish.description && textLimit(wish.description, 12)}</p>
                    <div className="flex items-center mt-4">
                        <div className="bg-purple-100 rounded-full h-10 w-10 flex items-center justify-center">
                            {wish.user.image ? (
                                <img
                                    src={`/storage/${wish.user.image}`}
                                    alt={wish.user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                    alt={wish.user.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{wish.user.name}</p>
                            <p className="text-xs text-gray-500">
                                {wish?.distance ? (
                                    <span className="ml-1">{wish?.distance} km away</span>
                                    ): (
                                    <span className="ml-1">Age : {wish.age_range}</span>
                                )}
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
