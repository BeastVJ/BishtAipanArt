import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ChevronLeft, Star, Shield, Truck, Minus, Plus } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';
import products from '../data/products.json';

const ProductDetail = () => {
    const { slug } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('story');
    const [selectedImage, setSelectedImage] = useState(0);
    const { addItem } = useCartStore();
    const { toggleItem, isInWishlist } = useWishlistStore();

    const product = products.find(p => p.slug === slug);
    const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
    const wished = isInWishlist(product?.id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">Product not found</h1>
                    <Link to="/shop" className="btn-primary">Back to Shop</Link>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product, 1);
        }
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const tabs = [
        { id: 'story', label: 'The Story' },
        { id: 'motif', label: 'The Motif' },
        { id: 'artisan', label: 'The Artisan' },
        { id: 'details', label: 'Details' },
    ];

    return (
        <>
            <SEO title={product.name} description={product.shortDescription} />

            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link to="/" className="hover:text-geru-red">Home</Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-geru-red">Shop</Link>
                        <span>/</span>
                        <span className="text-charcoal">{product.name}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <div>
                            <div className="aspect-square bg-warm-sand rounded-sm overflow-hidden relative group">
                                {product.images && product.images[0] ? (
                                    <img src={product.images[selectedImage] || product.images[0]} alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">🎨</div>
                                )}
                                {discount > 0 && (
                                    <div className="absolute top-4 left-4 bg-geru-red text-rice-white text-sm font-bold px-3 py-1">
                                        -{discount}%
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-rice-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-charcoal">
                                    Handmade in Uttarakhand
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <p className="text-sm text-geru-red uppercase tracking-wider font-medium mb-2">
                                {product.category?.replace('-', ' ')}
                            </p>
                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">{product.name}</h1>

                            {product.artisan && (
                                <p className="text-sm text-gray-500 mb-4">by {product.artisan} · {product.artisanVillage}</p>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-muted-gold text-muted-gold' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
                                <span className="text-sm text-green-600 font-medium">In Stock</span>
                            </div>

                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="font-heading text-4xl font-bold text-geru-red">₹{product.price?.toLocaleString()}</span>
                                {product.originalPrice > product.price && (
                                    <>
                                        <span className="text-xl text-gray-400 line-through">₹{product.originalPrice?.toLocaleString()}</span>
                                        <span className="text-sm text-green-600 font-medium">{discount}% off</span>
                                    </>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8">{product.shortDescription}</p>

                            {/* Quantity & Actions */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center border border-gray-200">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-geru-red transition-colors">
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-geru-red transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <button onClick={handleAddToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
                                    <ShoppingBag className="w-4 h-4" />
                                    Add to Cart
                                </button>
                                <button onClick={() => toggleItem(product)}
                                    className="p-3 border border-gray-200 hover:border-geru-red hover:text-geru-red transition-all">
                                    <Heart className={`w-5 h-5 ${wished ? 'fill-geru-red text-geru-red' : ''}`} />
                                </button>
                            </div>

                            {/* Shipping Badges */}
                            <div className="grid grid-cols-3 gap-4 p-4 bg-warm-sand/30 mb-8">
                                <div className="text-center">
                                    <Truck className="w-5 h-5 mx-auto mb-1 text-geru-red" />
                                    <p className="text-xs text-gray-600">Free shipping</p>
                                    <p className="text-[10px] text-gray-400">on orders above ₹1,000</p>
                                </div>
                                <div className="text-center">
                                    <Shield className="w-5 h-5 mx-auto mb-1 text-geru-red" />
                                    <p className="text-xs text-gray-600">Authentic</p>
                                    <p className="text-[10px] text-gray-400">GI-tagged products</p>
                                </div>
                                <div className="text-center">
                                    <svg className="w-5 h-5 mx-auto mb-1 text-geru-red" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-xs text-gray-600">Easy returns</p>
                                    <p className="text-[10px] text-gray-400">7-day exchange</p>
                                </div>
                            </div>

                            <AipanDivider variant="dots" />

                            {/* Tabs */}
                            <div className="mt-6">
                                <div className="flex border-b border-gray-200">
                                    {tabs.map(tab => (
                                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                            className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-geru-red' : 'text-gray-500 hover:text-charcoal'}`}>
                                            {tab.label}
                                            {activeTab === tab.id && (
                                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-geru-red" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <div className="py-4 min-h-[120px]">
                                    {activeTab === 'story' && (
                                        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                                    )}
                                    {activeTab === 'motif' && (
                                        <div>
                                            <h4 className="font-medium text-charcoal mb-2">{product.motif}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{product.motifMeaning}</p>
                                        </div>
                                    )}
                                    {activeTab === 'artisan' && (
                                        <div>
                                            <h4 className="font-medium text-charcoal mb-2">{product.artisan}</h4>
                                            <p className="text-sm text-gray-600">{product.artisanVillage}</p>
                                            <p className="text-xs text-gray-500 mt-1">Each piece is unique. Minor variations are the signature of handmade art.</p>
                                        </div>
                                    )}
                                    {activeTab === 'details' && (
                                        <div className="space-y-2 text-sm">
                                            <p><span className="font-medium text-charcoal">Materials:</span> {product.materials}</p>
                                            <p><span className="font-medium text-charcoal">Dimensions:</span> {product.dimensions}</p>
                                            <p><span className="font-medium text-charcoal">Care:</span> {product.careInstructions}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <AipanDivider variant="dots" />
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">You May Also Like</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {relatedProducts.map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
