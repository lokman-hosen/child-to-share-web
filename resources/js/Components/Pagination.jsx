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

    const base = 'inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors';
    const idle = 'bg-white text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50';
    const disabled = 'bg-slate-50 text-slate-300 ring-1 ring-inset ring-slate-100 cursor-not-allowed';

    const Arrow = ({ link, icon, label }) => link?.url ? (
        <Link href={link.url} preserveScroll className={`${base} ${idle}`} aria-label={label}>
            <FontAwesomeIcon icon={icon} className="h-3 w-3" aria-hidden="true" />
        </Link>
    ) : (
        <span className={`${base} ${disabled}`} aria-disabled="true" aria-label={label}>
            <FontAwesomeIcon icon={icon} className="h-3 w-3" aria-hidden="true" />
        </span>
    );

    const PageLink = ({ page }) => (
        <Link
            href={getPageUrl(page)}
            preserveScroll
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
            className={`${base} ${currentPage === page ? 'bg-primary-600 text-white shadow-xs hover:bg-primary-700' : idle}`}
        >
            {page}
        </Link>
    );

    return (
        <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-1.5">
            <Arrow link={previousLink} icon={faChevronLeft} label="Previous page" />

            {showFirstPage && (
                <>
                    <PageLink page={1} />
                    {currentPage > 3 && <span className="px-1 text-slate-400" aria-hidden="true">…</span>}
                </>
            )}

            {visiblePages.map((page) => <PageLink key={page} page={page} />)}

            {showLastPage && (
                <>
                    {currentPage < totalPages - 2 && <span className="px-1 text-slate-400" aria-hidden="true">…</span>}
                    <PageLink page={totalPages} />
                </>
            )}

            <Arrow link={nextLink} icon={faChevronRight} label="Next page" />
        </nav>
    );
}

export default Pagination;
