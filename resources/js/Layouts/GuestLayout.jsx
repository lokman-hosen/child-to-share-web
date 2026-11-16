import { Link, usePage } from '@inertiajs/react';
import Navbar from "@/Components/Common/Navbar.jsx";
import Footer from "@/Components/Common/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faPlus, faStar, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { checkDonorWisher } from "@/utils.jsx";
import cn from "@/Components/UI/cn";

/** Fixed bottom tab bar for phones. */
function MobileTabBar({ user }) {
    const tabs = [
        { label: 'Home', href: route('home'), icon: faHome, active: route().current('home') },
        { label: 'Gifts', href: route('donation.index'), icon: faGift, active: route().current('donation.*') },
        { label: 'Wishes', href: route('wish.index'), icon: faStar, active: route().current('wish.index') || route().current('wish.show') },
        {
            label: user ? 'Profile' : 'Login',
            href: user ? route('my.profile') : route('login'),
            icon: faUser,
            active: route().current('my.profile') || route().current('login'),
        },
    ];

    return (
        <nav aria-label="Quick navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
            <ul className="grid grid-cols-4">
                {tabs.map((t) => (
                    <li key={t.label}>
                        <Link
                            href={t.href}
                            aria-current={t.active ? 'page' : undefined}
                            className={cn(
                                'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
                                t.active ? 'text-primary-700' : 'text-slate-500 hover:text-slate-800',
                            )}
                        >
                            <span className={cn('flex h-7 w-12 items-center justify-center rounded-full transition-colors', t.active && 'bg-primary-50')}>
                                <FontAwesomeIcon icon={t.icon} className="h-[18px] w-[18px]" aria-hidden="true" />
                            </span>
                            {t.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function FloatingCreateButton({ href, label }) {
    return (
        <Link
            href={href}
            className="fixed bottom-24 right-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-semibold text-white shadow-pop transition hover:bg-primary-700 sm:right-6 md:bottom-6"
        >
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" aria-hidden="true" />
            <span>{label}</span>
        </Link>
    );
}

export default function GuestLayout({ children }) {
    const user = usePage().props.auth.user;
    const { url } = usePage();
    const role = user?.role;
    const onHome = route().current('home');

    // Same visibility rules as before: on the home page by single role,
    // on the Gifts / Wishes listing pages for that role or donor-wisher.
    const showGiftButton = onHome
        ? role === 'donor'
        : (role === 'donor' || checkDonorWisher(role)) && url === '/donation';
    const showWishButton = onHome
        ? role === 'wisher'
        : (role === 'wisher' || checkDonorWisher(role)) && url === '/wish';

    return (
        <div className="flex min-h-screen flex-col bg-canvas">
            <Navbar />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <div className="bg-primary-900 pb-[4.5rem] md:pb-0">
                <Footer />
            </div>

            <MobileTabBar user={user} />

            {showGiftButton && <FloatingCreateButton href={route('donations.create')} label="Gift Item" />}
            {showWishButton && <FloatingCreateButton href={route('wishes.create')} label="Wish Item" />}
        </div>
    );
}
