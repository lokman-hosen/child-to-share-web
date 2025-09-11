import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation"/>

            <div className="w-full lg:w-4/6 mb-6 lg:mb-0">
                <div className="min-h-screen p-6">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Donation List
                            </h2>
                            <div className="flex space-x-2">
                                <Link
                                    href={route('donations.create')}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faPlus}/> Create New
                                </Link>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5">
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
