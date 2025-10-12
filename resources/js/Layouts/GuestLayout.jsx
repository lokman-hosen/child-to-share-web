import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/react';
import Navbar from "@/Components/Common/Navbar.jsx";
import Footer from "@/Components/Common/Footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";

export default function GuestLayout({ children }) {
    const user = usePage().props.auth.user;

    // useEffect(() => {
    //     // Add Google Translate script
    //     const script = document.createElement('script');
    //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    //     script.async = true;
    //     document.head.appendChild(script);
    //
    //     // Initialize translation widget
    //     window.googleTranslateElementInit = () => {
    //         new window.google.translate.TranslateElement({
    //             pageLanguage: 'en',
    //             includedLanguages: 'bn,en',
    //             //includedLanguages: 'es,fr,de,zh,hi,ar,ru,ja,ko,pt',
    //             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    //         }, 'google_translate_element');
    //     };
    //
    //     return () => {
    //         // Cleanup
    //         if (window.google && window.google.translate) {
    //             delete window.google.translate;
    //         }
    //     };
    // }, []);

    return (
        <>
            <Navbar/>
            {/* Language Selector */}
            {/*<div className="fixed top-4 right-4 z-50">*/}
            {/*    <div id="google_translate_element"></div>*/}
            {/*</div>*/}
           <div>
               {children}
           </div>
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
            { user?.role === 'wisher' && (
                <Link
                    href={route('wishes.create')}
                    className="fixed bottom-6 right-6 z-50 group"
                >
                    <div className="relative" title="Wish Iteam">
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
