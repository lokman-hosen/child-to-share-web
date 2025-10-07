import {Link, usePage} from "@inertiajs/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faBell, faChevronDown, faGift, faHome} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ onMenuClick }) {
    const user = usePage().props.auth.user;
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfileVisibility = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Mobile menu button */}
                        <button
                            onClick={onMenuClick}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-2"
                        >
                            <FontAwesomeIcon icon={faBars} className="h-5 w-5"/>
                        </button>

                        <div className="flex-shrink-0 flex items-center space-x-2">
                            <img
                                src="/images/thee-wish.jpeg"
                                alt="ThreeWish Logo"
                                className="h-12 w-10 object-cover rounded" // Better styling
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Hide broken images
                                }}
                            />
                            <span className="font-bold text-xl text-blue-600 hidden sm:block">ThreeWish</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <a
                                href={route('home')}
                                title="Visit Website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-purple-500 hover:text-purple-700 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faHome} className="text-xl"/>
                            </a>

                        </div>
                        {/*<div className="relative">*/}
                        {/*    <button*/}
                        {/*        className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">*/}
                        {/*        <FontAwesomeIcon icon={faBell} className="text-xl"/>*/}
                        {/*        <span*/}
                        {/*            className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        <div className="relative">
                            <button className="flex items-center text-sm text-gray-700 focus:outline-none"
                                    onClick={toggleProfileVisibility} >
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
                                <span className="ml-2 font-bold text-purple-500">{user.name}</span>
                                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
                            </button>
                            { isProfileOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                                    <Link
                                        href={route('my.profile')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Your Profile
                                    </Link>
                                    <Link
                                        href={route('donations.index')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        My Donations
                                    </Link>
                                    <Link
                                        href={route('donations.create')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Create Donation
                                    </Link>
                                    <Link
                                        href={route('user.password.form')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Change Password
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Sign out
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
