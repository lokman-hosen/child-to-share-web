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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";

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
            <Head title="Gift Create"/>

            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-6">Password Change</h1>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center border-b border-slate-200 pb-6">
                        <div
                            className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-100 to-primary-100 flex items-center justify-center mr-6 overflow-hidden border-4 border-white shadow-md">
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
                            <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
                            <p className="text-sm text-slate-500">Member
                                Since {user.created_at}
                            </p>
                            <p className="text-sm text-primary-500 uppercase font-bold">{user.role}</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mb-10 lg:mx-10 grid grid-cols-1 gap-6">
                        <div className="w-2xs rounded p-10 shadow-md">
                            <header>
                                <h2 className="text-lg font-medium text-slate-900">
                                    Update Password
                                </h2>

                                <p className="mt-1 text-sm text-slate-600">
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
                                    {/* Back Button */}
                                    <button
                                        type="button"
                                        onClick={() => window.history.back()}
                                        className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                            <span>Back</span>
                                        </div>
                                    </button>
                                    <PrimaryButton className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-md shadow-sm disabled:opacity-50"
                                        disabled={processing}>
                                        <FontAwesomeIcon icon={faSave}/> Update
                                    </PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-slate-600">
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
