import React from 'react';
import {Head, usePage} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Hero from "@/Components/Home/Hero.jsx";
import Summary from "@/Components/Home/Summary.jsx";
import HowWorks from "@/Components/Home/HowWorks.jsx";
import DonationList from "@/Components/Home/DonationList.jsx";
import RegistrationCTA from "@/Components/Home/RegistrationCTA.jsx";
import Faq from "@/Components/Home/Faq.jsx";
import WishList from "@/Components/Home/WishList.jsx";
import Category from "@/Components/Home/Category.jsx";
import Partner from "@/Components/Home/Partner.jsx";
import ImplementationBody from "@/Components/Home/ImplementationBody.jsx";
import SDG from "@/Components/Home/SDG.jsx";

export default function Welcome({ auth, donations, wishes, wisherImages,
                                    activeDonorCount, totalWishCount,
                                    fulfilWishCount, community, categories, activeWisherCount, organizations, CntOrganizations }) {
    const user = usePage().props.auth.user;

    return (
        <GuestLayout>
            <Head title="Home"/>
            <Hero
                user={user}
                wisherImages={wisherImages}
                fulfilWishCount={fulfilWishCount}
            />
            <Summary
                activeDonorCount={activeDonorCount}
                activeWisherCount={activeWisherCount}
                totalWishCount={totalWishCount}
                fulfilWishCount={fulfilWishCount}
                community={community}
            />
            <HowWorks/>
            <WishList
                wishes={wishes}
                user={user}
            />
            {donations.length > 0 && (
                <DonationList
                    donations={donations}
                    user={user}
                />
            )}
            <Category categories={categories}/>
            <Partner
                organizations={organizations}
                CntOrganizations = {CntOrganizations}
            />
            <ImplementationBody/>
            <SDG/>
            <Faq/>
            <RegistrationCTA user={user} />
        </GuestLayout>
    );
}
