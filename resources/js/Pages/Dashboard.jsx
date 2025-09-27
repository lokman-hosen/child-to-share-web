import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import WisherDashboard from "@/Pages/Dashboard/WIsher.jsx";
import DonorDashboard from "@/Pages/Dashboard/Donor.jsx";
import AdminDashboard from "@/Pages/Dashboard/Admin.jsx";

export default function Dashboard() {

    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            { user.role === 'donor' && <DonorDashboard/> }
            { user.role === 'wisher' && <WisherDashboard/> }
            { (user.role === 'super_admin' || user.role === 'admin') && <AdminDashboard/> }
        </AuthenticatedLayout>
    );
}
