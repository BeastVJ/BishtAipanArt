import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, User, ChevronDown } from 'lucide-react';
import useCartStore from '../context/cartStore';
import AipanBorder from './aipan/AipanBorder';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    const itemCount = useCartStore((state) => state.items.reduce((sum, i) => sum + i.quantity, 0));

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/shop', label: 'Shop' },
        { path: '/custom-aipan', label: 'Custom Order' },
        { path: '/aipan-heritage', label: 'Heritage' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-rice-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            {/* Top Announcement Bar */}
            <div className="bg-geru-red text-rice-white text-xs text-center py-2 px-4">
                <span className="hidden sm:inline">✨ Free shipping on orders above ₹1,000 | </span>
                Handcrafted in Uttarakhand 🌄
            </div>

            {/* Main Navigation */}
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 -ml-2 text-charcoal hover:text-geru-red transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-geru-red rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-rice-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-geru-red rounded-full" />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-heading text-xl font-bold text-charcoal group-hover:text-geru-red transition-colors leading-tight">
                                BishtAipanArt
                            </h1>
                            <p className="text-[10px] text-gray-500 tracking-widest uppercase -mt-1">
                                Kumaoni Heritage
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${isActive(link.path) ? 'text-geru-red' : 'text-charcoal hover:text-geru-red'}`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-geru-red transition-all duration-300 ${isActive(link.path) ? 'w-4' : 'w-0 group-hover:w-4'}`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-1 md:gap-2">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-charcoal hover:text-geru-red transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        <Link to="/wishlist" className="relative p-2 text-charcoal hover:text-geru-red transition-colors" aria-label="Wishlist">
                            <Heart className="w-5 h-5" />
                        </Link>

                        <Link to="/cart" className="relative p-2 text-charcoal hover:text-geru-red transition-colors" aria-label="Cart">
                            <ShoppingBag className="w-5 h-5" />
                            {itemCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-geru-red text-rice-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {itemCount > 9 ? '9+' : itemCount}
                                </span>
                            )}
                        </Link>

                        <Link to="/login" className="p-2 text-charcoal hover:text-geru-red transition-colors" aria-label="Account">
                            <User className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Aipan Border */}
            <AipanBorder variant="dots" />

            {/* Search Bar */}
            {isSearchOpen && (
                <div className="bg-rice-white border-b border-gray-100 py-4">
                    <div className="container-custom">
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products, artisans, motifs..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-warm-sand/30 focus:border-geru-red focus:ring-1 focus:ring-geru-red focus:outline-none text-sm"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-rice-white border-t border-gray-100 shadow-lg">
                    <nav className="container-custom py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${isActive(link.path) ? 'text-geru-red bg-geru-red/5' : 'text-charcoal hover:text-geru-red hover:bg-warm-sand/50'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="border-t border-gray-100 pt-2 mt-2">
                            <Link to="/login" className="block px-4 py-3 text-sm font-medium text-charcoal hover:text-geru-red">
                                Sign In / Register
                            </Link>
                            <Link to="/order-tracking" className="block px-4 py-3 text-sm font-medium text-charcoal hover:text-geru-red">
                                Track Order
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
