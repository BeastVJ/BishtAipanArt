import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Heart, ShoppingBag, ArrowLeft, Minus, Plus, Truck, Tag } from 'lucide-react';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Cart = () => {
    const { items, removeItem, updateQuantity, subtotal, shipping, total } = useCartStore();
    const { toggleItem } = useWishlistStore();
    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);

    const freeShippingThreshold = 1000;
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    const remainingForFree = freeShippingThreshold - subtotal;

    const handleMoveToWishlist = (item) => {
        toggleItem(item);
        removeItem(item.id);
    };

    const handleApplyCoupon = () => {
        if (coupon.toUpperCase() === 'AIPAN10') {
            setCouponApplied(true);
        }
    };

    if (items.length === 0) {
        return (
            <>
                <SEO title="Cart" description="Your shopping cart" />
                <div className="pt-28 md:pt-32 min-h-[70vh] flex items-center justify-center section-padding">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-6 bg-warm-sand rounded-full flex items-center justify-center">
                            <ShoppingBag className="w-10 h-10 text-gray-400" />
                        </div>
                        <h1 className="font-heading text-3xl font-bold text-charcoal mb-3">Your cart is empty</h1>
                        <p className="text-gray-500 mb-8">Looks like you haven't added any Aipan art to your cart yet.</p>
                        <Link to="/shop" className="btn-primary">Explore Collections</Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO title="Cart" description="Your shopping cart" />

            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">Shopping Cart</h1>
                            <p className="text-gray-500 text-sm mt-1">{items.length} item{items.length > 1 ? 's' : ''}</p>
                        </div>
                        <Link to="/shop" className="text-sm text-geru-red hover:underline flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Free Shipping Progress */}
                    <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-8">
                        <div className="flex items-center gap-2 text-sm text-amber-800 mb-2">
                            <Truck className="w-4 h-4" />
                            {shipping === 0 ? (
                                <span className="font-medium">You have free shipping! 🎉</span>
                            ) : (
                                <span>Add <span className="font-bold">₹{remainingForFree.toLocaleString()}</span> more for free shipping</span>
                            )}
                        </div>
                        <div className="w-full h-2 bg-amber-200 rounded-full overflow-hidden">
                            <div className="h-full bg-geru-red rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            <AnimatePresence>
                                {items.map((item) => (
                                    <motion.div key={item.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                        className="bg-white border border-gray-100 p-4 md:p-6 flex gap-4">
                                        <Link to={`/product/${item.slug}`} className="w-20 h-20 md:w-24 md:h-24 bg-warm-sand rounded-sm overflow-hidden flex-shrink-0">
                                            {item.images?.[0] ? (
                                                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-2xl">🎨</div>
                                            )}
                                        </Link>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <Link to={`/product/${item.slug}`} className="font-heading text-lg font-bold text-charcoal hover:text-geru-red transition-colors">
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-xs text-gray-500 mt-0.5">{item.artisan}</p>
                                                </div>
                                                <p className="font-bold text-geru-red text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border border-gray-200">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:text-geru-red transition-colors">
                                                        <Minus className="w-3.5 h-3.5" />
                                                    </button>
                                                    <span className="px-3 py-1.5 text-sm font-medium">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:text-geru-red transition-colors">
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button onClick={() => handleMoveToWishlist(item)} className="text-xs text-gray-500 hover:text-geru-red transition-colors flex items-center gap-1">
                                                        <Heart className="w-3.5 h-3.5" />
                                                        Save
                                                    </button>
                                                    <button onClick={() => removeItem(item.id)} className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-gray-100 p-6 sticky top-28">
                                <h2 className="font-heading text-xl font-bold text-charcoal mb-6">Order Summary</h2>

                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                                            {shipping === 0 ? 'FREE' : `₹${shipping}`}
                                        </span>
                                    </div>
                                    {couponApplied && (
                                        <div className="flex justify-between text-green-600">
                                            <span>Discount (AIPAN10)</span>
                                            <span>-₹250</span>
                                        </div>
                                    )}
                                    <AipanDivider variant="line" />
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span className="text-geru-red">₹{(couponApplied ? total - 250 : total).toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Coupon */}
                                <div className="mb-6">
                                    <div className="flex gap-2">
                                        <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)}
                                            placeholder="Coupon code" className="input-field flex-1 text-sm"
                                            disabled={couponApplied} />
                                        <button onClick={handleApplyCoupon} disabled={couponApplied || !coupon}
                                            className="btn-primary text-sm disabled:opacity-50">
                                            {couponApplied ? 'Applied' : 'Apply'}
                                        </button>
                                    </div>
                                    {couponApplied && (
                                        <p className="text-xs text-green-600 mt-1">Coupon AIPAN10 applied! ₹250 off.</p>
                                    )}
                                </div>

                                <Link to="/checkout" className="btn-primary w-full justify-center mb-3">
                                    Proceed to Checkout
                                </Link>
                                <Link to="/shop" className="block text-center text-sm text-gray-500 hover:text-geru-red transition-colors">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
