import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInputField';
import { Transition } from '@headlessui/react';
import {Head, useForm} from '@inertiajs/react';
import React, { useRef } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

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
            <Head title="Donation Create"/>
            <div className="px-10 py-8">
                <div className="flex justify-center bg-white shadow rounded-lg p-6 mx-auto">
                    <div className="w-2xs border-2 border-gray-100 p-10 my-20 shadow-md">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">
                                Update Password
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Ensure your account is using a long, random password to stay
                                secure.
                            </p>
                        </header>
                        <form onSubmit={updatePassword} className="mt-6 space-y-6">
                            <div>
                                {/*<InputLabel*/}
                                {/*    htmlFor="current_password"*/}
                                {/*    value="Current Password"*/}
                                {/*/>*/}

                                <TextInput
                                    id="current_password"
                                    label="Current Password"
                                    ref={currentPasswordInput}
                                    value={data.current_password}
                                    onChange={(e) =>
                                        setData('current_password', e.target.value)
                                    }
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    placeholder="Enter Current Password"
                                    required
                                />

                                <InputError
                                    message={errors.current_password}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                {/*<InputLabel htmlFor="password" value="New Password"/>*/}

                                <TextInput
                                    id="password"
                                    label="New Password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    placeholder="Enter New Password"
                                    required
                                />

                                <InputError message={errors.password} className="mt-2"/>
                            </div>

                            <div>
                                {/*<InputLabel*/}
                                {/*    htmlFor="password_confirmation"*/}
                                {/*    value="Confirm Password"*/}
                                {/*/>*/}

                                <TextInput
                                    id="password_confirmation"
                                    label="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    placeholder="Confirm New Password"
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
