import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { faEye, faGift, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, DataTable, EmptyState, FilterBar, ItemCell, PageHeader, Pagination, RowAction, RowActions, SearchInput, TagList, statusTone } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getDropdownOptions, getStatusOptions, wishAndDonationType } from '@/utils.jsx';

const KEYS = ['search_common', 'donor_name', 'organization_id', 'type', 'category_id', 'status'];
const label = (s) => (s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : '—');

export default function List({ module, filters, donations, organizations, categories, donationStatus }) {
    const rows = donations?.data || [];
    const { values, set, clear, activeCount } = useListFilters('donations.index', KEYS, {
        fallback: { ...(filters || {}), search_common: filters?.searchCommon },
        debounce: ['search_common', 'donor_name'],
    });
    const select = (key) => ({ value: values[key], onChange: (e) => set(key, e.target.value) });

    const columns = [
        { key: 'item', header: 'Gift', primary: true, render: (d) => (
            <div>
                <ItemCell
                    href={route('donations.show', d.id)}
                    image={d.featured_image?.file_path ? `/storage/${d.featured_image.file_path}` : null}
                    fallbackIcon={faGift}
                    title={d.title}
                    meta={d.item_condition ? `Condition: ${label(d.item_condition)}` : null}
                />
                <span className="ml-[3.75rem] block"><TagList tags={d.auto_tags} /></span>
            </div>
        ) },
        { key: 'donor', header: 'Contributor', render: (d) => <span className="text-sm">{d.user?.name || '—'}</span> },
        { key: 'created', header: 'Added', wide: true, render: (d) => <span className="whitespace-nowrap text-sm text-slate-500">{d.created_at}</span> },
        { key: 'status', header: 'Status', aside: true, render: (d) => <Badge tone={statusTone(d.status)} dot>{label(d.status)}</Badge> },
        { key: 'actions', align: 'right', render: (d) => (
            <RowActions>
                <RowAction href={route('donations.show', d.id)} icon={faEye} label="View" tone="primary" aria-label={`View ${d.title}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title="Gifts"
                    description="Items shared to make wishes come true."
                    actions={<Button href={route('donations.create')} icon={faPlus}>Add gift</Button>}
                />

                <FilterBar title="Filter gifts" active={activeCount > 0} activeCount={activeCount} onClear={clear} collapsible>
                    <SearchInput id="search_common" label="Search" className="sm:col-span-2" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Title or description…" />
                    <SearchInput id="donor_name" label="Contributor" className="sm:col-span-2" value={values.donor_name} onChange={(v) => set('donor_name', v)} placeholder="Name, phone, email, address or guardian…" />
                    <SelectInput id="organization_id" label="Organization" {...select('organization_id')} options={getDropdownOptions(organizations, 'id', 'name')} placeholder="All organizations" />
                    <SelectInput id="type" label="Type" {...select('type')} options={wishAndDonationType()} placeholder="All types" />
                    <SelectInput id="category_id" label="Category" {...select('category_id')} options={getDropdownOptions(categories, 'id', 'name')} placeholder="All categories" />
                    <SelectInput id="status" label="Status" {...select('status')} options={getStatusOptions(donationStatus)} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Gifts"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faGift}
                            title={activeCount ? 'No gifts match these filters' : 'No gifts yet'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Add an item you would like to give.'}
                            action={activeCount
                                ? <Button variant="secondary" onClick={clear}>Clear filters</Button>
                                : <Button href={route('donations.create')} icon={faPlus}>Add gift</Button>}
                        />
                    }
                />

                <Pagination data={donations} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
