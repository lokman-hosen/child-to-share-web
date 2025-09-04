import React from 'react';
import {Head, Link} from "@inertiajs/react";
import {faCheck, faGift, faHandshake, faStar, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="logo flex items-center">
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNENBRjUwIiBkPSJNNjQgNjRDNjQgNDYuMyA3OC4zIDMyIDk2IDMyaDMyMEM0NDMuNyAzMiA0NDggNDYuMyA0NDggNjR2Mzg0YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlY2NHpNMjU2IDQ4MGM3OS41IDAgMTQ0LTQ2LjUgMTQ0LTE0NHMtNjQuNS0xNDQtMTQ0LTE0NC0xNDQgNjQuNS0xNDQgMTQ0IDY0LjUgMTQ0IDE0NCAxNDR6TTEyOCA2NGg1MTJ2MzIuOEw0NDggMjQwLjIgNDQ4IDMwNGwtNjQgNjQgMTI4IDEyOEg5Nkw2NCA0NDhWNjR6Ii8+PC9zdmc+"
                            alt="Children to Share Logo"
                            className="h-10 mr-2"
                        />
                        <h1 className="text-xl logo-text text-primary">
                            <a href="#">Children to Share</a>
                        </h1>
                    </div>
                    <nav className="my-4 md:my-0">
                        <ul className="flex flex-wrap justify-center items-center">
                            <li className="m-2 md:mx-4">
                                <a href="#" className="font-semibold text-white bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                                    <FontAwesomeIcon icon={faGift} />
                                    Donations
                                </a>
                            </li>
                            <li className="m-2 md:mx-4">
                                <a href="#" className="font-semibold text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                                    <FontAwesomeIcon icon={faStar} />
                                    Wishes
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="auth-buttons flex gap-2 mt-4 md:mt-0">

                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 rounded-full border-2 font-semibold bg-orange-500 hover:bg-primary hover:text-white transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="bg-white auth-card p-1 rounded-xl">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="https://rnli.org/-/media/rnli/images/magazine_2022/banglasdesh-anchel-16x9.jpg"
                                alt="Children sharing gifts"
                                className="w-full h-auto object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Joy, Create Smiles</h2>
                            <p className="text-gray-600 mb-4">Children to Share is a safe platform where children can make wishes for items they need, and generous donors can share gifts to make those wishes come true.</p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <span className="text-gray-700">100% verified guardians for safety</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <span className="text-gray-700">Secure platform with privacy protection</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <span className="text-gray-700">Build stronger communities together</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl font-bold text-primary">1,250+</div>
                            <div className="text-sm text-gray-600">Wishes Fulfilled</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl font-bold text-secondary">850+</div>
                            <div className="text-sm text-gray-600">Active Donors</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="text-2xl font-bold text-accent">42+</div>
                            <div className="text-sm text-gray-600">Communities</div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="bg-white auth-card p-6 rounded-xl mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log In to Your Account</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="emailOrPhone" className="block text-gray-700 font-semibold mb-2">Email or Phone</label>
                                <input
                                    type="text"
                                    id="emailOrPhone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Enter your email or phone number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" className="h-4 w-4 text-primary focus:ring-primary" />
                                    <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-primary font-semibold hover:underline">Forgot Password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors focus:ring-4 focus:ring-green-200"
                            >
                                Log In
                            </button>
                        </form>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-center text-gray-600">Don't have an account? <a href="#" className="text-primary font-semibold hover:underline">Sign up</a></p>
                        </div>
                    </div>
                    <div className="bg-white auth-card p-6 rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Join Our Community</h2>
                        <p className="text-gray-600 text-center mb-6">Select how you would like to participate</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <a href="#" className="role-btn bg-white border border-green-200 rounded-xl p-4 text-center hover:border-green-400 hover:shadow-md">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                                    <FontAwesomeIcon icon={faGift} />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2">Donor</h3>
                                <p className="text-sm text-gray-600">Share items you no longer need</p>
                                <div className="mt-3">
                                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Give Back</span>
                                </div>
                            </a>
                            <a href="#" className="role-btn bg-white border border-orange-200 rounded-xl p-4 text-center hover:border-orange-400 hover:shadow-md">
                                <div className="w-16 h-16 rounded-full bg-orange-100 text-secondary flex items-center justify-center mx-auto mb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2">Wisher</h3>
                                <p className="text-sm text-gray-600">Request items you need</p>
                                <div className="mt-3">
                                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Make Wishes</span>
                                </div>
                            </a>
                            <a href="#" className="role-btn bg-white border border-blue-200 rounded-xl p-4 text-center hover:border-blue-400 hover:shadow-md">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2">Community Leader</h3>
                                <p className="text-sm text-gray-600">Organize sharing in your area</p>
                                <div className="mt-3">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Community Lead</span>
                                </div>
                            </a>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-center text-gray-600">Already have an account? <a href="#" className="text-primary font-semibold hover:underline">Log in</a></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
