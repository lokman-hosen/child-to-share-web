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
                        <div className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-6 text-center">
                            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                            <p className="text-lg">Sign in to your ThreeWish account</p>
                        </div>

                        <div className="px-8 py-8">
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="block text-accent font-medium mb-2">
                                        Email or Phone Number
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon
                                                icon={data.login.includes('@') ? faUser : faPhone}
                                                className="text-neutral/60"
                                            />
                                        </div>

                                        <TextInput
                                            id="login"
                                            type="text"
                                            name="login"
                                            value={data.login}
                                            className="form-input w-full pl-10 pr-4 py-3 border border-neutral/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('login', e.target.value)}
                                            placeholder="Enter your email or phone number"
                                            required
                                        />
                                        <InputError message={errors.login} className="mt-2"/>
                                    </div>
                                    <p className="text-xs text-neutral/60 mt-1">
                                        Enter your registered email address or phone number
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-accent font-medium mb-2">
                                        Password
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon icon={faLock} className="text-neutral/60"/>
                                        </div>
                                        <TextInput
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={data.password}
                                            className="form-input w-full pl-10 pr-10 py-3 border border-neutral/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
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
                                                className="toggle-password text-neutral/60 hover:text-accent focus:outline-none transition-colors duration-200"
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
                                            className="h-4 w-4 text-primary focus:ring-primary border-neutral/30 rounded transition-colors duration-200"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                                            >
                                                Forgot password?
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 focus:ring-4 focus:ring-primary/30 ${
                                        processing
                                            ? 'bg-neutral/40 text-neutral/60 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 hover:shadow-lg transform hover:-translate-y-0.5'
                                    }`}
                                >
                                    {processing ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>

                            <p className="text-center mt-6 text-neutral">
                                <span>Don't have an account? </span>
                                <Link
                                    href={route('register')}
                                    className="font-medium text-primary hover:text-primary/80 transition-colors duration-200"
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
