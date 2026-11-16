import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '@/Components/UI/Button';

const ImplementationBody = () => {
    return (
        <section className="section" aria-labelledby="implemented-heading">
            <div className="container-page">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-card border border-slate-200/80 bg-gradient-to-br from-white to-primary-50/60 shadow-card">
                    <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[auto,1fr] md:gap-12">
                        <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white p-4 shadow-card ring-1 ring-slate-100 md:h-44 md:w-44">
                            <img src="/images/hashimukh-logo.png" alt="Hasimukh Somaj Kallayan Songstha logo" loading="lazy" className="h-full w-full object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="eyebrow">Implemented By</p>
                            <p className="mt-1 text-sm text-slate-600">ThreeWish is proudly implemented and supported by</p>
                            <h2 id="implemented-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Hasimukh Somaj Kallayan Songstha
                            </h2>
                            <p className="mt-4 leading-relaxed text-slate-600">
                                A registered non-profit organization dedicated to social development and community welfare.
                                Hasimukh brings years of experience in community service to implement and support the
                                ThreeWish platform, ensuring it reaches and benefits children across communities.
                            </p>
                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                                <Button href="https://hashimukhbd.com/" external target="_blank" rel="noopener noreferrer" icon={faCircleInfo}>
                                    About Hasimukh
                                </Button>
                                <Button href="https://maps.app.goo.gl/sVpueGsmLwMBSEfq6" external target="_blank" rel="noopener noreferrer" variant="secondary" icon={faLocationDot}>
                                    Visit Location
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplementationBody;
