import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from '@/Pages/Admin/User/Form.jsx';

const Create = ({ guardianRelations, genders, organizations, module }) => (
    <AuthenticatedLayout>
        <Head title={`${module} Create`} />
        <AppPage width="form" className="space-y-6">
            <PageHeader
                title="Add user"
                description="Create an account for a wisher you look after."
                breadcrumbs={[{ label: 'Users', href: route('users.index') }, { label: 'New' }]}
            />
            <Form genders={genders} guardianRelations={guardianRelations} organizations={organizations} />
        </AppPage>
    </AuthenticatedLayout>
);

export default Create;
