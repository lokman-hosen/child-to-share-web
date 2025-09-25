import React from 'react';
import Activity from "@/Components/Common/Admin/Donor/Activity.jsx";
import Cards from "@/Components/Common/Admin/Donor/Cards.jsx";
import WishList from "@/Components/Common/Admin/Donor/WishList.jsx";

const WisherDashboard = () => {
    return (
            <div className="px-10 py-8">
                <div className="flex items-left mb-6">
                    <div className="md:hidden flex items-center">
                        <button type="button" id="sidebar-mobile-menu-button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mt-1">Wisher Dashboard</h1>
                </div>

                <Cards userType = 'wisher'/>
                <Activity/>
                <WishList userType = 'wisher'/>

            </div>
    );
};

export default WisherDashboard;
