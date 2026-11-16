import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { AppPage, PageHeader } from '@/Components/UI';
import Form from '@/Pages/Admin/Wish/Form.jsx';

const Create = ({ categories, ageRanges, module, wishers }) => (
    <AuthenticatedLayout>
        <Head title={`${module} Create`} />
        <AppPage width="form" className="space-y-6">
            <PageHeader
                title="Make a wish"
                description="Describe what a child needs so a contributor can help."
                breadcrumbs={[{ label: 'Wishes', href: route('wishes.index') }, { label: 'New' }]}
            />
            <Form module={module} categories={categories} ageRanges={ageRanges} wishers={wishers} />
        </AppPage>
    </AuthenticatedLayout>
);

export default Create;
