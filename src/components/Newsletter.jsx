import { useState } from 'react';

const Newsletter = ({ variant = 'default', className = '' }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <div className={`${className}`}>
            {isSubmitted ? (
                <div className="text-center py-4">
                    <p className="text-green-600 font-medium">Thank you for subscribing! 🌸</p>
                    <p className="text-sm text-gray-500 mt-1">We'll send you stories from the mountains.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 bg-rice-white text-sm focus:border-geru-red focus:ring-1 focus:ring-geru-red focus:outline-none"
                    />
                    <button type="submit" className="btn-primary whitespace-nowrap">
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
};

export default Newsletter;
