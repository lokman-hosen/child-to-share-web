import React from 'react';

const Summary = ({activeDonorCount,totalWishCount,fulfilWishCount,community}) => {
    return (
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{fulfilWishCount}</div>
                            <div className="text-gray-600 text-sm">Wishes Fulfilled</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{activeDonorCount}</div>
                            <div className="text-gray-600 text-sm">Active Donors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{totalWishCount ?? 0}</div>
                            <div className="text-gray-600 text-sm">Happy Wishers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{community}</div>
                            <div className="text-gray-600 text-sm">Organizations</div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Summary;
