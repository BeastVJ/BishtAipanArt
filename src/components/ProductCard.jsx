import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';

const ProductCard = ({ product, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useCartStore();
    const { toggleItem, isInWishlist } = useWishlistStore();
    const wished = isInWishlist(product.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(product);
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <Link
            to={`/product/${product.slug}`}
            className={`group block ${featured ? 'col-span-2 row-span-2' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card card-hover aipan-product-frame overflow-hidden relative">
                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-3 left-3 z-10 bg-geru-red text-rice-white text-xs font-bold px-2.5 py-1">
                        -{discount}%
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={handleToggleWishlist}
                    className="absolute top-3 right-3 z-10 w-9 h-9 bg-rice-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rice-white transition-all shadow-sm"
                    aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <Heart className={`w-4 h-4 transition-colors ${wished ? 'fill-geru-red text-geru-red' : 'text-gray-400'}`} />
                </button>

                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-warm-sand">
                    {product.images && product.images[0] ? (
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl">🎨</div>
                    )}

                    {/* Overlay Actions */}
                    <div className={`absolute inset-0 bg-charcoal/30 flex items-center justify-center gap-3 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            onClick={handleAddToCart}
                            className="w-11 h-11 bg-rice-white rounded-full flex items-center justify-center hover:bg-geru-red hover:text-rice-white transition-all"
                            aria-label="Add to cart"
                        >
                            <ShoppingBag className="w-5 h-5" />
                        </button>
                        <div className="w-11 h-11 bg-rice-white rounded-full flex items-center justify-center hover:bg-geru-red hover:text-rice-white transition-all">
                            <Eye className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Aipan hover pattern overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-geru-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Info */}
                <div className="p-4">
                    <p className="text-xs text-geru-red/70 uppercase tracking-wider mb-1 font-medium">
                        {product.category?.replace('-', ' ')}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-geru-red transition-colors line-clamp-2">
                        {product.name}
                    </h3>
                    {product.artisan && (
                        <p className="text-xs text-gray-500 mt-1">by {product.artisan}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold text-geru-red text-lg">
                            ₹{product.price?.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                                ₹{product.originalPrice?.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
