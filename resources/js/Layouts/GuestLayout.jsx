import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/react';
import Navbar from "@/Components/Common/Navbar.jsx";
import Footer from "@/Components/Common/Footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faPlus, faStar, faHome, faUser, faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";

export default function GuestLayout({ children }) {
    const user = usePage().props.auth.user;
    const { url } = usePage();

    // Check if current route matches for active state
    const isActiveRoute = (route) => {
        return url === route || url.startsWith(route + '/');
    };

    return (
        <>
            <Navbar/>
            <div className="pb-16 md:pb-0"> {/* Add padding bottom for mobile nav */}
                {children}
            </div>
            <Footer/>

            {/* Mobile Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                {/* Background blur effect */}
                <div className="bg-white/80 backdrop-blur-lg border-t border-gray-200/80">
                    <div className="flex justify-around items-center py-3">
                        {/* Home */}
                        <Link
                            href={route('home')}
                            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                isActiveRoute('/') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faHome}
                                className={`w-5 h-5 ${isActiveRoute('/') ? 'scale-110' : ''} transition-transform`}
                            />
                            <span className="text-xs font-medium">Home</span>
                        </Link>

                        {/* Donations */}
                        <Link
                            href={route('donation.index')}
                            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                isActiveRoute('/donations') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faGift}
                                className={`w-5 h-5 ${isActiveRoute('/donations') ? 'scale-110' : ''} transition-transform`}
                            />
                            <span className="text-xs font-medium">Donations</span>
                        </Link>

                        {/* Wishes */}
                        <Link
                            href={route('wish.index')}
                            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                isActiveRoute('/wishes') ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faStar}
                                className={`w-5 h-5 ${isActiveRoute('/wishes') ? 'scale-110' : ''} transition-transform`}
                            />
                            <span className="text-xs font-medium">Wishes</span>
                        </Link>

                        {/* Profile */}
                        <Link
                            href={user ? route('my.profile') : route('login')}
                            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                isActiveRoute('/profile') || isActiveRoute('/login') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                className={`w-5 h-5 ${isActiveRoute('/profile') || isActiveRoute('/login') ? 'scale-110' : ''} transition-transform`}
                            />
                            <span className="text-xs font-medium">
                                {user ? 'Profile' : 'Login'}
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Safe area for iOS */}
                {/*<div className="h-4 bg-transparent"></div>*/}
            </div>

            {/* Floating Donate Item Button with Text - Updated position for mobile */}
            { user?.role === 'donor' && (
                <Link
                    href={route('donations.create')}
                    className="fixed bottom-20 right-6 z-40 md:bottom-6 group"
                >
                    <div className="relative" title="Donate Item">
                        {/* Pulsing effect */}
                        <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Main button with text */}
                        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full sm:rounded-2xl p-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPlus} className="w-6 h-6 flex-shrink-0" />
                            <span className="hidden sm:block font-semibold text-sm">Donate Item</span>
                        </div>

                        {/* Mobile badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold sm:hidden animate-bounce">
                            <FontAwesomeIcon icon={faGift} className="w-3 h-3" />
                        </div>
                    </div>
                </Link>
            )}
            { user?.role === 'wisher' && (
                <Link
                    href={route('wishes.create')}
                    className="fixed bottom-20 right-6 z-40 md:bottom-6 group"
                >
                    <div className="relative" title="Wish Item">
                        {/* Pulsing effect */}
                        <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Main button with text */}
                        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full sm:rounded-2xl p-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPlus} className="w-6 h-6 flex-shrink-0" />
                            <span className="hidden sm:block font-semibold text-sm">Wish Item</span>
                        </div>

                        {/* Mobile badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold sm:hidden animate-bounce">
                            <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}
