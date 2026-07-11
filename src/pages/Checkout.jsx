import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Truck, CreditCard, MapPin, Check, Lock, ShoppingBag } from 'lucide-react';
import useCartStore from '../context/cartStore';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';
import { sendTelegramNotification, formatOrderMessage } from '../services/telegramService';

const Checkout = () => {
    const navigate = useNavigate();
    const { items, subtotal, shipping, total } = useCartStore();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [orderId, setOrderId] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'cod',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const steps = [
        { number: 1, label: 'Information', icon: MapPin },
        { number: 2, label: 'Payment', icon: CreditCard },
        { number: 3, label: 'Review', icon: Check },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const newOrderId = 'ORD-' + Date.now();
        setOrderId(newOrderId);

        // Send Telegram notification
        const orderDetails = {
            customerName: `${formData.firstName} ${formData.lastName}`,
            items: items,
            total: total,
            paymentMethod: formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment',
            phone: formData.phone,
            address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
            orderId: newOrderId,
        };
        const message = formatOrderMessage(orderDetails);
        await sendTelegramNotification(message);

        setIsSubmitting(false);
        setIsSuccess(true);
        localStorage.removeItem('bisht_cart');
        window.dispatchEvent(new Event('bisht_cart_updated'));
    };

    if (isSuccess) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center section-padding">
                <div className="text-center max-w-lg">
                    <motion.div className="w-20 h-20 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                        <Check className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-geru-red mb-2">Order Placed! 🌸</h1>
                    <p className="text-sm text-gray-500 mb-2">Order #{orderId}</p>
                    <p className="text-gray-600 mb-6">
                        Thank you for your order! You'll receive a confirmation shortly. Your Aipan art is being prepared with devotion in Kumaon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
                        <Link to="/order-tracking" className="btn-secondary">Track Order</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center section-padding">
                <div className="text-center">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">Your cart is empty</h1>
                    <Link to="/shop" className="btn-primary">Shop Now</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO title="Checkout" description="Complete your purchase" />

            <div className="pt-28 md:pt-32 section-padding bg-gray-50/50">
                <div className="container-custom max-w-6xl">
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-geru-red mb-2">Checkout</h1>
                    </div>

                    {/* Steps */}
                    <div className="flex items-center justify-center gap-0 mb-10">
                        {steps.map((s, i) => (
                            <div key={s.number} className="flex items-center">
                                <div className={`flex items-center gap-2 ${step >= s.number ? 'text-geru-red' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${step >= s.number ? 'bg-geru-red text-rice-white' : 'bg-gray-200 text-gray-500'}`}>
                                        {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                                    </div>
                                    <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className={`w-12 md:w-20 h-0.5 mx-2 ${step > s.number ? 'bg-geru-red' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div key="step1" className="bg-white rounded-sm shadow-soft p-6 md:p-8"
                                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                                                <MapPin className="w-5 h-5 text-geru-red" /> Shipping Information
                                            </h2>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First name" className="input-field" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last name" className="input-field" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="input-field" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                                                    <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Street address" className="input-field" />
                                                </div>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                                        <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="City" className="input-field" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                                                        <select name="state" value={formData.state} onChange={handleChange} required className="input-field">
                                                            <option value="">Select</option>
                                                            <option value="Uttarakhand">Uttarakhand</option>
                                                            <option value="Delhi">Delhi</option>
                                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                            <option value="Maharashtra">Maharashtra</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                                                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required placeholder="263653" className="input-field" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                                        <input type="text" value="India" disabled className="input-field bg-gray-50" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div key="step2" className="bg-white rounded-sm shadow-soft p-6 md:p-8"
                                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                                                <CreditCard className="w-5 h-5 text-geru-red" /> Payment Method
                                            </h2>
                                            <div className="space-y-3">
                                                {[
                                                    { value: 'cod', label: 'Cash on Delivery', desc: 'Pay when you receive', icon: '💵' },
                                                    { value: 'upi', label: 'UPI', desc: 'Google Pay, PhonePe, Paytm', icon: '📱' },
                                                    { value: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, Rupay', icon: '💳' },
                                                    { value: 'netbanking', label: 'Net Banking', desc: 'All major Indian banks', icon: '🏦' },
                                                ].map((method) => (
                                                    <label key={method.value}
                                                        className={`flex items-center gap-4 p-4 border cursor-pointer transition-all ${formData.paymentMethod === method.value ? 'border-geru-red bg-geru-red/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                        <input type="radio" name="paymentMethod" value={method.value}
                                                            checked={formData.paymentMethod === method.value} onChange={handleChange} className="accent-geru-red" />
                                                        <span className="text-2xl">{method.icon}</span>
                                                        <div>
                                                            <p className="font-medium text-sm text-charcoal">{method.label}</p>
                                                            <p className="text-xs text-gray-500">{method.desc}</p>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                            <div className="mt-6 bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                                                <p className="font-medium mb-1">🔒 Secure Payment</p>
                                                <p className="text-amber-700">Your payment information is encrypted and processed securely.</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div key="step3" className="bg-white rounded-sm shadow-soft p-6 md:p-8"
                                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                            <h2 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                                                <Check className="w-5 h-5 text-geru-red" /> Review Your Order
                                            </h2>
                                            <div className="bg-gray-50 p-4 mb-4">
                                                <h3 className="font-medium text-sm mb-2">Shipping To:</h3>
                                                <p className="text-sm text-gray-600">
                                                    {formData.firstName} {formData.lastName}<br />
                                                    {formData.address}<br />
                                                    {formData.city}, {formData.state} - {formData.pincode}<br />
                                                    {formData.email} | {formData.phone}
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 p-4 mb-4">
                                                <h3 className="font-medium text-sm mb-2">Payment Method:</h3>
                                                <p className="text-sm text-gray-600 capitalize">{formData.paymentMethod.replace(/-/g, ' ')}</p>
                                            </div>
                                            <div className="space-y-3 mb-4">
                                                <h3 className="font-medium text-sm">Items ({items.reduce((s, i) => s + i.quantity, 0)})</h3>
                                                {items.map((item) => (
                                                    <div key={item.id} className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-warm-sand rounded overflow-hidden flex-shrink-0">
                                                            {item.images?.[0] ? <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">🎨</div>}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-charcoal truncate">{item.name}</p>
                                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                        </div>
                                                        <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="flex items-center justify-between mt-6">
                                    {step > 1 ? (
                                        <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-gray-600 hover:text-geru-red transition-colors">
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                    ) : (
                                        <Link to="/cart" className="flex items-center gap-2 text-gray-600 hover:text-geru-red transition-colors">
                                            <ChevronLeft className="w-4 h-4" /> Return to Cart
                                        </Link>
                                    )}
                                    <button type="submit" disabled={isSubmitting} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            <>{step === 3 ? 'Place Order' : 'Continue'} <ChevronRight className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Order Summary Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-sm shadow-soft p-6 sticky top-28">
                                    <h3 className="font-heading text-xl font-bold text-geru-red mb-4">Order Summary</h3>
                                    <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex items-center gap-3">
                                                <div className="w-14 h-14 bg-warm-sand rounded overflow-hidden flex-shrink-0">
                                                    {item.images?.[0] ? <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">🎨</div>}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-charcoal truncate">{item.name}</p>
                                                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                </div>
                                                <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <AipanDivider variant="line" />
                                    <div className="space-y-2 mt-4 text-sm">
                                        <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
                                        <div className="border-t pt-2 flex justify-between text-lg font-bold"><span>Total</span><span className="text-geru-red">₹{total.toLocaleString()}</span></div>
                                    </div>
                                    <div className="mt-6 text-xs text-gray-500 space-y-2">
                                        <div className="flex items-center gap-2"><Truck className="w-3.5 h-3.5" /><span>Free shipping above ₹1,000</span></div>
                                        <div className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /><span>Secure SSL encrypted</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;
