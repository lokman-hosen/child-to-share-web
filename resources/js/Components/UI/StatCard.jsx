import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from './cn';

const tones = {
    primary: 'bg-primary-50 text-primary-600',
    gold: 'bg-secondary-50 text-secondary-600',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-700',
    neutral: 'bg-slate-100 text-slate-600',
};

export default function StatCard({ icon, label, value, hint, tone = 'primary', className = '' }) {
    return (
        <div className={cn('flex items-start gap-4 rounded-card border border-slate-200/80 bg-white p-5 shadow-card', className)}>
            {icon && (
                <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', tones[tone])}>
                    <FontAwesomeIcon icon={icon} className="h-5 w-5" aria-hidden="true" />
                </span>
            )}
            <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 tabular-nums">{value}</p>
                {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
            </div>
        </div>
    );
}
