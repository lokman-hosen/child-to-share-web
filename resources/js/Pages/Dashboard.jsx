import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import WisherDashboard from "@/Pages/Dashboard/WIsher.jsx";
import DonorDashboard from "@/Pages/Dashboard/Donor.jsx";

export default function Dashboard() {

    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            { user.user_type === 'donor' && <DonorDashboard/> }
            { user.user_type === 'wisher' && <WisherDashboard/> }
        </AuthenticatedLayout>
    );
}
