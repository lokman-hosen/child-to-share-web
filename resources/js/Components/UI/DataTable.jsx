import cn from './cn';

/**
 * Responsive data table: a real <table> from `lg` up (the sidebar eats tablet width), stacked cards below.
 *
 * columns: [{ key, header, render?(row), className?, align?: 'left'|'right'|'center',
 *             primary?: true (card title on mobile), aside?: true (beside the title on mobile),
 *             hideOnMobile?: true, wide?: true (table column only shown from xl) }]
 * rows: array; rowKey: (row) => key; empty: node shown when no rows.
 */
export default function DataTable({ columns, rows = [], rowKey = (r) => r.id, empty, caption, className = '' }) {
    const cell = (col, row) => (col.render ? col.render(row) : row[col.key] ?? '—');
    const align = (a) => (a === 'right' ? 'text-right' : a === 'center' ? 'text-center' : 'text-left');
    const primary = columns.find((c) => c.primary) || columns[0];
    const actions = columns.find((c) => c.key === 'actions');
    const aside = columns.filter((c) => c.aside);
    const rest = columns.filter((c) => c !== primary && c !== actions && !c.aside && !c.hideOnMobile);

    if (!rows.length) return empty ?? null;

    return (
        <div className={cn('relative overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card', className)}>
            {/* Desktop / tablet */}
            <div className="relative hidden overflow-x-auto lg:block">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                    {caption && <caption className="sr-only">{caption}</caption>}
                    <thead className="bg-slate-50">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    scope="col"
                                    className={cn('whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 first:pl-6 last:pr-6', align(col.align), col.wide && 'hidden xl:table-cell')}
                                >
                                    {col.key === 'actions' ? <span className="sr-only">{col.header || 'Actions'}</span> : col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {rows.map((row) => (
                            <tr key={rowKey(row)} className="align-middle transition-colors hover:bg-slate-50/70">
                                {columns.map((col) => (
                                    <td key={col.key} className={cn('px-4 py-3.5 text-slate-700 first:pl-6 last:pr-6', align(col.align), col.wide && 'hidden xl:table-cell', col.className)}>
                                        {cell(col, row)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <ul className="divide-y divide-slate-100 lg:hidden">
                {rows.map((row) => (
                    <li key={rowKey(row)} className="p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 font-medium text-slate-900">{cell(primary, row)}</div>
                            {aside.length > 0 && <div className="flex shrink-0 flex-col items-end gap-1">{aside.map((c) => <span key={c.key}>{cell(c, row)}</span>)}</div>}
                        </div>
                        {rest.length > 0 && (
                            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                                {rest.map((col) => (
                                    <div key={col.key} className="min-w-0">
                                        <dt className="text-xs text-slate-500">{col.header}</dt>
                                        <dd className="mt-0.5 break-words text-slate-800">{cell(col, row)}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                        {actions && <div className="-ml-2.5 mt-2 flex flex-wrap gap-1">{cell(actions, row)}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
}
