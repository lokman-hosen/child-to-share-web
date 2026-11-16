import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/Components/UI/SectionHeader';

const SDG = () => {
    const sdgGoals = [
        {
            id: 1,
            goal_no: 4,
            name: "Quality Education",
            imageUrl: "images/sdg/E_WEB_04.png",
            description: '',
            color: "#C5192D"
        },
        {
            id: 2,
            goal_no: 10,
            name: "Reduced Inequality",
            imageUrl: "images/sdg/E_WEB_10.png",
            description: '',
            color: "#DD1367"
        },
        {
            id: 3,
            goal_no: 12,
            name: "Responsible Consumption",
            imageUrl: "images/sdg/E_WEB_12.png",
            description: '',
            color: "#BF8B2E"
        },
        {
            id: 4,
            goal_no: 13,
            name: "Climate Action",
            imageUrl: 'images/sdg/E_WEB_13.png',
            description: '',
            color: "#3F7E44"
        },
        {
            id: 5,
            goal_no: 17,
            name: "Partnerships",
            imageUrl: 'images/sdg/E_WEB_17.png',
            description: '',
            color: "#19486A"
        }
    ];

    const commitments = [
        { title: 'Quality Education', text: 'Providing learning resources and educational materials' },
        { title: 'Reduced Inequality', text: 'Bridging gaps between different communities' },
        { title: 'Climate Action', text: 'Promoting reuse and reducing waste' },
    ];

    return (
        <section className="section bg-white" aria-labelledby="sdg-heading">
            <div className="container-page">
                <SectionHeader
                    align="center"
                    eyebrow="Global goals"
                    title={<span id="sdg-heading">Aligned with UN SDGs</span>}
                    description="Our mission supports 5 key Sustainable Development Goals"
                />

                <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
                    {sdgGoals.map((goal) => (
                        <li key={goal.id} className="text-center">
                            <img
                                src={`/${goal.imageUrl}`}
                                alt={`SDG ${goal.goal_no}: ${goal.name}`}
                                loading="lazy"
                                className="aspect-square w-full rounded-xl object-cover shadow-card"
                            />
                            <p className="mt-2 text-xs font-medium text-slate-600">Goal {goal.goal_no}</p>
                        </li>
                    ))}
                </ul>

                <div className="mx-auto mt-12 max-w-4xl rounded-card border border-slate-200/80 bg-white p-6 shadow-card sm:p-8">
                    <h3 className="text-lg font-semibold text-slate-900">Our Commitment to Sustainable Development</h3>
                    <p className="mt-2 text-slate-600">
                        ThreeWish actively contributes to the United Nations Sustainable Development Goals through our platform that promotes:
                    </p>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                        {commitments.map((c) => (
                            <li key={c.title} className="rounded-xl bg-primary-50/60 p-4">
                                <p className="font-semibold text-primary-800">{c.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://sdgs.un.org/goals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:underline"
                    >
                        Learn more about all 17 Sustainable Development Goals
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SDG;
