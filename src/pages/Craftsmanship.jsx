import { motion } from 'framer-motion';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Craftsmanship = () => {
    const steps = [
        { title: 'Sourcing the Geru', desc: 'The rich red clay, known as Geru, is sourced from the riverbanks of Kumaon. It is dried, powdered, and mixed with water to create the sacred base.' },
        { title: 'Preparing the Surface', desc: 'The Geru paste is applied to the surface with a cloth, creating a smooth, even base. This is traditionally done on the floors and walls of Kumaoni homes.' },
        { title: 'Making Rice Paste', desc: 'Rice flour is soaked overnight and ground to a fine paste. This white paste, applied using a finger or a thin stick, forms the intricate patterns.' },
        { title: 'Drawing the Geometry', desc: 'The artisan begins with a central point and expands outward in concentric circles and geometric patterns. Every line is drawn freehand.' },
        { title: 'Adding Sacred Motifs', desc: 'Lotus petals, Swastik symbols, and sacred footprints are added. Each motif has specific placement and meaning in the composition.' },
        { title: 'Finishing & Blessing', desc: 'The completed Aipan is offered a small prayer. The piece is left to dry naturally and then prepared for its new home.' },
    ];

    return (
        <>
            <SEO title="Craftsmanship" description="The art and process behind Kumaoni Aipan" />
            <div className="pt-28 md:pt-32">
                <section className="bg-gradient-to-b from-warm-sand/50 to-rice-white py-16 text-center">
                    <div className="container-custom">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Our Craftsmanship</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Every piece is a labour of love, carrying forward a tradition that has been passed down through generations of Kumaoni women.</p>
                        <AipanDivider />
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container-custom max-w-4xl">
                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-geru-red rounded-full flex items-center justify-center">
                                        <span className="font-heading text-lg font-bold text-rice-white">0{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Craftsmanship;
