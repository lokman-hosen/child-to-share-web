import { Link } from '@inertiajs/react';
import cn from './cn';

/**
 * App page header: optional breadcrumbs, title, description and actions.
 * `breadcrumbs`: [{ label, href? }]
 */
export default function PageHeader({ title, description, actions, breadcrumbs, icon, className = '' }) {
    return (
        <div className={cn('flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)}>
            <div className="min-w-0">
                {breadcrumbs?.length > 0 && (
                    <nav aria-label="Breadcrumb" className="mb-2 text-sm">
                        <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
                            {breadcrumbs.map((b, i) => (
                                <li key={i} className="flex items-center gap-1.5">
                                    {i > 0 && <span aria-hidden="true">/</span>}
                                    {b.href ? (
                                        <Link href={b.href} className="hover:text-slate-800">{b.label}</Link>
                                    ) : (
                                        <span className="font-medium text-slate-700" aria-current="page">{b.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}
                <div className="flex items-center gap-3">
                    {icon && (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">{icon}</span>
                    )}
                    <h1 className="truncate text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
                </div>
                {description && <p className="mt-1.5 text-sm text-slate-600">{description}</p>}
            </div>
            {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
        </div>
    );
}
