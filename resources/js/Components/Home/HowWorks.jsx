import React from 'react';

const HowWorks = () => {
    const steps = [
        {
            id: 1,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Create a Wish for you or Gift for other",
            description: "Children create wishes for items they need, or list items they'd like to donate.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            id: 2,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Get Matched by Location",
            description: "Our system matches wishes with donors in the same community",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50"
        },
        {
            id: 3,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            ),
            title: "Fulfill Wishes & Build Friendships",
            description: "Donors fulfill wishes and children learn the joy of giving and receiving.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        HOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">THREEWISH</span> WORKS
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        A simple three-step process that connects children's wishes with generous donors
                    </p>
                </div>

                {/* Steps Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative group"
                        >
                            {/* Main Card */}
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:border-gray-200">
                                {/* Top Part - Icon Section */}
                                <div className={`relative ${step.bgColor} pt-8 pb-6 px-6 md:px-8`}>
                                    <div className="flex items-center justify-between">
                                        {/* Icon Container */}
                                        <div className="flex-shrink-0">
                                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Step Number */}
                                        <div className="text-right">
                                            <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Part - Content Section */}
                                <div className="px-6 md:px-8 pb-8 pt-6">
                                    <div className="flex gap-6">
                                        {/* Left Column - Large Step Number */}
                                        <div className="flex-shrink-0 hidden md:block">
                                            <div className="relative">
                                                <div className="text-7xl md:text-8xl font-bold text-gray-100 leading-none">
                                                    {step.id}
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                                        {step.id}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="flex-1 min-w-0">
                                            {/* Top Part - Title */}
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-tight uppercase">
                                                {step.title}
                                            </h3>

                                            {/* Bottom Part - Description */}
                                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative Element */}
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${step.color}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">
                            Start making wishes come true today
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;
