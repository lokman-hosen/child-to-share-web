import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from "@/Components/Common/Admin/Navbar.jsx";
import LeftSidebar from "@/Components/Common/LeftSidebar.jsx";
import Toast from "@/Components/Toast.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGift, faStar, faUser, faDashboard } from '@fortawesome/free-solid-svg-icons';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // Check if current route matches for active state
    const isActiveRoute = (route) => {
        return url === route || url.startsWith(route + '/');
    };

    // Show bottom nav only for donor and wisher roles, not admin
    const showBottomNav = user && (user.role === 'donor' || user.role === 'wisher');

    return (
        <>
            <Navbar onMenuClick={toggleSidebar} />
            <div className="flex pt-16">
                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={closeSidebar}
                    ></div>
                )}

                {/* Sidebar - Fixed on all screens */}
                <div className={`
                    fixed inset-y-0 left-0 z-50
                    transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    w-64 bg-white h-screen shadow-md
                `}>
                    <LeftSidebar onClose={closeSidebar} />
                </div>

                {/* Main Content - Always has margin on desktop */}
                <div className={`flex-1 md:ml-64 ${showBottomNav ? 'pb-16 md:pb-0' : ''}`}>
                    {children}
                    <Toast />
                </div>
            </div>

            {/* Mobile Bottom Navigation Bar - Only for Donor and Wisher */}
            {showBottomNav && (
                <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                    {/* Background blur effect */}
                    <div className="bg-white/80 backdrop-blur-lg border-t border-gray-200/80">
                        <div className="flex justify-around items-center py-3">
                            {/* Dashboard */}
                            <Link
                                href={route('dashboard')}
                                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                    isActiveRoute('/dashboard') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={faDashboard}
                                    className={`w-5 h-5 ${isActiveRoute('/dashboard') ? 'scale-110' : ''} transition-transform`}
                                />
                                <span className="text-xs font-medium">Dashboard</span>
                            </Link>

                            {/* Donations */}
                            <Link
                                href={route('donations.index')}
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
                                href={route('wishes.index')}
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
                                href={route('my.profile')}
                                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                                    isActiveRoute('/profile') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className={`w-5 h-5 ${isActiveRoute('/profile') ? 'scale-110' : ''} transition-transform`}
                                />
                                <span className="text-xs font-medium">Profile</span>
                            </Link>
                        </div>
                    </div>

                    {/* Safe area for iOS */}
                    {/*<div className="h-4 bg-transparent"></div>*/}
                </div>
            )}
        </>
    );
}
