import React from 'react';
import {Head, Link} from "@inertiajs/react";
import {faCheck, faGift, faHandshake, faStar, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Hero from "@/Components/Home/Hero.jsx";
import Summary from "@/Components/Home/Summary.jsx";
import HowWorks from "@/Components/Home/HowWorks.jsx";
import WishList from "@/Components/Home/WishList.jsx";
import DonationList from "@/Components/Home/DonationList.jsx";
import OrganizationList from "@/Components/Home/OrganizationList.jsx";
import RegistrationCTA from "@/Components/Home/RegistrationCTA.jsx";
import Faq from "@/Components/Home/Faq.jsx";
import Footer from "@/Components/Common/Footer.jsx";
import Navbar from "@/Components/Common/Navbar.jsx";


export default function Welcome({ auth, donations }) {
    return (
        <>
            <Head title="Welcome"/>
            <Navbar/>
            <Hero/>
            <Summary/>
            <HowWorks/>
            <WishList/>
            {donations.length > 0 &&  <DonationList donations={donations} />}
            <OrganizationList/>
            <RegistrationCTA/>
            <Faq/>
            <Footer/>
        </>
    );
}
