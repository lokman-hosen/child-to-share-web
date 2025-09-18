import React from 'react';

const CTA = () => {
    return (
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">Sign up for a free account to view all donations and
                    connect with donors in your community</p>
                <a href="registration-new.html"
                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-600 bg-white hover:bg-gray-100">
                    Create Free Account
                </a>
            </div>
        </section>
    );
};

export default CTA;
