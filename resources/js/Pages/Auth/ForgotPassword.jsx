import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl w-full">
                    <div className="login-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                            <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
                            <p className="text-lg"> No problem. Share your email and we’ll send you a reset link to set a new password</p>
                        </div>
                        {status && (
                            <div className="mt-4 text-md text-center font-medium text-green-600">
                                {status}
                                <p className="text-indigo-600">If you dont get mail. Contact to admin</p>
                            </div>
                        )}
                        <div className="px-8 py-8">
                            <form onSubmit={submit} className="space-y-6">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email(used in registration)"
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="login-btn w-full text-center text-white py-3 rounded-lg font-semibold text-lg" disabled={processing}>
                                        Email Password Reset Link
                                    </PrimaryButton>
                                </div>
                            </form>

                            <p className="text-center mt-6 text-gray-600 mb-5">
                                <span>Want to login? </span>
                                <Link
                                    href={route('login')}
                                    className="font-medium text-purple-600 hover:text-purple-500"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
