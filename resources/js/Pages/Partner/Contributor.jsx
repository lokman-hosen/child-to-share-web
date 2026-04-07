import React, { useState } from 'react';
import {Head, Link} from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faHeart, faUsers, faGift, faHandHoldingHeart, faUserPlus, faCity } from '@fortawesome/free-solid-svg-icons';
import Pagination from "@/Components/Pagination.jsx";

const ContributorsPage = ({users, type, title, subTitle, module}) => {
    const [activeTab, setActiveTab] = useState('individuals');
    const userListData = users?.data || [];
    const userLinks = users?.links || [];

    // Separate users into individuals and organizations
    const individuals = userListData.filter(user => (user.name !== user?.organization?.name));
    const organizations = userListData.filter((user, index, self) =>
        user.organization && index === self.findIndex((u) => u.organization?.id === user.organization?.id)
    );

    const tabs = [
        { id: 'individuals', label: 'Individual', icon: faUserPlus, count: individuals.length, color: 'primary' },
        { id: 'organizations', label: 'Organizations', icon: faCity, count: organizations.length, color: 'secondary' }
    ];

    return (
        <GuestLayout>
            <Head title={`${module}`}/>

            {/* Hero Section */}
            <section className="relative py-8 md:py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-3xl mb-8 shadow-lg">
                            <FontAwesomeIcon icon={faUsers} className="text-primary text-3xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{title}</span>
                        </h1>

                        <div className="flex items-center justify-center mb-6">
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
                            <div className="h-1 w-12 bg-gradient-to-r from-primary-dark to-secondary rounded-full mx-3"></div>
                            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary-dark rounded-full"></div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{subTitle}</p>
                    </div>
                </div>
            </section>

            {/* Contributors Grid Section */}
            <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Tab Navigation */}
                    <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                                    activeTab === tab.id
                                        ? tab.color === 'primary'
                                            ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                                            : 'bg-gradient-to-r from-secondary to-secondary-dark text-accent shadow-lg'
                                        : 'bg-white text-gray-600 hover:shadow-md border border-gray-200'
                                }`}
                            >
                                <FontAwesomeIcon icon={tab.icon} className="text-xl" />
                                <span>{tab.label}</span>
                                <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    activeTab === tab.id
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {tab.count}
                                </span>

                                {/* Active Indicator */}
                                {activeTab === tab.id && (
                                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full ${
                                        tab.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                                    }`}></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Individual Donors Tab Content */}
                    {activeTab === 'individuals' && (
                        <div className="animate-fadeIn">
                            {individuals.length > 0 ? (
                                <>
                                    <div className="text-center mb-10">
                                        <p className="text-gray-600">
                                            Showing <span className="font-semibold text-primary">{individuals.length}</span> compassionate individual donors
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {individuals.map((user) => (
                                            <div
                                                key={user.id}
                                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-primary/20"
                                            >
                                                {/* Avatar Section */}
                                                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

                                                    {/* Individual Donor Avatar */}
                                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                                        {user.image ? (
                                                            <img
                                                                src={`/storage/${user.image}`}
                                                                alt={user.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faUser} className="text-primary text-5xl" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Heart Icon Overlay */}
                                                    <div className="absolute bottom-4 left-4">
                                                        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-full p-2 shadow-lg">
                                                            <FontAwesomeIcon icon={faHeart} className="text-xs" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Contributor Info */}
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-200 text-center">
                                                        {user.name}
                                                    </h3>

                                                    {/* Decorative Element */}
                                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                                        <div className="h-1 w-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mx-auto"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                                        <FontAwesomeIcon icon={faUserPlus} className="text-gray-400 text-3xl" />
                                    </div>
                                    <p className="text-gray-600 text-lg">No individual donors found</p>
                                    <p className="text-gray-500 text-sm mt-2">Be the first individual donor to join our community!</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Organizations Tab Content */}
                    {activeTab === 'organizations' && (
                        <div className="animate-fadeIn">
                            {organizations.length > 0 ? (
                                <>
                                    <div className="text-center mb-10">
                                        <p className="text-gray-600">
                                            Showing <span className="font-semibold text-secondary">{organizations.length}</span> dedicated organizations
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {organizations.map((user) => (
                                            <div
                                                key={user.id}
                                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-secondary/20"
                                            >
                                                {/* Logo Section */}
                                                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

                                                    {/* Organization Logo */}
                                                    <div className="h-32 w-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                        {user.image ? (
                                                            <img
                                                                src={`/storage/${user.image}`}
                                                                alt={user.name}
                                                                className="max-h-32 max-w-full object-contain"
                                                            />
                                                        ) : (
                                                            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                                                                <FontAwesomeIcon icon={faBuilding} className="text-secondary text-5xl" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Building Icon Overlay */}
                                                    <div className="absolute bottom-4 left-4">
                                                        <div className="bg-gradient-to-r from-secondary to-secondary-dark text-accent rounded-full p-2 shadow-lg">
                                                            <FontAwesomeIcon icon={faBuilding} className="text-xs" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Organization Info */}
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-secondary transition-colors duration-200 text-center">
                                                        {user.organization?.name || user.name}
                                                    </h3>

                                                    {/* Decorative Element */}
                                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                                        <div className="h-1 w-16 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full mx-auto"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                                        <FontAwesomeIcon icon={faCity} className="text-gray-400 text-3xl" />
                                    </div>
                                    <p className="text-gray-600 text-lg">No organizations found</p>
                                    <p className="text-gray-500 text-sm mt-2">Be the first organization to with us!</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Pagination */}
                    {(userLinks.length > 1 && userListData.length > 1) && (
                        <div className="mt-12">
                            <Pagination links={userLinks} />
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-10 border border-gray-200 max-w-3xl mx-auto">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-primary text-4xl mb-4"/>
                            <h3 className="text-2xl font-bold text-accent mb-3">Want to Join Our {type == 'donor' ? 'Contributors' : 'Wish Creator'} ?</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Every contribution, big or small, makes a difference in a child's life. Join our community of givers today.
                            </p>
                            <Link
                                href={route('register')}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                Become a Contributor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add fade animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }
            `}</style>
        </GuestLayout>
    );
};

export default ContributorsPage;
