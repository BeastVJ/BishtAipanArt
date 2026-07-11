import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../context/authStore';
import SEO from '../components/SEO';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <SEO title="Login" />
            <div className="pt-28 md:pt-32 min-h-screen flex items-center justify-center section-padding">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-soft p-8">
                        <div className="text-center mb-8">
                            <h1 className="font-heading text-3xl font-bold text-geru-red mb-2">Welcome Back</h1>
                            <p className="text-gray-500 text-sm">Sign in to your account</p>
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" placeholder="••••••••" />
                            </div>
                            <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:opacity-50">
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-500 mt-6">
                            Don't have an account? <Link to="/register" className="text-geru-red hover:underline">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
