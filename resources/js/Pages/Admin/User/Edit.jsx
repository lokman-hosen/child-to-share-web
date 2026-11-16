import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Edit({ guardianRelations, genders, module, user, organizations }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${user.name}`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title={`Edit ${user.name}`}
                    breadcrumbs={[{ label: 'Users', href: route('users.index') }, { label: user.name }]}
                />
                <Form module={module} genders={genders} guardianRelations={guardianRelations} user={user} organizations={organizations} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
