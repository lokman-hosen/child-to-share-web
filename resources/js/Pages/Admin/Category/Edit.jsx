import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Edit({ module, category, statuses }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${category.name}`} />
            <AppPage width="narrow" className="space-y-6">
                <PageHeader
                    title={`Edit ${category.name}`}
                    breadcrumbs={[{ label: 'Categories', href: route('categories.index') }, { label: category.name }]}
                />
                <Form category={category} statuses={statuses} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
