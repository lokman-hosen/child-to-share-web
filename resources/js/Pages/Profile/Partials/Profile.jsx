import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleCheck, faCircleXmark, faEnvelope, faGift, faKey, faLocationDot, faPen, faPhone, faStar, faVenusMars, faCircleNotch, faHandHoldingHeart, faBuilding } from '@fortawesome/free-solid-svg-icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { AppPage, Badge, Button, Card, PageHeader, SafeImage, StatCard } from '@/Components/UI';
import { checkAdmin, checkDonor, checkDonorWisher, checkWisher, getLoginUser } from '@/utils.jsx';

const ROLE_LABEL = { donor: 'Contributor', wisher: 'Wisher', 'donor-wisher': 'Contributor & Wisher', admin: 'Admin', 'super-admin': 'Super admin' };

const Verified = ({ ok, label }) => (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${ok ? 'text-success-700' : 'text-slate-500'}`}>
        <FontAwesomeIcon icon={ok ? faCircleCheck : faCircleXmark} className="h-3 w-3" aria-hidden="true" />
        {ok ? 'Verified' : 'Not verified'}
        <span className="sr-only">{label}</span>
    </span>
);

const Row = ({ icon, label, children }) => (
    // dt/dd must be direct children of the group div, so the icon sits inside the dt, absolutely positioned
    <div className="relative min-w-0 py-3 pl-7">
        <dt className="text-xs text-slate-500">
            <FontAwesomeIcon icon={icon} className="absolute left-0 top-3.5 h-4 w-4 text-slate-400" aria-hidden="true" />
            {label}
        </dt>
        <dd className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 break-words text-sm text-slate-900">{children}</dd>
    </div>
);

export default function Profile({ user, availableDonationCount, donatedDonationCount, fulfilledWishCount, activeWishCount, totalWishCount }) {
    const authUser = getLoginUser();
    const isSelf = authUser.id === user.id;
    const canManage = checkAdmin(authUser.role) || isSelf;
    const canSeePhone = checkAdmin(authUser.role) || isSelf;

    const wishStats = [
        { icon: faStar, tone: 'gold', label: 'Wishes created', value: totalWishCount },
        { icon: faCircleNotch, tone: 'primary', label: 'Active wishes', value: activeWishCount },
        { icon: faCircleCheck, tone: 'success', label: 'Wishes fulfilled', value: fulfilledWishCount },
    ];
    const giftStats = [
        { icon: faGift, tone: 'primary', label: 'Available gifts', value: availableDonationCount },
        { icon: faHandHoldingHeart, tone: 'success', label: 'Gifts given', value: donatedDonationCount },
    ];
    const stats = checkDonorWisher(user.role) ? [...wishStats, ...giftStats] : checkDonor(user.role) ? giftStats : checkWisher(user.role) ? wishStats : [];

    return (
        <AuthenticatedLayout>
            <Head title={isSelf ? 'My profile' : `${user.name} · Profile`} />
            <AppPage className="space-y-6">
                <PageHeader
                    title={isSelf ? 'My profile' : user.name}
                    breadcrumbs={!isSelf && checkAdmin(authUser.role) ? [{ label: 'Users', href: route('users.index') }, { label: user.name }] : undefined}
                    actions={canManage && (
                        <>
                            {isSelf && <Button variant="secondary" icon={faKey} href={route('user.password.form')}>Change password</Button>}
                            <Button icon={faPen} href={isSelf ? route('profile.edit') : route('users.edit', user.id)}>Edit profile</Button>
                        </>
                    )}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <Card className="text-center lg:col-span-1">
                        <SafeImage
                            src={user?.image ? `/storage/${user.image}` : null}
                            alt=""
                            className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-primary-50"
                            fallback={<span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary-50 text-4xl font-semibold text-primary-700 ring-4 ring-primary-50/60">{(user.name || '?').charAt(0).toUpperCase()}</span>}
                        />
                        <h2 className="mt-4 text-lg font-semibold text-slate-900">{user.name}</h2>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                            {user.role && <Badge tone="primary">{ROLE_LABEL[user.role] || user.role}</Badge>}
                            <Badge tone={user.is_active ? 'success' : 'neutral'} dot>{user.is_active ? 'Active' : 'Inactive'}</Badge>
                        </div>
                        <p className="mt-3 text-sm text-slate-500">Member since {user.created_at}</p>
                        {user.organization?.name && (
                            <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-600">
                                <FontAwesomeIcon icon={faBuilding} className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                                {user.organization.name}
                            </p>
                        )}
                    </Card>

                    <Card className="lg:col-span-2">
                        <h2 className="text-base font-semibold text-slate-900">Contact information</h2>
                        <dl className="mt-1 divide-y divide-slate-100">
                            <Row icon={faEnvelope} label="Email">
                                {user.email ? <span className="break-all">{user.email}</span> : <span className="text-slate-500">Not provided</span>}
                                {user.email && <Verified ok={!!user.email_verified_at} label="email" />}
                            </Row>
                            {canSeePhone && (
                                <Row icon={faPhone} label="Phone">
                                    {user.phone || <span className="text-slate-500">Not provided</span>}
                                    {user.phone && <Verified ok={!!user.phone_verified_at} label="phone" />}
                                </Row>
                            )}
                            <Row icon={faLocationDot} label="Address">{user.address ?? <span className="text-slate-500">n/a</span>}</Row>
                            <Row icon={faVenusMars} label="Gender"><span className="capitalize">{user.gender ?? 'n/a'}</span></Row>
                            {user.dob && <Row icon={faCalendar} label="Date of birth">{user.dob}</Row>}
                        </dl>
                    </Card>
                </div>

                {stats.length > 0 && (
                    <section aria-labelledby="impact-title" className="space-y-3">
                        <h2 id="impact-title" className="text-lg font-semibold text-slate-900">{checkWisher(user.role) ? 'Wish history' : 'Impact'}</h2>
                        <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${stats.length > 3 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'}`}>
                            {stats.map((s) => <StatCard key={s.label} {...s} />)}
                        </div>
                    </section>
                )}
            </AppPage>
        </AuthenticatedLayout>
    );
}
