import React, {useEffect, useRef, useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandsHelping, faStar} from "@fortawesome/free-solid-svg-icons";

const Index = ({fulfillList, module}) => {
    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Wish Fulfilled
                            Connections</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">Celebrating successful matches between donors and
                            wishers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="match-card bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-white text-center">
                                <div className="flex justify-between items-center">
                                    <div className="text-left">
                                        <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">Match #1</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold">Oct 20, 2023</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mt-2 mb-8">Educational Support</h3>
                            </div>

                            <div className="relative py-12 px-6">
                                <div className="connector-line"></div>

                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                            alt="Donor"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-blue-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faHandsHelping} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Donor
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9Y0ejMml8LyCXjt7emOcQ29r2HOYd47Vfg&s"
                                            alt="Wisher"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-purple-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faStar} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Wisher
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="relative">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXhr8L1D7pgtYWD-6a7FCe67iZDbfV1xnhQ&s"
                                            alt="Donation Item"
                                            className="donation-circle w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"/>
                                        <div
                                            className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 badge-pulse shadow-md">
                                            <i className="fas fa-gift text-xs"></i>
                                        </div>
                                        <div
                                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                            Donation
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">Blake Johnson</h4>
                                        {/*<p className="text-xs text-gray-500">Donor</p>*/}
                                    </div>
                                    <div className="text-right">
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">Maria Garcia</h4>
                                        {/*<p className="text-xs text-gray-500">Wisher</p>*/}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-sm font-medium text-gray-700">Donated: Educational Laptop</p>
                                    <p className="text-xs text-gray-500 mt-1">For online studies in computer science</p>
                                    <div className="mt-3 flex justify-center space-x-2">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Completed
                            </span>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                San Francisco
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="match-card bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 text-white text-center">
                                <div className="flex justify-between items-center">
                                    <div className="text-left">
                                        <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">Match #2</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold">Oct 15, 2023</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mt-2 mb-8">Food Support</h3>
                            </div>

                            <div className="relative py-12 px-6">
                                <div className="connector-line"></div>

                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                            alt="Donor"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-blue-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faHandsHelping} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Donor
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                            alt="Wisher"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-purple-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faStar} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Wisher
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="relative">
                                        <img
                                            src="https://tiimg.tistatic.com/fp/1/008/444/round-abs-plastic-five-sided-fidget-spinning-toy-for-kids-playing-use-724.jpg"
                                            alt="Donation Item"
                                            className="donation-circle w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"/>
                                        <div
                                            className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 badge-pulse shadow-md">
                                            <i className="fas fa-gift text-xs"></i>
                                        </div>
                                        <div
                                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                            Donation
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">Robert Chen</h4>
                                        {/*<p className="text-xs text-gray-500">Donor</p>*/}
                                    </div>
                                    <div className="text-right">
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">Sarah Miller</h4>
                                        {/*<p className="text-xs text-gray-500">Wisher</p>*/}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-sm font-medium text-gray-700">Donated: Grocery Package</p>
                                    <p className="text-xs text-gray-500 mt-1">A month's supply for family support</p>
                                    <div className="mt-3 flex justify-center space-x-2">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Completed
                            </span>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Chicago, IL
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="match-card bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 text-white text-center">
                                <div className="flex justify-between items-center">
                                    <div className="text-left">
                                        <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">Match #3</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold">Oct 10, 2023</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mt-2 mb-8">Medical Aid</h3>
                            </div>

                            <div className="relative py-12 px-6">
                                <div className="connector-line"></div>

                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                            alt="Donor"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-blue-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faHandsHelping} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Donor
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                            alt="Wisher"
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-4 border-white shadow-xl"/>
                                        <div
                                            className="absolute -bottom-3 -right-3 bg-purple-500 text-white rounded-full px-2 py-1 shadow-lg">
                                            <FontAwesomeIcon icon={faStar} className="text-sm"/>
                                        </div>
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full shadow text-xs font-bold whitespace-nowrap">
                                            Wisher
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="relative">
                                        <img
                                            src="https://media.istockphoto.com/id/509862358/vector/flat-icon-is-a-stack-of-books.jpg?s=612x612&w=0&k=20&c=44I05zWvgSQd9hK7EeXrlc9saXLDw-z-L5-UCgh9xFE="
                                            alt="Donation Item"
                                            className="donation-circle w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"/>
                                        <div
                                            className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 badge-pulse shadow-md">
                                            <i className="fas fa-gift text-xs"></i>
                                        </div>
                                        <div
                                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                            Donation
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">David Wilson</h4>
                                        {/*<p className="text-xs text-gray-500">Donor</p>*/}
                                    </div>
                                    <div className="text-right">
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base mt-2">James Thompson</h4>
                                        {/*<p className="text-xs text-gray-500">Wisher</p>*/}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-sm font-medium text-gray-700">Donated: Medical Wheelchair</p>
                                    <p className="text-xs text-gray-500 mt-1">For mobility after accident recovery</p>
                                    <div className="mt-3 flex justify-center space-x-2">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Completed
                            </span>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                New York, NY
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fulfillment Impact</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                                <div className="text-gray-600">Matches Displayed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">127</div>
                                <div className="text-gray-600">Total Fulfilled Wishes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">89</div>
                                <div className="text-gray-600">Active Donors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-pink-600 mb-2">42</div>
                                <div className="text-gray-600">Cities Reached</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
};

export default Index;
