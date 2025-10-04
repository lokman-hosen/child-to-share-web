import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    // Filter out null/disabled links and count only active page links
    const activeLinks = links.filter(link =>
        link.url !== null &&
        !isNaN(parseInt(link.label)) // Only count numeric page links
    );

    // Also check if there are multiple pages by looking for next/previous links that are active
    const hasPrevious = links.some(link => link.label.includes('Previous') && link.url);
    const hasNext = links.some(link => link.label.includes('Next') && link.url);
    const hasMultiplePages = activeLinks.length > 1 || hasPrevious || hasNext;

    if (!hasMultiplePages) {
        return null; // No pagination needed if only one page
    }

    return (
        <div className="pagination flex justify-center items-center space-x-2 mt-8">
            {links.map((link, index) => (
                <div key={index}>
                    <Link
                        href={link.url || "#"}
                        preserveScroll
                        className={`px-3 py-2 rounded-md border transition-all duration-300 ease-in-out ${
                            link.active
                                ? "bg-purple-600 text-white border-purple-600"
                                : link.url
                                    ? "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                                    : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Pagination;