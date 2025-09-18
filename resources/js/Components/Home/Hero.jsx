import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Where Children Learn the Joy of Giving</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">A platform that connects children who have
                    items to share with those who have wishes to fulfill</p>
                <a href="registration-new.html"
                   className="cta-button inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white">
                    Join ThreeWish Today
                    <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>
    );
};

export default Hero;
