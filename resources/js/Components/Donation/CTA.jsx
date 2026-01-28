import React from 'react';
import {Link} from "@inertiajs/react";

const CTA = () => {
    return (
        <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary-dark text-white py-16 md:py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/50 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Want to See <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">More</span>?
                </h2>

                <div className="flex items-center justify-center mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                    <div className="h-1 w-6 bg-gradient-to-r from-secondary-dark to-secondary rounded-full mx-2"></div>
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
                    Sign up for a free account to view all gifts and connect with donors in your community
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href={route('register')}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-accent font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                        <span>Create Free Account</span>
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>

                    <Link
                        href={route('login')}
                        className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    >
                        Already have an account? Login
                    </Link>
                </div>

                {/* Benefits List */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <p className="text-sm text-white/90">Access to all community gifts</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <p className="text-sm text-white/90">Connect with local donors</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mb-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm text-white/90">Safe and verified community</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
