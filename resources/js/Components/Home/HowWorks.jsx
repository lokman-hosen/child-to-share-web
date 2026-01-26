import React from 'react';

const HowWorks = () => {
    return (
        <section id="how-it-works" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How ThreeWish Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="step-card">
                        <div className="step-number bg-purple-100 text-purple-600">1</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Create a Wish or Gift</h3>
                        <p className="text-gray-600">Children create wishes for items they need, or list items they'd
                            like to donate.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number bg-green-100 text-green-600">2</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Matched by Location</h3>
                        <p className="text-gray-600">Our system matches wishes with donors in the same community.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number bg-blue-100 text-blue-600">3</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Fulfill Wishes & Build Friendships</h3>
                        <p className="text-gray-600">Donors fulfill wishes and children learn the joy of giving and
                            receiving.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;
