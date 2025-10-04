import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";

const Show = ({donation}) => {
    return (
        <GuestLayout>
            <Head title="Donations"/>
            <div>
                {donation.title}
            </div>
        </GuestLayout>
    );
};

export default Show;
