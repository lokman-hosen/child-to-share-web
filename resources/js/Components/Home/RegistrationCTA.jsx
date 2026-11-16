import React from 'react';
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@/Components/UI/Button";

const RegistrationCTA = ({ user }) => {
    return (
        <section className="section bg-white" aria-labelledby="cta-heading">
            <div className="container-page">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-dark px-6 py-12 text-center shadow-pop sm:px-12 sm:py-16">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary-300/20 blur-3xl" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl" />

                    <div className="relative">
                        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Make a <span className="text-secondary-200">Difference</span>?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
                            Join ThreeWish today and become part of a community that believes in the power of sharing and caring. Whether you want to give or receive, there's a place for you here.
                        </p>

                        {!user ? (
                            <>
                                <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
                                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-card">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                                            <FontAwesomeIcon icon={faGift} className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        <h3 className="mt-4 text-lg font-semibold text-slate-900">As a Contributor</h3>
                                        <p className="mt-1 flex-1 text-sm text-slate-600">Share items you no longer need and bring joy to children in your community.</p>
                                        <Button href={route('register', { role: 'donor' })} className="mt-5 w-full">Sign Up as Contributor</Button>
                                    </div>
                                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-card">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                                            <FontAwesomeIcon icon={faStar} className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        <h3 className="mt-4 text-lg font-semibold text-slate-900">As a Wisher</h3>
                                        <p className="mt-1 flex-1 text-sm text-slate-600">Create wishes for items you need and connect with generous contributors.</p>
                                        <Button href={route('register', { role: 'wisher' })} variant="accent" className="mt-5 w-full">Sign Up as Wisher</Button>
                                    </div>
                                </div>
                                <p className="mt-8 text-sm text-primary-100">
                                    Already have an account?{' '}
                                    <Link href={route('login')} className="font-semibold text-white underline underline-offset-4 hover:text-secondary-200">
                                        Login to Your Account
                                    </Link>
                                </p>
                            </>
                        ) : (
                            <div className="mt-8">
                                <p className="text-lg font-semibold text-white">Welcome back, {user.name}!</p>
                                <p className="mt-1 text-primary-100">Continue making a difference in our community.</p>
                                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                    <Button
                                        href={user.role === 'donor' ? route('donations.create') : route('wishes.create')}
                                        variant="inverse"
                                        size="lg"
                                        icon={user.role === 'donor' ? faGift : faStar}
                                    >
                                        Create {user.role === 'donor' ? 'Gift' : 'Wish'}
                                    </Button>
                                    <Button href={route('home')} variant="outline-inverse" size="lg" iconRight={faArrowRight}>
                                        Browse Community
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationCTA;
