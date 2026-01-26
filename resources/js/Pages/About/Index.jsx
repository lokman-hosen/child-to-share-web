import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChild,
    faGlobeAmericas,
    faHandsHelping,
    faHeart,
    faLeaf,
    faLightbulb,
    faRecycle,
    faUsers,
    faHandHoldingHeart,
    faStar,
    faGift,
    faSmile,
    faRibbon,
    faInfinity,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
    return (
        <GuestLayout>
            <Head title="About ThreeWish - Our Mission & Vision" />

            {/* Hero Section */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center space-x-4 mb-6">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-3xl animate-pulse" />
                        <FontAwesomeIcon icon={faHeart} className="text-red-300 text-4xl animate-bounce" />
                        <FontAwesomeIcon icon={faGift} className="text-green-300 text-3xl animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">ThreeWish</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 leading-relaxed">
                        Where technology meets compassion, creating magical connections between donors and dreamers
                    </p>
                    {/*<div className="flex flex-wrap justify-center gap-4 mt-8">*/}
                    {/*    <Link*/}
                    {/*        href={route('wishes.index')}*/}
                    {/*        className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"*/}
                    {/*    >*/}
                    {/*        Explore Wishes*/}
                    {/*    </Link>*/}
                    {/*    <Link*/}
                    {/*        href={route('register')}*/}
                    {/*        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl border-2 border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"*/}
                    {/*    >*/}
                    {/*        Join Our Mission*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>

                {/* Stats Bar */}
                {/*<div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">*/}
                {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">*/}
                {/*        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">*/}
                {/*            {[*/}
                {/*                { icon: faHandHoldingHeart, value: "1000+", label: "Children Helped" },*/}
                {/*                { icon: faSmile, value: "500+", label: "Happy Donors" },*/}
                {/*                { icon: faGift, value: "2000+", label: "Wishes Granted" },*/}
                {/*                { icon: faRibbon, value: "98%", label: "Satisfaction Rate" }*/}
                {/*            ].map((stat, index) => (*/}
                {/*                <div key={index} className="text-center group">*/}
                {/*                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">*/}
                {/*                        <FontAwesomeIcon icon={stat.icon} className="text-2xl text-white" />*/}
                {/*                    </div>*/}
                {/*                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-200 transition-colors">*/}
                {/*                        {stat.value}*/}
                {/*                    </div>*/}
                {/*                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">*/}
                {/*                        {stat.label}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Main Content */}
            <main className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Mission & Vision Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                        {/* Our Mission */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 transform hover:scale-[1.02] transition-transform duration-500">
                                <div className="p-8 md:p-10">
                                    <div className="flex items-center mb-8">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-md opacity-70"></div>
                                            <div className="relative h-14 w-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mr-5">
                                                <FontAwesomeIcon icon={faHeart} className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                                            <div className="flex items-center mt-2">
                                                <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                                <div className="h-1 w-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full ml-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            <span className="font-semibold text-purple-700">Circle of Kindness</span> is a child-centred, technology-driven sharing initiative designed to support underprivileged children while nurturing empathy, compassion, and environmental responsibility among students.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:border-purple-200 transition-colors">
                                                <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-xl mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Community Building</h3>
                                                    <p className="text-gray-700 text-sm">
                                                        Bringing together children from diverse socioeconomic backgrounds to practice the values of reuse, repurpose, and replace.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors">
                                                <FontAwesomeIcon icon={faHandsHelping} className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Transformative Giving</h3>
                                                    <p className="text-gray-700 text-sm">
                                                        Transforming simple acts of giving into lifelong lessons in kindness, sustainability, and social responsibility.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 hover:border-emerald-200 transition-colors">
                                                <FontAwesomeIcon icon={faRecycle} className="text-emerald-600 text-xl mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Meaningful Impact</h3>
                                                    <p className="text-gray-700 text-sm">
                                                        Providing essential items like school supplies, hygiene kits, and educational materials while teaching conscious consumption.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="p-8 md:p-10 h-full">
                                    <div className="flex items-center mb-8">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-md opacity-70"></div>
                                            <div className="relative h-14 w-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mr-5">
                                                <FontAwesomeIcon icon={faLightbulb} className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                                            <div className="flex items-center mt-2">
                                                <div className="h-1 w-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                                                <div className="h-1 w-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full ml-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="relative">
                                            <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                                            <p className="text-xl text-gray-100 pl-8 leading-relaxed italic font-light">
                                                "A world where every child, regardless of financial background, can dream freely, learn confidently, and grow in a culture rooted in empathy and sustainability."
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all group/item">
                                            <FontAwesomeIcon icon={faChild} className="text-cyan-300 text-xl mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Equal Opportunities</h3>
                                                <p className="text-gray-200 text-sm">
                                                    Breaking financial barriers through collective kindness, ensuring every child has access to basic needs and educational resources.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all group/item">
                                            <FontAwesomeIcon icon={faLeaf} className="text-emerald-300 text-xl mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Sustainable Future</h3>
                                                <p className="text-gray-200 text-sm">
                                                    Cultivating environmental consciousness and sustainable practices through the cycle of giving and sharing.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all group/item">
                                            <FontAwesomeIcon icon={faGlobeAmericas} className="text-blue-300 text-xl mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Global Community</h3>
                                                <p className="text-gray-200 text-sm">
                                                    Building worldwide networks of compassion where small acts create ripple effects of positive change.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    {/*<div className="mb-20 ">*/}
                    {/*    <div className="text-center mb-12 mt-10">*/}
                    {/*        <h2 className="text-4xl font-bold text-gray-900 mb-4">How ThreeWish Works</h2>*/}
                    {/*        <p className="text-xl text-gray-600 max-w-3xl mx-auto">*/}
                    {/*            A simple three-step process to connect wishes with willing hearts*/}
                    {/*        </p>*/}
                    {/*    </div>*/}

                    {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
                    {/*        {[*/}
                    {/*            {*/}
                    {/*                number: "01",*/}
                    {/*                title: "Share Wishes",*/}
                    {/*                description: "Children share their heartfelt wishes for essential items they need.",*/}
                    {/*                icon: faStar,*/}
                    {/*                color: "from-purple-500 to-pink-500"*/}
                    {/*            },*/}
                    {/*            {*/}
                    {/*                number: "02",*/}
                    {/*                title: "Connect Donors",*/}
                    {/*                description: "Donors browse wishes and choose to fulfill those that touch their hearts.",*/}
                    {/*                icon: faHandHoldingHeart,*/}
                    {/*                color: "from-blue-500 to-cyan-500"*/}
                    {/*            },*/}
                    {/*            {*/}
                    {/*                number: "03",*/}
                    {/*                title: "Create Magic",*/}
                    {/*                description: "Wishes are granted, creating moments of joy and lasting connections.",*/}
                    {/*                icon: faInfinity,*/}
                    {/*                color: "from-emerald-500 to-green-500"*/}
                    {/*            }*/}
                    {/*        ].map((step, index) => (*/}
                    {/*            <div key={index} className="relative group">*/}
                    {/*                <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">*/}
                    {/*                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>*/}
                    {/*                        <FontAwesomeIcon icon={step.icon} className="text-white text-2xl" />*/}
                    {/*                    </div>*/}
                    {/*                    <div className="text-6xl font-bold text-gray-100 text-center mb-4">*/}
                    {/*                        {step.number}*/}
                    {/*                    </div>*/}
                    {/*                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">*/}
                    {/*                        {step.title}*/}
                    {/*                    </h3>*/}
                    {/*                    <p className="text-gray-600 text-center">*/}
                    {/*                        {step.description}*/}
                    {/*                    </p>*/}
                    {/*                    <div className="mt-6 text-center">*/}
                    {/*                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-purple-100 group-hover:to-pink-100 transition-all">*/}
                    {/*                            <span className="text-2xl text-gray-400 group-hover:text-purple-600 transition-colors">*/}
                    {/*                                →*/}
                    {/*                            </span>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Final CTA */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Join thousands of compassionate individuals who are changing lives, one wish at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('register')}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Start Donating Today
                            </Link>
                            <Link
                                href={route('wish.index')}
                                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                            >
                                Browse Wishes
                            </Link>
                        </div>
                        <p className="text-gray-500 mt-8 text-sm">
                            Every small act of kindness creates a ripple effect of positive change
                        </p>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
};

export default Index;
