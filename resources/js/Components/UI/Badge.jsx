import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from './cn';

const tones = {
    neutral: 'bg-slate-100 text-slate-700 ring-slate-200',
    primary: 'bg-primary-50 text-primary-700 ring-primary-200',
    gold: 'bg-secondary-50 text-secondary-700 ring-secondary-200',
    success: 'bg-success-50 text-success-700 ring-success-100',
    warning: 'bg-warning-50 text-warning-700 ring-warning-100',
    danger: 'bg-danger-50 text-danger-700 ring-danger-100',
    solid: 'bg-white/95 text-slate-800 ring-black/5 shadow-xs backdrop-blur',
};

export default function Badge({ tone = 'neutral', icon, dot = false, className = '', children }) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                tones[tone],
                className,
            )}
        >
            {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
            {icon && <FontAwesomeIcon icon={icon} className="h-3 w-3" aria-hidden="true" />}
            {children}
        </span>
    );
}

/** Map common wish/donation/fulfilment statuses to a badge tone. */
export function statusTone(status = '') {
    const s = String(status).toLowerCase();
    if (['fulfilled', 'completed', 'delivered', 'donated', 'confirmed', 'active'].includes(s)) return 'success';
    if (['pending', 'processing', 'in_progress', 'in-progress', 'requested', 'reserved'].includes(s)) return 'warning';
    if (['rejected', 'cancelled', 'canceled', 'inactive', 'issue', 'blocked'].includes(s)) return 'danger';
    if (['available', 'open', 'approved', 'accepted_by_wisher', 'accepted_by_donor', 'scheduled'].includes(s)) return 'primary';
    return 'neutral';
}
