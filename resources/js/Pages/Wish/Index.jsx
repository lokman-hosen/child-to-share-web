import React from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Wish/Hero.jsx";
import {Head} from "@inertiajs/react";
import List from "@/Components/Wish/List.jsx";

const Index = () => {
    return (
        <GuestLayout>
            <Head title="Wishes"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <List/>
            </main>

        </GuestLayout>

);
};

export default Index;
