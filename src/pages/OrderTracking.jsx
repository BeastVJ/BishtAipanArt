import { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, Search } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSearched(true);
    };

    const timeline = [
        { status: 'confirmed', label: 'Order Confirmed', date: 'July 10, 2026', icon: CheckCircle, completed: true },
        { status: 'processing', label: 'Being Crafted', date: 'July 12, 2026', icon: Clock, completed: true },
        { status: 'shipped', label: 'Shipped', date: 'Expected July 15', icon: Truck, completed: false },
        { status: 'delivered', label: 'Delivered', date: 'Expected July 18', icon: Package, completed: false },
    ];

    return (
        <>
            <SEO title="Order Tracking" />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom max-w-2xl">
                    <div className="text-center mb-10">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Track Your Order</h1>
                        <p className="text-gray-600">Enter your order ID to check the status of your Aipan art.</p>
                        <AipanDivider />
                    </div>

                    <form onSubmit={handleSubmit} className="flex gap-3 mb-12">
                        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)}
                            placeholder="Enter order ID (e.g., ORD-1712345678)"
                            className="input-field flex-1" required />
                        <button type="submit" className="btn-primary flex items-center gap-2">
                            <Search className="w-4 h-4" /> Track
                        </button>
                    </form>

                    {isSearched && orderId && (
                        <div className="bg-white shadow-soft p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="font-heading text-xl font-bold text-charcoal">Order #{orderId}</h2>
                                    <p className="text-sm text-gray-500">Placed on July 10, 2026</p>
                                </div>
                                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 font-medium">In Production</span>
                            </div>

                            <div className="relative">
                                {timeline.map((step, i) => (
                                    <div key={step.status} className="flex gap-4 pb-8 last:pb-0 relative">
                                        {i < timeline.length - 1 && (
                                            <div className={`absolute left-4 top-10 w-0.5 h-full -z-10 ${step.completed ? 'bg-geru-red' : 'bg-gray-200'}`} />
                                        )}
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${step.completed ? 'bg-geru-red text-rice-white' : 'bg-gray-200 text-gray-400'}`}>
                                            <step.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className={`font-medium ${step.completed ? 'text-charcoal' : 'text-gray-400'}`}>{step.label}</p>
                                            <p className="text-xs text-gray-500">{step.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {isSearched && !orderId && (
                        <p className="text-center text-gray-500">Please enter a valid order ID.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default OrderTracking;
