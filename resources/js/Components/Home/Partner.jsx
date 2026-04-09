import React, { useState, useEffect, useRef } from 'react';
import {Link} from "@inertiajs/react";

const OurPartners = ({organizations}) => {
    // Separate organizations based on their activity
    const donorOrganizations = organizations.filter(org => org.total_donations_count > 0);
    const wisherOrganizations = organizations.filter(org => org.total_wishes_count > 0);

    // Auto-slide effect hook for each carousel
    const useAutoSlide = (isPaused, contentRef, speed = 3.0) => {
        useEffect(() => {
            if (isPaused || !contentRef.current) return;

            let animationId;

            const animate = () => {
                if (contentRef.current) {
                    contentRef.current.style.transform = `translateX(${contentRef.current._x || 0}px)`;
                    contentRef.current._x = (contentRef.current._x || 0) - speed;

                    // Reset position when half of content has scrolled
                    if (contentRef.current._x < -contentRef.current.scrollWidth / 2) {
                        contentRef.current._x = 0;
                    }
                }
                animationId = requestAnimationFrame(animate);
            };

            animationId = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationId);
            };
        }, [isPaused, speed, contentRef]);
    };

    // Donor Organizations Carousel
    const DonorCarousel = () => {
        const [isPaused, setIsPaused] = useState(false);
        const containerRef = useRef(null);
        const contentRef = useRef(null);

        useAutoSlide(isPaused, contentRef, 3.0);

        if (donorOrganizations.length === 0) return null;

        return (
            <div className="mb-16">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                        Our Contributor Partners
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Organizations that generously contribute items and resources to fulfill children's wishes
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-4 rounded-full"></div>
                </div>

                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    ref={containerRef}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div
                        className="flex items-center gap-6 md:gap-8 lg:gap-12 h-56"
                        ref={contentRef}
                        style={{ willChange: 'transform' }}
                    >
                        {[...donorOrganizations, ...donorOrganizations].map((organization, idx) => (
                            <div
                                key={`donor-${organization.id}-${idx}`}
                                className="flex-shrink-0 group relative"
                                style={{ width: '250px' }}
                            >
                                <div className="block p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="h-24 flex items-center justify-center">
                                        {organization.user?.image ? (
                                            <img
                                                src={`/storage/${organization.user.image}`}
                                                alt={organization.name}
                                                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                                                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">
                                        {organization.name}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-accent"></div>
                                    </div>
                                </div>
                                {organization.total_donations_count > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                        {organization.total_donations_count}+ Donations
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // Wisher Organizations Carousel
    const WisherCarousel = () => {
        const [isPaused, setIsPaused] = useState(false);
        const containerRef = useRef(null);
        const contentRef = useRef(null);

        useAutoSlide(isPaused, contentRef, 3.0);

        if (wisherOrganizations.length === 0) return null;

        return (
            <div className="mb-16">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
                        <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                        Our Happy Wish Creator Partners
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Organizations seeking resources and items to support children in their communities
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mt-4 rounded-full"></div>
                </div>

                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    ref={containerRef}
                >
                    <div
                        className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>

                    <div
                        className="flex items-center gap-6 md:gap-8 lg:gap-12 h-56"
                        ref={contentRef}
                        style={{willChange: 'transform'}}
                    >
                        {[...wisherOrganizations, ...wisherOrganizations].map((organization, idx) => (
                            <div
                                key={`wisher-${organization.id}-${idx}`}
                                className="flex-shrink-0 group relative"
                                style={{width: '250px'}}
                            >
                                <div
                                    className="block p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="h-24 flex items-center justify-center">
                                        {organization.user?.image ? (
                                            <img
                                                src={`/storage/${organization.user.image}`}
                                                alt={organization.name}
                                                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div
                                                className="w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl flex items-center justify-center">
                                                <svg className="w-12 h-12 text-secondary" fill="none"
                                                     stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">
                                        {organization.name}
                                        <div
                                            className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-accent"></div>
                                    </div>
                                </div>
                                {organization.total_wishes_count > 0 && (
                                    <div
                                        className="absolute -top-2 -right-2 bg-secondary text-accent text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                        {organization.total_wishes_count}+ Wishes
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
                        Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Partners</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        We collaborate with organizations that share our vision of creating
                        meaningful impact in children's lives through generosity and learning.
                    </p>
                </div>
                <div>

                    {/* Wisher Organizations Carousel */}
                    <WisherCarousel/>

                    {/* Donor Organizations Carousel */}
                    <DonorCarousel/>

                </div>



                {/* Stats Section */}
                <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{organizations.length}</div>
                        <div className="text-accent font-medium">Partner Organizations</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{donorOrganizations.length}</div>
                        <div className="text-accent font-medium">Donor Partners</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">{wisherOrganizations.length}</div>
                        <div className="text-accent font-medium">Wisher Partners</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-neutral mb-2">{new Date().getFullYear() - 2023}+</div>
                        <div className="text-accent font-medium">Years of Impact</div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12 md:mt-16">
                    <Link
                        href={route('partner')}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Become a Partner
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <p className="text-gray-600 mt-4">
                        Join our network of organizations making a difference
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
