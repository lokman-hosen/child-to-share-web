import React, { useState, useEffect, useRef } from 'react';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck, faCircleXmark, faEnvelope, faLocationDot, faMessage, faPaperPlane,
    faPhone, faShieldHalved, faStar, faTruck, faTriangleExclamation, faUser, faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import { confirmDialog } from '@/Components/UI/ConfirmDialog';
import { Badge, AppPage, Button, Card, PageHeader, SafeImage, statusTone } from '@/Components/UI';
import Modal from '@/Components/Modal.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { checkAdmin, getFulfilmentStatus, textLimit } from '@/utils.jsx';
import TextareaInput from '@/Components/TextareaInput.jsx';
import FulfillmentProgressInline from '@/Components/Common/FulfillmentProgressInline.jsx';

const initial = (name) => (name || '?').trim().charAt(0).toUpperCase();

const Verified = ({ ok, label }) => (
    <FontAwesomeIcon
        icon={ok ? faCircleCheck : faCircleXmark}
        className={ok ? 'h-3.5 w-3.5 text-success-600' : 'h-3.5 w-3.5 text-slate-300'}
        title={`${label} ${ok ? 'verified' : 'not verified'}`}
        aria-label={`${label} ${ok ? 'verified' : 'not verified'}`}
    />
);

const InfoRow = ({ icon, label, children }) => (
    <div className="flex items-start gap-3 py-2">
        <FontAwesomeIcon icon={icon} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
        <dt className="sr-only">{label}</dt>
        <dd className="flex min-w-0 flex-wrap items-center gap-1.5 break-words text-sm text-slate-700">{children}</dd>
    </div>
);

