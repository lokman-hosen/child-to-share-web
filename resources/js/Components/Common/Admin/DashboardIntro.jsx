import { usePage } from '@inertiajs/react';
import Alert from '@/Components/UI/Alert';

/** Greeting + the existing "under development" notice, shared by role dashboards. */
export default function DashboardIntro({ title, actions, showNotice = true }) {
    const user = usePage().props.auth.user;
    const today = new Intl.DateTimeFormat(undefined, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">{today}</p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Welcome back, {user?.name?.split(' ')[0]}
                    </h1>
                    <p className="mt-1 text-sm text-slate-600">{title}</p>
                </div>
                {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
            </div>
            {showNotice && (
                <Alert tone="info" title="ThreeWish is Under Development">
                    Some features are still being built. Thank you for your patience!
                </Alert>
            )}
        </div>
    );
}
