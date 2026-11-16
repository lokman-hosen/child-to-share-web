import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Button, PageHeader } from '@/Components/UI';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

// Password change and account deletion (./Partials/UpdatePasswordForm, ./Partials/DeleteUserForm)
// are intentionally not shown, matching the previous page.
export default function Edit({ mustVerifyEmail, status, user, guardianRelations, genders }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title="Edit profile"
                    description="Keep your details up to date so contributors and wishers can reach you."
                    actions={<Button variant="secondary" icon={faEye} href={route('my.profile')}>View profile</Button>}
                />
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    user={user}
                    guardianRelations={guardianRelations}
                    genders={genders}
                />
            </AppPage>
        </AuthenticatedLayout>
    );
}
