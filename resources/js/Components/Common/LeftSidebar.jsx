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
        <div className="w-64 bg-white h-screen shadow-md fixed hidden md:block" id="sidebar">
            <div className="p-4">
                <div className="flex items-left mb-6">
                    <div className="md:hidden flex items-center">
                        <button type="button" id="close-sidebar-button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-700 mt-1">Donor Navigation</h2>
                </div>
                <ul className="mt-4">
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded active"
                           onClick="showPage('dashboard-page')">
                            <i className="fas fa-home mr-2"></i> Dashboard
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded"
                           onClick="showPage('browse-wishes-page')">
                            <i className="fas fa-search mr-2"></i> Browse Wishes
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded"
                           onClick="showPage('create-donation-page')">
                            <i className="fas fa-plus-circle mr-2"></i> Create Donation
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded"
                           onClick="showPage('my-donations-page')">
                            <i className="fas fa-gift mr-2"></i> My Donations
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded"
                           onClick="showPage('messages-page')">
                            <i className="fas fa-comments mr-2"></i> Messages
                            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="nav-item block px-4 py-2 text-gray-700 rounded"
                           onClick="showPage('organizations-page')">
                            <i className="fas fa-building mr-2"></i> Organizations
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
