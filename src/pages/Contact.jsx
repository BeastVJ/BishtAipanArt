import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { sendTelegramNotification, formatContactMessage } from '../services/telegramService';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            user_name: formData.name, user_email: formData.email,
            user_phone: formData.phone, subject: formData.subject, message: formData.message,
        };

        // Send Telegram notification
        const contactMsg = formatContactMessage(formData);
        await sendTelegramNotification(contactMsg);

        // Send email via EmailJS
        const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_b5a6mz8';
        const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_qbuxatj';
        const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FPKKrHjZRLyPXtUSo';
        emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey)
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            })
            .catch(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            });
    };

    return (
        <>
            <SEO title="Contact Us" description="Get in touch with BishtAipanArt" />
            <div className="pt-28 md:pt-32">
                <section className="bg-gradient-to-br from-warm-sand to-rice-white py-16 text-center">
                    <div className="container-custom">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Get in Touch</h1>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">Have questions about our products, custom orders, or wholesale inquiries? We'd love to hear from you.</p>
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-sm shadow-soft p-8">
                                    <h2 className="font-heading text-2xl font-bold text-geru-red mb-6">Send Us a Message</h2>
                                    {isSubmitted ? (
                                        <div className="bg-green-50 border border-green-400 p-8 text-center">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="font-heading text-xl font-bold text-green-800 mb-2">Message Sent Successfully! 🌸</h3>
                                            <p className="text-green-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="input-field" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="input-field" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                                    <select name="subject" value={formData.subject} onChange={handleChange} required className="input-field">
                                                        <option value="">Select a subject</option>
                                                        <option value="product">Product Inquiry</option>
                                                        <option value="custom">Custom Order Request</option>
                                                        <option value="wholesale">Wholesale/Bulk Orders</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell us how we can help you..." className="input-field" />
                                            </div>
                                            <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-sm shadow-soft p-6">
                                    <h3 className="font-heading text-xl font-bold text-geru-red mb-4">Contact Information</h3>
                                    <div className="space-y-4 text-sm">
                                        <p><span className="font-semibold">Email:</span> vijaybishta2004@gmail.com</p>
                                        <p><span className="font-semibold">Phone:</span> +91 9045236987</p>
                                        <p><span className="font-semibold">Location:</span> Dwarahat, Almora, Uttarakhand - 263653</p>
                                        <p><span className="font-semibold">Hours:</span> Mon-Sat, 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
