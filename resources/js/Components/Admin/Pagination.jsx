import {Link} from "@inertiajs/react";
import React from "react";

const Pagination = ({ links, data }) => {
    if (links.length < 2) {
        return null; // No pagination needed if only one page or no pages
    }
    return (
        <div className="mt-4 flex justify-between items-center">
            <p className="hidden sm:block text-sm text-slate-600">
                Showing {data.from} to {data.to} of {data.total} entries
            </p>
            <div className="flex space-x-1">
            {links.map((link, index) => (
                    <div key={index}>
                        <Link
                            key={index}
                            href={link.url || "#"}
                            className={`px-3 py-1 rounded text-sm ${
                                link.active
                                    ? "bg-primary-600 text-white"
                                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
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
