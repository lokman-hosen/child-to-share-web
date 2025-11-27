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
           <Link href={route('donation.show', {id: donation.id})}>
               <div className="product-card">
                   <div className="relative">
                       <div className="w-full bg-gray-100 flex items-center justify-center">
                           {donation.featured_image?.file_path ? (
                               <img
                                   src={`/storage/${donation.featured_image.file_path}`}
                                   alt={donation.title}
                                   className="w-full h-40 object-cover rounded-t-lg"
                               />
                           ) : (
                               <div
                                   className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                   <FontAwesomeIcon icon={faGift} className="text-gray-400 text-4xl"/>
                               </div>
                           )}
                       </div>
                       <div className="badge badge-donation">DONATION</div>
                   </div>
                   <div className="p-4">
                       <h3 className="font-medium text-gray-900 mb-1">{donation.title}</h3>
                       <p className="text-gray-500 text-sm mb-3">
                           {donation.description && textLimit(donation.description, 3)}
                       </p>
                       <div className="flex items-center justify-between">
                           <div className="flex items-center">
                               <div>
                                   <p className="text-sm font-medium text-gray-900">By: {textLimit(donation.user.name, 3)}</p>
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

export default SingleDonationItemMobile;
