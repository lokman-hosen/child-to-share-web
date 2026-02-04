import React, {useState} from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import { Head, Link } from "@inertiajs/react";

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
            <Head title="About ThreeWish - Our Mission & Vision"/>

            {/* Hero Section */}
            <section className="relative py-5 md:py-5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
                            Get in <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral mb-8">
                            We're here to help answer your questions and support your journey with ThreeWish.
                            Whether you need assistance or want to partner with us, we'd love to hear from you.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-primary font-medium">Support team available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Contact Information */}
                        <div>
                            {/* Direct Contact Info */}
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
                                    Direct Contact
                                </h2>
                                <div className="space-y-6">
                                    <div
                                        className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-accent mb-1">General Inquiries</h3>
                                            <a href="mailto:info@threewish.org"
                                               className="text-primary hover:text-primary/80 text-lg">
                                                info@threewish.org
                                            </a>
                                            <p className="text-neutral text-sm mt-1">Response within 24 hours</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-secondary" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-accent mb-1">Support Hotline</h3>
                                            <a href="tel:+8801794146555"
                                               className="text-primary hover:text-primary/80 text-lg">
                                                +880 1794 1465 55
                                            </a>
                                            <p className="text-neutral text-sm mt-1">24/7 support for urgent
                                                matters</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Info */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
                                    Visit Our Office
                                </h2>
                                <div
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                    {/* Map Section - Simplified */}
                                    <div className="w-full relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1667131625422!2d90.3882138!3d23.741433699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b945a28f3e5b%3A0xb9984bbe703dec07!2sHashimukh%20Somaj%20Kallayan%20Songstha!5e0!3m2!1sen!2sbd!4v1769917575795!5m2!1sen!2sbd"
                                            className="absolute top-0 left-0 w-full h-full border-0"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Hashimukh Somaj Kallayan Songstha Location"
                                        />
                                    </div>

                                    {/* Office Details */}
                                    <div className="p-6 md:p-8">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-neutral mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-accent">Address</h4>
                                                    <p className="text-neutral">
                                                        101, Central Road, Dhanmondi, Dhaka, Bangladesh
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-neutral mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-accent">Contact Hours</h4>
                                                    <p className="text-neutral">
                                                        Sunday - Thursday: 9:00 AM - 6:00 PM PST<br/>
                                                        {/*Saturday: 10:00 AM - 4:00 PM PST<br/>*/}
                                                        Friday and Sunday: Closed
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-neutral mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-accent">Note</h4>
                                                    <p className="text-neutral">
                                                        Appointments are recommended for in-person visits.
                                                        Please contact us in advance to ensure availability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <div className="sticky top-8">
                                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                                        Send us a Message
                                    </h2>
                                    <p className="text-neutral mb-8">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium text-accent mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email Field (Optional) */}
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium text-accent mb-2">
                                                Email Address <span className="text-neutral/60">(Optional)</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-neutral/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label htmlFor="phone"
                                                   className="block text-sm font-medium text-accent mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                                                placeholder="+880 1794 1465 55"
                                            />
                                        </div>

                                        {/* Subject Field */}
                                        <div>
                                            <label htmlFor="subject"
                                                   className="block text-sm font-medium text-accent mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-neutral/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="support">Technical Support</option>
                                                <option value="partnership">Partnership Opportunity</option>
                                                <option value="feedback">Feedback & Suggestions</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message"
                                                   className="block text-sm font-medium text-accent mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 border border-neutral/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
                                                placeholder="Tell us how we can help you..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                        >
                                            <span className="flex items-center justify-center">
                                                Send Message
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                                </svg>
                                            </span>
                                        </button>

                                        <p className="text-center text-neutral text-sm">
                                            We typically respond within 24 hours. For urgent matters, please call
                                            our support hotline.
                                        </p>
                                    </form>

                                    {/* Additional Info */}
                                    <div className="mt-8 pt-8 border-t border-neutral/10">
                                        <h4 className="font-semibold text-accent mb-3">Other Ways to Connect</h4>
                                        <div className="flex space-x-4">
                                            <a target="_blank" href="https://www.facebook.com/profile.php?id=61586854725530"
                                               className="text-neutral/60 hover:text-primary transition-colors duration-200">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </a>
                                            <a target="_blank" href="https://x.com/ThreeWishOrg"
                                               className="text-neutral/60 hover:text-primary/80 transition-colors duration-200">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                                </svg>
                                            </a>
                                            <a target="_blank" href="https://www.linkedin.com/company/three-wish/"
                                               className="text-neutral/60 hover:text-secondary transition-colors duration-200">
                                                <span className="sr-only">Linkedin</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
};

export default ContactPage;