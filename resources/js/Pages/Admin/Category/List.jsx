import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, Link } from '@inertiajs/react';
import { faLayerGroup, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Button, DataTable, EmptyState, FilterBar, PageHeader, Pagination, RowAction, RowActions, SearchInput } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getStatus, getStatusOptions } from '@/utils.jsx';

const CountLink = ({ href, count, label }) => (
    <Link href={href} className="font-medium text-primary-700 hover:underline" title={`See ${label}`}>
        {count ?? 0}
        <span className="sr-only"> {label}</span>
    </Link>
);

export default function List({ module, filters, categories }) {
    const rows = categories?.data || [];
    const { values, set, clear, activeCount } = useListFilters('categories.index', ['search_common', 'status'], {
        fallback: { search_common: filters?.searchCommon, status: filters?.status },
        debounce: ['search_common'],
    });

    const columns = [
        { key: 'name', header: 'Category', primary: true, render: (c) => (
            <div className="min-w-0">
                <p className="font-medium text-slate-900">{c.name}</p>
                {c.description && <p className="mt-0.5 line-clamp-1 max-w-md text-xs font-normal text-slate-500">{c.description}</p>}
            </div>
        ) },
        { key: 'wishes', header: 'Wishes', render: (c) => <CountLink href={route('wishes.index', { category_id: c.id })} count={c.wishes_count} label="wishes" /> },
        { key: 'gifts', header: 'Gifts', render: (c) => <CountLink href={route('donations.index', { category_id: c.id })} count={c.donations_count} label="gifts" /> },
        { key: 'status', header: 'Status', aside: true, render: (c) => getStatus(c.is_active) },
        { key: 'actions', align: 'right', render: (c) => (
            <RowActions>
                <RowAction href={route('categories.edit', c.id)} icon={faPen} label="Edit" tone="primary" aria-label={`Edit ${c.name}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title="Categories"
                    description="Manage the categories used for wishes and gifts."
                    actions={<Button href={route('categories.create')} icon={faPlus}>New category</Button>}
                />

                <FilterBar title="Filter categories" active={activeCount > 0} onClear={clear} columns="lg:grid-cols-2">
                    <SearchInput id="search_common" label="Search" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Search by name…" />
                    <SelectInput id="status" label="Status" value={values.status} onChange={(e) => set('status', e.target.value)} options={getStatusOptions()} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Categories"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faLayerGroup}
                            title={activeCount ? 'No categories match these filters' : 'No categories yet'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Create your first category to organise wishes and gifts.'}
                            action={activeCount
                                ? <Button variant="secondary" onClick={clear}>Clear filters</Button>
                                : <Button href={route('categories.create')} icon={faPlus}>New category</Button>}
                        />
                    }
                />

                <Pagination data={categories} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
