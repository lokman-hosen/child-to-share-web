import React from 'react';
import {Link} from "@inertiajs/react";

const CTA = ({user}) => {
    return (
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Want to Help?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">Sign up for a free donor account to fulfill wishes and make children's dreams come true</p>

                {!user && (
                    <Link
                        href={route('login')}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-600 bg-white hover:bg-gray-100">
                        Sign In ThreeWish
                        <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                )}

            </div>
        </section>
    );
};

export default CTA;
