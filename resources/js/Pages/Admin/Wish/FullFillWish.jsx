import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import { faArrowRightArrowLeft, faEye, faGifts, faStar } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, DataTable, EmptyState, FilterBar, ItemCell, PageHeader, Pagination, RowAction, RowActions, SafeImage, SearchInput, statusTone } from '@/Components/UI';
import SelectInput from '@/Components/SelectInput.jsx';
import useListFilters from '@/hooks/useListFilters';
import { getDropdownOptions, getFulfilmentStatus, getStatusOptions, textLimit } from '@/utils.jsx';

const KEYS = ['search_common', 'wisher_info', 'organization_id', 'category_id', 'status'];
const cap = (s) => (s ? String(s).charAt(0).toUpperCase() + String(s).slice(1) : '—');

export default function List({ module, filters, wishes, organizations, categories, wishStatus }) {
    const rows = wishes?.data || [];
    const { values, set, clear, activeCount } = useListFilters('wish.fulfill.list', KEYS, {
        fallback: { ...(filters || {}), search_common: filters?.searchCommon },
        debounce: ['search_common', 'wisher_info'],
    });
    const select = (key) => ({ value: values[key], onChange: (e) => set(key, e.target.value) });
    const fulfilmentHref = (w) => route('wish.fulfill.status.change', { fulfilment_id: w.latest_fulfillment?.id });

    const columns = [
        { key: 'wish', header: 'Wish', primary: true, render: (w) => (
            <ItemCell
                href={route('wish.show', w.id)}
                image={w.featured_image?.file_path ? `/storage/${w.featured_image.file_path}` : null}
                fallbackIcon={faStar}
                title={w.title}
                meta={[w.age_range && `Age ${w.age_range}`, textLimit(w.description, 10)].filter(Boolean).join(' · ')}
            />
        ) },
        { key: 'wisher', header: 'Wisher', render: (w) => (
            <span className="flex items-center gap-2 text-sm">
                <SafeImage
                    src={w.user?.image ? `/storage/${w.user.image}` : null}
                    alt=""
                    className="h-7 w-7 shrink-0 rounded-full object-cover"
                    fallback={<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">{(w.user?.name || '?').charAt(0).toUpperCase()}</span>}
                />
                <span className="min-w-0 truncate">{w.user?.name || '—'}</span>
            </span>
        ) },
        { key: 'distance', header: 'Distance', render: (w) => <span className="whitespace-nowrap text-sm">{w.distance ? `${w.distance} km` : 'n/a'}</span> },
        { key: 'status', header: 'Status', aside: true, render: (w) => w.latest_fulfillment
            ? <Badge tone={statusTone(w.latest_fulfillment.status)}>{getFulfilmentStatus(w.latest_fulfillment.status)}</Badge>
            : <Badge tone={statusTone(w.status)} dot>{cap(w.status)}</Badge> },
        { key: 'actions', align: 'right', render: (w) => (
            <RowActions>
                {w.status == 'Fulfilled' || (w.latest_fulfillment && w.latest_fulfillment.status) ? (
                    <RowAction href={fulfilmentHref(w)} icon={faArrowRightArrowLeft} label="Fulfillment" />
                ) : !w.latest_fulfillment ? (
                    <Button size="sm" href={route('wish.fulfill.detail', w.id)} icon={faGifts}>Fulfill</Button>
                ) : null}
                <RowAction href={route('wish.show', w.id)} icon={faEye} label="View" aria-label={`View ${w.title}`} />
            </RowActions>
        ) },
    ];

    return (
        <AuthenticatedLayout>
            <Head title={`${module} List`} />
            <AppPage className="space-y-6">
                <PageHeader title="Fulfill wishes" description="Choose a wish you'd like to fulfill with one of your gifts." />

                <FilterBar title="Find wishes" active={activeCount > 0} activeCount={activeCount} onClear={clear} collapsible columns="lg:grid-cols-6">
                    <SearchInput id="search_common" label="Search" className="sm:col-span-2 lg:col-span-3" value={values.search_common} onChange={(v) => set('search_common', v)} placeholder="Wish title or description…" />
                    <SearchInput id="wisher_info" label="Wisher" className="sm:col-span-2 lg:col-span-3" value={values.wisher_info} onChange={(v) => set('wisher_info', v)} placeholder="Name, phone, email, address or guardian…" />
                    <SelectInput id="organization_id" label="Organization" className="lg:col-span-2" {...select('organization_id')} options={getDropdownOptions(organizations, 'id', 'name')} placeholder="All organizations" />
                    <SelectInput id="category_id" label="Category" className="lg:col-span-2" {...select('category_id')} options={getDropdownOptions(categories, 'id', 'name')} placeholder="All categories" />
                    <SelectInput id="status" label="Wish status" className="sm:col-span-2 lg:col-span-2" {...select('status')} options={getStatusOptions(wishStatus)} placeholder="All statuses" />
                </FilterBar>

                <DataTable
                    caption="Wishes to fulfill"
                    columns={columns}
                    rows={rows}
                    empty={
                        <EmptyState
                            icon={faStar}
                            title={activeCount ? 'No wishes match these filters' : 'No wishes to fulfill right now'}
                            description={activeCount ? 'Try a different search or clear the filters.' : 'Check back soon. New wishes are added regularly.'}
                            action={activeCount ? <Button variant="secondary" onClick={clear}>Clear filters</Button> : null}
                        />
                    }
                />

                <Pagination data={wishes} />
            </AppPage>
        </AuthenticatedLayout>
    );
}
