import React from 'react';
import {Link} from "@inertiajs/react";

const ImplementationBody = () => {

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
                        Implemented By
                    </h2>
                    <p className="text-lg md:text-xl text-neutral max-w-3xl mx-auto">
                        ThreeWish is proudly implemented and supported by
                    </p>
                </div>

                {/* Organization Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-4 border-white shadow-lg">
                                    <div className="text-center">
                                        <img src="images/hashimukh-logo.png" alt="Hashimukh Logo" className="w-full h-full object-contain transition-all duration-300"/>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                                    Hasimukh Somaj Kallayan Songstha
                                </h3>
                                <p className="text-neutral text-lg mb-6 leading-relaxed">
                                    A registered non-profit organization dedicated to social development and community welfare.
                                    Hasimukh brings years of experience in community service to implement and support the
                                    ThreeWish platform, ensuring it reaches and benefits children across communities.
                                </p>

                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a
                                        target="_blank"
                                        href="https://hashimukhbd.com/"
                                        className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        About Hasimukh
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/sVpueGsmLwMBSEfq6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Visit Location
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        {/*<div className="mt-12 pt-8 border-t border-gray-100">*/}
                        {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">*/}
                        {/*        {[*/}
                        {/*            { number: "15+", label: "Years of Service", color: "text-primary" },*/}
                        {/*            { number: "500+", label: "Projects", color: "text-secondary" },*/}
                        {/*            { number: "10K+", label: "Lives Impacted", color: "text-primary" },*/}
                        {/*            { number: "50+", label: "Volunteers", color: "text-secondary" }*/}
                        {/*        ].map((stat, index) => (*/}
                        {/*            <div key={index} className="text-center">*/}
                        {/*                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>*/}
                        {/*                <div className="text-accent font-medium">{stat.label}</div>*/}
                        {/*            </div>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplementationBody;