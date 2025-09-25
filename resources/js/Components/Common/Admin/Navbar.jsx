import {Link, usePage} from "@inertiajs/react";
import React, { useState } from "react";

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
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <i className="fas fa-gift text-blue-500 text-2xl mr-2"></i>
                            <span className="font-bold text-xl text-blue-600">ThreeWish Donor Panel</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <i className="fas fa-bell text-xl"></i>
                                <span
                                    className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center text-sm text-gray-700 focus:outline-none"
                                    onClick={toggleProfileVisibility} >
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <span className="font-medium text-blue-600">D</span>
                                </div>
                                <span className="ml-2">{user.name}</span>
                                <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            { isProfileOpen && (
                                <div
                                     className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <Link
                                        href={route('my.profile')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your
                                        Profile</Link>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                                        out</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
