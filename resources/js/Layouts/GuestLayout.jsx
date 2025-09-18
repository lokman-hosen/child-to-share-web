import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Navbar from "@/Components/Common/Navbar.jsx";
import Footer from "@/Components/Common/Footer.jsx";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navbar/>
           <div>
               {children}
           </div>
            <Footer/>
        </>

    );
}
