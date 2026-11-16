import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import TextareaInput from '@/Components/TextareaInput.jsx';
import FileInput from '@/Components/FileInput.jsx';
import { Button, FormActions, FormSection, LocationSearch, SafeImage } from '@/Components/UI';
import { getStatusOptions } from '@/utils.jsx';

const Form = ({ organization, statuses }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: organization?.name || '',
        contact_phone: organization?.contact_phone || '',
        contact_email: organization?.contact_email || '',
        address: organization?.address || '',
        description: organization?.description || '',
        latitude: organization?.user?.latitude || '',
        longitude: organization?.user?.longitude || '',
        is_active: organization?.is_active ?? 1,
        // method spoofing so files can be sent on update
        _method: organization ? 'PUT' : 'POST',
    });

    useEffect(() => {
        if (organization) {
            setData((prev) => ({
                ...prev,
                name: organization?.name || '',
                contact_phone: organization?.contact_phone || '',
                contact_email: organization?.contact_email || '',
                address: organization?.address || '',
                description: organization?.description || '',
                latitude: organization?.user?.latitude || '',
                longitude: organization?.user?.longitude || '',
                is_active: organization?.is_active,
                _method: 'PUT',
            }));
        } else {
            setData('_method', 'POST');
            reset();
        }
    }, [organization, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitRoute = organization ? route('organizations.update', organization.id) : route('organizations.store');
        post(submitRoute, { forceFormData: true, onSuccess: () => reset(), preserveScroll: true });
    };

    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) setData(`${field}_removed`, false);
    };

    const currentLogo = organization?.user?.image;

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Organization details" description="How the organization appears across ThreeWish.">
                <TextInput
                    id="name"
                    label="Organization name"
                    className="md:col-span-2"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    placeholder="e.g. Hope Foundation"
                    required
                />
                <TextareaInput
                    id="description"
                    label="About the organization"
                    className="md:col-span-2"
                    value={data.description ?? ''}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="A short description of what the organization does…"
                />
                <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-start">
                    {currentLogo && (
                        <div className="shrink-0">
                            <p className="text-sm font-medium text-slate-800">Current logo</p>
                            <SafeImage src={`/storage/${currentLogo}`} alt={`${organization.name} logo`} className="mt-1.5 h-20 w-20 rounded-lg object-cover ring-1 ring-slate-200" />
                        </div>
                    )}
                    <FileInput
                        id="photo"
                        className="flex-1"
                        label={currentLogo ? 'Replace logo' : 'Logo'}
                        helpText="PNG or JPG, up to 2 MB."
                        onFileChange={(file) => handleFileChange('image', file)}
                        error={errors.image}
                        accept="image/png, image/jpg, image/jpeg"
                    />
                </div>
                {organization && (
                    <SelectInput
                        id="status"
                        label="Status"
                        value={data.is_active}
                        onChange={(e) => setData('is_active', e.target.value)}
                        error={errors.is_active}
                        options={getStatusOptions(statuses)}
                        required
                    />
                )}
            </FormSection>

            <FormSection title="Contact" description="Shown to donors and wishers who need to reach the organization.">
                <TextInput
                    id="phone"
                    label="Phone"
                    type="tel"
                    inputMode="numeric"
                    value={data.contact_phone}
                    onChange={(e) => setData('contact_phone', e.target.value)}
                    error={errors.contact_phone}
                    placeholder="01XXXXXXXXX"
                    helpText="11 digits."
                    required
                />
                <TextInput
                    id="email"
                    label="Email"
                    type="email"
                    value={data.contact_email}
                    onChange={(e) => setData('contact_email', e.target.value)}
                    autoComplete="email"
                    error={errors.contact_email}
                    placeholder="contact@organization.org"
                    required
                />
                <div className="md:col-span-2">
                    <LocationSearch
                        id="location"
                        label="Location"
                        address={data.address}
                        hasCoordinates={!!(data.latitude && data.longitude)}
                        error={(errors.latitude || errors.longitude) && 'Location is required. Search and select the address from the list.'}
                        onSelect={(loc) => setData((d) => ({ ...d, ...loc }))}
                        onClear={() => setData((d) => ({ ...d, latitude: '', longitude: '' }))}
                    />
                </div>
            </FormSection>

            <FormActions>
                <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>
                    {organization ? 'Save changes' : 'Create organization'}
                </Button>
            </FormActions>
        </form>
    );
};

export default Form;
