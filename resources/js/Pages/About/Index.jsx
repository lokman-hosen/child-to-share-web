import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChild, faGlobeAmericas, faHandsHelping, faHeart, faLeaf, faLightbulb, faRecycle,
    faUsers, faHandHoldingHeart, faStar, faSmile, faRibbon, faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PageHero from "@/Components/UI/PageHero";
import Button from "@/Components/UI/Button";

const mission = [
    { icon: faUsers, title: 'Community Building', text: 'Bringing together children from diverse socioeconomic backgrounds to practice the values of reuse, repurpose, and replace.' },
    { icon: faHandsHelping, title: 'Transformative Giving', text: 'Transforming simple acts of giving into lifelong lessons in kindness, sustainability, and social responsibility.' },
    { icon: faRecycle, title: 'Meaningful Impact', text: 'Providing essential items like school supplies, hygiene kits, and educational materials while teaching conscious consumption.' },
];

const vision = [
    { icon: faChild, title: 'Equal Opportunities', text: 'Breaking financial barriers through collective kindness, ensuring every child has access to basic needs and educational resources.' },
    { icon: faLeaf, title: 'Sustainable Future', text: 'Cultivating environmental consciousness and sustainable practices through the cycle of giving and sharing.' },
    { icon: faGlobeAmericas, title: 'Global Community', text: 'Building worldwide networks of compassion where small acts create ripple effects of positive change.' },
];

const Index = ({ fulfilWishCount, activeDonorCount, totalWishCount, organizations = [] }) => {
    const stats = [
        { icon: faHandHoldingHeart, value: fulfilWishCount + '+', label: "Children Helped" },
        { icon: faSmile, value: activeDonorCount + "+", label: "Happy Contributors" },
        { icon: faStar, value: totalWishCount + "+", label: "Wishes Granted" },
        { icon: faRibbon, value: organizations.length + "+", label: "Partner" },
    ];

    return (
        <GuestLayout>
            <Head title="About ThreeWish - Our Mission & Vision" />

            <PageHero
                eyebrow="About us"
                title="About ThreeWish"
                description="Where technology meets compassion, creating magical connections between contributors and dreamers"
            >
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href={route('wish.index')} size="lg" iconRight={faArrowRight}>Explore Wishes</Button>
                    <Button href={route('register')} size="lg" variant="secondary">Join Our Mission</Button>
                </div>
            </PageHero>

            {/* Stats */}
            <section aria-label="Our impact" className="container-page -mt-px py-10">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-slate-200 bg-slate-200 shadow-card md:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col items-center bg-white px-4 py-6 text-center">
                            <FontAwesomeIcon icon={s.icon} className="h-5 w-5 text-primary-500" aria-hidden="true" />
                            <dd className="mt-3 text-3xl font-bold tracking-tight text-slate-900 tabular-nums">{s.value}</dd>
                            <dt className="mt-1 text-sm font-medium text-slate-600">{s.label}</dt>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Mission & Vision */}
            <section className="container-page grid gap-6 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
                <article className="rounded-card border border-slate-200/80 bg-white p-6 shadow-card sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                        <FontAwesomeIcon icon={faHeart} className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Mission</h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-700">
                        <span className="font-semibold text-primary-700">Circle of Kindness</span> is a child-centred, technology-driven sharing initiative designed to support underprivileged children while nurturing empathy, compassion, and environmental responsibility among students.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {mission.map((m) => (
                            <li key={m.title} className="flex gap-4 rounded-xl bg-primary-50/60 p-4">
                                <FontAwesomeIcon icon={m.icon} className="mt-1 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">{m.title}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{m.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="relative overflow-hidden rounded-card bg-gradient-dark p-6 text-white shadow-card sm:p-10">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary-300/20 blur-3xl" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-secondary-200">
                        <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="relative mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Vision</h2>
                    <blockquote className="relative mt-4 border-l-4 border-secondary-300 pl-5 text-lg italic leading-relaxed text-primary-50">
                        "A world where every child, regardless of financial background, can dream freely, learn confidently, and grow in a culture rooted in empathy and sustainability."
                    </blockquote>
                    <ul className="relative mt-8 space-y-4">
                        {vision.map((v) => (
                            <li key={v.title} className="flex gap-4 rounded-xl bg-white/10 p-4 ring-1 ring-inset ring-white/10">
                                <FontAwesomeIcon icon={v.icon} className="mt-1 h-5 w-5 shrink-0 text-secondary-200" aria-hidden="true" />
                                <div>
                                    <h3 className="font-semibold text-white">{v.title}</h3>
                                    <p className="mt-1 text-sm text-primary-100">{v.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            {/* Final CTA */}
            <section className="border-t border-slate-200/70 bg-white">
                <div className="container-page py-16 text-center sm:py-20">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to Make a Difference?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Join thousands of compassionate individuals who are changing lives, one wish at a time.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Button href={route('register')} size="lg">Start Donating Today</Button>
                        <Button href={route('wish.index')} size="lg" variant="secondary">Browse Wishes</Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Index;
