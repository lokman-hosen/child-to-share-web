import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleDonationItem = ({donation}) => {
    return (
        <Link href={route('donation.show', {id: donation.id})}>
                <div className="product-card">
                    <div className="relative">
                        <div className="bg-gray-100 flex items-center justify-center">
                            {donation.featured_image?.file_path ? (
                                <img
                                    src={`/storage/${donation.featured_image.file_path}`}
                                    alt={donation.title}
                                    className="w-full h-56 object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl"/>
                                </div>
                            )}
                        </div>
                        <div className="badge badge-donation">DONATION</div>
                    </div>
                    <div className="p-2">
                        <h3 className="font-medium text-gray-900 mb-1">{textLimit(donation.title,18)}</h3>
                        <p className="text-gray-500 text-xs mb-3">
                            {donation.description && textLimit(donation.description, 20)}
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
                                    <p className="text-xs font-medium text-gray-900">
                                        {textLimit(donation.user.name, 15)}
                                    </p>
                                    {/*<p className="text-xs text-gray-500">{donation.category.name}</p>*/}
                                </div>
                            </div>
                            <button className="bg-black text-white hover:bg-gray-700 px-1 py-1 rounded text-xs">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default SingleDonationItem;
