import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from './cn';

const tones = {
    neutral: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    primary: 'text-primary-700 hover:bg-primary-50',
    danger: 'text-danger-700 hover:bg-danger-50',
    success: 'text-success-700 hover:bg-success-50',
};

/** Compact row action (icon + label). `href` → Inertia Link, otherwise a button. */
export function RowAction({ href, icon, label, tone = 'neutral', external = false, className = '', ...props }) {
    const classes = cn(
        'inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary-500',
        tones[tone],
        className,
    );
    const content = (
        <>
            {icon && <FontAwesomeIcon icon={icon} className="h-3.5 w-3.5" aria-hidden="true" />}
            <span>{label}</span>
        </>
    );
    if (href) {
        return external ? (
            <a href={href} className={classes} {...props}>{content}</a>
        ) : (
            <Link href={href} className={classes} {...props}>{content}</Link>
        );
    }
    return <button type="button" className={classes} {...props}>{content}</button>;
}

export default function RowActions({ children, className = '' }) {
    return <div className={cn('flex flex-wrap items-center justify-end gap-1 max-lg:justify-start', className)}>{children}</div>;
}
