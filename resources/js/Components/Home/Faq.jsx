import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight, faHeadset } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/Components/UI/SectionHeader';
import Button from '@/Components/UI/Button';

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
        <section className="section" aria-labelledby="faq-heading">
            <div className="container-page grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <SectionHeader
                        eyebrow="FAQ"
                        title={<span id="faq-heading">Frequently Asked Questions</span>}
                        description="Find answers to common questions about how ThreeWish works and keeps children safe"
                    />
                    <div className="mt-8 hidden rounded-card bg-primary-50 p-6 lg:block">
                        <p className="font-semibold text-slate-900">Still have questions?</p>
                        <p className="mt-1 text-sm text-slate-600">Can't find the answer you're looking for? Our support team is here to help.</p>
                        <Button href="/contact" className="mt-4" size="sm" icon={faHeadset}>Contact Support</Button>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <ul className="divide-y divide-slate-200 rounded-card border border-slate-200/80 bg-white shadow-card">
                        {faqs.map((faq, index) => {
                            const open = openIndex === index;
                            return (
                                <li key={faq.id}>
                                    <h3>
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-900 hover:text-primary-700 sm:px-6"
                                            aria-expanded={open}
                                            aria-controls={`faq-content-${faq.id}`}
                                        >
                                            {faq.question}
                                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${open ? 'rotate-180 bg-primary-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                                <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </h3>
                                    <div id={`faq-content-${faq.id}`} hidden={!open} className="px-5 pb-5 sm:px-6">
                                        <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                                        {index === 0 && (
                                            <Link href="/about" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:underline">
                                                Learn more about ThreeWish
                                                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
                                            </Link>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-6 rounded-card bg-primary-50 p-6 lg:hidden">
                        <p className="font-semibold text-slate-900">Still have questions?</p>
                        <p className="mt-1 text-sm text-slate-600">Can't find the answer you're looking for? Our support team is here to help.</p>
                        <Button href="/contact" className="mt-4" size="sm" icon={faHeadset}>Contact Support</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
