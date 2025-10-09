import {Link, usePage} from "@inertiajs/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const user = usePage().props.auth.user;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileVisibility = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href={route('home')}>
                            <div className="flex-shrink-0 flex items-center space-x-2">
                                <img
                                    src="/images/thee-wish.jpeg"
                                    alt="ThreeWish Logo"
                                    className="h-12 w-10 object-cover rounded"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <span className="font-bold text-xl text-purple-600">ThreeWish</span>
                            </div>
                        </Link>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link
                                href={route('home')}
                                className={`text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                    route().current('home') && window.location.hash !== '#how-it-works'
                                        ? 'nav-item active'
                                        : ''
                                }`}
                            >
                                Home
                            </Link>

                            <Link
                                href={`${route('home')}#how-it-works`}
                                className={`text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                    route().current('home') && window.location.hash === '#how-it-works'
                                        ? 'nav-item active'
                                        : ''
                                }`}
                            >
                                How It Works
                            </Link>

                            <Link
                                href={route('donation.index')}
                                className={`text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${route().current('donation.index') ? 'nav-item active' : ''}`}>
                                Donations
                            </Link>

                            <Link
                                href={route('wish.index')}
                                className={`text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${route().current('wish.index') ? 'nav-item active' : ''}`}>
                                Wishes
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
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
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
                                    <span className="ml-2 font-bold text-purple-700 hover:text-black">{user.name}</span>
                                    <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
                                </button>
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                                        <Link
                                            href={route('my.profile')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Your Profile
                                        </Link>
                                        <Link
                                            href={route('donations.index')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            My Donations
                                        </Link>
                                        <Link
                                            href={route('donations.create')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Create Donation
                                        </Link>
                                        <Link
                                            href={route('user.password.form')}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Change Password
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
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
                                    className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Sign Up
                                </Link>

                                <Link
                                    href={route('login')}
                                    className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
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
                            {/* X icon */}
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
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 ${
                            route().current('home') && window.location.hash !== '#how-it-works'
                                ? 'nav-item active'
                                : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href={`${route('home')}#how-it-works`}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 ${
                            route().current('home') && window.location.hash === '#how-it-works'
                                ? 'nav-item active'
                                : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href={route('donation.index')}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 ${route().current('donation.index') ? 'nav-item active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Donations
                    </Link>

                </div>

                {/* Mobile Authentication Section */}
                <div className="pt-4 pb-3 border-t border-gray-200">
                    {user ? (
                        // Mobile User Profile for logged-in users
                        <div className="px-2 space-y-1">
                            <div className="flex items-center px-3 py-2">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
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
                                <span className="ml-3 text-base font-medium text-purple-700">{user.name}</span>
                            </div>
                            <Link
                                href={route('my.profile')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Your Profile
                            </Link>
                            <Link
                                href={route('donations.index')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                My Donations
                            </Link>
                            <Link
                                href={route('donations.create')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Create Donation
                            </Link>
                            <Link
                                href={route('user.password.form')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Change Password
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
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
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                            <Link
                                href={route('login')}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600"
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
