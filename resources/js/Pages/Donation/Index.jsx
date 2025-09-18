import React from 'react';
import {Head} from "@inertiajs/react";
import Hero from "@/Components/Donation/Hero.jsx";
import List from "@/Components/Donation/List.jsx";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import CTA from "@/Components/Donation/CTA.jsx";

const Index = () => {
    return (
        <GuestLayout>
            <Head title="Donations"/>
            <Hero/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <List/>
            </main>
            <CTA/>
        </GuestLayout>
    );
};

export default Index;
