import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from './Form';

export default function Edit({ module, categories, statuses, wish, ageRanges, wishers }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${wish.title}`} />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    title={`Edit ${wish.title}`}
                    breadcrumbs={[
                        { label: 'Wishes', href: route('wishes.index') },
                        { label: wish.title, href: route('wishes.show', wish.id) },
                        { label: 'Edit' },
                    ]}
                />
                <Form module={module} categories={categories} statuses={statuses} wish={wish} ageRanges={ageRanges} wishers={wishers} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
