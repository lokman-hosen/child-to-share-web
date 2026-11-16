import { confirmDialog } from '@/Components/UI/ConfirmDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { faArrowRightArrowLeft, faEye, faGifts, faPen, faStar, faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, Card, DataTable, ItemCell, MediaGallery, PageHeader, RowAction, RowActions, TagList, statusTone } from '@/Components/UI';
import { getFulfilmentStatus, textLimit } from '@/utils.jsx';

const cap = (s) => (s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : '—');

const Detail = ({ label, children }) => (
    <div className="flex items-start justify-between gap-4 py-2.5">
        <dt className="text-sm text-slate-500">{label}</dt>
        <dd className="text-right text-sm font-medium text-slate-900">{children}</dd>
    </div>
);

export default function Show({ module, donation, wishes }) {
    const editable = !donation.latest_fulfillment;
    const [shown, setShown] = useState(10);

    const handleDelete = async (fileId) => {
        if (await confirmDialog({ title: 'Delete photo', message: 'This photo will be removed from the gift.', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('donations.file.delete', fileId), { preserveScroll: true });
        }
    };
    const handleFeatureImage = async (fileId) => {
        if (await confirmDialog({ title: 'Set featured photo', message: 'Use this photo as the main image for the gift?', confirmLabel: 'Make featured' })) {
            router.get(route('donations.file.feature', fileId), { preserveScroll: true });
        }
    };
    const handleItemDelete = async (itemId) => {
        if (await confirmDialog({ title: 'Delete gift', message: 'This gift and its photos will be deleted.', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('donations.destroy', itemId), { preserveScroll: true });
        }
    };

    const fulfilmentHref = (w) => route('wish.fulfill.status.change', { fulfilment_id: w.latest_fulfillment?.id });

    const wishColumns = [
        { key: 'wish', header: 'Wish', primary: true, render: (w) => (
            <ItemCell
                href={route('wish.show', w.id)}
                image={w.featured_image?.file_path ? `/storage/${w.featured_image.file_path}` : null}
                fallbackIcon={faStar}
                title={w.title}
                meta={[w.age_range && `Age ${w.age_range}`, textLimit(w.description, 10)].filter(Boolean).join(' · ')}
            />
        ) },
        { key: 'wisher', header: 'Wisher', render: (w) => <span className="text-sm">{w.user?.name || '—'}</span> },
        { key: 'distance', header: 'Distance', render: (w) => <span className="whitespace-nowrap text-sm">{w.distance ? `${w.distance} km` : 'n/a'}</span> },
        { key: 'status', header: 'Status', aside: true, render: (w) => w.latest_fulfillment
            ? <Badge tone={statusTone(w.latest_fulfillment.status)}>{getFulfilmentStatus(w.latest_fulfillment.status)}</Badge>
            : <Badge tone={statusTone(w.status)} dot>{cap(w.status)}</Badge> },
        { key: 'actions', align: 'right', render: (w) => (
            <RowActions>
                {w.status == 'Fulfilled' || (w.latest_fulfillment && w.latest_fulfillment.status) ? (
                    <RowAction href={fulfilmentHref(w)} icon={faArrowRightArrowLeft} label="Fulfillment" />
                ) : !w.latest_fulfillment ? (
                    <RowAction href={route('wish.fulfill.detail', { wishId: w.id, donationId: donation.id })} icon={faGifts} label="Fulfill" tone="primary" />
                ) : null}
                <RowAction href={route('wish.show', w.id)} icon={faEye} label="View" aria-label={`View ${w.title}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${donation.title} · Gift`} />
            <AppPage className="space-y-6">
                <PageHeader
                    breadcrumbs={[{ label: 'Gifts', href: route('donations.index') }, { label: donation.title }]}
                    title={donation.title}
                    description={
                        <span className="flex flex-wrap items-center gap-2">
                            <Badge tone={statusTone(donation.status)} dot>{cap(donation.status)}</Badge>
                            {donation.item_condition && <Badge>{cap(donation.item_condition)}</Badge>}
                            {donation.category?.name && <Badge tone="primary">{donation.category.name}</Badge>}
                        </span>
                    }
                    actions={editable && (
                        <>
                            <Button variant="secondary" icon={faTrash} className="!text-danger-700" onClick={() => handleItemDelete(donation.id)}>Delete</Button>
                            <Button href={route('donations.edit', donation.id)} icon={faPen}>Edit</Button>
                        </>
                    )}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <MediaGallery
                            files={donation.files}
                            title={donation.title}
                            fileActions={editable ? (file) => (
                                <>
                                    <span className="text-xs text-slate-500">This photo:</span>
                                    {file.is_featured !== 1 && (
                                        <Button size="sm" variant="secondary" icon={faCircleCheck} onClick={() => handleFeatureImage(file.id)}>Make featured</Button>
                                    )}
                                    <Button size="sm" variant="ghost" icon={faTrash} className="!text-danger-700 hover:!bg-danger-50" onClick={() => handleDelete(file.id)}>Delete</Button>
                                </>
                            ) : undefined}
                        />
                    </div>

                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">Details</h2>
                            <dl className="mt-2 divide-y divide-slate-100">
                                <Detail label="Category">{donation.category?.name || 'N/A'}</Detail>
                                <Detail label="Condition">{cap(donation.item_condition)}</Detail>
                                <Detail label="Status"><Badge tone={statusTone(donation.status)} dot>{cap(donation.status)}</Badge></Detail>
                                <Detail label="Posted by">{donation.user?.name || 'Anonymous'}</Detail>
                                {donation.organization && <Detail label="Organization">{donation.organization.name}</Detail>}
                                <Detail label="Added">{donation.created_at}</Detail>
                            </dl>
                            {donation.auto_tags && donation.auto_tags.length > 0 && (
                                <div className="mt-3 border-t border-slate-100 pt-3">
                                    <p className="text-sm text-slate-500">Tags</p>
                                    <TagList tags={donation.auto_tags} max={20} />
                                </div>
                            )}
                        </Card>

                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">Description</h2>
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                                {donation.description || 'No description provided.'}
                            </p>
                        </Card>
                    </div>
                </div>

                {wishes.length > 0 && (
                    <section className="space-y-4" aria-labelledby="matching-wishes">
                        <div>
                            <h2 id="matching-wishes" className="text-lg font-semibold text-slate-900">Matching wishes <span className="font-normal text-slate-500">({wishes.length})</span></h2>
                            <p className="text-sm text-slate-600">Wishes in the same category. Choose one you'd like to fulfill with this gift.</p>
                        </div>
                        <DataTable caption="Matching wishes" columns={wishColumns} rows={wishes.slice(0, shown)} />
                        {wishes.length > shown && (
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-sm text-slate-500">Showing {shown} of {wishes.length}</p>
                                <Button variant="secondary" onClick={() => setShown((n) => n + 10)}>Show more</Button>
                            </div>
                        )}
                    </section>
                )}
            </AppPage>
        </AuthenticatedLayout>
    );
}
