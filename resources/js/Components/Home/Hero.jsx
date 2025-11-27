import React from 'react';
import {Link} from "@inertiajs/react";

const Hero = ({user, wisherImages}) => {
    return (
            <section className="hero-bg py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where Children Learn the
                                Joy of Giving</h1>
                            <p className="text-lg text-gray-700 mb-8">A platform that connects children who have items
                                to share with those who have wishes to fulfill</p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                {!user && (
                                    <Link
                                        href={route('login')}
                                        className="bg-black hover:bg-gray-700 px-6 py-3 rounded-md text-white font-medium text-center">
                                        Sign In ThreeWish
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </Link>
                                )}
                                <Link href={`${route('home')}#how-it-works`}
                                      className="bg-white hover:bg-gray-300 btn-outline px-6 py-3 rounded-md text-base font-medium text-center">
                                    How It Works
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-lg">
                                <div
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                                    {/* Header Section */}
                                    <div className="flex items-center mb-2 pb-2 border-b border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-1 bg-blue-50 rounded-lg">
                                                <svg className="w-5 h-5 text-blue-500" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">Some Happy Wishers</h3>
                                                {/*<p className="text-sm text-gray-500 mt-1">{wisherImages.length} people*/}
                                                {/*    wishing you well</p>*/}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Images Grid */}
                                    <div className="grid grid-cols-4 md:grid-cols-8 justify-items-center gap-0">
                                        {wisherImages.map((wisher) => (
                                            <div key={wisher.id} className="relative group">
                                                <img
                                                    src={`/storage/${wisher.image}`}
                                                    alt={wisher.name}
                                                    className="w-24 h-20 md:w-16 md:h-10 object-cover shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 border-white group-hover:border-blue-200"
                                                />
                                                {/* Tooltip on hover */}
                                                <div
                                                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                                    {wisher.name}
                                                    <div
                                                        className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Hero;
