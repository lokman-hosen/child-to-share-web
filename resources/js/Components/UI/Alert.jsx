import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleInfo, faTriangleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import cn from './cn';

const tones = {
    info: { cls: 'bg-primary-50 text-primary-900 ring-primary-200', icon: faCircleInfo, iconCls: 'text-primary-600' },
    success: { cls: 'bg-success-50 text-success-700 ring-success-100', icon: faCircleCheck, iconCls: 'text-success-600' },
    warning: { cls: 'bg-warning-50 text-warning-700 ring-warning-100', icon: faTriangleExclamation, iconCls: 'text-warning-600' },
    danger: { cls: 'bg-danger-50 text-danger-700 ring-danger-100', icon: faCircleXmark, iconCls: 'text-danger-600' },
};

export default function Alert({ tone = 'info', title, className = '', children }) {
    const t = tones[tone];
    return (
        <div role={tone === 'danger' ? 'alert' : 'status'} className={cn('flex gap-3 rounded-xl p-4 text-sm ring-1 ring-inset', t.cls, className)}>
            <FontAwesomeIcon icon={t.icon} className={cn('mt-0.5 h-4 w-4 shrink-0', t.iconCls)} aria-hidden="true" />
            <div className="min-w-0">
                {title && <p className="font-semibold">{title}</p>}
                {children && <div className={title ? 'mt-1' : ''}>{children}</div>}
            </div>
        </div>
    );
}
