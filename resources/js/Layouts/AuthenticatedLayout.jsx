import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Navbar from "@/Components/Common/Admin/Navbar.jsx";
import LeftSidebar from "@/Components/Common/LeftSidebar.jsx";
import Toast from "@/Components/Toast.jsx";
import { ConfirmHost } from "@/Components/UI/ConfirmDialog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faStar, faUser, faGauge } from '@fortawesome/free-solid-svg-icons';
import cn from "@/Components/UI/cn";

const COLLAPSE_KEY = 'tw.sidebarCollapsed';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(() => {
        try { return localStorage.getItem(COLLAPSE_KEY) === '1'; } catch (e) { return false; }
    });

    const toggleCollapsed = () => {
        setCollapsed((c) => {
            try { localStorage.setItem(COLLAPSE_KEY, c ? '0' : '1'); } catch (e) { /* storage unavailable */ }
            return !c;
        });
    };

    // Close the mobile drawer on navigation and on Escape
    useEffect(() => setSidebarOpen(false), [url]);
    useEffect(() => {
        if (!sidebarOpen) return;
        const onKey = (e) => e.key === 'Escape' && setSidebarOpen(false);
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [sidebarOpen]);

    // Show bottom nav only for donor and wisher roles, not admin (unchanged)
    const showBottomNav = user && (user.role === 'donor' || user.role === 'wisher' || user.role === 'donor-wisher');

    const tabs = [
        { label: 'Dashboard', href: route('dashboard'), icon: faGauge, active: route().current('dashboard') },
        { label: 'Gifts', href: route('donation.index'), icon: faGift, active: route().current('donation.index') },
        { label: 'Wishes', href: route('wish.index'), icon: faStar, active: route().current('wish.index') },
        { label: 'Profile', href: route('my.profile'), icon: faUser, active: route().current('my.profile') },
    ];

    return (
        <div className="min-h-screen bg-canvas">
            <a href="#main-content" className="skip-link">Skip to content</a>

            {/* Desktop sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-40 hidden border-r border-slate-200/80 transition-[width] duration-200 md:block',
                    collapsed ? 'w-[4.5rem]' : 'w-64',
                )}
            >
                <LeftSidebar collapsed={collapsed} />
            </aside>

            {/* Mobile drawer */}
            <div className={cn('fixed inset-0 z-50 md:hidden', sidebarOpen ? '' : 'pointer-events-none')} aria-hidden={!sidebarOpen}>
                <div
                    className={cn('absolute inset-0 bg-slate-900/50 transition-opacity', sidebarOpen ? 'opacity-100' : 'opacity-0')}
                    onClick={() => setSidebarOpen(false)}
                />
                <aside
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                    className={cn(
                        'absolute inset-y-0 left-0 w-72 max-w-[85vw] shadow-pop transition-transform duration-200',
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
                    )}
                >
                    {sidebarOpen && <LeftSidebar onClose={() => setSidebarOpen(false)} />}
                </aside>
            </div>

            <div className={cn('flex min-h-screen flex-col transition-[padding] duration-200', collapsed ? 'md:pl-[4.5rem]' : 'md:pl-64')}>
                <Navbar
                    onMenuClick={() => setSidebarOpen(true)}
                    onCollapseToggle={toggleCollapsed}
                    collapsed={collapsed}
                />
                <main id="main-content" className={cn('flex-1', showBottomNav ? 'pb-20 md:pb-0' : '')}>
                    {header && (
                        <div className="border-b border-slate-200/80 bg-white">
                            <div className="px-4 py-5 sm:px-6 lg:px-8">{header}</div>
                        </div>
                    )}
                    {children}
                </main>
                <Toast />
                <ConfirmHost />
            </div>

            {/* Mobile Bottom Navigation Bar - Only for Donor and Wisher (unchanged destinations) */}
            {showBottomNav && (
                <nav aria-label="Quick navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
                    <ul className="grid grid-cols-4">
                        {tabs.map((t) => (
                            <li key={t.label}>
                                <Link
                                    href={t.href}
                                    aria-current={t.active ? 'page' : undefined}
                                    className={cn('flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium', t.active ? 'text-primary-700' : 'text-slate-500 hover:text-slate-800')}
                                >
                                    <span className={cn('flex h-7 w-12 items-center justify-center rounded-full', t.active && 'bg-primary-50')}>
                                        <FontAwesomeIcon icon={t.icon} className="h-[18px] w-[18px]" aria-hidden="true" />
                                    </span>
                                    {t.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