/** Contact card for the contributor or the wisher. */
const PersonCard = ({ title, person, online }) => (
    <Card>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h2>
        <div className="mt-3 flex items-center gap-3">
            <span className="relative shrink-0">
                <SafeImage
                    src={person.image ? `/storage/${person.image}` : null}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                    fallback={<span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-base font-semibold text-primary-700">{initial(person.name)}</span>}
                />
                {online !== undefined && (
                    <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white ${online ? 'bg-success-500' : 'bg-slate-300'}`} aria-hidden="true" />
                )}
            </span>
            <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">{person.name}</p>
                <p className="text-xs text-slate-500">Member since {person.created_at}</p>
            </div>
        </div>
        <dl className="mt-3 divide-y divide-slate-100 border-t border-slate-100">
            <InfoRow icon={faEnvelope} label="Email">
                {person.email ? <a href={`mailto:${person.email}`} className="min-w-0 break-all hover:text-primary-700">{person.email}</a> : <span className="text-slate-400">No email</span>}
                {person.email && <Verified ok={!!person.email_verified_at} label="Email" />}
            </InfoRow>
            <InfoRow icon={faPhone} label="Phone">
                {person.phone ? <a href={`tel:${person.phone}`} className="hover:text-primary-700">{person.phone}</a> : <span className="text-slate-400">No phone</span>}
                {person.phone && <Verified ok={!!person.phone_verified_at} label="Phone" />}
            </InfoRow>
            <InfoRow icon={faLocationDot} label="Address">{person.address ?? 'n/a'}</InfoRow>
            <InfoRow icon={faVenusMars} label="Gender"><span className="capitalize">{person.gender ?? 'n/a'}</span></InfoRow>
        </dl>
    </Card>
);

const ConfirmationReceiptPage = ({fulfillment, wisher, donor, wish, donation, userType, initialMessages = []}) => {

    const { auth } = usePage().props;
    const [messages, setMessages] = useState(initialMessages);
    const chatContainerRef = useRef(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [actionType, setActionType] = useState(null);



    // User data based on user type
    const currentUser = auth.user;
    //const otherUser = userType === 'wisher' ? donor : wisher;
    const otherUser = currentUser.id == donor.id ? wisher : donor;
    const donationItem = donation;
    const { data, setData, post, processing, reset } = useForm({
        message: '',
        fulfillment_id: fulfillment?.id || null,
        file: null,
    });
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // realtime message
    useEffect(() => {
        if (!window.Echo || !fulfillment?.id) return;
        //console.log(window.Echo.connector.pusher.connection.state)
        const privateChannel = `fulfillment.${fulfillment.id}`;

        const channel = window.Echo.private(privateChannel)
            .listen('.MessageSent', (e) => {
                //console.log('📨 Incoming message:', e.message);
                setMessages(prev => {
                    // prevent duplicates
                    if (prev.some(m => m.id == e.message.id)) {
                        return prev;
                    }
                    return [...prev, e.message];
                });
            });

        return () => {
            window.Echo.leave(privateChannel);
        };
    }, [fulfillment.id]);

    // online status check
    // In ConfirmationReceiptPage.jsx - updated presence channel useEffect
    useEffect(() => {
        if (!window.Echo || !fulfillment?.id) return;

        const presenceChannel = `presence-fulfillment.${fulfillment.id}`;

        const channel = window.Echo.join(presenceChannel)
            .here(users => {
                setOnlineUsers(users.map(u => u.id));
            })
            .joining(user => {
                setOnlineUsers(prev =>
                    prev.includes(user.id) ? prev : [...prev, user.id]
                );
            })
            .leaving(user => {
                setOnlineUsers(prev => prev.filter(id => id != user.id));
            })
            .error((error) => {
            });

        return () => {
            window.Echo.leave(presenceChannel);
        };
    }, [fulfillment.id, currentUser.id]);


    //const isUserOnline = (userId) => onlineUsers.includes(userId);
    const isUserOnline = (userId) => {
        return onlineUsers.includes(userId);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        post(route('wish.fulfill.message.store'), {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
        });
    };




    const actionForm = useForm({
        comment: '',
        media: [],
        id: fulfillment.id,
    });

    const isAdmin = checkAdmin(userType);
    const isDonorSide = fulfillment.wish.user_id != currentUser.id;    // contributor actions
    const isWisherSide = fulfillment.donation.user_id != currentUser.id; // wisher actions
    const openAction = (type) => { setActionType(type); setShowActionModal(true); };
    const closeAction = () => { setShowActionModal(false); setActionType(null); actionForm.reset(); };

    const markDelivered = async () => {
        if (await confirmDialog({ title: 'Mark as delivered', message: 'Are you sure you want to mark this as delivered?', confirmLabel: 'Mark As Delivered' })) {
            router.get(route('wish.fulfill.status.change', { fulfilment_id: wish.latest_fulfillment?.id, status: 'delivered' }));
        }
    };

    // What the current user can do next (same rules as before, grouped in one place)
    const nextStep = (() => {
        if (isAdmin) {
            return fulfillment.status != 'completed'
                ? { text: 'You can confirm this fulfillment on behalf of the wisher.', action: <Button icon={faCircleCheck} onClick={() => openAction('confirm')}>Confirm receipt</Button> }
                : { text: 'This fulfillment is complete.', done: true };
        }
        const items = [];
        if (isDonorSide) {
            if (fulfillment.status == 'accepted_by_wisher') items.push({ text: 'The wisher accepted your gift. Mark it delivered once you have handed it over.', action: <Button icon={faTruck} onClick={markDelivered}>Mark as delivered</Button> });
            else if (fulfillment.status == 'delivered') items.push({ text: 'Waiting for the wisher to confirm they received the gift.' });
            else if (fulfillment.status == 'completed') items.push({ text: 'Fulfilled. Thank you for your kindness!', done: true });
        }
        if (isWisherSide) {
            if (fulfillment.status == 'delivered') items.push({
                text: 'The contributor marked the gift as delivered. Did you receive it?',
                action: (
                    <>
                        <Button icon={faCircleCheck} onClick={() => openAction('confirm')}>Confirm receipt</Button>
                        <Button variant="secondary" icon={faTriangleExclamation} onClick={() => openAction('issue')}>Report issue / request return</Button>
                    </>
                ),
            });
            else if (fulfillment.status == 'completed') items.push({ text: 'Completed. We hope you enjoy your gift!', done: true });
            else items.push({ text: getFulfilmentStatus(fulfillment.status) });
        }
        return items[0] || null;
    })();

    const statusBadge = <Badge tone={statusTone(fulfillment.status)}>{getFulfilmentStatus(fulfillment.status)}</Badge>;

    return (
        <AuthenticatedLayout>
            <Head title="Confirmation Receipt" />
            <AppPage className="space-y-6">
                <PageHeader
                    breadcrumbs={[{ label: 'Wishes', href: route(isAdmin || !isWisherSide ? 'wishes.index' : 'wish.fulfill.list') }, { label: 'Fulfillment' }]}
                    title={wish.title}
                    description={<span className="flex flex-wrap items-center gap-2">Fulfillment status: {statusBadge}</span>}
                />

                <FulfillmentProgressInline currentStatus={fulfillment.status} />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                    <div className="space-y-6 lg:col-span-3">
                        {nextStep && (
                            <Card className={nextStep.done ? 'border-success-100 bg-success-50/50' : 'border-primary-200 bg-primary-50/40'}>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{nextStep.action ? 'Next step' : 'Status'}</p>
                                <p className="mt-1 text-sm font-medium text-slate-900">{nextStep.text}</p>
                                {nextStep.action && <div className="mt-4 flex flex-wrap gap-2">{nextStep.action}</div>}
                            </Card>
                        )}

                        <Card>
                            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Wish</h2>
                            <div className="mt-3 flex items-start gap-4">
                                <SafeImage
                                    src={wish.featured_image?.file_path ? `/storage/${wish.featured_image.file_path}` : null}
                                    alt=""
                                    fallbackIcon={faStar}
                                    className="h-20 w-20 shrink-0 rounded-lg object-cover ring-1 ring-slate-200 [&>svg]:h-6 [&>svg]:w-6"
                                />
                                <div className="min-w-0">
                                    <p className="font-semibold text-slate-900">{wish.title}</p>
                                    <p className="mt-0.5 text-sm text-slate-600">Age {wish.age_range} yrs · {textLimit(wish.description, 10)}</p>
                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                        <Badge tone={statusTone(wish.status)} dot>{wish.status}</Badge>
                                        <span className="text-xs text-slate-500">{wish.created_at}</span>
                                    </div>
                                </div>
                            </div>
                            {wish.latest_fulfillment?.status && (
                                <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm ring-1 ring-inset ring-slate-200">
                                    <p className="font-medium text-slate-800">From {wish.latest_fulfillment?.donation?.user?.name}</p>
                                    {wish.latest_fulfillment?.note && <p className="mt-1 whitespace-pre-line text-slate-600">“{wish.latest_fulfillment.note}”</p>}
                                </div>
                            )}
                        </Card>

                        <div className={`grid grid-cols-1 gap-6 ${isAdmin ? 'md:grid-cols-2' : ''}`}>
                            {isAdmin ? (
                                <>
                                    <PersonCard title="Contributor" person={donor} />
                                    <PersonCard title="Wisher" person={wisher} />
                                </>
                            ) : fulfillment.donation.user_id != currentUser.id ? (
                                <PersonCard title="Contributor" person={donor} online={isUserOnline(donor.id)} />
                            ) : (
                                <PersonCard title="Wisher" person={wisher} online={isUserOnline(wisher.id)} />
                            )}
                        </div>
                    </div>

                    {/* Chat */}
                    <section className="lg:col-span-2" aria-labelledby="chat-title">
                        <div className="flex h-[32rem] flex-col overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card lg:sticky lg:top-20 lg:h-[calc(100vh-7rem)]">
                            <header className="border-b border-slate-100 px-4 py-3">
                                <div className="flex items-center justify-between gap-3">
                                    <h2 id="chat-title" className="flex items-center gap-2 text-base font-semibold text-slate-900">
                                        <FontAwesomeIcon icon={faMessage} className="h-4 w-4 text-primary-600" aria-hidden="true" />
                                        Messages
                                    </h2>
                                    {userType == 'admin' ? (
                                        <Badge icon={faShieldHalved}>Admin view</Badge>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <span className={`h-2 w-2 rounded-full ${isUserOnline(otherUser.id) ? 'bg-success-500' : 'bg-slate-300'}`} aria-hidden="true" />
                                            {otherUser.name} is {isUserOnline(otherUser.id) ? 'online' : 'offline'}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 text-xs text-slate-500">Between {wisher.name} and {donor.name}</p>
                            </header>

                            <div ref={chatContainerRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50/60 p-4" aria-live="polite">
                                {messages.length == 0 ? (
                                    <div className="flex h-full flex-col items-center justify-center text-center text-slate-500">
                                        <FontAwesomeIcon icon={faMessage} className="h-6 w-6 text-slate-300" aria-hidden="true" />
                                        <p className="mt-2 text-sm font-medium">No messages yet</p>
                                        <p className="text-xs">Start the conversation!</p>
                                    </div>
                                ) : (
                                    messages.map((message, index) => {
                                        const mine = message.sender_id == currentUser.id;
                                        return (
                                            <div key={index} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 ${mine ? 'rounded-br-md bg-primary-600 text-white' : 'rounded-bl-md bg-white text-slate-900 ring-1 ring-slate-200'}`}>
                                                    <div className={`flex items-baseline gap-2 text-[11px] ${mine ? 'text-primary-100' : 'text-slate-500'}`}>
                                                        <span className="font-semibold">{mine ? 'You' : message.sender?.name}</span>
                                                        <span>{new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    </div>
                                                    {message.message && <p className="mt-0.5 whitespace-pre-line break-words text-sm">{message.message}</p>}
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            {userType != 'admin' ? (
                                fulfillment.status != 'completed' ? (
                                    <form onSubmit={handleSendMessage} className="border-t border-slate-100 bg-white p-3">
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <div className="flex items-end gap-2">
                                            <textarea
                                                id="message"
                                                rows={2}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && !e.shiftKey && data.message.trim()) {
                                                        e.preventDefault();
                                                        handleSendMessage(e);
                                                    }
                                                }}
                                                placeholder="Type a message…"
                                                required
                                                className="form-control min-h-[2.75rem] flex-1 resize-none"
                                            />
                                            <Button type="submit" size="icon" className="h-11 w-11" loading={processing} aria-label="Send message">
                                                {!processing && <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" aria-hidden="true" />}
                                            </Button>
                                        </div>
                                        <p className="mt-1.5 text-[11px] text-slate-400">Enter to send · Shift+Enter for a new line</p>
                                    </form>
                                ) : (
                                    <p className="border-t border-slate-100 bg-white p-4 text-center text-sm text-slate-500">Chat is closed because the fulfillment is complete.</p>
                                )
                            ) : (
                                <p className="flex items-center gap-2 border-t border-slate-100 bg-white p-4 text-xs text-slate-500">
                                    <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5" aria-hidden="true" />
                                    As an admin you can follow the conversation but not take part in it.
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            </AppPage>

            <Modal show={showActionModal} onClose={closeAction} maxWidth="lg">
                <form
                    className="p-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        actionForm.post(actionType == 'confirm' ? route('fulfillment.confirm', fulfillment.id) : route('fulfillment.issue', fulfillment.id), {
                            forceFormData: true,
                            onSuccess: () => {
                                actionForm.reset();
                                setShowActionModal(false);
                                setActionType(null);
                            },
                        });
                    }}
                >
                    <div className="flex items-start gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${actionType == 'issue' && !isAdmin ? 'bg-danger-50 text-danger-600' : 'bg-success-50 text-success-600'}`}>
                            <FontAwesomeIcon icon={actionType == 'issue' && !isAdmin ? faTriangleExclamation : faCircleCheck} className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                {isAdmin ? 'Confirm wish fulfillment' : actionType == 'confirm' ? 'Confirm receipt' : 'Report issue / request return'}
                            </h2>
                            {!isAdmin && (
                                <p className="mt-1 text-sm text-slate-600">
                                    {actionType == 'confirm' ? 'Please confirm that you received the gift successfully.' : 'Please describe the issue clearly so we can review it.'}
                                </p>
                            )}
                        </div>
                    </div>
                    <TextareaInput
                        id="action_comment"
                        className="mt-5"
                        label={actionType == 'confirm' ? 'Confirmation comment' : 'Issue description'}
                        required
                        value={actionForm.data.comment}
                        onChange={(e) => actionForm.setData('comment', e.target.value)}
                        error={actionForm.errors.comment}
                        placeholder={actionType == 'confirm' ? 'Write your confirmation message…' : 'Wrong item, damaged, not received…'}
                    />
                    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <Button variant="secondary" onClick={closeAction}>Cancel</Button>
                        <Button type="submit" variant={actionType === 'issue' && !isAdmin ? 'danger' : 'primary'} loading={actionForm.processing}>
                            {isAdmin ? 'Confirm fulfillment' : actionType === 'confirm' ? 'Confirm receipt' : 'Submit issue'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default ConfirmationReceiptPage;
