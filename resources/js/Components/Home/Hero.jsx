import React, { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";

const Hero = ({ user }) => {
    // Temporary slides array - will be replaced with data from database later
    const [slides, setSlides] = useState([
        {
            id: 1,
            image: "/images/banner/2.jpeg",
            caption: "Children learning the joy of giving"
        },
        {
            id: 2,
            image: "/images/banner/1.jpeg",
            caption: "Making wishes come true"
        },
        // {
        //     id: 3,
        //     image: "https://www.goodwillaz.org/wp-content/uploads/2024/08/Screenshot-2024-08-06-at-3.13.20%E2%80%AFPM.png",
        //     caption: "Building community connections"
        // },
        // {
        //     id: 4,
        //     image: "https://www.shutterstock.com/image-photo/boy-child-puts-toys-cardboard-600nw-2423704351.jpg",
        //     caption: "Building community connections"
        // }
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);
    const [containerHeight, setContainerHeight] = useState('calc(100vh - 5rem)'); // Account for mobile nav

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    // Adjust height based on screen size - accounting for mobile navigation
    useEffect(() => {
        const updateHeight = () => {
            const mobileNavHeight = 64; // Approximate height of mobile navigation in pixels
            const viewportHeight = window.innerHeight;

            if (window.innerWidth >= 1024) {
                // Large screens - full height
                setContainerHeight(`${viewportHeight}px`);
            } else if (window.innerWidth >= 768) {
                // Medium screens - account for potential mobile nav
                setContainerHeight(`${viewportHeight - mobileNavHeight}px`);
            } else {
                // Small screens (mobile) - definitely account for mobile nav
                setContainerHeight(`${viewportHeight - mobileNavHeight}px`);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setFade(true);
        }, 300);
    };

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setFade(true);
        }, 300);
    };

    const goToSlide = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide(index);
            setFade(true);
        }, 300);
    };

    return (
        <section className="hero-bg relative">
            <div className="container-fluid mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Left Column - Image Carousel (2/3 width on large screens) */}
                    <div className="w-full lg:w-2/3 flex-grow">
                        <div
                            className="relative w-full overflow-hidden shadow-xl"
                            style={{ height: containerHeight }}
                        >
                            {/* Slides */}
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    } ${fade ? 'animate-fadeIn' : ''}`}
                                >
                                    <div className="relative w-full h-full">
                                        <img
                                            src={slide.image}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-full object-cover object-center"
                                            style={{ minHeight: '100%', minWidth: '100%' }}
                                        />
                                        {/* Gradient overlay for better text visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                    </div>
                                    {slide.caption && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                            <p className="text-white text-lg md:text-xl font-medium text-center">
                                                {slide.caption}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Slide Controls */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                aria-label="Previous slide"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                aria-label="Next slide"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentSlide
                                                ? 'bg-primary scale-125'
                                                : 'bg-white/60 hover:bg-primary/80'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Split into two parts (1/3 width on large screens) */}
                    <div className="w-full lg:w-1/3 flex flex-col" style={{ height: containerHeight }}>
                        {/* Top Part - Image */}
                        <div className="hidden md:block w-full flex-1 overflow-hidden">
                            <img
                                src="/images/banner/hero.jpeg"
                                alt="ThreeWish Community"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                style={{ minHeight: '100%', minWidth: '100%' }}
                            />
                        </div>

                        {/* Bottom Part - Text Box */}
                        <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 border border-gray-100 flex-1 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                                Where Children Learn the Joy of Giving
                            </h2>
                            <p className="text-gray-700 text-lg mb-4">
                                ThreeWish connects children who have items to share with those who have wishes to fulfill.
                            </p>
                            <p className="text-gray-700 text-lg mb-6">
                                Our platform creates meaningful connections and teaches valuable lessons about generosity
                                and community.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                                {!user && (
                                    <Link
                                        href={route('login')}
                                        className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary px-6 py-3 rounded-md text-white font-medium text-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
                                    >
                                        Sign In ThreeWish
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                )}
                                <Link
                                    href={`${route('home')}#how-it-works`}
                                    className="bg-white border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md text-base font-medium text-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                >
                                    How It Works
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add fade animation to CSS */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-in-out;
                }

                /* Ensure images fill their containers */
                .object-cover {
                    object-fit: cover;
                }

                /* Add bottom padding to account for mobile navigation */
                @media (max-width: 768px) {
                    .hero-bg {
                        padding-bottom: 4rem; /* Adjust based on your mobile nav height */
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;