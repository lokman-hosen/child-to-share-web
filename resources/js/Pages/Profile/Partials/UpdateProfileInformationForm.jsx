import TextInput from '@/Components/TextInputField';
import SelectInput from '@/Components/SelectInput.jsx';
import DateInput from '@/Components/DateInput.jsx';
import FileInput from '@/Components/FileInput.jsx';
import TextareaInput from '@/Components/TextareaInput.jsx';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, FormActions, FormSection, LocationSearch, SafeImage } from '@/Components/UI';
import { getCommonOptions } from '@/utils.jsx';

export default function UpdateProfileInformation({ mustVerifyEmail, status, user, guardianRelations, genders }) {
    const isPerson = user.user_type === 'user';
    const isOrg = user.user_type === 'organization';

    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
        guardian_name: user?.guardian_name,
        guardian_phone: user?.guardian_phone,
        relationship: user?.relationship,
        gender: user?.gender,
        address: user?.address,
        dob: user?.dob,
        description: user?.organization?.description,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('user.profile.update'), {
            forceFormData: true,
            onFinish: () => reset('photo'),
            preserveScroll: true,
        });
    };

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) setData(`${field}_removed`, false);
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            {mustVerifyEmail && user.email_verified_at === null && (
                <Alert tone="warning" title="Your email address is unverified.">
                    <Link href={route('verification.send')} method="post" as="button" className="font-medium underline underline-offset-2">
                        Re-send the verification email
                    </Link>
                    {status === 'verification-link-sent' && <p className="mt-1">A new verification link has been sent to your email address.</p>}
                </Alert>
            )}

            <FormSection title={isPerson ? 'Personal details' : 'Organization details'}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:col-span-2">
                    <SafeImage
                        src={user.image ? `/storage/${user.image}` : null}
                        alt=""
                        className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-slate-200"
                        fallback={<span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-50 text-2xl font-semibold text-primary-700">{(user.name || '?').charAt(0).toUpperCase()}</span>}
                    />
                    <FileInput
                        id="photo"
                        className="flex-1"
                        label={isPerson ? 'Profile photo' : 'Logo'}
                        helpText="PNG or JPG, up to 2 MB."
                        onFileChange={(file) => handleFileChange('photo', file)}
                        error={errors.photo}
                        accept="image/png, image/jpg, image/jpeg"
                    />
                </div>
                <TextInput
                    id="name"
                    label={isPerson ? 'Full name' : 'Organization name'}
                    className="md:col-span-2"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    autoComplete="name"
                    required
                />
                {isPerson && (
                    <SelectInput
                        id="gender"
                        label="Gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        error={errors.gender}
                        options={getCommonOptions(genders)}
                        placeholder="Select gender"
                        required
                    />
                )}
                <DateInput
                    id="dob"
                    label={isPerson ? 'Date of birth' : 'Established on'}
                    value={data.dob}
                    onChange={(value) => setData('dob', value)}
                    error={errors.dob}
                    placeholder="Select a date"
                    required
                />
                {isOrg && (
                    <TextareaInput
                        id="description"
                        label="About the organization"
                        className="md:col-span-2"
                        value={data.description ?? ''}
                        onChange={(e) => setData('description', e.target.value)}
                        error={errors.description}
                        placeholder="What does your organization do?"
                        required
                    />
                )}
            </FormSection>

            <FormSection title="Contact" description="Email or phone is used to sign in.">
                <TextInput
                    id="email"
                    label={isPerson ? 'Email' : 'Organization email'}
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    autoComplete="email"
                    error={errors.email}
                    required={isOrg}
                />
                <TextInput
                    id="phone"
                    label={isPerson ? 'Phone' : 'Organization phone'}
                    type="tel"
                    inputMode="numeric"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                    placeholder="01XXXXXXXXX"
                    required
                />
                <div className="md:col-span-2">
                    <LocationSearch
                        id="location"
                        label="Location"
                        address={data.address}
                        hasCoordinates={!!((data.latitude && data.longitude) || (user.latitude && user.longitude))}
                        error={(errors.latitude || errors.longitude) && 'Location is required. Search and select your address from the list.'}
                        onSelect={(loc) => setData((d) => ({ ...d, ...loc }))}
                        onClear={() => setData((d) => ({ ...d, latitude: '', longitude: '' }))}
                        hint="Used to show you nearby wishes and gifts."
                    />
                </div>
            </FormSection>

            {isPerson && (
                <FormSection title="Guardian" description="Optional. If you add a guardian, include their relationship and phone too.">
                    <TextInput
                        id="guardian_name"
                        label="Guardian name"
                        value={data.guardian_name}
                        onChange={(e) => setData('guardian_name', e.target.value)}
                        error={errors.guardian_name}
                    />
                    <SelectInput
                        id="relationship"
                        label="Relationship"
                        value={data.relationship}
                        onChange={(e) => setData('relationship', e.target.value)}
                        error={errors.relationship}
                        options={getCommonOptions(guardianRelations)}
                        placeholder="Select relationship"
                    />
                    <TextInput
                        id="guardian_phone"
                        label="Guardian phone"
                        type="tel"
                        inputMode="numeric"
                        value={data.guardian_phone}
                        onChange={(e) => setData('guardian_phone', e.target.value)}
                        error={errors.guardian_phone}
                        placeholder="01XXXXXXXXX"
                    />
                </FormSection>
            )}

            <FormActions>
                <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                    <p className="mr-auto flex items-center gap-1.5 text-sm font-medium text-success-700" role="status">
                        <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" aria-hidden="true" /> Saved
                    </p>
                </Transition>
                <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>Save changes</Button>
            </FormActions>
        </form>
    );
}
