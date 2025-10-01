import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from "@/Components/Common/Admin/Navbar.jsx";
import LeftSidebar from "@/Components/Common/LeftSidebar.jsx";
import Toast from "@/Components/Toast.jsx";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

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
                <div className="flex-1 md:ml-64">
                    {children}
                    <Toast />
                </div>
            </div>
        </>
    );
}