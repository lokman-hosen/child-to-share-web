import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
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
       <Link href={route('wish.show', { id: wish.id })}>
           <div
               key={wish.id}
               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
           >
               {/* Image */}
               {/*<div className="aspect-square bg-gray-100">*/}
               <div className="bg-gray-100">
                   {wish.featured_image?.file_path ? (
                       <img
                           src={`/storage/${wish.featured_image.file_path}`}
                           alt={wish.title}
                           className="w-full h-full object-cover"
                       />
                   ) : (
                       <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                           <FontAwesomeIcon icon={faStar} className="text-gray-400 text-7xl" />
                       </div>
                   )}
               </div>

               {/* Content */}
               <div className="p-3">
                   {/* Title */}
                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 leading-tight">
                       {textLimit(wish.title, 40)}
                   </h3>

                   {/* Status */}
                   <div className="flex justify-between items-center">
                       {getStatusBadge(wish.status)}
                   </div>
               </div>
           </div>
       </Link>
    );
};

export default SingleWishItemMobile;
