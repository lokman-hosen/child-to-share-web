import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

    const faqs = [
        {
            id: 1,
            question: "What is ThreeWish?",
            answer: "ThreeWish is a social innovation platform where children can both give and receive. Kids with spare items can share them with nearby children who need them, fostering friendship and community."
        },
        {
            id: 2,
            question: "Is ThreeWish safe for children?",
            answer: "Absolutely. All content is moderated, location data is approximate, and guardian verification is required for wishers. We prioritize child safety above all else."
        },
        {
            id: 3,
            question: "How does the matching work?",
            answer: "Our system uses geolocation to match wishes with contributors in the same community. Contributors see wishes based on proximity, with the option to expand search radius."
        },
        {
            id: 4,
            question: "What age group is ThreeWish for?",
            answer: "ThreeWish is designed for children aged 6-16. All users under 13 require parental consent and supervision to use the platform."
        },
        {
            id: 5,
            question: "Is there any cost to use ThreeWish?",
            answer: "ThreeWish is completely free for children and families. Our platform is supported by donations and grants from community organizations."
        },
        {
            id: 6,
            question: "How can parents monitor their child's activity?",
            answer: "Parents have access to a dedicated dashboard where they can monitor all activity, approve wishes and donations, and manage privacy settings."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about how ThreeWish works and keeps children safe
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-6 py-5 md:px-8 md:py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-xl group-hover:border-primary/20"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-content-${faq.id}`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg md:text-xl font-semibold text-accent pr-8 group-hover:text-primary transition-colors duration-200">
                                        {faq.question}
                                    </h3>
                                    <span className="flex-shrink-0 ml-4">
                                        <svg
                                            className={`w-6 h-6 text-primary transform transition-all duration-300 ${
                                                openIndex === index ? 'rotate-180 scale-110' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </button>

                            {/* Collapsible Content */}
                            <div
                                id={`faq-content-${faq.id}`}
                                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100 pb-6 md:pb-8'
                                        : 'max-h-0 opacity-0'
                                }`}
                                aria-hidden={openIndex !== index}
                            >
                                <div className="pt-2 border-t border-gray-100">
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>

                                {/* Additional actions if needed */}
                                {index === 0 && openIndex === 0 && (
                                    <div className="mt-4">
                                        <Link
                                            href="/about"
                                            className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
                                        >
                                            Learn more about ThreeWish
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions? */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 border border-primary/10">
                        <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Support
                            </Link>
                            {/*<Link*/}
                            {/*    href="/help-center"*/}
                            {/*    className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-accent font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary"*/}
                            {/*>*/}
                            {/*    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
                            {/*    </svg>*/}
                            {/*    Visit Help Center*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
