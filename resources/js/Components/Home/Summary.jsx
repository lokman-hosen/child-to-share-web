import React from 'react';

const Summary = ({activeDonorCount,totalWishCount,fulfilWishCount,community}) => {
    return (
        <>
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
                            <div className="text-gray-600 text-sm">Communities</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center section-title mx-auto">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="testimonial-card">
                            <div className="flex items-center mb-4">
                                <div
                                    className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                                    <span className="text-gray-700 font-medium">E</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Emily's Mom</h3>
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">"Thanks to ThreeWish, Emily received the storybooks she
                                wanted. She's been reading every day and even started a book club with her new friends
                                from the platform!"</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="flex items-center mb-4">
                                <div
                                    className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                                    <span className="text-gray-700 font-medium">M</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Michael's Dad</h3>
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">"The winter coat Michael received through ThreeWish has
                                kept him warm all season. He's even started donating his old clothes to help other
                                kids."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="flex items-center mb-4">
                                <div
                                    className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                                    <span className="text-gray-700 font-medium">S</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Sarah, Donor</h3>
                                    <div className="flex text-yellow-400 text-sm">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">"I donated my old bicycle through ThreeWish and met
                                Tom, who needed it for school. Seeing how happy he was made me realize the true joy of
                                giving."</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Summary;
