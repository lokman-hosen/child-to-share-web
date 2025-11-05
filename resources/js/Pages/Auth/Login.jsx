import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: '', // Changed from 'email' to 'login'
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            <div className="text-center ">
                {status && (
                    <div className="mt-4 font-medium text-lg text-green-600">
                        {status}
                    </div>
                )}
            </div>

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="login-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                            <p className="text-lg">Sign in to your ThreeWish account</p>
                        </div>

                        <div className="px-8 py-8">
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email or Phone Number
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon
                                                icon={data.login.includes('@') ? faUser : faPhone}
                                                className="text-gray-400"
                                            />
                                        </div>

                                        <TextInput
                                            id="login"
                                            type="text"
                                            name="login"
                                            value={data.login}
                                            className="form-input w-full pl-10 pr-4 py-3"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('login', e.target.value)}
                                            placeholder="Enter your email or phone number"
                                            required
                                        />
                                        <InputError message={errors.login} className="mt-2"/>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Enter your registered email address or phone number
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Password
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon icon={faLock} className="text-gray-400"/>
                                        </div>
                                        <TextInput
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={data.password}
                                            className="form-input w-full pl-10 pr-10 py-3"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <InputError message={errors.password} className="mt-2"/>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="toggle-password text-gray-400 hover:text-gray-600 focus:outline-none"
                                            >
                                                <FontAwesomeIcon
                                                    icon={showPassword ? faEyeSlash : faEye}
                                                    className="h-5 w-5"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Checkbox
                                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="font-medium text-purple-600 hover:text-purple-500"
                                            >
                                                Forgot password?
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="login-btn w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50"
                                >
                                    {processing ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>

                            <p className="text-center mt-6 text-gray-600">
                                <span>Don't have an account? </span>
                                <Link
                                    href={route('register')}
                                    className="font-medium text-purple-600 hover:text-purple-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
