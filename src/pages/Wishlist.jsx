import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import useWishlistStore from '../context/wishlistStore';
import useCartStore from '../context/cartStore';
import SEO from '../components/SEO';

const Wishlist = () => {
    const { items, removeItem } = useWishlistStore();
    const { addItem } = useCartStore();

    const handleAddToCart = (product) => {
        addItem(product);
        removeItem(product.id);
    };

    return (
        <>
            <SEO title="Wishlist" description="Your saved items" />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">My Wishlist</h1>
                            <p className="text-gray-500 text-sm mt-1">{items.length} saved item{items.length !== 1 ? 's' : ''}</p>
                        </div>
                        <Link to="/shop" className="text-sm text-geru-red hover:underline">Browse Products</Link>
                    </div>

                    {items.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-warm-sand rounded-full flex items-center justify-center">
                                <Heart className="w-10 h-10 text-gray-400" />
                            </div>
                            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">Your wishlist is empty</h2>
                            <p className="text-gray-500 mb-8">Save your favorite Aipan art pieces here.</p>
                            <Link to="/shop" className="btn-primary">Discover Art</Link>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {items.map((product) => (
                                <div key={product.id} className="card card-hover aipan-product-frame overflow-hidden">
                                    <Link to={`/product/${product.slug}`} className="block">
                                        <div className="aspect-square bg-warm-sand overflow-hidden">
                                            {product.images?.[0] ? (
                                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-4xl">🎨</div>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="p-4">
                                        <p className="text-xs text-geru-red/70 uppercase tracking-wider mb-1">{product.category?.replace('-', ' ')}</p>
                                        <Link to={`/product/${product.slug}`} className="font-heading text-lg font-bold text-charcoal hover:text-geru-red transition-colors">
                                            {product.name}
                                        </Link>
                                        <p className="text-lg font-bold text-geru-red mt-2">₹{product.price?.toLocaleString()}</p>
                                        <div className="flex gap-2 mt-4">
                                            <button onClick={() => handleAddToCart(product)} className="btn-primary flex-1 text-xs flex items-center justify-center gap-1">
                                                <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                                            </button>
                                            <button onClick={() => removeItem(product.id)} className="p-2 border border-gray-200 hover:border-red-300 hover:text-red-500 transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Wishlist;
