import React from 'react';

const List = () => {
    return (
        <>
            <div className="filter-section">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Filter Wishes</h2>
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
                            <option>All Age Groups</option>
                            <option>0-5 years</option>
                            <option>6-10 years</option>
                            <option>11-15 years</option>
                            <option>16+ years</option>
                        </select>
                        <select
                            className="border-gray-300 rounded-md shadow-sm py-2 px-3 border focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                            <option>Sort By: Newest</option>
                            <option>Sort By: Closest</option>
                            <option>Sort By: Urgent</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-purple-100 flex items-center justify-center">
                        <i className="fas fa-book-open text-purple-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Story Books</h3>
                        <p className="text-gray-600 text-sm mt-1">Looking for children's story books for my
                            7-year-old</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-purple-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-purple-600 font-medium">E</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Emily, 7</p>
                                <p className="text-xs text-gray-500">3.2 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Books
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-tshirt text-blue-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Winter Coat</h3>
                        <p className="text-gray-600 text-sm mt-1">Need a warm coat for winter, size 10-12</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">M</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Michael, 9</p>
                                <p className="text-xs text-gray-500">5.7 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Clothing
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-yellow-100 flex items-center justify-center">
                        <i className="fas fa-laptop text-yellow-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Laptop for School</h3>
                        <p className="text-gray-600 text-sm mt-1">Need a laptop for online learning and homework</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-yellow-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-yellow-600 font-medium">J</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Jessica, 15</p>
                                <p className="text-xs text-gray-500">8.1 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Electronics
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-green-100 flex items-center justify-center">
                        <i className="fas fa-dumbbell text-green-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Soccer Equipment</h3>
                        <p className="text-gray-600 text-sm mt-1">Need soccer ball and other sports equipment for
                            team</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-green-600 font-medium">S</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Sam, 14</p>
                                <p className="text-xs text-gray-500">6.3 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Sports
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-red-100 flex items-center justify-center">
                        <i className="fas fa-paint-brush text-red-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Art Supplies</h3>
                        <p className="text-gray-600 text-sm mt-1">Looking for paints, brushes and canvases for art
                            class</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-red-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-red-600 font-medium">A</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Anna, 12</p>
                                <p className="text-xs text-gray-500">4.8 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Art
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
                        </span>
                        </div>
                    </div>
                </div>

                <div className="card wish-card bg-white rounded-lg shadow">
                    <div className="h-48 bg-pink-100 flex items-center justify-center">
                        <i className="fas fa-guitar text-pink-500 text-5xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900">Guitar</h3>
                        <p className="text-gray-600 text-sm mt-1">Want to learn guitar, looking for a beginner
                            instrument</p>
                        <div className="flex items-center mt-4">
                            <div className="bg-pink-100 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-pink-600 font-medium">L</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Liam, 13</p>
                                <p className="text-xs text-gray-500">5.5 km away</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Music
                        </span>
                            <span
                                className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            Waiting
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
