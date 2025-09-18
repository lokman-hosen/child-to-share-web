import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {useEffect} from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="login-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 text-center">
                            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                            <p className="text-lg">Sign in to your ThreeWish account</p>
                        </div>

                        <div className="px-8 py-8">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email or Phone
                                        Number</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-user text-gray-400"></i>
                                        </div>
                                        <input type="text" className="form-input w-full pl-10 pr-4 py-3"
                                               placeholder="Enter your email or phone number" required/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-lock text-gray-400"></i>
                                        </div>
                                        <input type="password" id="password"
                                               className="form-input w-full pl-10 pr-10 py-3"
                                               placeholder="Enter your password" required/>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <span className="toggle-password text-gray-400 hover:text-gray-600"
                                          id="togglePassword">
                                        <i className="fas fa-eye"></i>
                                    </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                               className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"/>
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember
                                            me</label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-purple-600 hover:text-purple-500">Forgot
                                            password?</a>
                                    </div>
                                </div>

                                <button type="submit"
                                        className="login-btn w-full text-white py-3 rounded-lg font-semibold text-lg">
                                    Sign In
                                </button>

                                <div className="relative flex items-center">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="flex-shrink mx-4 text-gray-400">or continue with</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>

                                Social Login
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="#"
                                       className="social-btn bg-white py-2 px-4 inline-flex justify-center items-center">
                                        <i className="fab fa-google text-red-500 mr-2"></i>
                                        <span>Google</span>
                                    </a>
                                    <a href="#"
                                       className="social-btn bg-white py-2 px-4 inline-flex justify-center items-center">
                                        <i className="fab fa-facebook text-blue-600 mr-2"></i>
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </form>

                            <p className="text-center mt-6 text-gray-600">
                                Don't have an account? <a href="registration-new.html"
                                                          className="font-medium text-purple-600 hover:text-purple-500">Sign
                                up</a>
                            </p>
                        </div>
                    </div>

                </div>
            </main>


        </GuestLayout>
    );
}
