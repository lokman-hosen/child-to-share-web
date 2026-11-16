import React, { useEffect } from 'react';
import {useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getCommonOptions, getDropdownOptions, getStatusOptions} from "@/utils.jsx";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, FormActions, FormSection, SafeImage } from "@/Components/UI";
import DateInput from "@/Components/DateInput.jsx";
import FileInput from "@/Components/FileInput.jsx";

const Form = ({genders,guardianRelations,user,organizations}) => {
    const loginUser = usePage().props.auth.user;
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        guardian_name: user?.guardian_name,
        guardian_phone: user?.guardian_phone,
        relationship: user?.relationship,
        gender: user?.gender,
        dob: user?.dob,
        photo: user?.photo,
        organization_id: user?.organization_id || null,
        _method: user ? 'PUT' : 'POST',
    });


    // Initialize form data when wish is provided (for editing)
    useEffect(() => {
        if (data.user) {
            setData((prevData) => ({
                ...prevData,
                name: user?.name || '',
                email: user?.email || '',
                phone: user?.phone || '',
                guardian_name: user?.guardian_name || '',
                guardian_phone: user?.guardian_phone || '',
                relationship: user?.relationship || '',
                gender: user?.gender || '',
                dob: user?.dob || '',
                photo: user?.photo || null,
                organization_id: user?.organization_id || null,
                _method: 'PUT',
            }));
        } else {
            setData('_method', 'POST');
            reset();
        }
    }, [user, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = user
            ? route('users.update', user.id)
            : route('users.store');

        post(submitRoute, {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
            preserveScroll: true,
        });
    };
    const handleFileChange = (field, file) => {
        setData(field, file);
        if (file !== null) {
            setData(`${field}_removed`, false);
        }
    };

    const relationOptions = getCommonOptions(guardianRelations);
    const genderOptions = getCommonOptions(genders);
    const organizationOptions = getDropdownOptions(organizations, 'id', 'name');

    const currentPhoto = user?.image;

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Personal details">
                <TextInput
                    id="name"
                    label="Full name"
                    className="md:col-span-2"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    isFocused
                    autoComplete="name"
                    placeholder="e.g. Ayesha Rahman"
                    required
                />
                <SelectInput
                    id="gender"
                    label="Gender"
                    value={data.gender}
                    onChange={(e) => setData('gender', e.target.value)}
                    error={errors.gender}
                    options={genderOptions}
                    placeholder="Select gender"
                    required
                />
                <DateInput
                    id="dob"
                    label="Date of birth"
                    value={data.dob}
                    onChange={(value) => setData('dob', value)}
                    error={errors.dob}
                    placeholder="Select date of birth"
                    required
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start md:col-span-2">
                    {currentPhoto && (
                        <div className="shrink-0">
                            <p className="text-sm font-medium text-slate-800">Current photo</p>
                            <SafeImage src={`/storage/${currentPhoto}`} alt={`${user.name}`} className="mt-1.5 h-20 w-20 rounded-full object-cover ring-1 ring-slate-200" />
                        </div>
                    )}
                    <FileInput
                        id="photo"
                        className="flex-1"
                        label={currentPhoto ? 'Replace photo' : 'Photo'}
                        helpText="PNG or JPG."
                        onFileChange={(file) => handleFileChange('photo', file)}
                        error={errors.photo}
                        accept="image/png, image/jpg, image/jpeg"
                    />
                </div>
            </FormSection>

            <FormSection title="Contact" description="Email or phone is used to sign in.">
                <TextInput
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    autoComplete="email"
                    error={errors.email}
                    placeholder="name@example.com"
                />
                <TextInput
                    id="phone"
                    label="Phone"
                    type="tel"
                    inputMode="numeric"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                    placeholder="01XXXXXXXXX"
                    helpText="11 digits."
                />
                {loginUser.role === 'super-admin' && (
                    <SelectInput
                        id="organization_id"
                        label="Organization"
                        className="md:col-span-2"
                        value={data.organization_id}
                        onChange={(e) => setData('organization_id', e.target.value)}
                        error={errors.organization_id}
                        options={organizationOptions}
                        placeholder="Select an organization"
                        required={!!user}
                    />
                )}
            </FormSection>

            <FormSection title="Guardian" description="The adult responsible for this wisher.">
                <TextInput
                    id="guardian_name"
                    label="Guardian name"
                    value={data.guardian_name}
                    onChange={(e) => setData('guardian_name', e.target.value)}
                    error={errors.guardian_name}
                    placeholder="Guardian's full name"
                    required
                />
                <SelectInput
                    id="relationship"
                    label="Relationship"
                    value={data.relationship}
                    onChange={(e) => setData('relationship', e.target.value)}
                    error={errors.relationship}
                    options={relationOptions}
                    placeholder="Select relationship"
                    required
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
                    helpText="11 digits."
                />
            </FormSection>

            <FormActions>
                <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>
                    {user ? 'Save changes' : 'Create user'}
                </Button>
            </FormActions>
        </form>
    );
};

export default Form;
