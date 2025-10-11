import React from 'react';
import {Head, Link, usePage} from "@inertiajs/react";
import Hero from "@/Components/Home/Hero.jsx";
import Summary from "@/Components/Home/Summary.jsx";
import HowWorks from "@/Components/Home/HowWorks.jsx";
import DonationList from "@/Components/Home/DonationList.jsx";
import RegistrationCTA from "@/Components/Home/RegistrationCTA.jsx";
import Faq from "@/Components/Home/Faq.jsx";
import Footer from "@/Components/Common/Footer.jsx";
import Navbar from "@/Components/Common/Navbar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGift, faPlug, faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Welcome({ auth, donations, activeDonorCount, totalWishCount, fulfilWishCount, community }) {
    const user = usePage().props.auth.user;
    return (
        <>
            <Head title="Home"/>
            <Navbar/>
            <Hero
                user={user}
            />
            <Summary
                activeDonorCount={activeDonorCount}
                totalWishCount={totalWishCount}
                fulfilWishCount={fulfilWishCount}
                community={community}
            />
            <HowWorks/>
            {donations.length > 0 && (
                <DonationList
                    donations={donations}
                    user={user}
                />
            )}
            <RegistrationCTA
                user={user}
            />
            <Faq/>
            <Footer/>

            {/* Floating Donate Item Button with Text */}
            { user?.role === 'donor' && (
                <Link
                    href={route('donations.create')}
                    className="fixed bottom-6 right-6 z-50 group"
                >
                    <div className="relative" title="Donate Iteam">
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

        </>
    );
}
