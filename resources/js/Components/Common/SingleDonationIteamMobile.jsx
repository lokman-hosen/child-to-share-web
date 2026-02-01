import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faGift} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";
import {Link} from "@inertiajs/react";

const SingleDonationItemMobile = ({donation}) => {
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
        <Link href={route('donation.show', {id: donation.id})}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative">
                    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
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
                        CONTRIBUTION
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-md font-bold text-accent group-hover:text-primary transition-colors duration-200">
                        {donation.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 mt-2">
                        {donation.description && textLimit(donation.description, 30)}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div>
                                <p className="text-xs font-medium text-gray-700">
                                    <span className="text-gray-500">By:</span> {textLimit(donation.user.name, 20)}
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
    );
};

export default SingleDonationItemMobile;
