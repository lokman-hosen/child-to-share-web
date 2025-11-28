import React from 'react';
import {Link} from "@inertiajs/react";

const Category = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-10 section-title">Browse Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-book text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Books</h3>
                        <p className="text-gray-500 text-xs mt-1">124 wishes</p>
                    </div>
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-tshirt text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Clothing</h3>
                        <p className="text-gray-500 text-xs mt-1">89 wishes</p>
                    </div>
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-laptop text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Electronics</h3>
                        <p className="text-gray-500 text-xs mt-1">67 wishes</p>
                    </div>
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-gamepad text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Toys & Games</h3>
                        <p className="text-gray-500 text-xs mt-1">156 wishes</p>
                    </div>
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-bicycle text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Sports</h3>
                        <p className="text-gray-500 text-xs mt-1">73 wishes</p>
                    </div>
                    <div className="category-card text-center p-5">
                        <div
                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                            <i className="fas fa-paint-brush text-gray-700 text-xl"></i>
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">Art Supplies</h3>
                        <p className="text-gray-500 text-xs mt-1">42 wishes</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
