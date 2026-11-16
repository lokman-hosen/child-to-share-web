import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import AuthShell from '@/Components/UI/AuthShell';
import Field from '@/Components/UI/Field';
import Alert from '@/Components/UI/Alert';
import UIButton from '@/Components/UI/Button';

export default function ResetPassword({ token, email, status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email ?? '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <AuthShell title="Password Reset" subtitle="Set a new password">
                {status && (
                    <Alert tone="success" className="mb-6" title={status}>
                        If you don't get the email, please contact the admin.
                    </Alert>
                )}
                <form onSubmit={submit} className="space-y-5">
                    <Field id="email" label="Email" required error={errors.email}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className={`form-control ${errors.email ? 'form-control-error' : ''}`}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </Field>

                    <Field id="password" label="Password" required error={errors.password}>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className={`form-control ${errors.password ? 'form-control-error' : ''}`}
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter new password"
                        />
                    </Field>

                    <Field id="password_confirmation" label="Confirm Password" required error={errors.password_confirmation}>
                        <TextInput
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className={`form-control ${errors.password_confirmation ? 'form-control-error' : ''}`}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            placeholder="Confirmation new password"
                        />
                    </Field>

                    <UIButton type="submit" size="lg" className="w-full" loading={processing} disabled={processing}>
                        Reset Password
                    </UIButton>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
