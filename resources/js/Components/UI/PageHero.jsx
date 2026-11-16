import cn from './cn';

/** Compact header band for inner public pages (About, Contact, listings…). */
export default function PageHero({ eyebrow, title, description, children, className = '' }) {
    return (
        <section className={cn('relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-primary-50 via-white to-canvas', className)}>
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary-100/60 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary-100/70 blur-3xl" />
            <div className="container-page relative py-12 sm:py-16">
                <div className="max-w-3xl">
                    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
                    {description && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>}
                </div>
                {children && <div className="mt-8">{children}</div>}
            </div>
        </section>
    );
}
