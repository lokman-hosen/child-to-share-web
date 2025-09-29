import {Link} from "@inertiajs/react";
import React from "react";

const Pagination = ({ links, data }) => {
    if (links.length < 2) {
        return null; // No pagination needed if only one page or no pages
    }
    return (
        <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
                Showing {data.from} to {data.to} of {data.total} users
            </p>
            <div className="flex space-x-1">
                {links.map((link, index) => (
                    <div key={index}>
                        <Link
                            key={index}
                            href={link.url || "#"}
                            className={`px-3 py-1 rounded text-sm ${
                                link.active
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            } ${!link.url ? "cursor-not-allowed opacity-50" : ""}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Pagination;
