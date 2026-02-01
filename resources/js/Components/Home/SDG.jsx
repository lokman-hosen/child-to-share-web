import React from 'react';

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

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
                        Aligned with UN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SDGs</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral max-w-3xl mx-auto">
                        Our mission supports 5 key Sustainable Development Goals
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* SDG Goals Grid - Images Only */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
                        {sdgGoals.map((goal) => (
                            <div
                                key={goal.id}
                                className="relative group"
                            >
                                {/* SDG Card with Image */}
                                <div
                                    className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white p-3 flex items-center justify-center"
                                >
                                    {/* SDG Image */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img
                                            src={goal.imageUrl}
                                            alt={`SDG Goal: ${goal.name}`}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </div>

                                    {/* Hover Overlay with Goal Info */}
                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                        <div className="text-white text-center">
                                            <div
                                                className="text-xs md:text-sm font-bold mb-2 px-3 py-1 rounded-full"
                                                style={{ backgroundColor: goal.color }}
                                            >
                                                GOAL {goal.goal_no}
                                            </div>
                                            <div className="text-lg font-bold mb-1">{goal.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SDG Goals with Numbers */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
                        {sdgGoals.map((goal) => (
                            <div
                                key={goal.id}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mb-2"
                                    style={{ backgroundColor: goal.color }}
                                >
                                    {goal.goal_no}
                                </div>
                                <div className="text-center">
                                    <div className="text-xs md:text-sm font-semibold text-accent">
                                        Goal {goal.goal_no}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Legend/Explanation */}
                    <div className="mt-8 text-center max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Our Commitment to Sustainable Development</h3>
                            <p className="text-neutral text-lg mb-6">
                                ThreeWish actively contributes to the United Nations Sustainable Development Goals through our platform that promotes:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="font-semibold text-primary mb-2">Quality Education</div>
                                    <p className="text-sm text-neutral">Providing learning resources and educational materials</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="font-semibold text-secondary mb-2">Reduced Inequality</div>
                                    <p className="text-sm text-neutral">Bridging gaps between different communities</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="font-semibold text-primary mb-2">Climate Action</div>
                                    <p className="text-sm text-neutral">Promoting reuse and reducing waste</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SDG Information Link */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://sdgs.un.org/goals"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Learn more about all 17 Sustainable Development Goals
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SDG;