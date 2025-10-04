import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons";
import {textLimit} from "@/utils.jsx";

const SingleDonationItem = ({donation}) => {
    return (
        <div key={donation.id} className="card donation-card bg-white rounded-lg shadow">
            <div className="h-48 bg-green-100 flex items-center justify-center">
                <div className="h-48 w-full bg-gray-100 overflow-hidden">
                    {donation.featured_image?.file_path ? (
                        <img
                            src={`/storage/${donation.featured_image.file_path}`}
                            alt={donation.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl" />
                        </div>
                    )}
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">{donation.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                    {donation.description && textLimit(donation.description, 12)}
                </p>
                <div className="flex items-center mt-4">
                    <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-green-600 font-medium">D</span>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{donation.user.name}</p>
                        {/*<p className="text-xs text-gray-500">2.5 km away</p>*/}
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    {/* Tags */}
                    {donation.auto_tags && (
                        <>
                            {Array.isArray(donation.auto_tags)
                                ? donation.auto_tags.map((tag, tagIndex) => (
                                    <span key={tagIndex}
                                          className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                            {tag}
                                                        </span>
                                ))
                                : donation.auto_tags.split(',').map((tag, tagIndex) => (
                                    <span key={tagIndex}
                                          className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                            {tag.trim()}
                                                        </span>
                                ))
                            }
                        </>
                    )}

                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            {donation.category.name}
                                        </span>
                </div>
            </div>
        </div>
    );
};

export default SingleDonationItem;
