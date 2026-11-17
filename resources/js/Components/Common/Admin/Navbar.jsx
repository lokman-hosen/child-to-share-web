import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faGift, faStar, faRightFromBracket, faAnglesLeft, faAnglesRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Avatar, accountLinks } from "@/Components/Common/Navbar.jsx";
import Button from "@/Components/UI/Button";

const roleLabel = (role) => ({
    'super-admin': 'Super Admin', admin: 'Admin', donor: 'Contributor', wisher: 'Wisher', 'donor-wisher': 'Contributor & Wisher',
}[role] || role);

/** App top bar: menu toggles, role CTA, website link, account menu. */
export default function Navbar({ onMenuClick, onCollapseToggle, collapsed = false }) {
    const user = usePage().props.auth.user;

    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-md sm:px-6">
            <button
                type="button"
                onClick={onMenuClick}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
                aria-label="Open menu"
            >
                <FontAwesomeIcon icon={faBars} className="h-5 w-5" aria-hidden="true" />
            </button>
            {onCollapseToggle && (
                <button
                    type="button"
                    onClick={onCollapseToggle}
                    className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 md:inline-flex"
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    aria-pressed={collapsed}
                >
                    <FontAwesomeIcon icon={collapsed ? faAnglesRight : faAnglesLeft} className="h-4 w-4" aria-hidden="true" />
                </button>
            )}
            <Link href={route('home')} className="md:hidden" aria-label="ThreeWish website">
                <img src="/images/3wish.png" alt="ThreeWish" width="781" height="312" className="h-8 w-auto" />
            </Link>

            <div className="ml-auto flex items-center gap-2">
                {user.role === 'donor' && (
                    <Button href={route('donations.create')} size="sm" icon={faGift} className="hidden sm:inline-flex">Create Gift</Button>
                )}
                {user.role === 'wisher' && (
                    <Button href={route('wishes.create')} size="sm" icon={faStar} className="hidden sm:inline-flex">Create Wish</Button>
                )}
                <Link
                    href={route('home')}
                    title="Visit Website"
                    className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 sm:inline-flex"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Visit Website</span>
                </Link>

                <Menu as="div" className="relative">
                    <MenuButton aria-label={`${user.name}, account menu`} className="flex items-center gap-2.5 rounded-full p-0.5 pr-2 text-left hover:bg-slate-100">
                        <Avatar user={user} />
                        <span className="hidden min-w-0 sm:block">
                            <span className="block max-w-[10rem] truncate text-sm font-semibold text-slate-900">{user.name}</span>
                            <span className="block text-xs text-slate-500">{roleLabel(user.role)}</span>
                        </span>
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
            </div>
        </header>
    );
}
