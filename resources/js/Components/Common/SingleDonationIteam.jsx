import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleDonationItem = ({donation}) => {
    return (
        <>
            <Link href={route('donation.show', {id: donation.id})}>
                <div className="product-card">
                    <div className="relative">
                        <div className="h-[240px] bg-gray-100 flex items-center justify-center">
                            {donation.featured_image?.file_path ? (
                                <img
                                    src={`/storage/${donation.featured_image.file_path}`}
                                    alt={donation.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl"/>
                                </div>
                            )}
                        </div>
                        <div className="badge badge-donation">DONATION</div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">{donation.title}</h3>
                        <p className="text-gray-500 text-sm mb-3">
                             <span className="block md:hidden">
                                {donation.description && textLimit(donation.description, 3)}
                            </span>
                            <span className="hidden md:block">
                                {donation.description && textLimit(donation.description, 6)}
                            </span>
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                                    {donation.user.image ? (
                                        <img
                                            src={`/storage/${donation.user.image}`}
                                            alt={donation.user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                            alt={donation.user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="ml-2">
                                    <p className="text-sm font-medium text-gray-900">{donation.user.name}</p>
                                    <p className="text-xs text-gray-500">{donation.category.name}</p>
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

export default SingleDonationItem;
