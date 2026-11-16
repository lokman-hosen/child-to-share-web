import React, { useState } from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faClock, faCircleInfo, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import PageHero from "@/Components/UI/PageHero";
import Field from "@/Components/UI/Field";
import Button from "@/Components/UI/Button";
import { SOCIALS } from "@/Components/Common/Footer.jsx";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission will be implemented later
        console.log('Form submitted:', formData);
    };

    return (
        <GuestLayout>
            <Head title="Contact Us"/>

            <PageHero
                eyebrow="Contact"
                title="Get in Touch"
                description="We're here to help answer your questions and support your journey with ThreeWish. Whether you need assistance or want to partner with us, we'd love to hear from you."
            >
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-primary-700 shadow-xs ring-1 ring-primary-100">
                    <span className="h-2 w-2 rounded-full bg-success-600" aria-hidden="true" />
                    Support team available
                </span>
            </PageHero>

            <div className="container-page grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                {/* Left: contact info */}
                <div className="space-y-8 lg:col-span-5">
                    <section aria-labelledby="direct-contact">
                        <h2 id="direct-contact" className="text-xl font-bold tracking-tight text-slate-900">Direct Contact</h2>
                        <ul className="mt-4 space-y-3">
                            <li className="flex gap-4 rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-slate-900">General Inquiries</h3>
                                    <a href="mailto:info@threewish.org" className="text-primary-700 hover:underline">info@threewish.org</a>
                                    <p className="mt-0.5 text-sm text-slate-500">Response within 24 hours</p>
                                </div>
                            </li>
                            <li className="flex gap-4 rounded-card border border-slate-200/80 bg-white p-5 shadow-card">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                                    <FontAwesomeIcon icon={faPhone} className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Support Hotline</h3>
                                    <a href="tel:+8801794146555" className="text-primary-700 hover:underline">+880 1794 1465 55</a>
                                    <p className="mt-0.5 text-sm text-slate-500">24/7 support for urgent matters</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section aria-labelledby="visit-office">
                        <h2 id="visit-office" className="text-xl font-bold tracking-tight text-slate-900">Visit Our Office</h2>
                        <div className="mt-4 overflow-hidden rounded-card border border-slate-200/80 bg-white shadow-card">
                            <div className="relative aspect-[16/10] bg-slate-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1667131625422!2d90.3882138!3d23.741433699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b945a28f3e5b%3A0xb9984bbe703dec07!2sHashimukh%20Somaj%20Kallayan%20Songstha!5e0!3m2!1sen!2sbd!4v1769917575795!5m2!1sen!2sbd"
                                    className="absolute inset-0 h-full w-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Hashimukh Somaj Kallayan Songstha Location"
                                />
                            </div>
                            <dl className="divide-y divide-slate-100 p-5">
                                <div className="flex gap-3 pb-4">
                                    <FontAwesomeIcon icon={faLocationDot} className="mt-1 h-4 w-4 text-primary-600" aria-hidden="true" />
                                    <div>
                                        <dt className="font-semibold text-slate-900">Address</dt>
                                        <dd className="text-sm text-slate-600">101, Central Road, Dhanmondi, Dhaka, Bangladesh</dd>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-4">
                                    <FontAwesomeIcon icon={faClock} className="mt-1 h-4 w-4 text-primary-600" aria-hidden="true" />
                                    <div>
                                        <dt className="font-semibold text-slate-900">Contact Hours</dt>
                                        <dd className="text-sm text-slate-600">
                                            Sunday - Thursday: 9:00 AM - 6:00 PM PST<br/>
                                            Friday and Sunday: Closed
                                        </dd>
                                    </div>
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <FontAwesomeIcon icon={faCircleInfo} className="mt-1 h-4 w-4 text-primary-600" aria-hidden="true" />
                                    <div>
                                        <dt className="font-semibold text-slate-900">Note</dt>
                                        <dd className="text-sm text-slate-600">
                                            Appointments are recommended for in-person visits.
                                            Please contact us in advance to ensure availability.
                                        </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </section>
                </div>

                {/* Right: form */}
                <div className="lg:col-span-7">
                    <div className="rounded-card border border-slate-200/80 bg-white p-6 shadow-card sm:p-8 lg:sticky lg:top-24">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Send us a Message</h2>
                        <p className="mt-1 text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>

                        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field id="name" label="Full Name" required className="sm:col-span-2">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                       className="form-control" placeholder="John Doe" required autoComplete="name" />
                            </Field>
                            <Field id="email" label={<>Email Address <span className="font-normal text-slate-500">(Optional)</span></>}>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                       className="form-control" placeholder="john@example.com" autoComplete="email" />
                            </Field>
                            <Field id="phone" label="Phone Number" required>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                                       className="form-control" placeholder="+880 1794 1465 55" required autoComplete="tel" />
                            </Field>
                            <Field id="subject" label="Subject" required className="sm:col-span-2">
                                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-control" required>
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                    <option value="other">Other</option>
                                </select>
                            </Field>
                            <Field id="message" label="Message" required className="sm:col-span-2">
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                          rows={5} className="form-control" placeholder="Tell us how we can help you..." required />
                            </Field>
                            <div className="sm:col-span-2">
                                <Button type="submit" size="lg" className="w-full" iconRight={faPaperPlane}>Send Message</Button>
                                <p className="mt-3 text-center text-sm text-slate-500">
                                    We typically respond within 24 hours. For urgent matters, please call our support hotline.
                                </p>
                            </div>
                        </form>

                        <div className="mt-8 border-t border-slate-100 pt-6">
                            <h3 className="text-sm font-semibold text-slate-900">Other Ways to Connect</h3>
                            <ul className="mt-3 flex gap-3">
                                {SOCIALS.map((s) => (
                                    <li key={s.label}>
                                        <a href={s.href} target="_blank" rel="noopener noreferrer"
                                           className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700">
                                            <span className="sr-only">{s.label} (opens in a new tab)</span>
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={s.path} /></svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default ContactPage;
