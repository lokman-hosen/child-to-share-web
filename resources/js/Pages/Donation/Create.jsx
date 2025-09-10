import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="w-full lg:w-4/6 mb-6 lg:mb-0 mt-[65px]">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="bg-green-100 p-4">
                        <h3 className="text-xl font-semibold flex items-center">
                            <i className="fas fa-gift mr-2 text-primary"></i> Available Donations
                        </h3>
                        <p className="text-sm text-gray-600">Items you can request</p>
                    </div>
                    <div className="p-4 overflow-x-auto">
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
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">
                                        Request
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Art Supplies</td>
                                <td className="p-3 border">Other</td>
                                <td className="p-3 border">Oakland</td>
                                <td className="p-3 border">5.1 km</td>
                                <td className="p-3 border">
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">
                                        Request
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Bicycle</td>
                                <td className="p-3 border">Toy</td>
                                <td className="p-3 border">San Jose</td>
                                <td className="p-3 border">12.7 km</td>
                                <td className="p-3 border">
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">
                                        Request
                                    </button>
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
