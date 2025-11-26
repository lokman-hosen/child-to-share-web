import React from 'react';
import {Link} from "@inertiajs/react";

const RegistrationCTA = ({user}) => {
    return (
        <>
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Make a Difference?</h2>
                    <p className="text-gray-700 mb-8 max-w-3xl mx-auto">Join ThreeWish today and become part of a
                        community that believes in the power of sharing and caring</p>
                    {!user && (
                        <>
                            <div
                                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    href={route('register')}
                                    className="bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md text-base font-medium">
                                    Sign Up as Donor
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md text-base font-medium">
                                    Sign Up as Wisher
                                </Link>
                            </div>
                            <p className="mt-6 text-gray-600 text-sm">Already have an account?
                                <Link href={route('register')}>Login</Link>
                            </p>
                        </>
                    )}
                </div>
            </section>

        </>

    );
};

export default RegistrationCTA;
