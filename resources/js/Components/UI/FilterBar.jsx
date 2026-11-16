import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

/**
 * Card that groups listing filters. Children are the filter controls.
 * - `onClear` shows a "Clear all" button when `active` is true.
 * - `collapsible`: on phones the controls hide behind a toggle (shows `activeCount`).
 */
export default function FilterBar({ title, description, active = false, activeCount = 0, onClear, collapsible = false, columns = 'lg:grid-cols-4', children, className = '' }) {
    const [open, setOpen] = useState(false);
    const panelId = `filters-${(title || 'list').replace(/\W+/g, '-').toLowerCase()}`;

    return (
        <section aria-label={title} className={cn('rounded-card border border-slate-200/80 bg-white p-4 shadow-card sm:p-6', className)}>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <FontAwesomeIcon icon={faSliders} className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
                        {description && <p className="text-sm text-slate-500">{description}</p>}
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {active && onClear && (
                        <button type="button" onClick={onClear} className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-primary-700 hover:bg-primary-50">
                            <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" aria-hidden="true" />
                            Clear all
                        </button>
                    )}
                    {collapsible && (
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls={panelId}
                            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 md:hidden"
                        >
                            {open ? 'Hide' : 'Show'}
                            {activeCount > 0 && <span className="rounded-full bg-primary-600 px-1.5 text-xs font-semibold text-white">{activeCount}</span>}
                            <FontAwesomeIcon icon={faChevronDown} className={cn('h-3 w-3 transition-transform', open && 'rotate-180')} aria-hidden="true" />
                        </button>
                    )}
                </div>
            </div>
            <div id={panelId} className={cn('mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2', columns, collapsible && !open && 'max-md:hidden')}>{children}</div>
        </section>
    );
}
