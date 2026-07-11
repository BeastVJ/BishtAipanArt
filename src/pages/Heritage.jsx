import { motion } from 'framer-motion';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Heritage = () => {
    return (
        <>
            <SEO title="Aipan Heritage" description="Discover the cultural heritage of Kumaoni Aipan art from Uttarakhand" />
            <div className="pt-28 md:pt-32">
                <section className="bg-gradient-to-b from-warm-sand/50 to-rice-white py-16 text-center">
                    <div className="container-custom">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Aipan Heritage</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the sacred art of Kumaoni Aipan — a tradition that has adorned the thresholds of Uttarakhand for centuries.</p>
                        <AipanDivider />
                    </div>
                </section>
                <section className="section-padding">
                    <div className="container-custom max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">What is Aipan?</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">Aipan is a traditional ritual folk art of the Kumaon region of Uttarakhand, India. Created using Geru (red clay) and rice paste, these intricate geometric patterns are drawn on floors and walls during festivals, ceremonies, and special occasions.</p>
                            <p className="text-gray-600 leading-relaxed">Unlike other Indian folk arts, Aipan is characterized by its geometric precision, symmetry, and the exclusive use of red and white — representing the sacred and the pure. Each pattern has a specific meaning and is associated with particular deities and occasions.</p>
                        </motion.div>
                        <AipanDivider variant="dots" />
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">GI Tag Recognition</h2>
                            <p className="text-gray-600 leading-relaxed">In 2022, Aipan art received the prestigious Geographical Indication (GI) tag, recognizing its unique cultural heritage and origin in the Kumaon region of Uttarakhand. This recognition helps protect the art form and supports the artisan communities who have preserved it for generations.</p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Heritage;
