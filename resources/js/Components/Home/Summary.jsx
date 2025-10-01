import React from 'react';

const Summary = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                    <div>
                        <div className="stat-number">0</div>
                        <div className="text-sm text-gray-600">Wishes Fulfilled</div>
                    </div>
                    <div>
                        <div className="stat-number">0</div>
                        <div className="text-sm text-gray-600">Active Donors</div>
                    </div>
                    <div>
                        <div className="stat-number">0</div>
                        <div className="text-sm text-gray-600">Happy Wishers</div>
                    </div>
                    <div>
                        <div className="stat-number">0</div>
                        <div className="text-sm text-gray-600">Communities</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
