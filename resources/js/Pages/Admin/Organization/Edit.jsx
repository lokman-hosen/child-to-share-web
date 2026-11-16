import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Edit({ module, organization, statuses }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${organization.name}`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title={`Edit ${organization.name}`}
                    breadcrumbs={[
                        { label: 'Organizations', href: route('organizations.index') },
                        { label: organization.name, href: route('organizations.show', organization.id) },
                        { label: 'Edit' },
                    ]}
                />
                <Form organization={organization} statuses={statuses} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
