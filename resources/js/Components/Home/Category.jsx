import React from 'react';
import {Link} from "@inertiajs/react";

const Category = ({categories}) => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-10 section-title">Browse Categories</h2>
                {categories.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <Link href={route('wish.index', {'category_id': category.id})}>
                                { category.wishes_count > 0 && (
                                    <div className="category-card text-center p-5">
                                        <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                                        <div
                                            className="bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3">
                                            <span className="font-bold">{category.wishes_count}</span>
                                        </div>

                                        <p className="text-gray-500 text-xs mt-1"> wishes</p>
                                    </div>
                                    )
                                }
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Category;
