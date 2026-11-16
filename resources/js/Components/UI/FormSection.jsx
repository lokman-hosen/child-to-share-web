import cn from './cn';

/** A titled group of form fields inside a card. */
export default function FormSection({ title, description, columns = 'md:grid-cols-2', className = '', children }) {
    return (
        <section className={cn('rounded-card border border-slate-200/80 bg-white shadow-card', className)}>
            {(title || description) && (
                <header className="border-b border-slate-100 px-5 py-4 sm:px-6">
                    {title && <h2 className="text-base font-semibold text-slate-900">{title}</h2>}
                    {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
                </header>
            )}
            <div className={cn('grid grid-cols-1 gap-5 p-5 sm:p-6', columns)}>{children}</div>
        </section>
    );
}

/** Form footer: secondary actions left (or `cancel`), primary submit right. */
export function FormActions({ children, className = '' }) {
    return (
        <div className={cn('flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-end', className)}>
            {children}
        </div>
    );
}
