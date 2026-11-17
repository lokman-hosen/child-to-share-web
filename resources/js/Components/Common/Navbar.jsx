import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faXmark, faChevronDown, faUser, faGift, faStar, faPlus, faKey,
    faRightFromBracket, faGauge, faHandHoldingHeart, faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import Button from "@/Components/UI/Button";
import cn from "@/Components/UI/cn";

/** Primary public navigation. `match` = route names that mark the item active. */
const NAV_ITEMS = [
    { label: 'Home', route: 'home', match: ['home'] },
    { label: 'About', route: 'about', match: ['about'] },
    { label: 'Gifts', route: 'donation.index', match: ['donation.index', 'donation.show'] },
    { label: 'Wishes', route: 'wish.index', match: ['wish.index', 'wish.show'] },
    { label: 'Fulfilled Wishes', route: 'fulfillment.index', match: ['fulfillment.index'] },
    { label: 'Partners', route: 'partner', match: ['partner'] },
];

const COMMUNITY_ITEMS = [
    { label: 'Our Contributors', route: 'donor.list', icon: faHandHoldingHeart, desc: 'People and groups who give gifts' },
    { label: 'Our Happy Wish Creators', route: 'wisher.list', icon: faFaceSmile, desc: 'Children whose wishes we support' },
];

const isCurrent = (names) => names.some((n) => route().current(n));

export function Avatar({ user, size = 'h-9 w-9', className = '' }) {
    const [failed, setFailed] = useState(false);
    const initials = (user?.name || '?').split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
    return (
        <span className={cn('inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-100 text-sm font-semibold text-primary-800 ring-2 ring-white', size, className)}>
            {user?.image && !failed ? (
                <img src={`/storage/${user.image}`} alt="" className="h-full w-full object-cover" onError={() => setFailed(true)} />
            ) : (
                <span aria-hidden="true">{initials}</span>
            )}
        </span>
    );
}

/** Account links shared by the desktop dropdown and the mobile panel (same routes as before). */
export function accountLinks(user) {
    const links = [
        { label: 'Dashboard', href: route('dashboard'), icon: faGauge },
        { label: 'Your Profile', href: route('my.profile'), icon: faUser },
    ];
    if (user.role === 'donor') {
        links.push({ label: 'My Gifts', href: route('donations.index'), icon: faGift });
        links.push({ label: 'Create Gift', href: route('donations.create'), icon: faPlus });
    }
    if (user.role === 'wisher') {
        links.push({ label: 'My Wishes', href: route('wishes.index'), icon: faStar });
        links.push({ label: 'Create Wish', href: route('wishes.create'), icon: faPlus });
    }
    links.push({ label: 'Change Password', href: route('user.password.form'), icon: faKey });
    return links;
}

/** Role-aware primary call to action in the header. */
function PrimaryCta({ user, className = '', size = 'sm' }) {
    if (!user) {
        return <Button href={route('register')} size={size} className={className}>Sign Up</Button>;
    }
    if (user.role === 'donor') {
        return <Button href={route('donations.create')} size={size} icon={faGift} className={className}>Create Gift</Button>;
    }
    if (user.role === 'wisher') {
        return <Button href={route('wishes.create')} size={size} icon={faStar} className={className}>Create Wish</Button>;
    }
    return <Button href={route('dashboard')} size={size} icon={faGauge} className={className}>Dashboard</Button>;
}

