import TextInput from '@/Components/TextInputField';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Button, FormActions, FormSection, PageHeader } from '@/Components/UI';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Change password" />
            <AppPage width="narrow" className="space-y-6">
                <PageHeader
                    title="Change password"
                    description="Use a long password you don't use anywhere else."
                    breadcrumbs={[{ label: 'My profile', href: route('my.profile') }, { label: 'Password' }]}
                />
                <form onSubmit={updatePassword} className="space-y-6">
                    <FormSection columns="">
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            label="Current password"
                            type="password"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            error={errors.current_password}
                            autoComplete="current-password"
                            required
                        />
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            label="New password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            error={errors.password}
                            autoComplete="new-password"
                            helpText="At least 8 characters."
                            required
                        />
                        <TextInput
                            id="password_confirmation"
                            label="Confirm new password"
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            error={errors.password_confirmation}
                            autoComplete="new-password"
                            required
                        />
                    </FormSection>
                    <FormActions>
                        <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                            <p className="mr-auto flex items-center gap-1.5 text-sm font-medium text-success-700" role="status">
                                <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" aria-hidden="true" /> Password updated
                            </p>
                        </Transition>
                        <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                        <Button type="submit" icon={faCheck} loading={processing}>Update password</Button>
                    </FormActions>
                </form>
            </AppPage>
        </AuthenticatedLayout>
    );
}
