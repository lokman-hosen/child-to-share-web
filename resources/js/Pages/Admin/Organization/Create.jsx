import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Create({ module }) {
    return (
        <AuthenticatedLayout>
            <Head title={`${module} Create`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title="New organization"
                    description="Add a partner organization that manages wishers or gifts."
                    breadcrumbs={[{ label: 'Organizations', href: route('organizations.index') }, { label: 'New' }]}
                />
                <Form />
            </AppPage>
        </AuthenticatedLayout>
    );
}
