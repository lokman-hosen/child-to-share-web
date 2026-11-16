import React from 'react';
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/Components/UI/SectionHeader';
import Button from '@/Components/UI/Button';
import categoryIcon from '@/Components/UI/categoryIcon';

const Category = ({ categories }) => {
    const withWishes = (categories || []).filter((c) => c.wishes_count > 0);

    return (
        <section className="section" aria-labelledby="categories-heading">
            <div className="container-page">
                <SectionHeader
                    eyebrow="Categories"
                    title={<span id="categories-heading">Browse Categories</span>}
                    action={<Button href={route('wish.index')} variant="secondary" size="sm" iconRight={faArrowRight}>View All Categories</Button>}
                />
                {withWishes.length > 0 && (
                    <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
                        {withWishes.map((category) => (
                            <li key={category.id}>
                                <Link
                                    href={route('wish.index', { category_id: category.id })}
                                    className="group flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs transition hover:border-primary-200 hover:shadow-card-hover"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                        <FontAwesomeIcon icon={categoryIcon(category.name)} className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-sm font-semibold leading-tight text-slate-900 [overflow-wrap:anywhere]">{category.name}</span>
                                        <span className="block text-xs text-slate-500">{category.wishes_count} wishes</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default Category;
