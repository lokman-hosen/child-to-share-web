import React from 'react';
import {Link} from "@inertiajs/react";

const RegistrationCTA = ({user}) => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                        Ready to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Difference</span>?
                    </h2>
                    <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
                        Join ThreeWish today and become part of a community that believes in the power of sharing and caring. Whether you want to give or receive, there's a place for you here.
                    </p>

                    {!user ? (
                        <>
                            <div className="flex flex-col lg:flex-row justify-center gap-6 mb-10">
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 flex-1 max-w-sm mx-auto lg:mx-0">
                                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-accent text-lg mb-3">As a Donor</h3>
                                    <p className="text-gray-600 text-sm mb-4">Share items you no longer need and bring joy to children in your community.</p>
                                    <Link
                                        href={route('register', {role: 'donor'})}
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Sign Up as Donor
                                    </Link>
                                </div>

                                <div className="text-gray-300 flex items-center justify-center">
                                    <div className="hidden lg:block text-xl font-bold text-gray-400">OR</div>
                                    <div className="lg:hidden text-lg font-bold text-gray-400 my-4">Choose your role</div>
                                </div>

                                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-6 flex-1 max-w-sm mx-auto lg:mx-0">
                                    <div className="h-12 w-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-accent text-lg mb-3">As a Wisher</h3>
                                    <p className="text-gray-600 text-sm mb-4">Create wishes for items you need and connect with generous donors.</p>
                                    <Link
                                        href={route('register', {role: 'wisher'})}
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-accent font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                        </svg>
                                        Sign Up as Wisher
                                    </Link>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <p className="text-gray-600 mb-4">
                                    <span className="text-accent font-medium">Already have an account?</span> Login to continue your journey
                                </p>
                                <Link
                                    href={route('login')}
                                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group"
                                >
                                    <svg className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Login to Your Account
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-accent mb-2">Welcome back, {user.name}!</h3>
                                    <p className="text-gray-700">Continue making a difference in our community.</p>
                                </div>
                                <div className="flex gap-4">
                                    <Link
                                        href={user.role === 'donor' ? route('donations.create') : route('wishes.create')}
                                        className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                    >
                                        Create {user.role === 'donor' ? 'Gift' : 'Wish'}
                                    </Link>
                                    <Link
                                        href={route('home')}
                                        className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        Browse Community
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RegistrationCTA;
