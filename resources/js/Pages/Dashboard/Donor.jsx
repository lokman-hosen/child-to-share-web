import React from 'react';
import Activity from "@/Components/Common/Admin/Donor/Activity.jsx";
import Cards from "@/Components/Common/Admin/Donor/Cards.jsx";
import WishList from "@/Components/Common/Admin/Donor/WishList.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const DonorDashboard = () => {
    return (
        <div id="dashboard-page" className="page active-page">
            <div className="bg-yellow-300 border border-yellow-500 rounded-lg p-4 m-6">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                        <p className="text-blue-800 text-3xl">
                            ThreeWish is Under Development
                        </p>
                        <p className="text-blue-600 text-md mt-1">
                            Some features are still being built. Thank you for your patience!
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-10 py-8">
                <div className="flex items-left mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mt-1">Donor Dashboard</h1>
                </div>
                <Cards userType = 'donor'/>
                <Activity/>
                {/*<WishList userType = 'donor'/>*/}
            </div>
        </div>
    );
};

export default DonorDashboard;
