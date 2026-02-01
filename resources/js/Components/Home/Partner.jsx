import React, { useState, useEffect, useRef } from 'react';
import {Link} from "@inertiajs/react";

const OurPartners = ({organizations}) => {
    // Sample partner logos - replace with your actual data from database
    // const [partners, setPartners] = useState([
    //     {
    //         id: 1,
    //         name: 'Education First',
    //         logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 2,
    //         name: 'Children\'s Hope',
    //         logo: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 3,
    //         name: 'Future Leaders',
    //         logo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 4,
    //         name: 'Youth Development',
    //         logo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 5,
    //         name: 'Community Builders',
    //         logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 6,
    //         name: 'Hope Foundation',
    //         logo: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 7,
    //         name: 'Learning Tree',
    //         logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    //     {
    //         id: 8,
    //         name: 'Bright Future',
    //         logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80',
    //         website: 'https://example.com'
    //     },
    // ]);

    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused || !contentRef.current) return;

        const speed = 3.0; // Adjust speed here (lower = faster)
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
    }, [isPaused]);

    // Clone partners to create seamless loop
    //const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
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

                {/* Infinite Scrolling Logos */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    ref={containerRef}
                >
                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Logos Container */}
                    <br/>
                    <div
                        className="flex items-center gap-6 md:gap-8 lg:gap-12 h-48"
                        ref={contentRef}
                        style={{ willChange: 'transform' }}
                    >
                        {/*{duplicatedPartners.map((partner, index) => (*/}
                        {/*    <div*/}
                        {/*        key={`${partner.id}-${index}`}*/}
                        {/*        className="flex-shrink-0 group relative"*/}
                        {/*        style={{ width: '200px' }}*/}
                        {/*    >*/}
                        {/*        <a*/}
                        {/*            href={partner.website}*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*            className="block p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"*/}
                        {/*        >*/}
                        {/*            <div className="h-32 flex items-center justify-center">*/}
                        {/*                <img*/}
                        {/*                    src={partner.logo}*/}
                        {/*                    alt={partner.name}*/}
                        {/*                    className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            /!* Tooltip *!/*/}
                        {/*            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">*/}
                        {/*                {partner.name}*/}
                        {/*                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-accent"></div>*/}
                        {/*            </div>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                        {organizations.length > 0 ? (
                            organizations.map((organization) => (
                                <div
                                    key={organization.id}
                                    className="flex-shrink-0 group relative"
                                    style={{ width: '300px' }}
                                >
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-2 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                    >
                                        <div className="h-32 flex items-center justify-center">
                                            <img
                                                src={`/storage/${organization.user.image}`}
                                                alt={organization.name}
                                                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-accent text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">
                                            {organization.name}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-accent"></div>
                                        </div>
                                    </a>
                                </div>
                            ))

                        ):(
                            <p>ffg</p>
                        )

                        }
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
                        <div className="text-accent font-medium">Partner Organizations</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10+</div>
                        <div className="text-accent font-medium">Communities Reached</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">1</div>
                        <div className="text-accent font-medium">Countries</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="text-3xl md:text-4xl font-bold text-neutral mb-2">1 Years</div>
                        <div className="text-accent font-medium">Of Collaboration</div>
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
