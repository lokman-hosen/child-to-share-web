import { Link } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ links }) => {
    if (!links || links.length <= 3) return null;

    const currentPage = parseInt(links.find(link => link.active)?.label || 1);

    // Better way to calculate total pages - find the last numeric page number
    const getTotalPages = () => {
        const numericLinks = links
            .map(link => parseInt(link.label))
            .filter(page => !isNaN(page));

        return Math.max(...numericLinks);
    };

    const totalPages = getTotalPages();

    const previousLink = links.find(link => link.label.includes('Previous'));
    const nextLink = links.find(link => link.label.includes('Next'));

    if (totalPages <= 1) return null;

    // Show only current page and neighbors
    const getVisiblePages = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const visiblePages = getVisiblePages();
    const showFirstPage = currentPage > 2;
    const showLastPage = currentPage < totalPages - 1;

    // Find page URL by page number
    const getPageUrl = (pageNumber) => {
        return links.find(link =>
            link.url && parseInt(link.label) === pageNumber
        )?.url || "#";
    };

    return (
        <div className="pagination flex items-center justify-center space-x-2 mt-8">
            {/* Previous */}
            <Link
                href={previousLink?.url || "#"}
                preserveScroll
                className={`flex items-center px-3 py-2 rounded-lg border transition-all ${
                    previousLink?.url
                        ? "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                        : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                }`}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
            </Link>

            {/* First Page */}
            {showFirstPage && (
                <>
                    <Link
                        href={getPageUrl(1)}
                        preserveScroll
                        className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    >
                        1
                    </Link>
                    {currentPage > 3 && (
                        <span className="px-2 text-gray-400">...</span>
                    )}
                </>
            )}

            {/* Visible Pages */}
            {visiblePages.map(page => (
                <Link
                    key={page}
                    href={getPageUrl(page)}
                    preserveScroll
                    className={`px-3 py-2 rounded-lg border transition-all ${
                        currentPage === page
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                    }`}
                >
                    {page}
                </Link>
            ))}

            {/* Last Page */}
            {showLastPage && (
                <>
                    {currentPage < totalPages - 2 && (
                        <span className="px-2 text-gray-400">...</span>
                    )}
                    <Link
                        href={getPageUrl(totalPages)}
                        preserveScroll
                        className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {/* Next */}
            <Link
                href={nextLink?.url || "#"}
                preserveScroll
                className={`flex items-center px-3 py-2 rounded-lg border transition-all ${
                    nextLink?.url
                        ? "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                        : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                }`}
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </Link>
        </div>
    );
}

export default Pagination;
