import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Create({ module }) {
    return (
        <AuthenticatedLayout>
            <Head title={`${module} Create`} />
            <AppPage width="narrow" className="space-y-6">
                <PageHeader
                    title="New category"
                    description="Categories group wishes and gifts so people can find them."
                    breadcrumbs={[{ label: 'Categories', href: route('categories.index') }, { label: 'New' }]}
                />
                <Form module={module} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
