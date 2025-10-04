import {Link} from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    if (links.length < 2) {
        return null; // No pagination needed if only one page or no pages
    }
    return (
        <div className="pagination">
            {links.map((link, index) => (
                <div key={index}>
                    <Link
                        key={index}
                        href={link.url || "#"}
                        preserveScroll
                        className={`mx-1 px-4 py-2 rounded-md border transition-all duration-300 ease-in-out ${
                            link.active
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-white text-gray-700 hover:bg-gray-300"
                        } ${!link.url ? "mx-1 px-4 py-2 rounded-md border border-gray-300 bg-white cursor-pointer transition-all duration-300 ease-in-out" : "mx-1 px-4 py-2 rounded-md border border-gray-300  text-black cursor-pointer transition-all duration-300 ease-in-out"}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                </div>
            ))}
        </div>

    )
}
export default Pagination;
