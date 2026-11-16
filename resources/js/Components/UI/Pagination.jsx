import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

/** Laravel paginator links → accessible pagination. `data` is the paginator ({from,to,total,links}). */
export default function Pagination({ data, links = data?.links || [], className = '' }) {
    if (!links || links.length < 4) {
        // prev + 1 page + next → nothing to paginate; still show the count if available
        return data?.total ? <p className={cn('text-sm text-slate-500', className)}>Showing {data.total} {data.total === 1 ? 'entry' : 'entries'}</p> : null;
    }
    const prev = links[0];
    const next = links[links.length - 1];
    const pages = links.slice(1, -1);

    const base = 'inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors';
    const item = (link, children, label) =>
        link.url ? (
            <Link href={link.url} preserveScroll aria-label={label} aria-current={link.active ? 'page' : undefined}
                className={cn(base, link.active ? 'bg-primary-600 text-white shadow-xs' : 'text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50')}>
                {children}
            </Link>
        ) : (
            <span aria-disabled="true" className={cn(base, 'cursor-default text-slate-400', label ? 'ring-1 ring-inset ring-slate-200' : '')}>{children}</span>
        );

    return (
        <nav aria-label="Pagination" className={cn('flex flex-col items-center gap-3 sm:flex-row sm:justify-between', className)}>
            <p className="text-sm text-slate-500">
                Showing <span className="font-medium text-slate-700">{data?.from ?? 0}</span>–<span className="font-medium text-slate-700">{data?.to ?? 0}</span> of{' '}
                <span className="font-medium text-slate-700">{data?.total ?? 0}</span>
            </p>
            <div className="flex items-center gap-1.5">
                {item(prev, <><FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" aria-hidden="true" /><span className="ml-1.5 hidden sm:inline">Previous</span></>, 'Previous page')}
                <div className="hidden items-center gap-1.5 xl:flex">
                    {pages.map((l, i) => <span key={i}>{item(l, <span dangerouslySetInnerHTML={{ __html: l.label }} />, l.url ? `Page ${l.label}` : undefined)}</span>)}
                </div>
                <span className="whitespace-nowrap px-2 text-sm text-slate-600 xl:hidden">
                    Page {data?.current_page ?? pages.find((p) => p.active)?.label} of {data?.last_page ?? pages.length}
                </span>
                {item(next, <><span className="mr-1.5 hidden sm:inline">Next</span><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" aria-hidden="true" /></>, 'Next page')}
            </div>
        </nav>
    );
}
