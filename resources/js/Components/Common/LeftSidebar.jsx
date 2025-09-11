import {Link, usePage} from "@inertiajs/react";
import {
    faBars,
    faChevronDown,
    faGift,
    faHome, faSignOutAlt,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function LeftSidebar() {

    const user = usePage().props.auth.user;
    return (
        <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
                <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center">
                    <div className="mr-2 text-green-500">
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    Menu (Donor Panel)
                </h2>

                <ul className="space-y-2">
                    <li>
                        <Link
                            href="#"
                            className="py-2 pl-3 flex items-center rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">
                            <div className="mr-3 text-blue-500">
                                <FontAwesomeIcon icon={faHome}/> Feeds
                            </div>
                        </Link>
                    </li>
                    {/* Donations */}
                    <li>
                        <div
                            className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">
                            <div className="flex items-center">
                                <div className="mr-3 text-blue-500">
                                    <FontAwesomeIcon icon={faGift}/>
                                </div>
                                <span>Donations</span>
                            </div>
                            <div className="text-xs">
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>

                        </div>
                        <ul className="ml-8 mt-1 space-y-2">
                            { user.user_type === 'donor' && (
                                <>
                                    <li className={`${route().current('donations.*') ? 'text-blue-600' : ''}`}>
                                        <Link
                                            href={route('donations.index')}
                                            className={`text-sm hover:text-blue-600 block py-1 ${route().current('donations.index') ? 'text-blue-600' : 'text-gray-600'}`}>
                                            My Donations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route('donations.create')}
                                            className={`text-sm hover:text-blue-600 block py-1 ${route().current('donations.create') ? 'text-blue-600' : 'text-gray-600'}`}>
                                            Create Donation
                                        </Link>
                                    </li>
                                </>
                            )}
                            { user.user_type === 'wisher' && (
                                <>
                                    <li className={`${route().current('donations.*') ? 'text-blue-600' : ''}`}>
                                        <Link
                                            href={route('donations.index')}
                                            className={`text-sm hover:text-blue-600 block py-1 ${route().current('donations.index') ? 'text-blue-600' : 'text-gray-600'}`}>
                                            My Donations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route('donations.create')}
                                            className={`text-sm hover:text-blue-600 block py-1 ${route().current('donations.create') ? 'text-blue-600' : 'text-gray-600'}`}>
                                            Create Donation
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </li>

                    {/* My Profile */}
                    <li>
                        <div
                            className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">
                            <div className="flex items-center">
                                <div className="mr-3 text-blue-500">
                                    <FontAwesomeIcon icon={faUserCircle}/>
                                </div>
                                <span>My Profile</span>
                            </div>
                            <div className="text-xs">
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                        <ul className="ml-8 mt-1 space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Personal
                                Info</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Account
                                Settings</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Privacy</a>
                            </li>
                        </ul>
                    </li>

                    {/* Settings */}
                    {/*<li>*/}
                    {/*    <div*/}
                    {/*        className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">*/}
                    {/*        <div className="flex items-center">*/}
                    {/*            <i className="fas fa-cog mr-3 text-gray-600"></i>*/}
                    {/*            <span>Settings</span>*/}
                    {/*        </div>*/}
                    {/*        <i className="fas fa-chevron-down text-xs"></i>*/}
                    {/*    </div>*/}
                    {/*    <ul className="ml-8 mt-1 space-y-2">*/}
                    {/*        <li><a href="#"*/}
                    {/*               className="text-sm text-gray-600 hover:text-blue-600 block py-1">Notifications</a>*/}
                    {/*        </li>*/}
                    {/*        <li><a href="#"*/}
                    {/*               className="text-sm text-gray-600 hover:text-blue-600 block py-1">Security</a></li>*/}
                    {/*        <li><a href="#"*/}
                    {/*               className="text-sm text-gray-600 hover:text-blue-600 block py-1">Preferences</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}

                    {/* Help & Logout */}
                    {/*<li>*/}
                    {/*    <a href="#"*/}
                    {/*       className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">*/}
                    {/*        <i className="fas fa-question-circle mr-3 text-gray-600"></i>*/}
                    {/*        <span>Help & Support</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                           className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-sky-50 hover:border-l-4 hover:border-green-500">
                            <div className="mr-3 text-blue-500">
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                            </div>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>

                {/* Quick Stats */}
                <div className="mt-8 pt-5 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
                    <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Wishes Made</span>
                            <span className="font-semibold">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Wishes Granted</span>
                            <span className="font-semibold">3</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Items Donated</span>
                            <span className="font-semibold">2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
