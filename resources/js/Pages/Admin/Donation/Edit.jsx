import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Edit({ module, donation, categories, statuses, itemConditions, donors }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${donation.title}`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title={`Edit ${donation.title}`}
                    breadcrumbs={[
                        { label: 'Gifts', href: route('donations.index') },
                        { label: donation.title, href: route('donations.show', donation.id) },
                        { label: 'Edit' },
                    ]}
                />
                <Form module={module} categories={categories} statuses={statuses} donation={donation} itemConditions={itemConditions} donors={donors} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
