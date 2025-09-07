import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            
            <div className="w-full lg:w-2/4 mb-6 lg:mb-0 mt-[65px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <i className="fas fa-star text-3xl text-purple-500"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">5</h3>
                            <p className="text-gray-600">Wishes Made</p>
                        </div>
                    </div>

                    <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <i className="fas fa-gift text-3xl text-accent"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">23</h3>
                            <p className="text-gray-600">Donations Available</p>
                        </div>
                    </div>

                    <div className="dashboard-card bg-white rounded-xl p-6 shadow-md flex items-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <i className="fas fa-hands-helping text-3xl text-primary"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">3</h3>
                            <p className="text-gray-600">Wishes Granted</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="bg-green-100 p-4">
                        <h3 className="text-xl font-semibold flex items-center">
                            <i className="fas fa-gift mr-2 text-primary"></i> My Donations
                        </h3>
                        <p className="text-sm text-gray-600">Items you created</p>
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <table className="wish-table w-full">
                            <thead>
                            <tr>
                                <th className="text-left p-3">Item</th>
                                <th className="text-left p-3">Category</th>
                                <th className="text-left p-3">Location</th>
                                <th className="text-left p-3">Distance</th>
                                <th className="text-left p-3">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="p-3">Story Books Collection</td>
                                <td className="p-3">Book</td>
                                <td className="p-3">San Francisco</td>
                                <td className="p-3">2.3 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Art Supplies</td>
                                <td className="p-3">Other</td>
                                <td className="p-3">Oakland</td>
                                <td className="p-3">5.1 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Bicycle</td>
                                <td className="p-3">Toy</td>
                                <td className="p-3">San Jose</td>
                                <td className="p-3">12.7 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Story Books Collection</td>
                                <td className="p-3">Book</td>
                                <td className="p-3">San Francisco</td>
                                <td className="p-3">2.3 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Art Supplies</td>
                                <td className="p-3">Other</td>
                                <td className="p-3">Oakland</td>
                                <td className="p-3">5.1 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Bicycle</td>
                                <td className="p-3">Toy</td>
                                <td className="p-3">San Jose</td>
                                <td className="p-3">12.7 km</td>
                                <td className="p-3">
                                    <button className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2"><i
                                        className="fas fa-edit"></i></button>
                                    <button className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded"><i
                                        className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
