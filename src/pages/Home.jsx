import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronRight, Play, Heart } from 'lucide-react';
import AipanMandala from '../components/aipan/AipanMandala';
import AipanDivider from '../components/aipan/AipanDivider';
import AipanBorder from '../components/aipan/AipanBorder';
import AipanMotif from '../components/aipan/AipanMotif';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
import products from '../data/products.json';

const Home = () => {
    const featuredProducts = products.filter(p => p.featured).slice(0, 4);
    const newProducts = products.filter(p => p.newArrival).slice(0, 4);

    const categories = [
        { name: 'Wall Art', desc: 'Canvas & framed artwork', path: '/shop/wall-art', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400' },
        { name: 'Pooja Collection', desc: 'Sacred ritual items', path: '/shop/pooja', image: 'https://images.unsplash.com/photo-1605792657661-596af7809f3a?w=400' },
        { name: 'Home Decor', desc: 'Decorative Aipan pieces', path: '/shop/home-decor', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400' },
        { name: 'Accessories', desc: 'Bags, bookmarks & more', path: '/shop/accessories', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400' },
        { name: 'Jewellery', desc: 'Handcrafted adornments', path: '/shop/jewellery', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' },
        { name: 'Custom Aipan', desc: 'Made just for you', path: '/custom-aipan', image: '' },
    ];

    const artisans = [
        { name: 'Pushpa Negi', village: 'Almora', years: 25, speciality: 'Saraswati Chowki', story: 'Learned Aipan from her mother at age 8. Now teaches the art to young girls in her village.' },
        { name: 'Geeta Bisht', village: 'Dwarahat', years: 30, speciality: 'Lakshmi Chowki', story: 'A master artisan whose work has been featured in exhibitions across India.' },
        { name: 'Deepa Joshi', village: 'Nainital', years: 18, speciality: 'Lotus Mandala', story: 'Brings modern aesthetics to traditional Aipan without losing its spiritual essence.' },
    ];

    const testimonials = [
        { name: 'Priya Sharma', rating: 5, text: 'The Lakshmi Chowki wall art is absolutely stunning. You can feel the devotion in every line.', product: 'Lakshmi Chowki Wall Art' },
        { name: 'Rahul Verma', rating: 5, text: 'Ordered a custom wedding piece. Geeta ma\'am captured our story beautifully in Aipan.', product: 'Custom Wedding Aipan' },
        { name: 'Ananya Patel', rating: 5, text: 'The quality and craftsmanship exceeded my expectations. A true piece of Kumaon in my home.', product: 'Pooja Chowki' },
    ];

    const motifs = [
        { name: 'Lotus', meaning: 'Symbolizes purity, spiritual awakening, and divine beauty. In Aipan, the lotus represents the unfolding of consciousness.' },
        { name: 'Lakshmi Footprints', meaning: 'Sacred footprints of Goddess Lakshmi, inviting prosperity and abundance into the home.' },
        { name: 'Diya', meaning: 'The lamp symbolizes light overcoming darkness, knowledge triumphing over ignorance.' },
        { name: 'Saraswati Chowki', meaning: 'A sacred geometric pattern dedicated to the goddess of knowledge, music, and arts.' },
        { name: 'Nav Durga', meaning: 'Nine forms of the divine feminine, representing protection, strength, and spiritual power.' },
        { name: 'Swastik', meaning: 'An ancient symbol of auspiciousness, good fortune, and the eternal nature of the universe.' },
    ];

    return (
        <>
            <SEO title="Home" description="Premium handcrafted Kumaoni Aipan folk art from Uttarakhand. Traditional wall art, pooja chowkis, and cultural artwork." />

            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-geru-red via-deep-geru to-charcoal">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
                        <AipanMandala size={800} animated />
                    </div>
                </div>
                <div className="relative z-10 container-custom text-center py-32">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <p className="text-muted-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
                            Traditional Kumaoni Aipan Art
                        </p>
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-rice-white mb-6 leading-tight">
                            Art Born in the
                            <span className="block text-muted-gold">Mountains</span>
                        </h1>
                        <p className="text-rice-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4">
                            Traditional Kumaoni Aipan, reimagined for modern living.
                        </p>
                        <p className="font-devanagari text-muted-gold text-lg md:text-xl mb-10">
                            हर रेखा में पहाड़ की आशीष
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/shop" className="btn-primary bg-rice-white text-geru-red hover:bg-warm-sand text-base px-8 py-4">
                                Explore Collection
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-rice-white text-rice-white font-medium text-base uppercase tracking-wider hover:bg-rice-white hover:text-geru-red transition-all">
                                Discover Our Story
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rice-white to-transparent" />
            </section>

            {/* ===== AIPAN STORY SECTION ===== */}
            <section className="section-padding bg-rice-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="aspect-[4/5] bg-warm-sand rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1605792657661-596af7809f3a?w=600" alt="Aipan Art" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-geru-red/10 rounded-full flex items-center justify-center">
                                <AipanMandala size={120} animated />
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Our Heritage</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6">
                                More Than Art.<br />A Living Tradition.
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Born in the courtyards of Kumaon, Aipan is more than a folk art — it is a spiritual practice,
                                a mother's blessing, and a connection to the mountains. For generations, Kumaoni women have
                                drawn these sacred patterns on Geru-red floors using rice paste, invoking divine blessings
                                for every occasion.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Today, BishtAipanArt brings this ancient tradition to the world, transforming ephemeral
                                floor art into lasting treasures that carry the soul of Uttarakhand.
                            </p>
                            <Link to="/aipan-heritage" className="btn-primary">
                                Explore the Heritage
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SHOP BY CATEGORY ===== */}
            <section className="section-padding bg-warm-sand/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Collections</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3">Shop by Category</h2>
                        <AipanDivider />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((cat, i) => (
                            <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <Link to={cat.path} className="group block">
                                    <div className="aspect-square bg-warm-sand rounded-sm overflow-hidden relative">
                                        {cat.image ? (
                                            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-geru-red/10">
                                                <AipanMandala size={80} />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="font-heading text-lg font-bold text-rice-white">{cat.name}</h3>
                                            <p className="text-xs text-gray-300 mt-1">{cat.desc}</p>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-geru-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED COLLECTION ===== */}
            <section className="section-padding bg-rice-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Featured</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3">Crafted by Hand. Made with Meaning.</h2>
                        <AipanDivider />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/shop" className="btn-primary">
                            View All Products
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== MEANING BEHIND THE MOTIF ===== */}
            <section className="section-padding bg-gradient-to-b from-charcoal to-deep-geru text-rice-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-muted-gold text-sm tracking-[0.3em] uppercase font-medium">Sacred Symbols</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-rice-white mt-3">Meaning Behind the Motif</h2>
                        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Hover over each motif to discover its cultural significance in Kumaoni tradition.</p>
                        <AipanDivider variant="line" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {motifs.map((motif) => (
                            <AipanMotif key={motif.name} name={motif.name} meaning={motif.meaning} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MEET THE ARTISANS ===== */}
            <section className="section-padding bg-warm-sand/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Artisans</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3">Meet the Artisans</h2>
                        <AipanDivider />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {artisans.map((artisan, i) => (
                            <motion.div key={artisan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                className="bg-rice-white p-6 aipan-product-frame group">
                                <div className="w-20 h-20 bg-warm-sand rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="font-heading text-2xl font-bold text-geru-red">{artisan.name.split(' ')[0][0]}{artisan.name.split(' ')[1][0]}</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-charcoal text-center">{artisan.name}</h3>
                                <p className="text-sm text-geru-red text-center font-medium">{artisan.village}, Uttarakhand</p>
                                <p className="text-xs text-gray-500 text-center mt-1">{artisan.years} Years of Experience</p>
                                <p className="text-xs text-muted-gold text-center mt-1 font-medium">Specialist: {artisan.speciality}</p>
                                <p className="text-sm text-gray-600 text-center mt-3 leading-relaxed">"{artisan.story}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CRAFT PROCESS ===== */}
            <section className="section-padding bg-rice-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Process</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3">The Craft Process</h2>
                        <AipanDivider />
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: '01', title: 'Preparing the Geru Base', desc: 'Red clay mixed with water, applied as the sacred foundation.' },
                            { step: '02', title: 'Creating Rice Paste', desc: 'Rice flour mixed with water to the perfect consistency.' },
                            { step: '03', title: 'Drawing Sacred Geometry', desc: 'Freehand patterns drawn with precision and devotion.' },
                            { step: '04', title: 'Hand Detailing', desc: 'Each line is perfected with traditional tools.' },
                            { step: '05', title: 'Finishing the Artwork', desc: 'The piece is blessed and prepared for its new home.' },
                        ].map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-warm-sand/20 aipan-product-frame group">
                                <div className="w-12 h-12 bg-geru-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="font-heading text-lg font-bold text-rice-white">{step.step}</span>
                                </div>
                                <h4 className="font-heading text-lg font-bold text-charcoal mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== UTTARAKHAND STORY ===== */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920" alt="Uttarakhand Mountains" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/90" />
                </div>
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <p className="font-devanagari text-muted-gold text-xl mb-4">कुमाऊँ की पवित्र धरती से</p>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-rice-white mb-6">
                            From the courtyards of Kumaon<br />to homes around the world.
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                            Every piece carries the blessings of the Himalayas and the devotion of our artisans.
                        </p>
                        <Link to="/craftsmanship" className="btn-primary bg-rice-white text-geru-red hover:bg-warm-sand">
                            Explore Our Craft
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section-padding bg-rice-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-geru-red text-sm tracking-[0.3em] uppercase font-medium">Testimonials</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mt-3">What Our Customers Say</h2>
                        <AipanDivider />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-warm-sand/30 p-6 aipan-product-frame">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-muted-gold text-muted-gold" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 italic mb-4">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-geru-red/10 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-geru-red">{t.name[0]}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-charcoal">{t.name}</p>
                                        <p className="text-xs text-gray-500">Purchased: {t.product}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== NEWSLETTER ===== */}
            <section className="section-padding bg-gradient-to-r from-geru-red to-deep-ochre text-rice-white">
                <div className="container-custom text-center">
                    <div className="max-w-lg mx-auto">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Stories From The Mountains</h2>
                        <p className="text-rice-white/80 mb-8">Receive stories of art, artisans and new collections.</p>
                        <Newsletter variant="hero" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
