import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import TextareaInput from '@/Components/TextareaInput.jsx';
import { Button, FormActions, FormSection } from '@/Components/UI';
import { getStatusOptions } from '@/utils.jsx';

const Form = ({ category, statuses }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: category?.name || '',
        description: category?.description || '',
        is_active: category?.is_active ?? '',
    });

    useEffect(() => {
        if (category) {
            setData((prev) => ({ ...prev, name: category?.name, description: category?.description, is_active: category?.is_active }));
        } else {
            reset();
        }
    }, [category, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const opts = { onSuccess: () => reset(), preserveScroll: true };
        if (category) put(route('categories.update', category.id), opts);
        else post(route('categories.store'), opts);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
            <FormSection title="Category details">
                <TextInput
                    id="name"
                    label="Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    placeholder="e.g. Education"
                    required
                />
                <SelectInput
                    id="is_active"
                    label="Status"
                    value={data.is_active}
                    onChange={(e) => setData('is_active', e.target.value)}
                    error={errors.is_active}
                    options={getStatusOptions(statuses)}
                    required
                />
                <TextareaInput
                    id="description"
                    label="Description"
                    className="md:col-span-2"
                    value={data.description ?? ''}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="What kinds of wishes and gifts belong here?"
                />
            </FormSection>

            <FormActions>
                <Button variant="secondary" href={route('categories.index')}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>
                    {category ? 'Save changes' : 'Create category'}
                </Button>
            </FormActions>
        </form>
    );
};

export default Form;
