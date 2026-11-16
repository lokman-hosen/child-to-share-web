import { Link } from "@inertiajs/react";
import {
    faGift, faSignOutAlt, faXmark, faGauge, faStar, faUsers, faList, faHandHoldingHeart,
    faBuilding, faUserGroup, faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getLoginUser } from "@/utils.jsx";
import cn from "@/Components/UI/cn";

/**
 * Menu per role. Same destinations, order and visibility rules as the previous sidebar.
 * `match` = route-name patterns that mark the item active.
 */
export function menuForUser(user) {
    if (!user) return [];
    const dashboard = { label: 'Dashboard', route: 'dashboard', match: ['dashboard'], icon: faGauge };
    const fulfil = { label: 'Fulfill Wishes', route: 'wish.fulfill.list', match: ['wish.fulfill.*'], icon: faHandHoldingHeart };

    if (user.role == 'donor-wisher') {
        return [
            { items: [dashboard, fulfil] },
            {
                title: 'My items',
                items: [
                    { label: 'My Gifts', route: 'donations.index', match: ['donations.*'], icon: faGift },
                    { label: 'My Wishes', route: 'wishes.index', match: ['wishes.*'], icon: faStar },
                    ...(user.userType == 'organization'
                        ? [{ label: 'Organizations', route: 'organizations.index', match: ['organizations.index'], icon: faBuilding }]
                        : []),
                ],
            },
        ];
    }
    if (user.role == 'donor') {
        return [
            { items: [dashboard, fulfil] },
            { title: 'My items', items: [{ label: 'My Gifts', route: 'donations.index', match: ['donations.*'], icon: faGift }] },
        ];
    }
    if (user.role == 'wisher') {
        return [
            {
                items: [
                    dashboard,
                    ...(user.userType == 'organization'
                        ? [{ label: 'Users (wisher)', route: 'users.index', match: ['users.*'], icon: faUserGroup }]
                        : []),
                ],
            },
            { title: 'My items', items: [{ label: 'My Wishes', route: 'wishes.index', match: ['wishes.*'], icon: faStar }] },
        ];
    }
    if (user.role == 'super-admin' || user.role == 'admin') {
        return [
            { items: [dashboard] },
            {
                title: 'Manage',
                items: [
                    { label: 'Users (wisher, donor)', route: 'users.index', match: ['users.*'], icon: faUsers },
                    fulfil,
                    { label: 'Wishes', route: 'wishes.index', match: ['wishes.*'], icon: faStar },
                    { label: 'Gifts', route: 'donations.index', match: ['donations.*'], icon: faGift },
                    { label: 'Organizations', route: 'organizations.index', match: ['organizations.*'], icon: faBuilding },
                ],
            },
            { title: 'Settings', items: [{ label: 'Categories', route: 'categories.index', match: ['categories.*'], icon: faList }] },
        ];
    }
    return [{ items: [dashboard] }];
}

const isActive = (match) => match.some((m) => route().current(m));

export default function LeftSidebar({ onClose, collapsed = false }) {
    const user = getLoginUser();
    const groups = menuForUser(user);

    return (
        <div className="flex h-full flex-col bg-white">
            {/* Brand */}
            <div className={cn('flex h-16 shrink-0 items-center border-b border-slate-200/80', collapsed ? 'justify-center px-2' : 'justify-between px-5')}>
                <Link href={route('home')} className="flex items-center rounded-md" aria-label="ThreeWish website">
                    {collapsed ? (
                        <img src="/images/fav-icon.png" alt="ThreeWish" className="h-9 w-9 rounded-lg object-contain" />
                    ) : (
                        <img src="/images/3wish.png" alt="ThreeWish" width="781" height="312" className="h-10 w-auto" />
                    )}
                </Link>
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 md:hidden"
                        aria-label="Close menu"
                    >
                        <FontAwesomeIcon icon={faXmark} className="h-5 w-5" aria-hidden="true" />
                    </button>
                )}
            </div>

            {/* Navigation */}
            <nav aria-label="Dashboard" className="flex-1 overflow-y-auto px-3 py-4">
                {groups.map((g, gi) => (
                    <div key={gi} className={gi > 0 ? 'mt-6' : ''}>
                        {g.title && !collapsed && (
                            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{g.title}</p>
                        )}
                        {g.title && collapsed && <div className="mx-3 mb-2 h-px bg-slate-100" aria-hidden="true" />}
                        <ul className="space-y-1">
                            {g.items.map((item) => {
                                const active = isActive(item.match);
                                return (
                                    <li key={item.route}>
                                        <Link
                                            href={route(item.route)}
                                            onClick={onClose}
                                            aria-current={active ? 'page' : undefined}
                                            title={collapsed ? item.label : undefined}
                                            className={cn(
                                                'group flex items-center gap-3 rounded-lg text-sm font-medium transition-colors',
                                                collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5',
                                                active
                                                    ? 'bg-primary-50 text-primary-700'
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                            )}
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className={cn('h-4 w-4 shrink-0', active ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-600')}
                                                aria-hidden="true"
                                            />
                                            <span className={collapsed ? 'sr-only' : 'truncate'}>{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Footer actions */}
            <div className="shrink-0 space-y-1 border-t border-slate-200/80 p-3">
                <Link
                    href={route('home')}
                    title={collapsed ? 'Visit Website' : undefined}
                    className={cn('flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900', collapsed ? 'justify-center px-2' : 'px-3')}
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    <span className={collapsed ? 'sr-only' : ''}>Visit Website</span>
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    onClick={onClose}
                    title={collapsed ? 'Logout' : undefined}
                    className={cn('flex w-full items-center gap-3 rounded-lg py-2.5 text-left text-sm font-medium text-slate-600 hover:bg-danger-50 hover:text-danger-700', collapsed ? 'justify-center px-2' : 'px-3')}
                >
                    <FontAwesomeIcon icon={faSignOutAlt} className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    <span className={collapsed ? 'sr-only' : ''}>Logout</span>
                </Link>
            </div>
        </div>
    );
}
