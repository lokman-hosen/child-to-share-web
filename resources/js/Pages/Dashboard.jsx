import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import WisherDashboard from "@/Pages/Dashboard/WIsher.jsx";
import DonorDashboard from "@/Pages/Dashboard/Donor.jsx";
import AdminDashboard from "@/Pages/Dashboard/Admin.jsx";
import DonorWisher from "@/Pages/Dashboard/DonorWisher.jsx";
import OrganizationDashboard from "@/Pages/Dashboard/Organization.jsx";

export default function Dashboard({user,module,availableDonationCount,donatedDonationCount, activeWishCount, fulfilledWishCount, wishRequests,totalMembers}) {

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            { user.role === 'donor' &&
                <DonorDashboard
                    availableDonationCount = {availableDonationCount}
                    donatedDonationCount = {donatedDonationCount}
                />
            }
            { user.role === 'wisher' &&
                <WisherDashboard
                    activeWishCount = {activeWishCount}
                    fulfilledWishCount = {fulfilledWishCount}
                /> }
            {user.role === 'donor-wisher' && (
                user.user_type === 'organization' ? (
                    <OrganizationDashboard
                        availableDonationCount={availableDonationCount}
                        donatedDonationCount={donatedDonationCount}
                        activeWishCount={activeWishCount}
                        fulfilledWishCount={fulfilledWishCount}
                        user={user}
                        totalMembers={totalMembers}
                    />
                ) : (
                    <DonorWisher
                        availableDonationCount={availableDonationCount}
                        donatedDonationCount={donatedDonationCount}
                        activeWishCount={activeWishCount}
                        fulfilledWishCount={fulfilledWishCount}
                    />
                )
            )}

            { (user.role === 'super_admin' || user.role === 'admin') && <AdminDashboard/> }
        </AuthenticatedLayout>
    );
}
