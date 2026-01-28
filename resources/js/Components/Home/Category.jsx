import React from 'react';
import {Link} from "@inertiajs/react";

const Category = ({categories}) => {
    const categoryColors = [
        'bg-gradient-to-br from-primary/10 to-primary/20 text-primary',
        'bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary',
        'bg-gradient-to-br from-primary-dark/10 to-primary-dark/20 text-primary-dark',
        'bg-gradient-to-br from-secondary-dark/10 to-secondary-dark/20 text-secondary-dark',
        'bg-gradient-to-br from-accent/10 to-accent/20 text-accent',
        'bg-gradient-to-br from-neutral/10 to-neutral/20 text-neutral',
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-10 section-title text-center">
                    Browse Categories
                </h2>
                {categories.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => {
                            if (category.wishes_count <= 0) return null;

                            const colorClass = categoryColors[index % categoryColors.length];

                            return (
                                <Link
                                    href={route('wish.index', {'category_id': category.id})}
                                    key={category.id}
                                >
                                    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1 cursor-pointer">
                                        <div className="p-5 text-center">
                                            <div className={`${colorClass} rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                                                <span className="font-bold text-xl md:text-2xl">{category.wishes_count}</span>
                                            </div>
                                            <h3 className="font-semibold text-accent text-sm md:text-base mb-1 group-hover:text-primary transition-colors duration-200">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs">wishes</p>

                                            {/* Decorative indicator */}
                                            <div className="mt-3">
                                                <div className="h-1 w-8 bg-gradient-to-r from-primary/50 to-secondary/50 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* View All Categories Link */}
                <div className="mt-12 text-center">
                    <Link
                        href={route('wish.index')}
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
                    >
                        <span>View All Categories</span>
                        <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Category;
