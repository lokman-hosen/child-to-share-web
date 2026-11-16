import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Create({ module, categories, statuses, itemConditions, donors }) {
    return (
        <AuthenticatedLayout>
            <Head title={`${module} Create`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title="Add a gift"
                    description="Share an item and make someone's wish come true."
                    breadcrumbs={[{ label: 'Gifts', href: route('donations.index') }, { label: 'New' }]}
                />
                <Form module={module} categories={categories} statuses={statuses} itemConditions={itemConditions} donors={donors} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
