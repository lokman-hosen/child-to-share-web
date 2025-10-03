import React from 'react';

const List = (donations, module) => {
    return (
        <>
            <div className="filter-section">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Filter Donations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <select
                            className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                            <option>All Categories</option>
                            <option>Books</option>
                            <option>Clothing</option>
                            <option>Toys</option>
                            <option>Electronics</option>
                            <option>Sports Equipment</option>
                        </select>
                        <select
                            className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                            <option>All Locations</option>
                            <option>Within 5 km</option>
                            <option>Within 10 km</option>
                            <option>Within 25 km</option>
                            <option>Within 50 km</option>
                        </select>
                        <select
                            className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                            <option>Sort By: Newest</option>
                            <option>Sort By: Closest</option>
                            <option>Sort By: Most Popular</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-green-100 flex items-center justify-center">
                        <i className="fas fa-bicycle text-green-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Bicycle</h3>
                        <p className="text-gray-600 text-sm mt-1">Good condition bicycle, perfect for a teenager</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-green-600 font-medium">D</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">David, 16</p>
                                <p className="text-xs text-gray-500">2.5 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Sports
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Like New
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-red-100 flex items-center justify-center">
                        <i className="fas fa-dumbbell text-red-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Sports Equipment</h3>
                        <p className="text-gray-600 text-sm mt-1">Soccer ball and other sports equipment for team</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-red-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-red-600 font-medium">S</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Sam, 14</p>
                                <p className="text-xs text-gray-500">6.3 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Sports
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Good Condition
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-indigo-100 flex items-center justify-center">
                        <i className="fas fa-paint-brush text-indigo-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                        <p className="text-gray-600 text-sm mt-1">Paints, brushes and canvases for art class</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-indigo-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-indigo-600 font-medium">A</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Anna, 12</p>
                                <p className="text-xs text-gray-500">4.8 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Art
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            New
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-book-open text-blue-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Children's Books</h3>
                        <p className="text-gray-600 text-sm mt-1">Set of 20 children's books for ages 5-10</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">J</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Jessica, 15</p>
                                <p className="text-xs text-gray-500">3.2 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Books
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Like New
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-yellow-100 flex items-center justify-center">
                        <i className="fas fa-laptop text-yellow-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Laptop</h3>
                        <p className="text-gray-600 text-sm mt-1">Dell Inspiron, 8GB RAM, good condition</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-yellow-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-yellow-600 font-medium">M</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Mike, 17</p>
                                <p className="text-xs text-gray-500">5.1 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Electronics
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Good Condition
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card donation-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-pink-100 flex items-center justify-center">
                        <i className="fas fa-tshirt text-pink-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Winter Clothes</h3>
                        <p className="text-gray-600 text-sm mt-1">Winter coats and sweaters in various sizes</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-pink-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-pink-600 font-medium">T</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Taylor, 15</p>
                                <p className="text-xs text-gray-500">4.2 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Clothing
                        </span>
                            <span
                                className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Gently Used
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <button className="prev">&laquo; Previous</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button className="next">Next &raquo;</button>
            </div>
        </>
    );
};

export default List;
