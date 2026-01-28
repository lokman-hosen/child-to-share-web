import React from 'react';
import {Head, Link} from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";

const PartnersPage = () => {
    // Sample partner data - will come from database later
    const partners = [
        {
            id: 1,
            name: 'Education First Foundation',
            logo: 'https://images.vexels.com/media/users/3/139567/isolated/lists/582aca4000ab46231333a1df893c947e-apple-logo.png', // Simple education logo
            description: 'Dedicated to providing quality education resources to underprivileged communities.',
            wish_count: 245,
            donation_count: 312,
            established: 2015
        },
        {
            id: 2,
            name: 'Children\'s Hope International',
            logo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png', // Heart/children focused logo
            description: 'Supporting children in need through educational programs and essential supplies.',
            wish_count: 189,
            donation_count: 267,
            established: 2010
        },
        {
            id: 3,
            name: 'Future Leaders Academy',
            logo: 'https://www.freeiconspng.com/thumbs/pinterest-logo-icon/pinterest-icon-png-20.png', // Academic/leadership logo
            description: 'Empowering youth through leadership development and educational opportunities.',
            wish_count: 312,
            donation_count: 425,
            established: 2018
        },
        {
            id: 4,
            name: 'Community Builders Network',
            logo: 'https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-png-mercedes-benz-logo-vector-icons-and-png-17.png', // Network/community logo
            description: 'Strengthening communities through collaborative programs and resource sharing.',
            wish_count: 178,
            donation_count: 234,
            established: 2012
        },
        {
            id: 5,
            name: 'Bright Future Foundation',
            logo: 'https://data2.nssmag.com/images/galleries/31378/Loghi-eFootball-nss9.png', // Bright/sun-like logo
            description: 'Creating opportunities for children through educational support and mentorship.',
            wish_count: 267,
            donation_count: 345,
            established: 2016
        },
        {
            id: 6,
            name: 'Youth Development Alliance',
            logo: 'https://platform.sbnation.com/wp-content/uploads/sites/2/team-logos/logo-liverpooloffside.png?w=256', // Growth/development logo
            description: 'Fostering youth growth through comprehensive development programs.',
            wish_count: 195,
            donation_count: 278,
            established: 2014
        },
        {
            id: 7,
            name: 'Learning Tree Organization',
            logo: 'https://platform.sbnation.com/wp-content/uploads/sites/2/team-logos/logo-canishoopus.png?w=256', // Tree/knowledge logo
            description: 'Providing educational resources and support to children in underserved areas.',
            wish_count: 223,
            donation_count: 289,
            established: 2017
        },
        {
            id: 8,
            name: 'Kids Care Network',
            logo: 'https://static.wixstatic.com/media/591a23_a908ba13e72847c7b7a8047e743cc866~mv2.png', // Care/health focused logo
            description: 'Ensuring every child has access to essential care and educational support.',
            wish_count: 156,
            donation_count: 212,
            established: 2013
        }
    ];

    // Statistics
    const stats = {
        totalPartners: partners.length,
        totalWishes: partners.reduce((sum, partner) => sum + partner.wish_count, 0),
        totalDonations: partners.reduce((sum, partner) => sum + partner.donation_count, 0),
        categories: Array.from(new Set(partners.map(p => p.category)))
    };

    return (
        <GuestLayout>
            <Head title="About ThreeWish - Our Mission & Vision"/>
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Partners</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Meet the incredible organizations that collaborate with ThreeWish to make children's wishes
                            come true. Together, we're building a community of giving and learning.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stats.totalPartners}+
                                </div>
                                <div className="text-gray-700 font-medium">Trusted Partners</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stats.totalWishes}+
                                </div>
                                <div className="text-gray-700 font-medium">Wishes Created</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                                <div
                                    className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stats.totalDonations}+
                                </div>
                                <div className="text-gray-700 font-medium">Donations Made</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('register')}
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                </svg>
                                Become a Partner
                            </Link>
                            <a
                                href="#partner-list"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                                View Partners
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <main className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
                    {/* Partners Grid */}
                    <section id="partner-list" className="py-12 md:py-16">
                        <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
                            {/* Category Filter */}
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                                    Browse Partners
                                </h2>
                            </div>

                            {/* Partners Grid */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
                                {partners.map((partner) => (
                                    <div
                                        key={partner.id}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                    >
                                        {/* Logo Header */}
                                        <div
                                            className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-1">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Partner Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                                {partner.name}
                                            </h3>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="text-center">
                                                    <div
                                                        className="text-lg font-bold text-blue-600">{partner.wish_count}</div>
                                                    <div className="text-xs text-gray-500">Wishes</div>
                                                </div>
                                                <div className="h-8 w-px bg-gray-200"></div>
                                                <div className="text-center">
                                                    <div
                                                        className="text-lg font-bold text-green-600">{partner.donation_count}</div>
                                                    <div className="text-xs text-gray-500">Donations</div>
                                                </div>
                                                <div className="h-8 w-px bg-gray-200"></div>
                                                <div className="text-center">
                                                    <div
                                                        className="text-lg font-bold text-purple-600">{partner.established}</div>
                                                    <div className="text-xs text-gray-500">Fulfilled</div>
                                                </div>
                                            </div>

                                            {/* Contact Info */}
                                            {/*<div className="space-y-3 mb-6">*/}
                                            {/*    <div className="flex items-center text-sm text-gray-600">*/}
                                            {/*        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none"*/}
                                            {/*             stroke="currentColor" viewBox="0 0 24 24">*/}
                                            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                                            {/*                  strokeWidth={2}*/}
                                            {/*                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>*/}
                                            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                                            {/*                  strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>*/}
                                            {/*        </svg>*/}
                                            {/*        <span className="truncate">{partner.address}</span>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="flex items-center text-sm text-gray-600">*/}
                                            {/*        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none"*/}
                                            {/*             stroke="currentColor" viewBox="0 0 24 24">*/}
                                            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                                            {/*                  strokeWidth={2}*/}
                                            {/*                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>*/}
                                            {/*        </svg>*/}
                                            {/*        <span className="truncate">{partner.contact_email}</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                            {/* Actions */}
                                            {/*<div className="flex items-center justify-between">*/}
                                            {/*    <a*/}
                                            {/*        href={partner.website}*/}
                                            {/*        target="_blank"*/}
                                            {/*        rel="noopener noreferrer"*/}
                                            {/*        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"*/}
                                            {/*    >*/}
                                            {/*        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor"*/}
                                            {/*             viewBox="0 0 24 24">*/}
                                            {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                                            {/*                  strokeWidth={2}*/}
                                            {/*                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>*/}
                                            {/*        </svg>*/}
                                            {/*        Visit Website*/}
                                            {/*    </a>*/}
                                            {/*    <Link*/}
                                            {/*        href={`/partners/${partner.id}/wishes`}*/}
                                            {/*        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 font-medium text-sm rounded-lg transition-all duration-200"*/}
                                            {/*    >*/}
                                            {/*        View Wishes*/}
                                            {/*    </Link>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* Become a Partner CTA */}
                    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                        <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Join Our Network of Impact
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Become a ThreeWish partner organization and amplify your impact. Connect with
                                    children in need and help fulfill their wishes while engaging your community.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                        </svg>
                                        Apply to Become a Partner
                                    </Link>
                                    {/*<Link*/}
                                    {/*    href="/partner/benefits"*/}
                                    {/*    className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl border-2 border-white transition-all duration-300"*/}
                                    {/*>*/}
                                    {/*    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor"*/}
                                    {/*         viewBox="0 0 24 24">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                                    {/*              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                                    {/*    </svg>*/}
                                    {/*    View Partner Benefits*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </GuestLayout>
);
};

export default PartnersPage;
