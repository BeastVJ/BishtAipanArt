import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Upload, Package, Palette, FileText, Send } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';
import { sendTelegramNotification, formatCustomOrderMessage } from '../services/telegramService';

const CustomAipanOrder = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        artworkType: '', size: '', occasion: '', colorPreference: '', budget: '',
        name: '', email: '', phone: '', description: '', agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const artworkTypes = [
        { value: 'wall-art', label: 'Wall Art', desc: 'Canvas or framed artwork' },
        { value: 'pooja-chowki', label: 'Pooja Chowki', desc: 'Sacred ritual platforms' },
        { value: 'aipan-thali', label: 'Aipan Thali', desc: 'Ritual plates' },
        { value: 'coasters', label: 'Coasters', desc: 'Set of coasters' },
        { value: 'tote-bag', label: 'Tote Bag', desc: 'Canvas tote' },
        { value: 'home-decor', label: 'Home Decor', desc: 'Custom decor pieces' },
        { value: 'jewellery', label: 'Jewellery', desc: 'Pendants, earrings' },
        { value: 'other', label: 'Other', desc: 'Something unique!' },
    ];

    const occasions = ['Wedding', 'Housewarming', 'Diwali', 'Pooja', 'Birthday', 'Corporate Gift', 'Anniversary', 'Other'];
    const sizes = [
        { value: 'small', label: 'Small (up to 8"x8")', price: '₹2,500' },
        { value: 'medium', label: 'Medium (12"x12" - 16"x16")', price: '₹3,000' },
        { value: 'large', label: 'Large (18"x18" - 24"x24")', price: '₹3,500' },
    ];
    const budgetRanges = [
        { value: '2500', label: '₹2,500 - ₹3,000' },
        { value: '3000', label: '₹3,000 - ₹3,500' },
        { value: '3500', label: '₹3,500+' },
        { value: 'custom', label: 'Custom Budget' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step < 4) { setStep(step + 1); return; }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const msg = formatCustomOrderMessage(formData);
        await sendTelegramNotification(msg);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center section-padding">
                <div className="text-center max-w-lg">
                    <motion.div className="w-20 h-20 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h1 className="font-heading text-3xl font-bold text-geru-red mb-4">Request Received! 🌸</h1>
                    <p className="text-gray-600 mb-4">Our artisans will review your requirements and get back to you within 24-48 hours with a detailed proposal.</p>
                    <a href="/shop" className="btn-primary">Browse Collections</a>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO title="Custom Aipan Order" description="Request a custom Aipan artwork piece" />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-10">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Custom Aipan Order</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Have a vision? Let our artisans bring it to life.</p>
                        <AipanDivider />
                    </div>
                    <div className="flex items-center justify-center gap-0 mb-10">
                        {['Choose', 'Style', 'Details', 'Review'].map((label, i) => (
                            <div key={label} className="flex items-center">
                                <div className={`flex items-center gap-2 ${step > i ? 'text-geru-red' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${step > i ? 'bg-geru-red text-rice-white' : step === i + 1 ? 'bg-geru-red text-rice-white' : 'bg-gray-200 text-gray-500'}`}>
                                        {step > i ? <Check className="w-4 h-4" /> : i + 1}
                                    </div>
                                    <span className="text-sm font-medium hidden sm:inline">{label}</span>
                                </div>
                                {i < 3 && <div className={`w-12 md:w-16 h-0.5 mx-2 ${step > i ? 'bg-geru-red' : 'bg-gray-200'}`} />}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" className="bg-white shadow-soft p-8"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Choose Your Artwork</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {artworkTypes.map((type) => (
                                            <label key={type.value} className={`p-5 border cursor-pointer transition-all ${formData.artworkType === type.value ? 'border-geru-red bg-geru-red/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                <div className="flex items-start gap-3">
                                                    <input type="radio" name="artworkType" value={type.value} checked={formData.artworkType === type.value} onChange={handleChange} className="accent-geru-red mt-1" />
                                                    <div><p className="font-medium text-charcoal">{type.label}</p><p className="text-xs text-gray-500 mt-1">{type.desc}</p></div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div key="step2" className="bg-white shadow-soft p-8"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Choose Your Style</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
                                            <div className="grid sm:grid-cols-3 gap-3">
                                                {sizes.map((size) => (
                                                    <label key={size.value} className={`p-4 border cursor-pointer transition-all ${formData.size === size.value ? 'border-geru-red bg-geru-red/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <div className="flex items-center gap-3">
                                                            <input type="radio" name="size" value={size.value} checked={formData.size === size.value} onChange={handleChange} className="accent-geru-red" />
                                                            <div><p className="text-sm text-charcoal">{size.label}</p><p className="text-xs text-geru-red font-medium">{size.price}</p></div>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Occasion</label>
                                            <div className="flex flex-wrap gap-2">
                                                {occasions.map((occ) => (
                                                    <button key={occ} type="button" onClick={() => setFormData(prev => ({ ...prev, occasion: occ }))}
                                                        className={`px-4 py-2 text-sm border transition-all ${formData.occasion === occ ? 'border-geru-red bg-geru-red/10 text-geru-red font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                                                        {occ}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Color Preference</label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Traditional Geru Red & White', 'Gold Accents', 'Modern Colors', 'Black & White', 'Earth Tones', 'Surprise Me!'].map((color) => (
                                                    <button key={color} type="button" onClick={() => setFormData(prev => ({ ...prev, colorPreference: color }))}
                                                        className={`px-4 py-2 text-sm border transition-all ${formData.colorPreference === color ? 'border-geru-red bg-geru-red/10 text-geru-red font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                                                        {color}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {step === 3 && (
                                <motion.div key="step3" className="bg-white shadow-soft p-8"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Tell Your Story</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Budget Range</label>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {budgetRanges.map((b) => (
                                                    <label key={b.value} className={`p-4 border cursor-pointer transition-all ${formData.budget === b.value ? 'border-geru-red bg-geru-red/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <div className="flex items-center gap-3">
                                                            <input type="radio" name="budget" value={b.value} checked={formData.budget === b.value} onChange={handleChange} className="accent-geru-red" />
                                                            <span className="text-sm text-charcoal">{b.label}</span>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Vision</label>
                                            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Tell us what you have in mind..." className="input-field" />
                                        </div>
                                        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="input-field" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="input-field" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {step === 4 && (
                                <motion.div key="step4" className="bg-white shadow-soft p-8"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">Review Your Request</h2>
                                    <div className="bg-gray-50 p-6 mb-6 space-y-4">
                                        {[
                                            { label: 'Artwork Type', value: formData.artworkType?.replace(/-/g, ' ') },
                                            { label: 'Size', value: formData.size },
                                            { label: 'Occasion', value: formData.occasion },
                                            { label: 'Color', value: formData.colorPreference },
                                            { label: 'Budget', value: budgetRanges.find(b => b.value === formData.budget)?.label || formData.budget },
                                            { label: 'Contact', value: `${formData.name} | ${formData.email}` },
                                        ].map((item) => (
                                            <div key={item.label} className="flex justify-between text-sm">
                                                <span className="text-gray-500">{item.label}</span>
                                                <span className="font-medium text-charcoal capitalize">{item.value}</span>
                                            </div>
                                        ))}
                                        {formData.description && (
                                            <div className="pt-4 border-t border-gray-200">
                                                <p className="text-xs text-gray-500 mb-1">Your Vision</p>
                                                <p className="text-sm text-gray-700">{formData.description}</p>
                                            </div>
                                        )}
                                    </div>
                                    <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="accent-geru-red mt-1" />
                                        <span>I understand that custom orders take 3-6 weeks and require a 50% advance payment.</span>
                                    </label>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="flex items-center justify-between mt-6">
                            {step > 1 ? (
                                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-gray-600 hover:text-geru-red">
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </button>
                            ) : <div />}
                            <button type="submit" disabled={isSubmitting || (step === 4 && !formData.agreeTerms)} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                                {isSubmitting ? 'Submitting...' : <>{step === 4 ? 'Submit Request' : 'Continue'} <ChevronRight className="w-4 h-4" /></>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CustomAipanOrder;
