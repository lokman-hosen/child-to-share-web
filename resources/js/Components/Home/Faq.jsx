import React from 'react';

const Faq = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">What is ThreeWish?</h3>
                        <p className="text-gray-600">ThreeWish is a social innovation platform where children can both
                            give and receive. Kids with spare items can share them with nearby children who need them,
                            fostering friendship and community.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Is ThreeWish safe for children?</h3>
                        <p className="text-gray-600">Absolutely. All content is moderated, location data is approximate,
                            and guardian verification is required for wishers. We prioritize child safety above all
                            else.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">How does the matching work?</h3>
                        <p className="text-gray-600">Our system uses geolocation to match wishes with donors in the same
                            community. Donors see wishes based on proximity, with the option to expand search
                            radius.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
