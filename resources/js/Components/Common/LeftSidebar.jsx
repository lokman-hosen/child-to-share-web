import {Link, usePage} from "@inertiajs/react";
import {
    faBars,
    faChevronDown,
    faGift,
    faHome,
    faSignOutAlt,
    faUserCircle,
    faTimes, faDashboard
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function LeftSidebar({ onClose }) {
    const user = usePage().props.auth.user;

    return (
        <div className="w-full bg-white h-full overflow-y-auto fixed md:fixed inset-y-0 left-0 z-40">
            {/* Mobile Header with Close Button */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">

                <div className="flex-shrink-0 flex items-center space-x-2">
                    <img
                        src="/images/thee-wish.jpeg"
                        alt="ThreeWish Logo"
                        className="h-12 w-10 object-cover rounded" // Better styling
                        onError={(e) => {
                            e.target.style.display = 'none'; // Hide broken images
                        }}
                    />
                    <span className="font-bold text-xl text-blue-600">ThreeWish</span>
                </div>
                {/*<h2 className="text-lg font-semibold text-gray-700">*/}
                {/*    {user.role === 'donor' && 'Donor Navigation'}*/}
                {/*    {user.role === 'wisher' && 'Wisher Navigation'}*/}
                {/*    {(user.role === 'super_admin' || user.role === 'admin') && 'Admin Navigation'}*/}
                {/*</h2>*/}
                <button
                    onClick={onClose}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                >
                    <FontAwesomeIcon icon={faTimes} className="h-5 w-5"/>
                </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-4">
                {/* Desktop Title - Hidden on mobile */}
                <div className="hidden md:block mb-6">
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <img
                            src="/images/thee-wish.jpeg"
                            alt="ThreeWish Logo"
                            className="h-12 w-10 object-cover rounded" // Better styling
                            onError={(e) => {
                                e.target.style.display = 'none'; // Hide broken images
                            }}
                        />
                        <span className="font-bold text-xl text-blue-600">ThreeWish</span>
                    </div>
                    {/*<h2 className="text-lg font-semibold text-gray-700">*/}
                    {/*    {user.role === 'donor' && 'Donor Navigation'}*/}
                    {/*    {user.role === 'wisher' && 'Wisher Navigation'}*/}
                    {/*    {(user.role === 'super_admin' || user.role === 'admin') && 'Admin Navigation'}*/}
                    {/*</h2>*/}
                </div>

                {user.role === 'donor' && (
                    <ul className="mt-4">
                        <li className="mb-1">
                            <a
                                href={route('home')}
                                title="Visit Website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors"
                            >
                                <FontAwesomeIcon icon={faHome} className="text-xl"/> Website
                            </a>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('dashboard')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('dashboard') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faDashboard} className="mr-2"/>
                                Dashboard
                            </Link>
                        </li>

                        {/*<li className="mb-1">*/}
                        {/*    <Link*/}
                        {/*        href={route('wishes.index')}*/}
                        {/*        onClick={onClose}*/}
                        {/*        className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('wishes.*') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}*/}
                        {/*    >*/}
                        {/*        <FontAwesomeIcon icon={faUserCircle} className="mr-2" />*/}
                        {/*        Browse Wishes*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="mb-1">
                            <Link
                                href={route('donations.create')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('donations.create') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faGift} className="mr-2"/>
                                Create Donation
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('donations.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${(route().current('donations.index') || route().current('donations.show')) ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faGift} className="mr-2"/>
                                My Donations
                            </Link>
                        </li>
                        {/*<li className="mb-1">*/}
                        {/*    <Link*/}
                        {/*        href={route('messages.index')}*/}
                        {/*        onClick={onClose}*/}
                        {/*        className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('messages.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}*/}
                        {/*    >*/}
                        {/*        <FontAwesomeIcon icon={faUserCircle} className="mr-2" />*/}
                        {/*        Messages*/}
                        {/*        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="mb-1">*/}
                        {/*    <Link*/}
                        {/*        href={route('organizations.index')}*/}
                        {/*        onClick={onClose}*/}
                        {/*        className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('organizations.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}*/}
                        {/*    >*/}
                        {/*        <FontAwesomeIcon icon={faUserCircle} className="mr-2" />*/}
                        {/*        Organizations*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="mb-1">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                onClick={onClose}
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors w-full text-left"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2"/>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}

                {user.role === 'wisher' && (
                    <ul className="mt-4">
                        <li className="mb-1">
                            <a
                                href={route('home')}
                                title="Visit Website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors"
                            >
                                <FontAwesomeIcon icon={faHome} className="text-xl"/> Website
                            </a>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('dashboard')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('dashboard') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faDashboard} className="mr-2"/>
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('wishes.create')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('wishes.create') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faGift} className="mr-2"/>
                                Create Wish
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('wishes.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('wishes.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                My Wishes
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('messages.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('messages.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Messages
                                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('organizations.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('organizations.*') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Organizations
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                onClick={onClose}
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors w-full text-left"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2"/>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}

                {(user.role === 'super_admin' || user.role === 'admin') && (
                    <ul className="mt-4">
                        <li className="mb-1">
                            <a
                                href={route('home')}
                                title="Visit Website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors"
                            >
                                <FontAwesomeIcon icon={faHome} className="text-xl"/> Website
                            </a>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('dashboard')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('dashboard') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faDashboard} className="mr-2"/>
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('users.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('users.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Users
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('wishes.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('wishes.*') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Wishes
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('donations.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('donations.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faGift} className="mr-2"/>
                                Donations
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('organizations.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('organizations.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Organizations
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('messages.index')}
                                onClick={onClose}
                                className={`nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors ${route().current('messages.index') ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' : ''}`}
                            >
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                                Admin Inbox
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-1">8</span>
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                onClick={onClose}
                                className="nav-item block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 transition-colors w-full text-left"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2"/>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
