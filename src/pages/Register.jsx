import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../context/authStore';
import SEO from '../components/SEO';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        try {
            await register({ name, email, password });
            navigate('/dashboard');
        } catch {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <>
            <SEO title="Register" />
            <div className="pt-28 md:pt-32 min-h-screen flex items-center justify-center section-padding">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-soft p-8">
                        <div className="text-center mb-8">
                            <h1 className="font-heading text-3xl font-bold text-geru-red mb-2">Create Account</h1>
                            <p className="text-gray-500 text-sm">Join the BishtAipanArt community</p>
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" placeholder="At least 6 characters" />
                            </div>
                            <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:opacity-50">
                                {isLoading ? 'Creating account...' : 'Create Account'}
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-500 mt-6">
                            Already have an account? <Link to="/login" className="text-geru-red hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
