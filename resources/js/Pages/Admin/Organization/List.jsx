import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, Link } from '@inertiajs/react';
import { faBuilding, faEye, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Button, DataTable, EmptyState, FilterBar, PageHeader, Pagination, RowAction, RowActions, SafeImage, SearchInput } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getStatus, getStatusOptions } from '@/utils.jsx';

const OrgAvatar = ({ org }) => (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-50 text-sm font-semibold text-primary-700 ring-1 ring-slate-200">
        {org?.user?.image ? (
            <SafeImage src={`/storage/${org.user.image}`} alt="" className="h-full w-full object-cover" fallback={(org.name || '?').charAt(0).toUpperCase()} />
        ) : (
            (org.name || '?').charAt(0).toUpperCase()
        )}
    </span>
);

export default function List({ module, filters, organizations }) {
    const rows = organizations?.data || [];
    const { values, set, clear, activeCount } = useListFilters('organizations.index', ['search_common', 'status'], {
        fallback: { search_common: filters?.searchCommon, status: filters?.status },
        debounce: ['search_common'],
    });

    const columns = [
        { key: 'name', header: 'Organization', primary: true, render: (o) => (
            <Link href={route('organizations.show', o.id)} className="group flex min-w-0 items-center gap-3">
                <OrgAvatar org={o} />
                <span className="min-w-0">
                    <span className="line-clamp-2 font-medium text-slate-900 group-hover:text-primary-700">{o.name}</span>
                    {o.created_at && <span className="block text-xs font-normal text-slate-500">Since {o.created_at}</span>}
                </span>
            </Link>
        ) },
        { key: 'contact', header: 'Contact', render: (o) => (
            <div className="min-w-0 text-sm">
                {o.contact_email ? <a href={`mailto:${o.contact_email}`} className="block max-w-[220px] truncate text-slate-700 hover:text-primary-700">{o.contact_email}</a> : <span className="text-slate-400">No email</span>}
                <span className="block text-slate-500">{o.contact_phone || 'No phone'}</span>
            </div>
        ) },
        { key: 'address', header: 'Location', wide: true, render: (o) => o.address
            ? <span className="line-clamp-2 max-w-[240px] text-sm">{o.address}</span>
            : <span className="text-slate-400">Not provided</span> },
        { key: 'status', header: 'Status', aside: true, render: (o) => getStatus(o.is_active) },
        { key: 'actions', align: 'right', render: (o) => (
            <RowActions>
                <RowAction href={route('organizations.show', o.id)} icon={faEye} label="View" aria-label={`View ${o.name}`} />
                <RowAction href={route('organizations.edit', o.id)} icon={faPen} label="Edit" tone="primary" aria-label={`Edit ${o.name}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title="Organizations"
                    description="Partner organizations and the people they manage."
                    actions={<Button href={route('organizations.create')} icon={faPlus}>New organization</Button>}
                />

                <FilterBar title="Filter organizations" active={activeCount > 0} onClear={clear} columns="lg:grid-cols-2">
                    <SearchInput id="search_common" label="Search" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Name, email, phone or address…" />
                    <SelectInput id="status" label="Status" value={values.status} onChange={(e) => set('status', e.target.value)} options={getStatusOptions()} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Organizations"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faBuilding}
                            title={activeCount ? 'No organizations match these filters' : 'No organizations yet'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Add your first partner organization.'}
                            action={activeCount
                                ? <Button variant="secondary" onClick={clear}>Clear filters</Button>
                                : <Button href={route('organizations.create')} icon={faPlus}>New organization</Button>}
                        />
                    }
                />

                <Pagination data={organizations} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
