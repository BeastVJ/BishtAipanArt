import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import AipanBorder from './aipan/AipanBorder';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: {
            title: 'Shop',
            links: [
                { label: 'All Products', path: '/shop' },
                { label: 'Wall Art', path: '/shop/wall-art' },
                { label: 'Pooja Collection', path: '/shop/pooja' },
                { label: 'Home Decor', path: '/shop/home-decor' },
                { label: 'Accessories', path: '/shop/accessories' },
                { label: 'Custom Aipan', path: '/custom-aipan' },
            ],
        },
        learn: {
            title: 'Learn',
            links: [
                { label: 'Our Story', path: '/about' },
                { label: 'Aipan Heritage', path: '/aipan-heritage' },
                { label: 'Craftsmanship', path: '/craftsmanship' },
                { label: 'Blog', path: '/blog' },
                { label: 'FAQ', path: '/faq' },
            ],
        },
        support: {
            title: 'Support',
            links: [
                { label: 'Contact Us', path: '/contact' },
                { label: 'Order Tracking', path: '/order-tracking' },
                { label: 'Shipping Policy', path: '/policies/shipping' },
                { label: 'Returns & Exchanges', path: '/policies/returns' },
                { label: 'Privacy Policy', path: '/policies/privacy' },
            ],
        },
    };

    return (
        <footer className="bg-charcoal text-gray-300">
            {/* Aipan Border */}
            <AipanBorder variant="dots" />

            {/* Main Footer Content */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-geru-red rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-rice-white rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-geru-red rounded-full" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-rice-white">BishtAipanArt</h3>
                                <p className="text-xs text-gray-500 tracking-widest uppercase">Kumaoni Heritage</p>
                            </div>
                        </Link>

                        <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Preserving the sacred art of Kumaoni Aipan from the mountains of Uttarakhand.
                            Every piece is handcrafted with devotion, carrying the blessings of the Himalayas.
                        </p>

                        <div className="space-y-3 text-sm">
                            <a href="mailto:vijaybishta2004@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-geru-red transition-colors">
                                <Mail className="w-4 h-4" />
                                vijaybishta2004@gmail.com
                            </a>
                            <a href="tel:+919045236987" className="flex items-center gap-2 text-gray-400 hover:text-geru-red transition-colors">
                                <Phone className="w-4 h-4" />
                                +91 9045236987
                            </a>
                            <p className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                Dwarahat, Almora, Uttarakhand
                            </p>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="font-heading text-lg font-bold text-rice-white mb-4">{section.title}</h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-gray-400 hover:text-geru-red transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>
                            &copy; {currentYear} BishtAipanArt. All rights reserved.
                            Made with <Heart className="w-3.5 h-3.5 inline text-geru-red fill-geru-red" /> in Kumaon.
                        </p>
                        <p className="font-devanagari text-xs text-gray-600">
                            हर रेखा में पहाड़ की आशीष
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
