import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-rice-white">
            <div className="text-center max-w-lg px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#A83B2C" strokeWidth="1" opacity="0.3"
                            strokeDasharray="500" strokeDashoffset="500">
                            <animate attributeName="stroke-dashoffset" from="500" to="0" dur="2s" fill="freeze" />
                        </circle>
                        <circle cx="100" cy="100" r="50" fill="none" stroke="#A83B2C" strokeWidth="1.5" opacity="0.5"
                            strokeDasharray="314" strokeDashoffset="314">
                            <animate attributeName="stroke-dashoffset" from="314" to="0" dur="2s" begin="0.5s" fill="freeze" />
                        </circle>
                        <circle cx="100" cy="100" r="20" fill="none" stroke="#A83B2C" strokeWidth="2" opacity="0.7"
                            strokeDasharray="125" strokeDashoffset="125">
                            <animate attributeName="stroke-dashoffset" from="125" to="0" dur="1s" begin="1s" fill="freeze" />
                        </circle>
                        <line x1="20" y1="20" x2="80" y2="80" stroke="#A83B2C" strokeWidth="1" opacity="0.3"
                            strokeDasharray="85" strokeDashoffset="85">
                            <animate attributeName="stroke-dashoffset" from="85" to="0" dur="1s" begin="1.5s" fill="freeze" />
                        </line>
                        <line x1="180" y1="20" x2="120" y2="80" stroke="#A83B2C" strokeWidth="1" opacity="0.3"
                            strokeDasharray="85" strokeDashoffset="85">
                            <animate attributeName="stroke-dashoffset" from="85" to="0" dur="1s" begin="1.8s" fill="freeze" />
                        </line>
                    </svg>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-geru-red mb-4">404</h1>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        Looks like this path has not been drawn yet.
                    </p>
                    <p className="text-gray-500 mb-8">
                        The page you're looking for hasn't been painted into existence. Let's return to a place that has.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="btn-primary">Return Home</Link>
                        <Link to="/shop" className="btn-secondary">Browse Collections</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
