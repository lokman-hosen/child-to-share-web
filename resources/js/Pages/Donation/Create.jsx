import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faCancel, faList, faSave} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="w-full lg:w-4/6 mb-6 lg:mb-0">
                <div className="min-h-screen p-6">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Donation Create
                            </h2>
                            <div className="flex space-x-2">
                                <Link
                                    href={route('donations.index')}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faBackward}/> Back
                                </Link>
                                <Link
                                    href={route('donations.index')}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    <FontAwesomeIcon icon={faList}/> List
                                </Link>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                            <form className="space-y-6">
                                {/* Wish title */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        What do you wish for?
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                                        placeholder="Describe what you need"
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Category
                                    </label>
                                    <select
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="toy">Toy</option>
                                        <option value="book">Book</option>
                                        <option value="gadget">Gadget</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Upload photo */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Upload Photo (Optional)
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
                                        <p className="text-gray-500">
                                            Drag & drop or{" "}
                                            <span className="text-secondary font-semibold">
                                        browse
                                    </span>{" "}
                                            files
                                        </p>
                                        <input type="file" className="hidden" id="wishPhoto"/>
                                        <label
                                            htmlFor="wishPhoto"
                                            className="inline-block mt-3 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                                        >
                                            Select Image
                                        </label>
                                    </div>
                                </div>

                                {/* Reason (optional) */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Why is this wish important to you? (Optional)
                                    </label>
                                    <textarea
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                                        placeholder="Share why this item would be meaningful to you..."
                                    ></textarea>
                                </div>
                            </form>
                        </div>

                        <div className="flex items-center justify-center space-x-3 border-t px-6 py-4">
                            {/*<button*/}
                            {/*    type="submit"*/}
                            {/*    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"*/}
                            {/*>*/}
                            {/*    Make Wish*/}
                            {/*</button>*/}
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                                <FontAwesomeIcon icon={faSave}/> Save
                            </button>
                            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                                <FontAwesomeIcon icon={faCancel}/> Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
