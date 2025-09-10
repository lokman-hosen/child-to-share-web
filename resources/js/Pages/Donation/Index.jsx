import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation"/>
            <div className="w-full lg:w-4/6 mb-6 lg:mb-0 mt-[65px]">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="bg-green-100 p-4">
                        <h3 className="text-xl font-semibold flex items-center">
                            <i className="fas fa-gift mr-2 text-primary"></i> Available Donations
                        </h3>
                        <p className="text-sm text-gray-600">Items you can request</p>
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
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">Request
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Art Supplies</td>
                                <td className="p-3">Other</td>
                                <td className="p-3">Oakland</td>
                                <td className="p-3">5.1 km</td>
                                <td className="p-3">
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">Request
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Bicycle</td>
                                <td className="p-3">Toy</td>
                                <td className="p-3">San Jose</td>
                                <td className="p-3">12.7 km</td>
                                <td className="p-3">
                                    <button
                                        className="text-sm bg-secondary text-white px-3 py-1 rounded hover:bg-orange-600">Request
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
