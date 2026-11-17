import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEye, faPen, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, DataTable, EmptyState, FilterBar, PageHeader, Pagination, RowAction, RowActions, SafeImage, SearchInput } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getCommonOptions, getDropdownOptions, getStatusOptions } from '@/utils.jsx';

const KEYS = ['search_common', 'organization_id', 'gender', 'role', 'status'];

const calculateAge = (dob) => {
    if (!dob) return null;
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
};

const Check = ({ ok, label }) => (
    <span className={`inline-flex items-center gap-1 text-xs ${ok ? 'text-success-700' : 'text-slate-500'}`}>
        <FontAwesomeIcon icon={ok ? faCircleCheck : faCircleXmark} className="h-3 w-3" aria-hidden="true" />
        {label}
        <span className="sr-only">{ok ? 'verified' : 'not verified'}</span>
    </span>
);

export default function Index({ module, filters, roles, users, organizations, genders }) {
    const rows = users?.data || [];
    const { values, set, clear, activeCount } = useListFilters('users.index', KEYS, {
        fallback: { ...(filters || {}), search_common: filters?.searchCommon },
        debounce: ['search_common'],
    });
    const select = (key) => ({ value: values[key], onChange: (e) => set(key, e.target.value) });

    const columns = [
        { key: 'user', header: 'User', primary: true, render: (u) => (
            <Link href={route('my.profile', u.id)} className="group flex min-w-0 items-center gap-3">
                <SafeImage
                    src={u.image ? `/storage/${u.image}` : null}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                    fallback={<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary-700">{(u.name || '?').charAt(0).toUpperCase()}</span>}
                />
                <span className="min-w-0">
                    <span className="block truncate font-medium text-slate-900 group-hover:text-primary-700">{u.name}</span>
                    {(u.email || u.phone) && <span className="block truncate text-xs font-normal text-slate-500">{u.email || u.phone}</span>}
                    {u.role && <span className="mt-0.5 block text-xs font-normal capitalize text-slate-500">{String(u.role).replace('-', ' ')}</span>}
                </span>
            </Link>
        ) },
        { key: 'contact', header: 'Contact', render: (u) => {
            const age = calculateAge(u.dob);
            return (
                <div className="text-sm">
                    <span className="block">{u.phone || <span className="text-slate-500">No phone</span>}</span>
                    <span className="block text-xs capitalize text-slate-500">{[u.gender, age !== null && `${age} yrs`].filter(Boolean).join(' · ') || '—'}</span>
                </div>
            );
        } },
        { key: 'org', header: 'Guardian / organization', wide: true, render: (u) => (
            <div className="max-w-[220px] text-sm">
                {u.guardian_name ? (
                    <span className="block truncate">{u.guardian_name}{u.relationship && <span className="text-slate-500"> ({u.relationship})</span>}</span>
                ) : null}
                {u.organization?.name ? <span className="block truncate text-xs text-slate-500">{u.organization.name}</span> : null}
                {!u.guardian_name && !u.organization?.name && <span className="text-slate-500">—</span>}
            </div>
        ) },
        { key: 'verified', header: 'Verified', wide: true, render: (u) => (
            <span className="flex flex-wrap gap-x-3 gap-y-1">
                <Check ok={!!u.email_verified_at} label="Email" />
                <Check ok={!!u.phone_verified_at} label="Phone" />
            </span>
        ) },
        { key: 'status', header: 'Status', aside: true, render: (u) => <Badge tone={u.is_active ? 'success' : 'neutral'} dot>{u.is_active ? 'Active' : 'Inactive'}</Badge> },
        { key: 'actions', align: 'right', render: (u) => (
            <RowActions>
                <RowAction href={route('my.profile', u.id)} icon={faEye} label="View" aria-label={`View ${u.name}`} />
                <RowAction href={route('users.edit', u.id)} icon={faPen} label="Edit" tone="primary" aria-label={`Edit ${u.name}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title="Users"
                    description="Wishers and contributors on ThreeWish."
                    actions={<Button href={route('users.create')} icon={faPlus}>Add user</Button>}
                />

                <FilterBar title="Filter users" active={activeCount > 0} activeCount={activeCount} onClear={clear} collapsible>
                    <SearchInput id="search_common" label="Search" className="sm:col-span-2 lg:col-span-4" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Name, email or phone…" />
                    <SelectInput id="organization_id" label="Organization" {...select('organization_id')} options={getDropdownOptions(organizations, 'id', 'name')} placeholder="All organizations" />
                    <SelectInput id="gender" label="Gender" {...select('gender')} options={getCommonOptions(genders || {})} placeholder="All genders" />
                    <SelectInput id="role" label="Role" {...select('role')} options={getCommonOptions(roles || {})} placeholder="All roles" />
                    <SelectInput id="status" label="Status" {...select('status')} options={getStatusOptions()} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Users"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faUsers}
                            title={activeCount ? 'No users match these filters' : 'No users yet'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Add the first user to get started.'}
                            action={activeCount
                                ? <Button variant="secondary" onClick={clear}>Clear filters</Button>
                                : <Button href={route('users.create')} icon={faPlus}>Add user</Button>}
                        />
                    }
                />

                <Pagination data={users} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
