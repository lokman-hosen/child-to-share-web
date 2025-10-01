import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Form from './Form';

export default function Edit({module,categories,statuses,donation}) {
    return (
        <AuthenticatedLayout>
            <Head title={`Edit ${module}: ${donation.title}`} />
            <div className="px-10 py-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Donation Item: {donation.title}</h1>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="w-2xl space-y-8">
                            <div className="md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                                <Form
                                    module={module}
                                    categories={categories}
                                    statuses={statuses}
                                    donation={donation}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
