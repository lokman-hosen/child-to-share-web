import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthShell from '@/Components/UI/AuthShell';
import Alert from '@/Components/UI/Alert';
import UIButton from '@/Components/UI/Button';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <AuthShell
                title="Email Verification"
                subtitle="Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
            >
                {status === 'verification-link-sent' && (
                    <Alert tone="success" className="mb-6">
                        A new verification link has been sent to the email address
                        you provided during registration.
                    </Alert>
                )}

                <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <UIButton type="submit" size="lg" loading={processing} disabled={processing}>
                        Resend Verification Email
                    </UIButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
                    >
                        Log Out
                    </Link>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
