import cn from './cn';

/** Section title block. `align="center"` for marketing sections. */
export default function SectionHeader({ eyebrow, title, description, action, align = 'left', className = '', as: H = 'h2' }) {
    const center = align === 'center';
    return (
        <div className={cn('flex flex-col gap-4', !center && 'sm:flex-row sm:items-end sm:justify-between', center && 'items-center text-center', className)}>
            <div className={cn(center && 'max-w-2xl')}>
                {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                <H className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</H>
                {description && <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
        </div>
    );
}
