import {Link, usePage} from "@inertiajs/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const user = usePage().props.auth.user;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isContributorDropdownOpen, setIsContributorDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileVisibility = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleContributorDropdown = () => {
        setIsContributorDropdownOpen(!isContributorDropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href={route('home')}>
                            <div className="flex-shrink-0 flex items-center space-x-2">
                                <img
                                    src="/images/3wish.png"
                                    alt="ThreeWish Logo"
                                    title="ThreeWish"
                                    className="h-16 object-cover rounded"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </Link>
                        <div className="hidden md:ml-2 md:flex md:space-x-2">
                            <Link
                                href={route('home')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                    route().current('home') && window.location.hash !== '#how-it-works'
                                        ? 'nav-item active text-primary'
                                        : ''
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                href={route('about')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${(route().current('about')) ? 'nav-item active text-primary' : ''}`}>
                                About
                            </Link>

                            <Link
                                href={route('donation.index')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${(route().current('donation.index') || route().current('donation.show')) ? 'nav-item active text-primary' : ''}`}>
                                Gifts
                            </Link>

                            <Link
                                href={route('wish.index')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${(route().current('wish.index') || route().current('wish.show')) ? 'nav-item active text-primary' : ''}`}>
                                Wishes
                            </Link>

                            <Link
                                href={route('fulfillment.index')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${(route().current('fulfillment.index') || route().current('wish.show')) ? 'nav-item active text-primary' : ''}`}>
                                Fulfilled Wishes
                            </Link>

                            <Link
                                href={route('partner')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${route().current('partner') ? 'nav-item active text-primary' : ''}`}>
                                Partners
                            </Link>

                            {/* Contributor & Wisher Dropdown - Fixed z-index */}
                            <div className="relative group">
                                <button
                                    className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 focus:outline-none ${route().current('*.list') ? 'nav-item active text-primary' : ''}`}
                                >
                                    Contributor & Wisher
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                                    <div className="py-2">
                                        <Link
                                            href={route('donor.list')}
                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                                Our Contributors
                                            </div>
                                        </Link>
                                        <Link
                                            href={route('wisher.list')}
                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Our Happy Wish Creators
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={route('contact')}
                                className={`text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium ${route().current('contact') ? 'nav-item active text-primary' : ''}`}>
                                Contact
                            </Link>

                        </div>
                    </div>

                    {/* Desktop Navigation - Show user profile if logged in, else show login/signup */}
                    <div className="hidden md:flex items-center">
                        {user ? (
                            // User Profile Dropdown for logged-in users
                            <div className="relative">
                                <button
                                    className="flex items-center text-sm text-gray-700 focus:outline-none"
                                    onClick={toggleProfileVisibility}
                                >
                                    <div
                                        className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                                        {user.image ? (
                                            <img
                                                src={`/storage/${user.image}`}
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <span className="ml-2 font-bold text-primary hover:text-accent">{user.name}</span>
                                    <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs text-primary" />
                                </button>
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                        <Link
                                            href={route('my.profile')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Your Profile
                                        </Link>
                                        {user.role === 'donor' && (
                                            <>
                                                <Link
                                                    href={route('donations.index')}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    My Gifts
                                                </Link>
                                                <Link
                                                    href={route('donations.create')}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Create Gift
                                                </Link>
                                            </>
                                        )}
                                        {user.role === 'wisher' && (
                                            <>
                                                <Link
                                                    href={route('wishes.index')}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    My Wishes
                                                </Link>
                                                <Link
                                                    href={route('wishes.create')}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Create Wish
                                                </Link>
                                            </>
                                        )}
                                        <Link
                                            href={route('user.password.form')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Change Password
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Sign out
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Login/Signup buttons for guests
                            <>
                                <Link
                                    href={route('register')}
                                    className="bg-primary hover:bg-primary-dark ml-4 px-4 py-2 border border-transparent text-sm text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Sign Up
                                </Link>

                                <Link
                                    href={route('login')}
                                    className="bg-secondary hover:bg-secondary-dark ml-4 px-4 py-2 border border-transparent text-sm text-accent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href={route('home')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${
                            route().current('home') && window.location.hash !== '#how-it-works'
                                ? 'nav-item active text-white bg-primary'
                                : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href={route('about')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('about')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href={`${route('home')}#how-it-works`}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${
                            route().current('home') && window.location.hash === '#how-it-works'
                                ? 'nav-item active text-white bg-primary'
                                : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href={route('donation.index')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('donation.index') || route().current('donation.show')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Gifts
                    </Link>

                    <Link
                        href={route('wish.index')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('wish.index') || route().current('wish.show')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Wishes
                    </Link>

                    <Link
                        href={route('fulfillment.index')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('fulfillment.index')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Fulfilled Wishes
                    </Link>

                    <Link
                        href={route('partner')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('partner')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Partners
                    </Link>

                    {/* Mobile Contributor Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleContributorDropdown}
                            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary transition-colors duration-200"
                        >
                            <span>Contributor & Wisher</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isContributorDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isContributorDropdownOpen && (
                            <div className="pl-4 mt-1 space-y-1">
                                <Link
                                    href={route('donor.list')}
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-primary/80 transition-colors duration-200"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsContributorDropdownOpen(false);
                                    }}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Our Contributors
                                </Link>
                                <Link
                                    href={route('wisher.list')}
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-primary/80 transition-colors duration-200"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsContributorDropdownOpen(false);
                                    }}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Our Happy Wish Creators
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href={route('contact')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary ${(route().current('contact')) ? 'nav-item active text-white bg-primary' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>

                </div>

                {/* Mobile Authentication Section */}
                <div className="pt-4 pb-3 border-t border-gray-200">
                    {user ? (
                        // Mobile User Profile for logged-in users
                        <div className="px-2 space-y-1">
                            <div className="flex items-center px-3 py-2">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                                    {user.image ? (
                                        <img
                                            src={`/storage/${user.image}`}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <span className="ml-3 text-base font-medium text-primary">{user.name}</span>
                            </div>
                            <Link
                                href={route('my.profile')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Your Profile
                            </Link>
                            {user.role === 'donor' && (
                                <>
                                    <Link
                                        href={route('donations.index')}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        My Gifts
                                    </Link>
                                    <Link
                                        href={route('donations.create')}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Create Gift
                                    </Link>
                                </>
                            )}

                            {user.role === 'wisher' && (
                                <>
                                    <Link
                                        href={route('wishes.index')}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        My Wishes
                                    </Link>
                                    <Link
                                        href={route('wishes.create')}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Create Wish
                                    </Link>
                                </>
                            )}

                            <Link
                                href={route('user.password.form')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Change Password
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign out
                            </Link>
                        </div>
                    ) : (
                        // Mobile Login/Signup for guests
                        <div className="mt-3 px-2 space-y-1">
                            <Link
                                href={route('register')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                            <Link
                                href={route('login')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-secondary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
