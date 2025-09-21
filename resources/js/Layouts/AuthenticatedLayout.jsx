import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from "@/Components/Common/Admin/Navbar.jsx";
import LeftSidebar from "@/Components/Common/LeftSidebar.jsx";
import RightSidebar from "@/Components/Common/RightSidebar.jsx";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Navbar/>
            <div className="flex pt-16">
                <LeftSidebar/>
                <div className="flex-1 md:ml-64">
                    {children}
                </div>

            </div>

        </>
    );
}
