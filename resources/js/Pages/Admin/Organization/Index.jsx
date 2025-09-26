import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faEdit, faList, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    return (
        <AuthenticatedLayout>
            <Head title="Organization List"/>
            <div className="px-10 py-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Organizations</h1>

                    <div className="bg-white shadow rounded-lg p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium text-gray-900">My Organizations</h2>
                            <button
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                <i className="fas fa-plus mr-2"></i> Join New Organization
                            </button>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <div
                                        className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-building text-blue-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Community Center A</h3>
                                        <p className="text-sm text-gray-500">15 members • 32 wishes fulfilled</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <a href={route('organizations.show', 1)}
                                       className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        View Organization
                                    </a>
                                </div>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <div
                                        className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-school text-green-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">School B</h3>
                                        <p className="text-sm text-gray-500">28 members • 47 wishes fulfilled</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        View Organization
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">All Organizations</h2>
                        <div className="flex items-center mb-4">
                            <input type="text" placeholder="Search organizations..."
                                   className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            <button
                                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                <i className="fas fa-search mr-2"></i> Search
                            </button>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            <li className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="fas fa-building text-blue-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">
                                                <Link
                                                    href={route('organizations.show', 1)}
                                                    className="text-blue-500 hover:text-blue-700">
                                                    Community Center A
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-gray-500">Serving the downtown community since
                                                2010</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="fas fa-school text-green-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">
                                                <Link
                                                    href={route('organizations.show', 1)}
                                                    className="text-blue-500 hover:text-blue-700">
                                                    School B
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-gray-500">Elementary school serving grades
                                                K-5</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Member
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="fas fa-child text-purple-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">
                                                <Link
                                                    href={route('organizations.show', 1)}
                                                    className="text-blue-500 hover:text-blue-700">
                                                    Youth Program C
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-gray-500">After-school programs for teens</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Member
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div
                                            className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="fas fa-baseball-ball text-yellow-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">
                                                <Link
                                                    href={route('organizations.show', 1)}
                                                    className="text-blue-500 hover:text-blue-700">
                                                    Sports League D
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-gray-500">Community sports organization</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
