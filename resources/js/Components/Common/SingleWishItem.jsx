import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift, faStar} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleWishItem = ({wish}) => {
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
                        <div className="badge badge-wish">WISH</div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-row">
                            <h3 className="font-medium text-gray-900 mb-1">{wish.user.name},</h3>
                            <p className="text-gray-600 text-sm mt-1">
                                {wish?.distance ? (
                                    <span className="ml-1">{wish?.distance} km away</span>
                                ) : (
                                    <span className="ml-1">Age : {wish.age_range} yrs</span>
                                )}
                            </p>
                        </div>
                            <p className="text-gray-500 text-sm mb-3">
                                {wish.description && textLimit(wish.description, 6)}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
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
                                    <div className="ml-2">
                                        <p className="text-sm font-medium text-gray-900">{wish.title}</p>
                                        <p className="text-xs text-gray-500">{wish.description && textLimit(wish.description, 6)}</p>
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

export default SingleWishItem;
