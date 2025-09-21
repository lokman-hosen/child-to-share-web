import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faCancel,
    faDashboard,
    faEdit, faGift, faHandsHelping,
    faList,
    faSave,
    faStar,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import Donor from "@/Pages/Dashboard/Donor.jsx";

export default function Dashboard() {

    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard"/>
            { user.user_type === 'donor' && <Donor/> }
        </AuthenticatedLayout>
    );
}
