import {Link} from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <i className="fas fa-gift text-purple-500 text-2xl mr-2"></i>
                            <span className="font-bold text-xl text-purple-600">ThreeWish</span>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link
                                href={route('home')}
                                  className="nav-item active text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                Home
                            </Link>
                            <Link
                                href={`${route('home')}#how-it-works`}
                                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                How It Works
                            </Link>
                            <Link
                                href={route('wish.index')}
                                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                Wishes
                            </Link>

                            <a href="donation-new.html"
                               className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Donations</a>
                            <a href="#organizations"
                               className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Organizations</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center">
                        <a href="registration-new.html"
                           className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Sign Up
                        </a>
                        <a href="login-new.html"
                           className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Login
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button type="button" id="mobile-menu-button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:hidden hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="index.html"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Home</a>
                    <a href="#how-it-works"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">How
                        It Works</a>
                    <a href="wish-new.html"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Wishes</a>
                    <a href="donation-new.html"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Donations</a>
                    <a href="#organizations"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Organizations</a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="mt-3 px-2 space-y-1">
                        <a href="registration-new.html"
                           className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Sign
                            Up</a>
                        <a href="login-new.html"
                           className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
