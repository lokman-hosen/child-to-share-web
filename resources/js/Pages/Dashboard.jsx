import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faCancel,
    faDashboard,
    faEdit, faGift, faHandsHelping,
    faList,
    faSave,
    faStar,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            <div className="w-full lg:w-4/6 mb-6 lg:mb-0">
                <div className="min-h-screen p-6">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b px-6 py-4">
                            <h2 className="text-lg font-semibold text-green-800">
                                <FontAwesomeIcon icon={faDashboard}/> Donor Dashboard
                            </h2>
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center border border-gray-100">
                                    <div
                                        className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                        <div className="text-3xl text-purple-500">
                                            <FontAwesomeIcon icon={faStar}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">5</h3>
                                        <p className="text-gray-600">Wishes Made</p>
                                    </div>
                                </div>

                                <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center border border-gray-100">
                                    <div
                                        className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                        <div className="text-3xl text-accent">
                                            <FontAwesomeIcon icon={faGift}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">23</h3>
                                        <p className="text-gray-600">Donations Available</p>
                                    </div>
                                </div>

                                <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center border border-gray-100">
                                    <div
                                        className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <div className="text-3xl text-blue-500">
                                            <FontAwesomeIcon icon={faHandsHelping}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">3</h3>
                                        <p className="text-gray-600">Wishes Granted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="wish-table w-full border border-collapse">
                                    <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left p-3 border">Item</th>
                                        <th className="text-left p-3 border">Category</th>
                                        <th className="text-left p-3 border">Location</th>
                                        <th className="text-left p-3 border">Distance</th>
                                        <th className="text-left p-3 border">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="p-3 border">Story Books Collection</td>
                                        <td className="p-3 border">Book</td>
                                        <td className="p-3 border">San Francisco</td>
                                        <td className="p-3 border">2.3 km</td>
                                        <td className="p-3 border">
                                            <Link
                                                href=""
                                                className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Link
                                                href=""
                                                className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">Art Supplies</td>
                                        <td className="p-3 border">Other</td>
                                        <td className="p-3 border">Oakland</td>
                                        <td className="p-3 border">5.1 km</td>
                                        <td className="p-3 border">
                                            <Link
                                                href=""
                                                className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Link
                                                href=""
                                                className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border">Bicycle</td>
                                        <td className="p-3 border">Toy</td>
                                        <td className="p-3 border">San Jose</td>
                                        <td className="p-3 border">12.7 km</td>
                                        <td className="p-3 border">
                                            <Link
                                                href=""
                                                className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Link
                                                href=""
                                                className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
