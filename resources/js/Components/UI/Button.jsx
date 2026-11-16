import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

const variants = {
    primary: 'bg-primary-600 text-white shadow-xs hover:bg-primary-700 active:bg-primary-800',
    accent: 'bg-secondary-300 text-slate-900 shadow-xs hover:bg-secondary-400 active:bg-secondary-500',
    secondary: 'bg-white text-slate-800 ring-1 ring-inset ring-slate-300 shadow-xs hover:bg-slate-50 active:bg-slate-100',
    soft: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    danger: 'bg-danger-600 text-white shadow-xs hover:bg-danger-700',
    inverse: 'bg-white text-primary-800 shadow-xs hover:bg-primary-50',
    'outline-inverse': 'text-white ring-1 ring-inset ring-white/60 hover:bg-white/10',
};

const sizes = {
    sm: 'h-9 px-3.5 text-sm gap-1.5',
    md: 'h-11 px-5 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
    icon: 'h-10 w-10',
};

/**
 * Button / link-button.
 * - `href` renders an Inertia <Link> (pass `external` for a plain <a>).
 * - `icon` / `iconRight` take a Font Awesome icon definition.
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    icon,
    iconRight,
    loading = false,
    disabled,
    className = '',
    children,
    type = 'button',
    ...props
}) {
    const classes = cn(
        'inline-flex shrink-0 items-center justify-center rounded-lg font-semibold transition-colors duration-150',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
    );

    const content = (
        <>
            {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin className="h-4 w-4" aria-hidden="true" />
            ) : (
                icon && <FontAwesomeIcon icon={icon} className="h-4 w-4" aria-hidden="true" />
            )}
            {children}
            {iconRight && <FontAwesomeIcon icon={iconRight} className="h-3.5 w-3.5" aria-hidden="true" />}
        </>
    );

    if (href) {
        return external ? (
            <a href={href} className={classes} {...props}>{content}</a>
        ) : (
            <Link href={href} className={classes} {...props}>{content}</Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled || loading} {...props}>
            {content}
        </button>
    );
}
