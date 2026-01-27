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
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                <div className="container-fluid px-4 sm:px-6 lg:px-8 mx-auto relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Get in <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            We're here to help answer your questions and support your journey with ThreeWish.
                            Whether you need assistance or want to partner with us, we'd love to hear from you.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-blue-700 font-medium">Support team available</span>
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
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Direct Contact
                                </h2>
                                <div className="space-y-6">
                                    <div
                                        className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">General Inquiries</h3>
                                            <a href="mailto:hello@threewish.org"
                                               className="text-blue-600 hover:text-blue-700 text-lg">
                                                hello@threewish.org
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-600" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Support Hotline</h3>
                                            <a href="tel:+11234567890"
                                               className="text-blue-600 hover:text-blue-700 text-lg">
                                                +1 (123) 456-7890
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">24/7 support for urgent
                                                matters</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-purple-600" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Partnership
                                                Inquiries</h3>
                                            <a href="mailto:partners@threewish.org"
                                               className="text-blue-600 hover:text-blue-700 text-lg">
                                                partners@threewish.org
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">For organizations &
                                                collaborations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Info */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Visit Our Office
                                </h2>
                                <div
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                    {/* Map Placeholder */}
                                    <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div
                                                    className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-blue-600" fill="currentColor"
                                                         viewBox="0 0 20 20">
                                                        <path fillRule="evenodd"
                                                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700 font-medium">Google Map Integration
                                                    Here</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Office Details */}
                                    <div className="p-6 md:p-8">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Address</h4>
                                                    <p className="text-gray-600">
                                                        123 Giving Avenue, Suite 500<br/>
                                                        San Francisco, CA 94107<br/>
                                                        United States
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Contact Hours</h4>
                                                    <p className="text-gray-600">
                                                        Monday - Friday: 9:00 AM - 6:00 PM PST<br/>
                                                        Saturday: 10:00 AM - 4:00 PM PST<br/>
                                                        Sunday: Closed
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth={2}
                                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Note</h4>
                                                    <p className="text-gray-600">
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
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        Send us a Message
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email Field (Optional) */}
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address <span className="text-gray-400">(Optional)</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label htmlFor="phone"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        {/* Subject Field */}
                                        <div>
                                            <label htmlFor="subject"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                                                placeholder="Tell us how we can help you..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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

                                        <p className="text-center text-gray-500 text-sm">
                                            We typically respond within 24 hours. For urgent matters, please call
                                            our support hotline.
                                        </p>
                                    </form>

                                    {/* Additional Info */}
                                    <div className="mt-8 pt-8 border-t border-gray-100">
                                        <h4 className="font-semibold text-gray-900 mb-3">Other Ways to Connect</h4>
                                        <div className="flex space-x-4">
                                            <a href="#"
                                               className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </a>
                                            <a href="#"
                                               className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                                </svg>
                                            </a>
                                            <a href="#"
                                               className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
                                                <span className="sr-only">Instagram</span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
