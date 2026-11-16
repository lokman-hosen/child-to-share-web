import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AuthShell from '@/Components/UI/AuthShell';
import Field from '@/Components/UI/Field';
import Alert from '@/Components/UI/Alert';
import UIButton from '@/Components/UI/Button';

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
            <AuthShell
                title="Forgot your password?"
                subtitle="No problem. Share your email and we’ll send you a reset link to set a new password"
                footer={<>
                    <span>Want to login? </span>
                    <Link href={route('login')} className="font-semibold text-primary-700 hover:underline">Login</Link>
                </>}
            >
                {status && (
                    <Alert tone="success" className="mb-6" title={status}>
                        If you don't get the email, please contact the admin.
                    </Alert>
                )}
                <form onSubmit={submit} className="space-y-5">
                    <Field id="email" label="Email" required error={errors.email}>
                        <div className="relative">
                            <FontAwesomeIcon icon={faEnvelope} className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className={`form-control pl-10 ${errors.email ? 'form-control-error' : ''}`}
                                isFocused={true}
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email(used in registration)"
                                aria-invalid={errors.email ? 'true' : undefined}
                                aria-describedby={errors.email ? 'email-desc' : undefined}
                                required
                            />
                        </div>
                    </Field>
                    <UIButton type="submit" size="lg" className="w-full" loading={processing} disabled={processing}>
                        Email Password Reset Link
                    </UIButton>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
