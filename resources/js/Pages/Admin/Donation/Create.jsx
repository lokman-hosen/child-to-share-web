import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from '@inertiajs/react';
import React from "react";
import Form from './Form';

export default function Create({module,categories,statuses}) {
    return (
        <AuthenticatedLayout>
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Donation Item</h1>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="w-2xl space-y-8">
                            <div className="mx-20 my-10">
                                <Form
                                    module={module}
                                    categories={categories}
                                    statuses={statuses}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
