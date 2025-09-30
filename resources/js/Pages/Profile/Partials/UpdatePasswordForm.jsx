import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInputField';
import { Transition } from '@headlessui/react';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import React, { useRef } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {format} from "date-fns";
import {checkDonor} from "@/utils.jsx";

export default function UpdatePasswordForm({ className = '' }) {
    const user = usePage().props.auth.user;
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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Password Change</h1>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <div
                            className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-6 overflow-hidden border-4 border-white shadow-md">
                            {user.image ? (
                                <img
                                    src={`/storage/${user.image}`}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src="https://themewagon.github.io/DattaAble/assets/images/user/avatar-2.jpg"
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500">Member
                                Since {format(new Date(user.created_at), 'MMMM do, yyyy')}</p>
                            <p className="text-sm text-indigo-500 uppercase font-bold">{user.role}</p>
                        </div>
                    </div>

                    <div className="mt-6 mb-10 mx-10 grid grid-cols-1 gap-6">
                        <div className="w-2xs rounded p-10 shadow-md">
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
            </div>
        </AuthenticatedLayout>

    );
}
