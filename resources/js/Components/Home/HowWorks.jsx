import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLocationDot, faHandshake, faStar, faGift } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/Components/UI/SectionHeader';
import Button from '@/Components/UI/Button';
import { usePage } from '@inertiajs/react';
import { canCreateGift, canCreateWish } from '@/utils.jsx';

const steps = [
    {
        id: 1,
        icon: faPenToSquare,
        title: "Create a Wish for you or Gift for other",
        description: "Children create wishes for items they need, or list items they'd like to donate.",
    },
    {
        id: 2,
        icon: faLocationDot,
        title: "Get Matched by Location",
        description: "Our system matches wishes with contributors in the same community",
    },
    {
        id: 3,
        icon: faHandshake,
        title: "Fulfill Wishes & Build Friendships",
        description: "Contributors fulfill wishes and children learn the joy of giving and receiving.",
    },
];

const HowWorks = () => {
    const user = usePage().props.auth?.user;
    // Guests see both (they're sent to login); signed-in users only see what their role can do
    const showWish = !user || canCreateWish(user.role);
    const showGift = !user || canCreateGift(user.role);
    return (
        <section id="how-it-works" className="section scroll-mt-20 bg-white" aria-labelledby="how-heading">
            <div className="container-page">
                <SectionHeader
                    align="center"
                    eyebrow="How it works"
                    title={<span id="how-heading">How ThreeWish Works</span>}
                    description="A simple three-step process that connects children's wishes with generous contributors"
                />

                <div className="relative mt-14">
                {/* connector line on desktop */}
                <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 md:block" />
                <ol className="relative grid gap-6 md:grid-cols-3 md:gap-8">
                    {steps.map((step) => (
                        <li key={step.id} className="relative flex flex-col items-center text-center">
                            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-card ring-8 ring-white">
                                <FontAwesomeIcon icon={step.icon} className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-secondary-600">Step {step.id}</span>
                            <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{step.description}</p>
                        </li>
                    ))}
                </ol>
                </div>

                <div className="mt-14 flex flex-col items-center gap-4 rounded-card bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="text-base font-semibold text-slate-900">Start making wishes come true today</p>
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        {showWish && <Button href={route('wishes.create')} icon={faStar}>Create a Wish</Button>}
                        {showGift && <Button href={route('donations.create')} variant="accent" icon={faGift}>Make a Gift</Button>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;
