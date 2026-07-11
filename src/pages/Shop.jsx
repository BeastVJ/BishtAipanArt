import { useState, useMemo } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, List, X, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';
import products from '../data/products.json';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [sortBy, setSortBy] = useState('featured');

    const params = useParams();
    const activeCategory = params.category || searchParams.get('category') || 'all';

    const categories = [
        { value: 'all', label: 'All Products' },
        { value: 'wall-art', label: 'Wall Art' },
        { value: 'pooja', label: 'Pooja Collection' },
        { value: 'home-decor', label: 'Home Decor' },
        { value: 'accessories', label: 'Accessories' },
        { value: 'jewellery', label: 'Jewellery' },
    ];

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Category filter
        if (activeCategory !== 'all') {
            filtered = filtered.filter(p => p.category === activeCategory);
        }

        // Search
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.artisan?.toLowerCase().includes(q) ||
                p.motif?.toLowerCase().includes(q)
            );
        }

        // Price filter
        filtered = filtered.filter(p =>
            p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
                break;
            case 'discount':
                filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
                break;
            default:
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return filtered;
    }, [activeCategory, searchQuery, priceRange, sortBy]);

    const setCategory = (cat) => {
        if (cat === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    return (
        <>
            <SEO title="Shop" description="Browse our collection of handcrafted Aipan art from Uttarakhand" />

            <div className="pt-28 md:pt-32">
                {/* Header */}
                <div className="bg-gradient-to-b from-warm-sand/50 to-rice-white py-8">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">Shop</h1>
                                <p className="text-gray-500 text-sm mt-1">{filteredProducts.length} products found</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative flex-1 md:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2 border border-gray-200 bg-rice-white text-sm focus:border-geru-red focus:ring-1 focus:ring-geru-red focus:outline-none"
                                    />
                                </div>
                                <button onClick={() => setShowFilters(!showFilters)}
                                    className="p-2 border border-gray-200 hover:border-geru-red hover:text-geru-red transition-colors lg:hidden">
                                    <SlidersHorizontal className="w-4 h-4" />
                                </button>
                                <div className="hidden sm:flex border border-gray-200">
                                    <button onClick={() => setViewMode('grid')}
                                        className={`p-2 ${viewMode === 'grid' ? 'bg-geru-red text-rice-white' : 'hover:text-geru-red'}`}>
                                        <Grid3X3 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => setViewMode('list')}
                                        className={`p-2 ${viewMode === 'list' ? 'bg-geru-red text-rice-white' : 'hover:text-geru-red'}`}>
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-gray-200 bg-rice-white px-3 py-2 text-sm focus:outline-none focus:border-geru-red">
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="newest">Newest First</option>
                                    <option value="discount">Biggest Discount</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <AipanDivider variant="line" />

                {/* Main Content */}
                <div className="section-padding">
                    <div className="container-custom">
                        <div className="flex gap-8">
                            {/* Desktop Filters Sidebar */}
                            <aside className={`lg:w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} lg:block`}>
                                <div className="space-y-6 sticky top-28">
                                    {/* Categories */}
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Categories</h3>
                                        <div className="space-y-1">
                                            {categories.map((cat) => (
                                                <button key={cat.value} onClick={() => setCategory(cat.value)}
                                                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${activeCategory === cat.value ? 'bg-geru-red/10 text-geru-red font-medium' : 'text-gray-600 hover:text-geru-red hover:bg-gray-50'}`}>
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Price Range</h3>
                                        <div className="space-y-2">
                                            <input type="range" min="0" max="5000" step="100"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="w-full accent-geru-red" />
                                            <div className="flex justify-between text-sm text-gray-500">
                                                <span>₹{priceRange[0].toLocaleString()}</span>
                                                <span>₹{priceRange[1].toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Availability</h3>
                                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                            <input type="checkbox" className="accent-geru-red" defaultChecked />
                                            In Stock Only
                                        </label>
                                    </div>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <div className="flex-1">
                                {filteredProducts.length === 0 ? (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-warm-sand rounded-full flex items-center justify-center">
                                            <Search className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <h3 className="font-heading text-xl font-bold text-charcoal mb-2">No products found</h3>
                                        <p className="text-gray-500 text-sm mb-4">Try adjusting your filters or search terms.</p>
                                        <button onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                                            className="btn-primary text-sm">
                                            Clear All Filters
                                        </button>
                                    </div>
                                ) : (
                                    <div className={viewMode === 'grid'
                                        ? 'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'
                                        : 'space-y-4'}>
                                        {filteredProducts.map((product) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
