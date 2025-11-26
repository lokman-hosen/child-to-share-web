import React from 'react';
import {Link} from "@inertiajs/react";

const Hero = ({user}) => {
    return (
            <section className="hero-bg py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
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
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                                            <i className="fas fa-book text-gray-700"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Emily's Wish</h3>
                                            <p className="text-gray-600 text-sm">7 years old • 3.2 km away</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">"I love reading stories but I don't have many
                                        books. I wish I could get some storybooks to read."</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Posted 2 days ago</span>
                                        <button className="btn-primary px-4 py-2 rounded-md text-sm font-medium">
                                            Fulfill This Wish
                                        </button>
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
