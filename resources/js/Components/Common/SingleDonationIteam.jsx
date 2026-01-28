import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleDonationItem = ({donation}) => {
    return (
        <Link href={route('donation.show', {id: donation.id})}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        {donation.featured_image?.file_path ? (
                            <img
                                src={`/storage/${donation.featured_image.file_path}`}
                                alt={donation.title}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div
                                className="w-full h-56 bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center">
                                <FontAwesomeIcon icon={faGift} className="text-secondary text-6xl"/>
                            </div>
                        )}
                    </div>
                    <div className="absolute top-3 left-3 bg-secondary text-accent px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        DONATION
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-accent text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                        {textLimit(donation.title, 18)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {donation.description && textLimit(donation.description, 20)}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center overflow-hidden border border-primary/20">
                                {donation.user.image ? (
                                    <img
                                        src={`/storage/${donation.user.image}`}
                                        alt={donation.user.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                        <span className="text-primary text-xs font-bold">
                                            {donation.user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-accent">
                                    {textLimit(donation.user.name, 15)}
                                </p>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleDonationItem;
