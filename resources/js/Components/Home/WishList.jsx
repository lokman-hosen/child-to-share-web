import React from 'react';
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import SingleWishItem from "@/Components/Common/SingleWishItem.jsx";
import SectionHeader from "@/Components/UI/SectionHeader";
import Button from "@/Components/UI/Button";
import EmptyState from "@/Components/UI/EmptyState";

const WishList = ({ wishes }) => {
    return (
        <section className="section" aria-labelledby="recent-wishes">
            <div className="container-page">
                <SectionHeader
                    eyebrow="Wishes"
                    title={<span id="recent-wishes">Recent Wishes from Children</span>}
                    action={<Button href={route('wish.index')} variant="secondary" size="sm" iconRight={faArrowRight}>View All Wishes</Button>}
                />
                {wishes.length > 0 ? (
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {wishes.map((wish) => (
                            <SingleWishItem key={wish.id} wish={wish} />
                        ))}
                    </div>
                ) : (
                    <EmptyState className="mt-10" icon={faStar} title="No wishes found at the moment" />
                )}
            </div>
        </section>
    );
};
export default WishList;
