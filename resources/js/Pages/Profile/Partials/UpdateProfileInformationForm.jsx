import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInputField';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import SelectInput from "@/Components/SelectInput.jsx";
import React from "react";
import {getCommonOptions} from "@/utils.jsx";
import DateInput from "@/Components/DateInput.jsx";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
    user,
    guardianRelations,
    genders
}) {
    //const user = usePage().props.auth.user;
    console.log(user)

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            guardian_name: user.role === 'donor' ? user.donor?.guardian_name : user.wisher?.guardian_name,
            guardian_phone: user.role === 'donor' ? user.donor?.guardian_phone : user.wisher?.guardian_phone,
            relationship: user.role === 'donor' ? user.donor?.relationship : user.wisher?.relationship,
            gender: user.role === 'donor' ? user.donor?.gender : user.wisher?.gender,
            dob: user.role === 'donor' ? user.donor?.dob : user.wisher?.dob,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    const relationOptions = getCommonOptions(guardianRelations);
    const genderOptions = getCommonOptions(genders);

    return (
        <section>
            <header>
                <h2 className="text-2xl font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-md text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <TextInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                        isFocused
                        autoComplete="name"
                        placeholder="Your name"
                        required
                    />

                    <TextInput
                        id="email"
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="username"
                        error={errors.email}
                        placeholder="Your email"
                        required
                    />

                    <TextInput
                        id="phone"
                        label="Phone"
                        type="number"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        error={errors.phone}
                        placeholder="Your phone"
                        required
                    />
                    <SelectInput
                        id="gender"
                        label="Select Gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        error={errors.gender}
                        options={genderOptions}
                        required
                    />

                </div>
                {user.role === 'donor' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <DateInput
                            id="dob"
                            label="Date of Birth"
                            value={data.dob}
                            onChange={(value) => setData('dob', value)}
                            error={errors.dob}
                            placeholder="Select DOB"
                            required
                        />
                        <TextInput
                            id="guardian_name"
                            label="Guardian name"
                            type="text"
                            value={data.guardian_name}
                            onChange={(e) => setData('guardian_name', e.target.value)}
                            error={errors.guardian_name}
                            placeholder="Your guardian name"
                            required
                        />
                        <TextInput
                            id="guardian_phone"
                            label="Guardian Phone"
                            type="number"
                            value={data.guardian_phone}
                            onChange={(e) => setData('guardian_phone', e.target.value)}
                            error={errors.guardian_phone}
                            placeholder="Your guardian phone"
                            required
                        />

                        <SelectInput
                            id="relationship"
                            label="Relation with guardian"
                            value={data.relationship}
                            onChange={(e) => setData('relationship', e.target.value)}
                            error={errors.relationship}
                            options={relationOptions}
                            required
                        />
                    </div>
                )}

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

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
        </section>
    );
}
