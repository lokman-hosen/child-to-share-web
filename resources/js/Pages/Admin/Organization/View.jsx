import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faGift, faLocationDot, faPen, faPhone, faPlus, faStar, faCircleCheck, faUsers, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AppPage, Badge, Button, Card, EmptyState, PageHeader, SafeImage, StatCard } from '@/Components/UI';
import { getStatus } from '@/utils.jsx';

const initial = (s) => (s || '?').trim().charAt(0).toUpperCase();

const StatLink = ({ href, ...props }) => (
    <Link href={href} className="block rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 [&>div]:transition [&>div]:hover:-translate-y-0.5 [&>div]:hover:shadow-card-hover">
        <StatCard {...props} />
    </Link>
);

const ContactRow = ({ icon, children }) => (
    <li className="flex items-start gap-3 text-sm text-slate-700">
        <FontAwesomeIcon icon={icon} className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="min-w-0 break-words">{children}</span>
    </li>
);

const View = ({ organization, availableDonationCount, activeWishCount, fulfilledWishCount, totalMembers }) => {
    const members = (organization.users || []).filter((u) => u.id !== organization.user_id);
    const preview = members.slice(0, 6);
    const membersHref = route('users.index', { organization_id: organization.id });

    return (
        <AuthenticatedLayout>
            <Head title={`${organization.name} · Organization`} />
            <AppPage className="space-y-6">
                <PageHeader
                    breadcrumbs={[{ label: 'Organizations', href: route('organizations.index') }, { label: organization.name }]}
                    title={organization.name}
                    icon={
                        <SafeImage
                            src={organization?.user?.image ? `/storage/${organization.user.image}` : null}
                            alt=""
                            className="h-10 w-10 rounded-xl object-cover"
                            fallback={<span className="text-base font-semibold">{initial(organization.name)}</span>}
                        />
                    }
                    description={organization.created_at ? `On ThreeWish since ${organization.created_at}` : undefined}
                    actions={
                        <>
                            <Button variant="secondary" href={route('organizations.edit', organization.id)} icon={faPen}>Edit</Button>
                            <Button href={route('wishes.create')} icon={faPlus}>Create wish</Button>
                        </>
                    }
                />

                <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
                    <StatLink href={membersHref} icon={faUsers} label="Members" value={totalMembers} />
                    <StatCard icon={faCircleCheck} tone="success" label="Wishes fulfilled" value={fulfilledWishCount} />
                    <StatLink href={route('wishes.index', { organization_id: organization.id })} icon={faStar} tone="gold" label="Approved wishes" value={activeWishCount} />
                    <StatLink href={route('donations.index', { organization_id: organization.id })} icon={faGift} tone="primary" label="Available gifts" value={availableDonationCount} />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">About</h2>
                            {organization.description ? (
                                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">{organization.description}</p>
                            ) : (
                                <p className="mt-3 text-sm text-slate-500">No description yet.</p>
                            )}
                        </Card>

                        <Card padded={false}>
                            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
                                <div>
                                    <h2 className="text-base font-semibold text-slate-900">Members</h2>
                                    <p className="text-sm text-slate-500">People managed by this organization.</p>
                                </div>
                                <Badge tone="primary">{totalMembers}</Badge>
                            </div>
                            {preview.length ? (
                                <>
                                    <ul className="divide-y divide-slate-100">
                                        {preview.map((m) => (
                                            <li key={m.id} className="flex items-center gap-3 px-5 py-3 sm:px-6">
                                                <SafeImage
                                                    src={m.image ? `/storage/${m.image}` : null}
                                                    alt=""
                                                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                                                    fallback={<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary-700">{initial(m.name)}</span>}
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-medium text-slate-900">{m.name}</p>
                                                    {(m.email || m.phone) && <p className="truncate text-xs text-slate-500">{m.email || m.phone}</p>}
                                                </div>
                                                {m.role && <Badge className="capitalize">{String(m.role).replace('-', ' ')}</Badge>}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={membersHref} className="flex items-center justify-center gap-2 border-t border-slate-100 px-5 py-3 text-sm font-medium text-primary-700 hover:bg-primary-50/50">
                                        View all members <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" aria-hidden="true" />
                                    </Link>
                                </>
                            ) : (
                                <div className="p-5 sm:p-6">
                                    <EmptyState icon={faUsers} title="No members yet" description="Wishers added to this organization will show up here." className="py-10" />
                                </div>
                            )}
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <div className="flex items-center justify-between gap-3">
                                <h2 className="text-base font-semibold text-slate-900">Contact</h2>
                                {getStatus(organization.is_active)}
                            </div>
                            <ul className="mt-4 space-y-3">
                                <ContactRow icon={faEnvelope}>
                                    {organization.contact_email ? <a href={`mailto:${organization.contact_email}`} className="hover:text-primary-700">{organization.contact_email}</a> : <span className="text-slate-500">No email</span>}
                                </ContactRow>
                                <ContactRow icon={faPhone}>
                                    {organization.contact_phone ? <a href={`tel:${organization.contact_phone}`} className="hover:text-primary-700">{organization.contact_phone}</a> : <span className="text-slate-500">No phone</span>}
                                </ContactRow>
                                <ContactRow icon={faLocationDot}>{organization.address || <span className="text-slate-500">No address</span>}</ContactRow>
                                {organization.created_at && <ContactRow icon={faCalendar}>Joined {organization.created_at}</ContactRow>}
                            </ul>
                        </Card>

                        <Card>
                            <h2 className="text-base font-semibold text-slate-900">Quick links</h2>
                            <div className="mt-4 grid gap-2">
                                <Button variant="soft" href={route('wishes.index', { organization_id: organization.id })} icon={faStar}>Organization wishes</Button>
                                <Button variant="soft" href={route('donations.index', { organization_id: organization.id })} icon={faGift}>Organization gifts</Button>
                                <Button variant="soft" href={membersHref} icon={faUsers}>Members</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </AppPage>
        </AuthenticatedLayout>
    );
};

export default View;
