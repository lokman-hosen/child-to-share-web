import { confirmDialog } from '@/Components/UI/ConfirmDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, router } from '@inertiajs/react';
import { faArrowRightArrowLeft, faCircleCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, Card, MediaGallery, PageHeader, statusTone } from '@/Components/UI';
import { getFulfilmentStatus } from '@/utils.jsx';

const cap = (s) => (s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : '—');

const Detail = ({ label, children }) => (
    <div className="flex items-start justify-between gap-4 py-2.5">
        <dt className="text-sm text-slate-500">{label}</dt>
        <dd className="text-right text-sm font-medium text-slate-900">{children}</dd>
    </div>
);

export default function Show({ wish }) {
    const editable = !wish.latest_fulfillment;

    const handleDelete = async (fileId) => {
        if (await confirmDialog({ title: 'Delete photo', message: 'This photo will be removed from the wish.', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('wishes.file.delete', fileId), { preserveScroll: true });
        }
    };
    const handleFeatureImage = async (fileId) => {
        if (await confirmDialog({ title: 'Set featured photo', message: 'Use this photo as the main image for the wish?', confirmLabel: 'Make featured' })) {
            router.get(route('wishes.file.feature', fileId), { preserveScroll: true });
        }
    };
    const handleItemDelete = async (itemId) => {
        if (await confirmDialog({ title: 'Delete wish', message: 'This wish and its photos will be deleted.', tone: 'danger', confirmLabel: 'Delete' })) {
            router.delete(route('wishes.destroy', itemId), { preserveScroll: true });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${wish.title} · Wish`} />
            <AppPage className="space-y-6">
                <PageHeader
                    breadcrumbs={[{ label: 'Wishes', href: route('wishes.index') }, { label: wish.title }]}
                    title={wish.title}
                    description={
                        <span className="flex flex-wrap items-center gap-2">
                            <Badge tone={statusTone(wish.status)} dot>{cap(wish.status)}</Badge>
                            {wish.category?.name && <Badge tone="primary">{wish.category.name}</Badge>}
                            {wish.age_range && <Badge>Age {wish.age_range}</Badge>}
                        </span>
                    }
                    actions={editable && (
                        <>
                            <Button variant="secondary" icon={faTrash} className="!text-danger-700" onClick={() => handleItemDelete(wish.id)}>Delete</Button>
                            <Button href={route('wishes.edit', wish.id)} icon={faPen}>Edit</Button>
                        </>
                    )}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <MediaGallery
                            files={wish.files}
                            title={wish.title}
                            fileActions={editable ? (file) => (
                                <>
                                    <span className="text-xs text-slate-500">This photo:</span>
                                    {file.is_featured != 1 && (
                                        <Button size="sm" variant="secondary" icon={faCircleCheck} onClick={() => handleFeatureImage(file.id)}>Make featured</Button>
                                    )}
                                    <Button size="sm" variant="ghost" icon={faTrash} className="!text-danger-700 hover:!bg-danger-50" onClick={() => handleDelete(file.id)}>Delete</Button>
                                </>
                            ) : undefined}
                        />
                    </div>

                    <div className="space-y-6 lg:col-span-2">
                        {wish.latest_fulfillment && (
                            <Card className="border-primary-200 bg-primary-50/40">
                                <p className="text-sm text-slate-600">Fulfillment</p>
                                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3">
                                    <Badge tone={statusTone(wish.latest_fulfillment.status)}>{getFulfilmentStatus(wish.latest_fulfillment.status)}</Badge>
                                    <Button size="sm" variant="secondary" icon={faArrowRightArrowLeft} href={route('wish.fulfill.status.change', { fulfilment_id: wish.latest_fulfillment.id })}>
                                        View fulfillment
                                    </Button>
                                </div>
                            </Card>
                        )}

                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">Details</h2>
                            <dl className="mt-2 divide-y divide-slate-100">
                                <Detail label="Category">{wish.category?.name || 'N/A'}</Detail>
                                <Detail label="Status"><Badge tone={statusTone(wish.status)} dot>{cap(wish.status)}</Badge></Detail>
                                <Detail label="Wisher">{wish.user?.name || 'Anonymous'}</Detail>
                                {wish?.create_by && <Detail label="Organization">{wish.create_by.name}</Detail>}
                                <Detail label="Child's age">{wish.age_range ? `${wish.age_range} years` : '—'}</Detail>
                                <Detail label="Created">{wish.created_at}</Detail>
                            </dl>
                        </Card>

                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">Why it's wished for</h2>
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                                {wish.description || 'No description provided.'}
                            </p>
                        </Card>
                    </div>
                </div>
            </AppPage>
        </AuthenticatedLayout>
    );
}
