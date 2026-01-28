import React from 'react';

const Summary = ({activeDonorCount,totalWishCount,fulfilWishCount,community}) => {
    return (
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-3">{fulfilWishCount}</div>
                        <div className="text-accent font-medium">Wishes Fulfilled</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-secondary mb-3">{activeDonorCount}</div>
                        <div className="text-accent font-medium">Active Donors</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">{totalWishCount ?? 0}</div>
                        <div className="text-accent font-medium">Happy Wishers</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-primary mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-neutral mb-3">{community}</div>
                        <div className="text-accent font-medium">Organizations</div>
                        <div className="h-1 w-12 bg-gradient-to-r from-neutral to-neutral-dark mx-auto mt-3 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Summary;
