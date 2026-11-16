import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import AuthShell from '@/Components/UI/AuthShell';
import Field from '@/Components/UI/Field';
import UIButton from '@/Components/UI/Button';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />
            <AuthShell
                title="Confirm Password"
                subtitle="This is a secure area of the application. Please confirm your password before continuing."
            >
                <form onSubmit={submit} className="space-y-5">
                    <Field id="password" label="Password" error={errors.password}>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className={`form-control ${errors.password ? 'form-control-error' : ''}`}
                            autoComplete="current-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </Field>

                    <UIButton type="submit" size="lg" className="w-full" loading={processing} disabled={processing}>
                        Confirm
                    </UIButton>
                </form>
            </AuthShell>
        </GuestLayout>
    );
}
