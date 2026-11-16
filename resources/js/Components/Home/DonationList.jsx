import React from 'react';
import { faArrowRight, faGift } from "@fortawesome/free-solid-svg-icons";
import SingleDonationItem from "@/Components/Common/SingleDonationIteam.jsx";
import SectionHeader from "@/Components/UI/SectionHeader";
import Button from "@/Components/UI/Button";
import EmptyState from "@/Components/UI/EmptyState";

const DonationList = ({ donations }) => {
    return (
        <section className="section bg-white" aria-labelledby="recent-gifts">
            <div className="container-page">
                <SectionHeader
                    eyebrow="Gifts"
                    title={<span id="recent-gifts">Recent Gifts from Contributors</span>}
                    action={<Button href={route('donation.index')} variant="secondary" size="sm" iconRight={faArrowRight}>View All Gifts</Button>}
                />
                {donations.length > 0 ? (
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {donations.map((donation) => (
                            <SingleDonationItem key={donation.id} donation={donation} />
                        ))}
                    </div>
                ) : (
                    <EmptyState className="mt-10" icon={faGift} title="No gifts found at the moment" />
                )}
            </div>
        </section>
    );
};

export default DonationList;
