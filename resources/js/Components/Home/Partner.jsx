import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/Components/UI/SectionHeader';
import Button from '@/Components/UI/Button';
import SafeImage from '@/Components/UI/SafeImage';

function LogoMarquee({ title, description, items, countKey, countLabel, tone }) {
    if (!items || items.length === 0) return null;
    // Duplicate the list so the CSS marquee can loop seamlessly.
    const loop = [...items, ...items];
    const duration = `${Math.max(20, items.length * 6)}s`;

    return (
        <div className="mt-12">
            <div className="flex flex-col gap-1 text-center">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
            </div>
            <div className="marquee relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ul className="marquee-track flex w-max gap-4 py-3" style={{ '--marquee-duration': duration }}>
                    {loop.map((org, idx) => (
                        <li
                            key={`${org.id}-${idx}`}
                            aria-hidden={idx >= items.length ? 'true' : undefined}
                            className="relative flex h-28 w-52 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-4 shadow-xs"
                        >
                            <SafeImage
                                src={org.user?.image ? `/storage/${org.user.image}` : null}
                                alt={org.name}
                                fallbackIcon={faBuilding}
                                className="max-h-14 w-auto max-w-[9rem] object-contain"
                                fallbackClassName="h-12 w-12 rounded-xl"
                            />
                            <span className="w-full truncate text-center text-xs font-medium text-slate-600">{org.name}</span>
                            {org[countKey] > 0 && (
                                <span className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone}`}>
                                    {org[countKey]}+ {countLabel}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const OurPartners = ({ organizations = [], CntOrganizations = [] }) => {
    const donorOrganizations = CntOrganizations;
    const wisherOrganizations = organizations.filter((org) => org.total_wishes_count > 0);

    const stats = [
        { value: organizations.length, label: 'Partner Organizations' },
        { value: donorOrganizations.length, label: 'Contributor Partners' },
        { value: 7, label: 'Wish Creator Partners' }, // hard-coded in the original design
        { value: `${new Date().getFullYear() - 2023}+`, label: 'Years of Impact' },
    ];

    return (
        <section className="section bg-white" aria-labelledby="partners-heading">
            <div className="container-page">
                <SectionHeader
                    align="center"
                    eyebrow="Partners"
                    title={<span id="partners-heading">Our Trusted Partners</span>}
                    description="We collaborate with organizations that share our vision of creating meaningful impact in children's lives through generosity and learning."
                />

                <LogoMarquee
                    title="Our Happy Wish Creator Partners"
                    description="Organizations seeking resources and items to support children in their communities"
                    items={wisherOrganizations}
                    countKey="total_wishes_count"
                    countLabel="Wishes"
                    tone="bg-secondary-100 text-secondary-800"
                />
                <LogoMarquee
                    title="Our Contributor Partners"
                    description="Organizations that generously contribute items and resources to fulfill children's wishes"
                    items={donorOrganizations}
                    countKey="total_donations_count"
                    countLabel="Donations"
                    tone="bg-primary-100 text-primary-800"
                />

                <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-card border border-slate-200 bg-slate-200 md:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col-reverse items-center bg-white px-4 py-6 text-center">
                            <dt className="mt-1 text-sm font-medium text-slate-600">{s.label}</dt>
                            <dd className="text-3xl font-bold tracking-tight text-primary-700 tabular-nums">{s.value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-10 flex flex-col items-center gap-3 text-center">
                    <Button href={route('partner')} size="lg" iconRight={faArrowRight}>Become a Partner</Button>
                    <p className="text-sm text-slate-600">Join our network of organizations making a difference</p>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
