import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

let open = null; // set by the mounted <ConfirmHost/>

/**
 * Promise-based replacement for window.confirm().
 *   if (await confirmDialog({ message: 'Delete?', tone: 'danger', confirmLabel: 'Delete' })) { ... }
 * Falls back to window.confirm if no host is mounted.
 */
export function confirmDialog({ title = 'Please confirm', message, confirmLabel = 'Confirm', cancelLabel = 'Cancel', tone = 'primary' } = {}) {
    return new Promise((resolve) => {
        if (!open) {
            resolve(window.confirm(message));
            return;
        }
        open({ title, message, confirmLabel, cancelLabel, tone, resolve });
    });
}

export function ConfirmHost() {
    const [state, setState] = useState(null);

    useEffect(() => {
        open = setState;
        return () => { open = null; };
    }, []);

    const close = (result) => {
        state?.resolve(result);
        setState(null);
    };

    const danger = state?.tone === 'danger';

    return (
        <Dialog open={!!state} onClose={() => close(false)} className="relative z-[70]">
            <DialogBackdrop className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-end justify-center p-4 sm:items-center">
                <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-pop ring-1 ring-slate-900/5">
                    <div className="flex gap-4">
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${danger ? 'bg-danger-50 text-danger-600' : 'bg-primary-50 text-primary-600'}`}>
                            <FontAwesomeIcon icon={danger ? faTriangleExclamation : faCircleQuestion} className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                            <DialogTitle className="text-base font-semibold text-slate-900">{state?.title}</DialogTitle>
                            <p className="mt-1.5 text-sm text-slate-600">{state?.message}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                        <Button variant="secondary" onClick={() => close(false)}>{state?.cancelLabel}</Button>
                        <Button variant={danger ? 'danger' : 'primary'} onClick={() => close(true)} autoFocus>{state?.confirmLabel}</Button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
