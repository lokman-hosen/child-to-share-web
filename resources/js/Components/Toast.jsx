import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import toast, { Toaster } from 'react-hot-toast';

const Toast = () => {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                duration: 4000,
                position: 'top-right',
            });
        }

        if (flash.error) {
            toast.error(flash.error, {
                duration: 6000,
                position: 'top-right',
            });
        }

        if (flash.warning) {
            toast(flash.warning, {
                duration: 5000,
                position: 'top-right',
                icon: '⚠️',
            });
        }

        if (flash.info) {
            toast(flash.info, {
                duration: 4000,
                position: 'top-right',
                icon: 'ℹ️',
            });
        }
    }, [flash]);

    return (
        <Toaster
            position="top-right"
            containerStyle={{ top: 76 }}
            toastOptions={{
                className: 'text-sm font-medium',
                style: {
                    borderRadius: '0.75rem',
                    background: '#ffffff',
                    color: '#0f172a',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 12px 32px -8px rgb(15 23 42 / 0.18)',
                    padding: '12px 14px',
                    maxWidth: '420px',
                },
                success: { iconTheme: { primary: '#059669', secondary: '#fff' }, style: { borderLeft: '4px solid #059669' } },
                error: { iconTheme: { primary: '#E11D48', secondary: '#fff' }, style: { borderLeft: '4px solid #E11D48' } },
            }}
        />
    );
};

export default Toast;