export default function Navbar() {
    const user = usePage().props.auth.user;
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close the mobile panel on navigation
    useEffect(() => setIsMobileMenuOpen(false), [url]);

    // Lock body scroll while the mobile panel is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        if (!isMobileMenuOpen) return () => { document.body.style.overflow = ''; };
        // Escape closes the panel and puts focus back on the toggle
        const onKey = (e) => {
            if (e.key !== 'Escape') return;
            setIsMobileMenuOpen(false);
            document.querySelector('button[aria-controls="mobile-menu"]')?.focus();
        };
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const communityActive = route().current('*.list');

    return (
        <>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <header
                className={cn(
                    'sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-200 supports-[backdrop-filter]:bg-white/80',
                    scrolled ? 'border-slate-200 shadow-card' : 'border-transparent',
                )}
            >
                <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
                    <Link href={route('home')} className="flex shrink-0 items-center rounded-md" aria-label="ThreeWish home">
                        <img src="/images/3wish.png" alt="ThreeWish" width="781" height="312" className="h-10 w-auto lg:h-11" />
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV_ITEMS.map((item) => {
                            const active = isCurrent(item.match);
                            return (
                                <li key={item.route}>
                                    <Link
                                        href={route(item.route)}
                                        aria-current={active ? 'page' : undefined}
                                        className={cn(
                                            'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                            active ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <Menu as="div" className="relative">
                                <MenuButton
                                    className={cn(
                                        'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                        communityActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                    )}
                                >
                                    Contributor &amp; Wisher
                                    <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" aria-hidden="true" />
                                </MenuButton>
                                <MenuItems
                                    anchor={{ to: 'bottom start', gap: 8 }}
                                    className="z-[60] w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-pop focus:outline-none"
                                >
                                    {COMMUNITY_ITEMS.map((item) => (
                                        <MenuItem key={item.route}>
                                            <Link
                                                href={route(item.route)}
                                                className="flex items-start gap-3 rounded-lg p-3 data-[focus]:bg-slate-50"
                                            >
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                                                    <FontAwesomeIcon icon={item.icon} className="h-4 w-4" aria-hidden="true" />
                                                </span>
                                                <span>
                                                    <span className="block text-sm font-semibold text-slate-900">{item.label}</span>
                                                    <span className="block text-xs text-slate-500">{item.desc}</span>
                                                </span>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </li>
                        <li>
                            <Link
                                href={route('contact')}
                                aria-current={route().current('contact') ? 'page' : undefined}
                                className={cn(
                                    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                    route().current('contact') ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                )}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        {user ? (
                            <>
                                <PrimaryCta user={user} className="hidden sm:inline-flex" />
                                <Menu as="div" className="relative hidden lg:block">
                                    <MenuButton className="flex items-center gap-2 rounded-full p-0.5 pr-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                                        <Avatar user={user} />
                                        <span className="max-w-[9rem] truncate">{user.name}</span>
                                        <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-slate-400" aria-hidden="true" />
                                    </MenuButton>
                                    <MenuItems
                                        anchor={{ to: 'bottom end', gap: 8 }}
                                        className="z-[60] w-60 rounded-xl border border-slate-200 bg-white p-1.5 shadow-pop focus:outline-none"
                                    >
                                        <div className="px-3 py-2.5">
                                            <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
                                            {user.email && <p className="truncate text-xs text-slate-500">{user.email}</p>}
                                        </div>
                                        <div className="my-1 h-px bg-slate-100" />
                                        {accountLinks(user).map((l) => (
                                            <MenuItem key={l.label}>
                                                <Link href={l.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 data-[focus]:bg-slate-50 data-[focus]:text-slate-900">
                                                    <FontAwesomeIcon icon={l.icon} className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                                    {l.label}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                        <div className="my-1 h-px bg-slate-100" />
                                        <MenuItem>
                                            <Link href={route('logout')} method="post" as="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-700 data-[focus]:bg-danger-50 data-[focus]:text-danger-700">
                                                <FontAwesomeIcon icon={faRightFromBracket} className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                                Sign out
                                            </Link>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button href={route('login')} variant="ghost" size="sm" className="hidden sm:inline-flex">Login</Button>
                                <PrimaryCta user={user} />
                            </>
                        )}

                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen((o) => !o)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </nav>

                {/* Mobile / tablet panel */}
                <div
                    id="mobile-menu"
                    className={cn('border-t border-slate-200 bg-white lg:hidden', isMobileMenuOpen ? 'block' : 'hidden')}
                >
                    <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
                        <ul className="space-y-1">
                            {NAV_ITEMS.map((item) => {
                                const active = isCurrent(item.match);
                                return (
                                    <li key={item.route}>
                                        <Link
                                            href={route(item.route)}
                                            aria-current={active ? 'page' : undefined}
                                            className={cn('block rounded-lg px-3 py-2.5 text-base font-medium', active ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50')}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link href={`${route('home')}#how-it-works`} className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50">
                                    How It Works
                                </Link>
                            </li>
                            <li className="pt-2">
                                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Contributor &amp; Wisher</p>
                                {COMMUNITY_ITEMS.map((item) => (
                                    <Link
                                        key={item.route}
                                        href={route(item.route)}
                                        className={cn('flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium', route().current(item.route) ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50')}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="h-4 w-4 text-primary-600" aria-hidden="true" />
                                        {item.label}
                                    </Link>
                                ))}
                            </li>
                            <li className="pt-2">
                                <Link
                                    href={route('contact')}
                                    className={cn('block rounded-lg px-3 py-2.5 text-base font-medium', route().current('contact') ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50')}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-4 border-t border-slate-200 pt-4">
                            {user ? (
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 px-3 pb-3">
                                        <Avatar user={user} size="h-10 w-10" />
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
                                            {user.email && <p className="truncate text-xs text-slate-500">{user.email}</p>}
                                        </div>
                                    </div>
                                    {accountLinks(user).map((l) => (
                                        <Link key={l.label} href={l.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50">
                                            <FontAwesomeIcon icon={l.icon} className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                            {l.label}
                                        </Link>
                                    ))}
                                    <Link href={route('logout')} method="post" as="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-base font-medium text-slate-700 hover:bg-danger-50 hover:text-danger-700">
                                        <FontAwesomeIcon icon={faRightFromBracket} className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                        Sign out
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Button href={route('login')} variant="secondary">Login</Button>
                                    <Button href={route('register')}>Sign Up</Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
