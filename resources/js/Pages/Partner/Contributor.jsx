import React from 'react';
import {Head, Link} from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faHeart, faUsers, faGift, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const ContributorsPage = () => {
    // Sample contributors data - replace with actual data from database
    const contributors = [
        {
            id: 1,
            name: 'Sarah Johnson',
            type: 'individual', // individual or organization
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB6Ph_aR9dpk8p7hRtCPZL08-GK1k9SKmHQ&s', // would be a URL if available
            logo: null,
            donation_count: 45,
            join_date: '2023'
        },
        {
            id: 2,
            name: 'TechCares Foundation',
            type: 'organization',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPeQmmRqSJlGvLYoQu7IfcMVTGu-1OW7L1w&s',
            logo: 'https://img.logoipsum.com/288.svg',
            donation_count: 128,
            join_date: '2022'
        },
        {
            id: 3,
            name: 'Michael Chen',
            type: 'individual',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDrSITgqLdFr1tIGd2ARDSDIgSsnp8WqLAw&s',
            logo: null,
            donation_count: 23,
            join_date: '2024'
        },
        {
            id: 4,
            name: 'Green Hope Initiative',
            type: 'organization',
            image: null,
            logo: 'https://img.logoipsum.com/296.svg',
            donation_count: 89,
            join_date: '2021'
        },
        {
            id: 5,
            name: 'Emily Rodriguez',
            type: 'individual',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDrSITgqLdFr1tIGd2ARDSDIgSsnp8WqLAw&s',
            logo: null,
            donation_count: 67,
            join_date: '2023'
        },
        {
            id: 6,
            name: 'Children First Alliance',
            type: 'organization',
            image: 'https://i.pinimg.com/736x/3b/2e/93/3b2e93191bc8030fb6f3be085414eeec.jpg',
            logo: 'https://img.logoipsum.com/297.svg',
            donation_count: 156,
            join_date: '2020'
        },
        {
            id: 7,
            name: 'David Kim',
            type: 'individual',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB6Ph_aR9dpk8p7hRtCPZL08-GK1k9SKmHQ&s',
            logo: null,
            donation_count: 34,
            join_date: '2024'
        },
        {
            id: 8,
            name: 'Bright Future Fund',
            type: 'organization',
            image: 'https://www.shutterstock.com/shutterstock/videos/11436452/thumb/1.jpg?ip=x480',
            logo: 'https://img.logoipsum.com/295.svg',
            donation_count: 112,
            join_date: '2022'
        }
    ];

    // Statistics
    const stats = {
        totalContributors: contributors.length,
        totalDonations: contributors.reduce((sum, c) => sum + c.donation_count, 0),
        individualCount: contributors.filter(c => c.type === 'individual').length,
        organizationCount: contributors.filter(c => c.type === 'organization').length,
    };

    return (
        <GuestLayout>
            <Head title="Our Contributors - ThreeWish" />

            {/* Hero Section */}
            <section className="relative py-8 md:py-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                            <FontAwesomeIcon icon={faUsers} className="text-primary text-3xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contributors</span>
                        </h1>

                        <div className="flex items-center justify-center mb-6">
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
                            <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-secondary rounded-full mx-3"></div>
                            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Meet the generous individuals and organizations who make wishes come true through their
                            kindness and support. Every contribution creates a ripple of positive change.
                        </p>

                        {/* Stats */}
                        {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">*/}
                        {/*    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">*/}
                        {/*        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stats.totalContributors}</div>*/}
                        {/*        <div className="text-accent font-medium">Total Contributors</div>*/}
                        {/*        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-3 rounded-full"></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">*/}
                        {/*        <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stats.totalDonations}+</div>*/}
                        {/*        <div className="text-accent font-medium">Total Donations</div>*/}
                        {/*        <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mt-3 rounded-full"></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">*/}
                        {/*        <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">{stats.individualCount}</div>*/}
                        {/*        <div className="text-accent font-medium">Individual Donors</div>*/}
                        {/*        <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-primary mx-auto mt-3 rounded-full"></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200">*/}
                        {/*        <div className="text-3xl md:text-4xl font-bold text-neutral mb-2">{stats.organizationCount}</div>*/}
                        {/*        <div className="text-accent font-medium">Partner Orgs</div>*/}
                        {/*        <div className="h-1 w-12 bg-gradient-to-r from-neutral to-neutral-dark mx-auto mt-3 rounded-full"></div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/* Contributors Grid Section */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                            Our Amazing Contributors
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every contributor plays a vital role in creating a circle of kindness and making children's wishes come true.
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Contributors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {contributors.map((contributor) => (
                            <div
                                key={contributor.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-primary/20"
                            >
                                {/* Avatar/Logo Section */}
                                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

                                    {contributor.type === 'individual' ? (
                                        // Individual donor - show photo or default avatar
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                            {contributor.image ? (
                                                <img
                                                    src={contributor.image}
                                                    alt={contributor.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <FontAwesomeIcon icon={faUser} className="text-primary text-5xl" />
                                            )}
                                        </div>
                                    ) : (
                                        // Organization - show logo or default building icon
                                        <div className="h-32 w-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            {contributor.image ? (
                                                <img
                                                    src={contributor.image}
                                                    alt={contributor.name}
                                                    className="max-h-32 max-w-full object-contain"
                                                />
                                            ) : (
                                                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faBuilding} className="text-primary text-5xl" />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Type Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full shadow-md ${
                                            contributor.type === 'individual'
                                                ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
                                                : 'bg-gradient-to-r from-secondary to-secondary-dark text-accent'
                                        }`}>
                                            {contributor.type === 'individual' ? 'Individual Donor' : 'Organization'}
                                        </span>
                                    </div>
                                </div>

                                {/* Contributor Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-200 text-center">
                                        {contributor.name}
                                    </h3>

                                    {/* Stats */}


                                    {/* Decorative Element */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="h-1 w-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-10 border border-gray-200 max-w-3xl mx-auto">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-primary text-4xl mb-4" />
                            <h3 className="text-2xl font-bold text-accent mb-3">Want to Join Our Contributors?</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Every contribution, big or small, makes a difference in a child's life. Join our community of givers today.
                            </p>
                            <Link
                                href={route('register')}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                Become a Contributor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ContributorsPage;