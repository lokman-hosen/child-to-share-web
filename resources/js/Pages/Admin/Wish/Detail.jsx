import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, useForm } from '@inertiajs/react';
import React from "react";
import { faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons";
import { AppPage, Badge, Button, Card, FormActions, FormSection, PageHeader, SafeImage, statusTone } from "@/Components/UI";
import TextareaInput from "@/Components/TextareaInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {getDropdownOptions} from "@/utils.jsx";
import DateTimePicker from "@/Components/DateTimePicker.jsx";

export default function Detail({module, wish, donations}) {
    const segments = window.location.pathname.split('/');

    const donationId = segments[4] ?? null;  // 32

    const { data, setData, post, put, processing, errors, reset } = useForm({
        wish_id: wish.id,
        donation_id: donationId,
        need_admin_assistance: false,
        note: '',
        scheduled_at: null, // Changed from empty string to null
        status: 'requested',
    });

    const donationOptions = getDropdownOptions(donations, 'id', 'name');

    // Convert scheduled_at string to Date object if it exists
    const getSelectedDate = () => {
        if (!data.scheduled_at) return null;
        if (data.scheduled_at instanceof Date) return data.scheduled_at;
        if (typeof data.scheduled_at === 'string') {
            const date = new Date(data.scheduled_at);
            return isNaN(date.getTime()) ? null : date;
        }
        return null;
    };

    // Handle date change
    const handleDateChange = (date) => {
        setData('scheduled_at', date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitRoute = route('wish.fulfill.store');

        post(submitRoute, {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Wish Detail" />
            <AppPage width="form" className="space-y-6">
                <PageHeader
                    breadcrumbs={[{ label: 'Fulfill wishes', href: route('wish.fulfill.list') }, { label: wish.title }]}
                    title="Offer a gift"
                    description="Choose one of your available gifts and propose a delivery time. The wisher will be asked to confirm."
                />

                <Card className="flex items-center gap-4">
                    <SafeImage
                        src={wish.featured_image?.file_path ? `/storage/${wish.featured_image.file_path}` : null}
                        alt=""
                        fallbackIcon={faStar}
                        className="h-16 w-16 shrink-0 rounded-lg object-cover ring-1 ring-slate-200 [&>svg]:h-6 [&>svg]:w-6"
                    />
                    <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Wish</p>
                        <p className="truncate text-base font-semibold text-slate-900">{wish.title}</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                            <Badge tone={statusTone(wish.status)} dot>{wish.status.charAt(0).toUpperCase() + wish.status.slice(1)}</Badge>
                            {wish.age_range && <Badge>Age {wish.age_range}</Badge>}
                        </div>
                    </div>
                </Card>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormSection title="Your offer">
                        <SelectInput
                            id="donation_id"
                            label="Gift"
                            value={data.donation_id}
                            onChange={(e) => setData('donation_id', e.target.value)}
                            error={errors.donation_id}
                            options={donationOptions}
                            placeholder={donationOptions.length ? 'Select one of your gifts' : 'No gifts available'}
                            required
                        />
                        <DateTimePicker
                            selected={getSelectedDate()}
                            onChange={handleDateChange}
                            label="Deliver at"
                            placeholder="Select date and time"
                            required
                            id="scheduled_at"
                            error={errors.scheduled_at}
                        />
                        <TextareaInput
                            id="note"
                            label="Note for the wisher"
                            className="md:col-span-2"
                            value={data.note}
                            onChange={(e) => setData('note', e.target.value)}
                            error={errors.note}
                            placeholder="Anything the wisher should know about the gift or delivery…"
                            required
                        />
                    </FormSection>

                    <FormActions>
                        <Button variant="secondary" onClick={() => window.history.back()}>Cancel</Button>
                        <Button type="submit" icon={faPaperPlane} loading={processing}>Send request to wisher</Button>
                    </FormActions>
                </form>
            </AppPage>
        </AuthenticatedLayout>
    );
}
