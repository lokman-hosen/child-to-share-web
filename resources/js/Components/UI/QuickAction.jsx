import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/** Linked tile for dashboard quick actions. */
export default function QuickAction({ href, icon, title, description }) {
    return (
        <Link
            href={href}
            className="group flex items-start gap-4 rounded-card border border-slate-200/80 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card-hover"
        >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <FontAwesomeIcon icon={icon} className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    {title}
                    <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-600" aria-hidden="true" />
                </span>
                {description && <span className="mt-0.5 block text-sm text-slate-500">{description}</span>}
            </span>
        </Link>
    );
}
