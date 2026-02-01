import React from 'react';
import {Head, Link} from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUsers, faHeart, faStar, faBuilding, faChartLine } from '@fortawesome/free-solid-svg-icons';

const PartnersPage = ({organizations, totalWishCount, totalDonationCount}) => {
    // Sample partner data - will come from database later
    const partners = [
        {
            id: 1,
            name: 'Education First Foundation',
            logo: 'https://images.vexels.com/media/users/3/139567/isolated/lists/582aca4000ab46231333a1df893c947e-apple-logo.png',
            description: 'Dedicated to providing quality education resources to underprivileged communities.',
            wish_count: 245,
            donation_count: 312,
            established: 2015
        },
        {
            id: 2,
            name: 'Children\'s Hope International',
            logo: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png',
            description: 'Supporting children in need through educational programs and essential supplies.',
            wish_count: 189,
            donation_count: 267,
            established: 2010
        },
        {
            id: 3,
            name: 'Future Leaders Academy',
            logo: 'https://www.freeiconspng.com/thumbs/pinterest-logo-icon/pinterest-icon-png-20.png',
            description: 'Empowering youth through leadership development and educational opportunities.',
            wish_count: 312,
            donation_count: 425,
            established: 2018
        },
        {
            id: 4,
            name: 'Community Builders Network',
            logo: 'https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-png-mercedes-benz-logo-vector-icons-and-png-17.png',
            description: 'Strengthening communities through collaborative programs and resource sharing.',
            wish_count: 178,
            donation_count: 234,
            established: 2012
        },
        {
            id: 5,
            name: 'Bright Future Foundation',
            logo: 'https://data2.nssmag.com/images/galleries/31378/Loghi-eFootball-nss9.png',
            description: 'Creating opportunities for children through educational support and mentorship.',
            wish_count: 267,
            donation_count: 345,
            established: 2016
        },
        {
            id: 6,
            name: 'Youth Development Alliance',
            logo: 'https://platform.sbnation.com/wp-content/uploads/sites/2/team-logos/logo-liverpooloffside.png?w=256',
            description: 'Fostering youth growth through comprehensive development programs.',
            wish_count: 195,
            donation_count: 278,
            established: 2014
        },
        {
            id: 7,
            name: 'Learning Tree Organization',
            logo: 'https://platform.sbnation.com/wp-content/uploads/sites/2/team-logos/logo-canishoopus.png?w=256',
            description: 'Providing educational resources and support to children in underserved areas.',
            wish_count: 223,
            donation_count: 289,
            established: 2017
        },
        {
            id: 8,
            name: 'Kids Care Network',
            logo: 'https://static.wixstatic.com/media/591a23_a908ba13e72847c7b7a8047e743cc866~mv2.png',
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
    };

    return (
        <GuestLayout>
            <Head title="Our Partners - ThreeWish"/>

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                            <FontAwesomeIcon icon={faHandshake} className="text-primary text-3xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Partners</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Meet the incredible organizations that collaborate with ThreeWish to make children's wishes
                            come true. Together, we're building a community of giving and learning.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{organizations.length}+</div>
                                <div className="text-accent font-medium">Trusted Partners</div>
                                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-3 rounded-full"></div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{totalWishCount ?? 0}+</div>
                                <div className="text-accent font-medium">Wishes Created</div>
                                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mt-3 rounded-full"></div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">
                                <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">{totalDonationCount ?? 0}+</div>
                                <div className="text-accent font-medium">Contributions Made</div>
                                <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-primary mx-auto mt-3 rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('register')}
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-2" />
                                Become a Partner
                            </Link>
                            <a
                                href="#partner-list"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-accent font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary/30"
                            >
                                <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 mr-2" />
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
                                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 text-center">
                                    Our Trusted Partners
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                            </div>

                            {/* Partners Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {organizations.map((organization) => (
                                    <div
                                        key={organization.id}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-primary/20"
                                    >
                                        {/* Logo Header */}
                                        <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                                            <img
                                                src={organization.user.image}
                                                alt={organization.name}
                                                className="max-h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Partner Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-200">
                                                {organization.name}
                                            </h3>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between mb-6">
                                                {/*<div className="text-center">*/}
                                                {/*    <div className="text-lg font-bold text-primary">{partner.wish_count}</div>*/}
                                                {/*    <div className="text-xs text-gray-500">Wishes</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="h-8 w-px bg-gray-200"></div>*/}
                                                {/*<div className="text-center">*/}
                                                {/*    <div className="text-lg font-bold text-secondary">{partner.donation_count}</div>*/}
                                                {/*    <div className="text-xs text-gray-500">Contributions</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="h-8 w-px bg-gray-200"></div>*/}
                                                {/*<div className="text-center">*/}
                                                {/*    <div className="text-lg font-bold text-primary-dark">*/}
                                                {/*        {organization.user?.dob ? organization.user.dob.split('-')[0] : ''}*/}
                                                {/*    </div>*/}
                                                {/*    <div className="text-xs text-gray-500">Established</div>*/}
                                                {/*</div>*/}
                                            </div>

                                            {/* Description */}
                                            {/*<p className="text-sm text-gray-600 mb-4 line-clamp-2">*/}
                                            {/*    {organization.description}*/}
                                            {/*</p>*/}

                                            {/* Decorative Element */}
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <div className="h-1 w-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Become a Partner CTA */}
                    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark rounded-3xl overflow-hidden">
                        {/*<div className="absolute inset-0 opacity-10">*/}
                        <div className="absolute">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
                        </div>

                        <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                                    <FontAwesomeIcon icon={faHeart} className="text-white text-3xl" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Join Our Network of Impact
                                </h2>

                                <div className="flex items-center justify-center mb-6">
                                    <div className="h-1 w-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full"></div>
                                    <div className="h-1 w-8 bg-gradient-to-r from-secondary-light to-secondary rounded-full mx-3"></div>
                                    <div className="h-1 w-16 bg-gradient-to-r from-secondary to-secondary-light rounded-full"></div>
                                </div>

                                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                    Become a ThreeWish partner organization and amplify your impact. Connect with
                                    children in need and help fulfill their wishes while engaging your community.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-accent font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-2" />
                                        Apply to Become a Partner
                                    </Link>
                                    {/*<Link*/}
                                    {/*    href="#partner-list"*/}
                                    {/*    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/40 transition-all duration-300"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-2" />*/}
                                    {/*    View Success Stories*/}
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
