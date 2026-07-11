import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import AipanBorder from '../components/aipan/AipanBorder';
import SEO from '../components/SEO';

const About = () => {
    return (
        <>
            <SEO title="About Us" description="Learn about BishtAipanArt and our mission to preserve Kumaoni Aipan art" />
            <div className="pt-28 md:pt-32">
                <section className="bg-gradient-to-b from-warm-sand/50 to-rice-white py-16">
                    <div className="container-custom text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Our Story</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            From the sacred courtyards of Kumaon to the world — a journey of preserving ancient art, empowering artisans, and sharing the blessings of the mountains.
                        </p>
                        <AipanDivider />
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container-custom max-w-4xl">
                        <div className="prose max-w-none">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                                <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">Born in the Mountains</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    BishtAipanArt was born from a simple belief — that the ancient art of Aipan, practiced by Kumaoni women for centuries, deserves a place in the modern world. Founded by Vijay Bisht in the hills of Dwarahat, Almora, our mission is to preserve this sacred tradition while providing sustainable livelihoods to the women artisans who keep it alive.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Every piece in our collection is handcrafted using traditional methods — from preparing the Geru base to drawing intricate patterns with rice paste. We work directly with over 20 master artisans across Uttarakhand, ensuring fair wages and respecting the cultural integrity of each motif.
                                </p>
                            </motion.div>
                            <AipanDivider variant="dots" />
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                                <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">Our Values</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Authenticity', icon: '🪷', desc: 'Every piece is created using traditional methods and natural materials, just as they have been for generations.' },
                                        { title: 'Empowerment', icon: '🤝', desc: 'We work directly with rural women artisans, providing fair wages and preserving their invaluable skills.' },
                                        { title: 'Heritage', icon: '🏔️', desc: 'We are committed to preserving the cultural and spiritual significance of each Aipan motif.' },
                                    ].map((v) => (
                                        <div key={v.title} className="bg-warm-sand/20 p-6 text-center">
                                            <span className="text-3xl mb-3 block">{v.icon}</span>
                                            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{v.title}</h3>
                                            <p className="text-sm text-gray-600">{v.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <div className="text-center">
                                <Link to="/aipan-heritage" className="btn-primary">
                                    Explore Aipan Heritage <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
