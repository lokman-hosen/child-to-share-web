import cn from './cn';

/**
 * Label + control + hint + error wrapper. Pass the control as children
 * (give it id={id}, className="form-control", aria-describedby={`${id}-desc`}).
 */
export default function Field({ id, label, hint, error, required, className = '', labelAction, children }) {
    return (
        <div className={className}>
            {(label || labelAction) && (
                <div className="mb-1.5 flex items-center justify-between gap-2">
                    {label && (
                        <label htmlFor={id} className="block text-sm font-medium text-slate-800">
                            {label}
                            {required && <span className="ml-0.5 text-danger-600" aria-hidden="true">*</span>}
                        </label>
                    )}
                    {labelAction}
                </div>
            )}
            {children}
            {hint && !error && <p id={id ? `${id}-desc` : undefined} className="mt-1.5 text-xs text-slate-500">{hint}</p>}
            {error && <p id={id ? `${id}-desc` : undefined} className={cn('mt-1.5 text-xs font-medium text-danger-700')}>{error}</p>}
        </div>
    );
}
