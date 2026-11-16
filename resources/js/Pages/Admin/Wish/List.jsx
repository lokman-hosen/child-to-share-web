import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, router } from '@inertiajs/react';
import { faCircleCheck, faEye, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, DataTable, EmptyState, FilterBar, ItemCell, PageHeader, Pagination, RowAction, RowActions, SearchInput, statusTone } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getDropdownOptions, getFulfilmentStatus, getStatusOptions, wishAndDonationType } from '@/utils.jsx';

const KEYS = ['search_common', 'wisher_name', 'organization_id', 'type', 'category_id', 'age_range', 'status'];
const cap = (s) => (s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : '—');

export default function List({ module, wishes, categories, filters, ageRanges, organizations, wishStatus }) {
    const rows = wishes?.data || [];
    const { values, set, clear, activeCount } = useListFilters('wishes.index', KEYS, {
        fallback: { ...(filters || {}), search_common: filters?.searchCommon },
        debounce: ['search_common', 'wisher_name'],
    });
    const select = (key) => ({ value: values[key], onChange: (e) => set(key, e.target.value) });

    // Same request as before: relative URL, resolved against /admin/wishes
    const handleFulfilStatus = (fulfilmentId) => {
        router.get('wish-fulfill-status', { status: 'accepted_by_wisher', fulfilment_id: fulfilmentId });
    };

    const columns = [
        { key: 'wish', header: 'Wish', primary: true, render: (w) => (
            <ItemCell
                href={route('wishes.show', w.id)}
                image={w.featured_image?.file_path ? `/storage/${w.featured_image.file_path}` : null}
                fallbackIcon={faStar}
                title={w.title}
                meta={[w.age_range && `Age ${w.age_range} yrs`, w.created_at].filter(Boolean).join(' · ')}
            />
        ) },
        { key: 'wisher', header: 'Wisher', render: (w) => (
            <div className="text-sm">
                <span className="block">{w.user?.name || '—'}</span>
                {w.latest_fulfillment?.status === 'requested' && w.latest_fulfillment?.donation?.user?.name && (
                    <span className="mt-0.5 block text-xs text-slate-500">Contributor: {w.latest_fulfillment.donation.user.name}</span>
                )}
            </div>
        ) },
        { key: 'status', header: 'Status', aside: true, render: (w) => <Badge tone={statusTone(w.status)} dot>{cap(w.status)}</Badge> },
        { key: 'fulfilment', header: 'Fulfillment', render: (w) => w.latest_fulfillment
            ? <Badge tone={statusTone(w.latest_fulfillment.status)}>{getFulfilmentStatus(w.latest_fulfillment.status)}</Badge>
            : <span className="text-sm text-slate-400">Not started</span> },
        { key: 'actions', align: 'right', render: (w) => (
            <RowActions>
                {w.latest_fulfillment?.status === 'requested' ? (
                    <Button size="sm" icon={faCircleCheck} onClick={() => handleFulfilStatus(w.latest_fulfillment.id)}>Confirm receipt</Button>
                ) : (
                    <RowAction href={route('wishes.show', w.id)} icon={faEye} label="View" tone="primary" aria-label={`View ${w.title}`} />
                )}
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title="Wishes"
                    description="Track wishes and where each one is in fulfillment."
                    actions={<Button href={route('wishes.create')} icon={faPlus}>Make a wish</Button>}
                />

                <FilterBar title="Filter wishes" active={activeCount > 0} activeCount={activeCount} onClear={clear} collapsible>
                    <SearchInput id="search_common" label="Search" className="sm:col-span-2" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Title or description…" />
                    <SearchInput id="wisher_name" label="Wisher" className="sm:col-span-2" value={values.wisher_name} onChange={(v) => set('wisher_name', v)} placeholder="Name, phone, email, address or guardian…" />
                    <SelectInput id="organization_id" label="Organization" {...select('organization_id')} options={getDropdownOptions(organizations, 'id', 'name')} placeholder="All organizations" />
                    <SelectInput id="type" label="Type" {...select('type')} options={wishAndDonationType()} placeholder="All types" />
                    <SelectInput id="category_id" label="Category" {...select('category_id')} options={getDropdownOptions(categories, 'id', 'name')} placeholder="All categories" />
                    <SelectInput id="age_range" label="Child's age" {...select('age_range')} options={getStatusOptions(ageRanges)} placeholder="All ages" />
                    <SelectInput id="status" label="Status" {...select('status')} options={getStatusOptions(wishStatus)} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Wishes"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faStar}
                            title={activeCount ? 'No wishes match these filters' : 'No wishes yet'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Create a wish to get started.'}
                            action={activeCount
                                ? <Button variant="secondary" onClick={clear}>Clear filters</Button>
                                : <Button href={route('wishes.create')} icon={faPlus}>Make a wish</Button>}
                        />
                    }
                />

                <Pagination data={wishes} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
