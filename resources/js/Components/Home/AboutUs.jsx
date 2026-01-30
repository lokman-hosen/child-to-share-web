import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandsHelping, faRecycle, faUsers, faGlobeAmericas, faChild, faLeaf, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-3 mb-6">
                        <div className="h-2 w-12 bg-purple-500 rounded-full"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ThreeWish</span>
                        </h2>
                        <div className="h-2 w-12 bg-pink-500 rounded-full"></div>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bridging hearts through technology, creating a cycle of kindness that transforms lives
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Who We Are Section */}
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl -z-10"></div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                            <div className="p-8 md:p-10">
                                {/* Section Header */}
                                <div className="flex items-center mb-8">
                                    <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mr-5">
                                        <FontAwesomeIcon icon={faHeart} className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
                                        <div className="flex items-center mt-2">
                                            <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                            <div className="h-1 w-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full ml-1"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-2xl border border-purple-100">
                                        <FontAwesomeIcon icon={faHandsHelping} className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Child-Centered Initiative</h4>
                                            <p className="text-gray-700">
                                                Circle of Kindness is a child-centred, technology-driven sharing initiative designed to support
                                                underprivileged children while nurturing empathy, compassion, and environmental responsibility
                                                among students.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-100">
                                        <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Bringing Communities Together</h4>
                                            <p className="text-gray-700">
                                                The project brings together children from diverse socioeconomic backgrounds. It encourages
                                                them to practice the values of reuse, repurpose, and replace, transforming simple acts
                                                of giving into lifelong lessons in kindness and sustainability.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-2xl border border-emerald-100">
                                        <FontAwesomeIcon icon={faRecycle} className="text-emerald-500 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Meaningful Impact</h4>
                                            <p className="text-gray-700">
                                                Through this initiative, children in need receive small but meaningful items such as
                                                school bags, shoes, books, toys, hygiene kits, and art supplies while privileged children
                                                learn the joy of sharing, conscious consumption, and responsible citizenship.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">1000+</div>
                                        <div className="text-sm text-gray-600">Children Helped</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">500+</div>
                                        <div className="text-sm text-gray-600">Contributors</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-emerald-600">2000+</div>
                                        <div className="text-sm text-gray-600">Wishes Fulfilled</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="relative">
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl -z-10"></div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 h-full">
                            <div className="p-8 md:p-10 h-full">
                                {/* Section Header */}
                                <div className="flex items-center mb-8">
                                    <div className="h-14 w-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg mr-5">
                                        <FontAwesomeIcon icon={faLightbulb} className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                                        <div className="flex items-center mt-2">
                                            <div className="h-1 w-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                                            <div className="h-1 w-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full ml-1"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Vision Text */}
                                <div className="mb-10">
                                    <div className="relative">
                                        <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                                        <p className="text-xl text-gray-100 pl-8 leading-relaxed italic">
                                            "A world where every child, regardless of financial background, can dream freely,
                                            learn confidently, and grow in a culture rooted in empathy and sustainability."
                                        </p>
                                    </div>
                                </div>

                                {/* Vision Points */}
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                        <FontAwesomeIcon icon={faChild} className="text-cyan-300 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Equal Opportunities</h4>
                                            <p className="text-gray-200">
                                                Creating equal learning and growth opportunities for every child, breaking
                                                financial barriers through collective kindness.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                        <FontAwesomeIcon icon={faLeaf} className="text-emerald-300 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Sustainable Future</h4>
                                            <p className="text-gray-200">
                                                Building a sustainable culture where giving and sharing become natural parts
                                                of growing up and community building.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                        <FontAwesomeIcon icon={faGlobeAmericas} className="text-blue-300 text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">Global Community</h4>
                                            <p className="text-gray-200">
                                                Fostering a global community of compassionate individuals who believe in
                                                the power of small acts to create big changes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="mt-10 pt-8 border-t border-white/20">
                                    <div className="text-center">
                                        <p className="text-lg text-cyan-100 font-medium mb-4">
                                            Join us in building this vision, one wish at a time
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                                                Start Donating
                                            </button>
                                            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-2">
                        <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <div className="h-1 w-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                        <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <div className="h-1 w-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                        <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                    <p className="text-gray-500 mt-4 text-sm">
                        Powered by Laravel, Inertia, and React — Building bridges through technology
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
