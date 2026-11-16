import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

export default function EmptyState({ icon = faBoxOpen, title, description, action, className = '' }) {
    return (
        <div className={cn('flex flex-col items-center rounded-card border border-dashed border-slate-300 bg-white px-6 py-14 text-center', className)}>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <FontAwesomeIcon icon={icon} className="h-6 w-6" aria-hidden="true" />
            </span>
            {title && <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>}
            {description && <p className="mt-1.5 max-w-sm text-sm text-slate-600">{description}</p>}
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}
