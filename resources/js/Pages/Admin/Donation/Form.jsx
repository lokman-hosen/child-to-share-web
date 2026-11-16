import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInputField.jsx';
import SelectInput from '@/Components/SelectInput.jsx';
import {getDropdownOptions, getLoginUser, getStatusOptions} from "@/utils.jsx";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button, FormActions, FormSection, ImageUploader } from "@/Components/UI";
import MultiSelectTextField from "@/Components/MultiSelectTextField.jsx";
import TextareaInput from "@/Components/TextareaInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import CustomCreatableSelect from "@/Components/CreatableSelect.jsx";

const Form = ({categories, donation, statuses, module, itemConditions, donors}) => {
    // Convert auto_tags from string/array to the format MultiSelect expects
    const formatTags = (tags) => {
        if (!tags) return [];
        if (Array.isArray(tags)) {
            return tags.map(tag => ({
                label: tag,
                value: tag
            }));
        }
        if (typeof tags === 'string') {
            try {
                const parsedTags = JSON.parse(tags);
                if (Array.isArray(parsedTags)) {
                    return parsedTags.map(tag => ({
                        label: tag,
                        value: tag
                    }));
                }
            } catch (e) {
                // If it's a comma-separated string
                return tags.split(',').map(tag => tag.trim()).filter(tag => tag).map(tag => ({
                    label: tag,
                    value: tag
                }));
            }
        }
        return [];
    };

    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: donation?.title || '',
        item_condition: donation?.item_condition || '',
        category: donation?.category?.name || '',
        description: donation?.description || '',
        auto_tags: donation?.auto_tags || [],
        attachments: [], // Always start with empty array for new files
        status: donation?.status || 'available',
        user_id: donation?.user_id || null,
        remember: false, // Add remember field for the checkbox

        // We will add the _method field dynamically in handleSubmit
        _method: donation ? 'PUT' : 'POST',
    });

    // Convert auto_tags to the format MultiSelect expects
    const [tags, setTags] = React.useState(formatTags(donation?.auto_tags));

    // Update form data when tags change
    useEffect(() => {
        // Convert tags back to array of strings for form submission
        const tagValues = tags.map(tag => tag.value);
        setData('auto_tags', tagValues);
    }, [tags, setData]);

    useEffect(() => {
        if (donation) {
            const formattedTags = formatTags(donation.auto_tags);
            setTags(formattedTags);
            setData((prevData) => ({
                ...prevData,
                title: donation?.title || '',
                item_condition: donation?.item_condition || '',
                category: donation?.category?.name || '',
                description: donation?.description || '',
                auto_tags: formattedTags.map(tag => tag.value),
                status: donation?.status || 'available',
                user_id: donation?.user_id || null,
                // Don't set attachments from donation as they're already stored
                _method: 'PUT', // Ensure method spoofing is set for updates
            }));
        } else {
            setData('_method', 'POST'); // Reset for new member creation
            reset();
            setTags([]);
        }
    }, [donation, setData, reset]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRoute = donation
            ? route('donations.update', donation.id)
            : route('donations.store');

        post(submitRoute, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setTags([]);
            },
            preserveScroll: true,
        });
    };

    const statusOptions = getStatusOptions(statuses);
    const donorOptions = getDropdownOptions(donors, 'id', 'name');
    const isSuperAdmin = getLoginUser().role == 'super-admin';

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Item details" description="Describe the item so the right wisher can find it.">
                <TextInput
                    id="title"
                    label="Item name"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g. Winter coat, story books"
                    required
                />
                <CustomCreatableSelect
                    id="category"
                    label="Category"
                    value={data.category}
                    onChange={(value) => setData('category', value)}
                    options={categories}
                    error={errors.category}
                    placeholder="Pick or type a new category"
                    required
                />
                <CustomCreatableSelect
                    id="item_condition"
                    label="Condition"
                    value={data.item_condition}
                    onChange={(value) => setData('item_condition', value)}
                    options={itemConditions}
                    error={errors.item_condition}
                    placeholder="e.g. New, like new, good"
                    required
                />
                <MultiSelectTextField
                    id="auto_tags"
                    label="Tags"
                    value={tags}
                    onChange={setTags}
                    placeholder="e.g. toy, baby — press Enter or comma"
                    error={errors.auto_tags}
                    required
                />
                <TextareaInput
                    id="description"
                    label="Description"
                    className="md:col-span-2"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    error={errors.description}
                    placeholder="Size, age range, any defects, how it was used…"
                    required
                />
            </FormSection>

            <FormSection title="Photos" description={donation ? 'New photos are added to the ones already uploaded.' : 'Clear photos help wishers decide.'} columns="">
                <ImageUploader
                    id="attachments"
                    label="Item photos"
                    hint="PNG or JPG, at least 800×500. Images are optimized automatically."
                    required={!donation}
                    files={data.attachments}
                    onChange={(files) => setData('attachments', files)}
                    error={errors.attachments}
                />
            </FormSection>

            <FormSection title="Options">
                {isSuperAdmin && (
                    <SelectInput
                        id="user_id"
                        label="Contributor"
                        value={data.user_id}
                        onChange={(e) => setData('user_id', e.target.value)}
                        error={errors.user_id}
                        options={donorOptions}
                        placeholder="Select a contributor"
                        required
                    />
                )}
                {donation && (
                    <SelectInput
                        id="status"
                        label="Status"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        error={errors.status}
                        options={statusOptions}
                        required
                    />
                )}
                <label htmlFor="remember" className="flex cursor-pointer items-start gap-3 rounded-lg p-3 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 md:col-span-2">
                    <Checkbox id="remember" name="remember" className="mt-0.5" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                    <span>
                        <span className="block text-sm font-medium text-slate-800">Request admin help with pickup or delivery</span>
                        <span className="block text-xs text-slate-500">The ThreeWish team will contact you to arrange it.</span>
                    </span>
                </label>
            </FormSection>

            <FormActions>
                <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                <Button type="submit" icon={faCheck} loading={processing}>
                    {donation ? 'Save changes' : 'Add gift'}
                </Button>
            </FormActions>
        </form>
    );
};

export default Form;
