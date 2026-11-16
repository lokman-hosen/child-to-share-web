import Checkbox from '@/Components/Checkbox';
import AuthShell from '@/Components/UI/AuthShell';
import Field from '@/Components/UI/Field';
import Alert from '@/Components/UI/Alert';
import UIButton from '@/Components/UI/Button';
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
            <AuthShell
                title="Welcome Back"
                subtitle="Sign in to your ThreeWish account"
                footer={<>
                    <span>Don't have an account? </span>
                    <Link href={route('register')} className="font-semibold text-primary-700 hover:underline">Sign up</Link>
                </>}
            >
                {status && <Alert tone="success" className="mb-6">{status}</Alert>}

                <form onSubmit={submit} className="space-y-5">
                    <Field id="login" label="Email or Phone Number" required hint="Enter your registered email address or phone number" error={errors.login}>
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={data.login.includes('@') ? faUser : faPhone}
                                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                aria-hidden="true"
                            />
                            <TextInput
                                id="login"
                                type="text"
                                name="login"
                                value={data.login}
                                className={`form-control pl-10 ${errors.login ? 'form-control-error' : ''}`}
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('login', e.target.value)}
                                placeholder="Enter your email or phone number"
                                aria-invalid={errors.login ? 'true' : undefined}
                                aria-describedby="login-desc"
                                required
                            />
                        </div>
                    </Field>

                    <Field
                        id="password"
                        label="Password"
                        required
                        error={errors.password}
                        labelAction={canResetPassword && (
                            <Link href={route('password.request')} className="text-sm font-medium text-primary-700 hover:underline">
                                Forgot password?
                            </Link>
                        )}
                    >
                        <div className="relative">
                            <FontAwesomeIcon icon={faLock} className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                            <TextInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className={`form-control pl-10 pr-11 ${errors.password ? 'form-control-error' : ''}`}
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter your password"
                                aria-invalid={errors.password ? 'true' : undefined}
                                aria-describedby={errors.password ? 'password-desc' : undefined}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                aria-pressed={showPassword}
                                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-slate-400 hover:text-slate-700"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-4 w-4" aria-hidden="true" />
                            </button>
                        </div>
                    </Field>

                    <label htmlFor="remember" className="flex items-center gap-2.5 text-sm text-slate-700">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        Remember me
                    </label>

                    <UIButton type="submit" size="lg" className="w-full" loading={processing} disabled={processing}>
                        {processing ? 'Signing In...' : 'Sign In'}
                    </UIButton>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
