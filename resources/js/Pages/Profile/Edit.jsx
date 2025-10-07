import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status, user,guardianRelations,genders }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="px-10 py-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                user={user}
                                guardianRelations={guardianRelations}
                                genders={genders}
                                className="max-w-xl"
                            />
                        </div>

                        {/*<div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">*/}
                        {/*    <UpdatePasswordForm className="max-w-xl" />*/}
                        {/*</div>*/}

                        {/*<div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">*/}
                        {/*    <DeleteUserForm className="max-w-xl" />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
