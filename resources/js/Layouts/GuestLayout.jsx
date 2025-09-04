import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Navbar from "@/Components/Common/Navbar.jsx";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navbar/>
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:rounded-lg">
                <main className="flex-grow py-8">
                    {children}
                </main>
            </div>
        </>

    );
}
