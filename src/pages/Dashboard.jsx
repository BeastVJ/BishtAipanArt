import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, MapPin, Settings, LogOut, CreditCard } from 'lucide-react';
import useAuthStore from '../context/authStore';
import SEO from '../components/SEO';

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const [activeTab, setActiveTab] = useState('orders');

    const tabs = [
        { id: 'orders', label: 'My Orders', icon: Package },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const stats = [
        { label: 'Total Orders', value: '3' },
        { label: 'Wishlist', value: '5' },
        { label: 'Custom Orders', value: '1' },
    ];

    if (!user) {
        return (
            <div className="pt-28 md:pt-32 min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">Please sign in</h1>
                    <Link to="/login" className="btn-primary">Sign In</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO title="My Dashboard" />
            <div className="pt-28 md:pt-32 section-padding bg-gray-50/50">
                <div className="container-custom">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-geru-red rounded-full flex items-center justify-center">
                            <span className="font-heading text-2xl font-bold text-rice-white">{user.name?.[0] || 'U'}</span>
                        </div>
                        <div>
                            <h1 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">Hello, {user.name || 'User'}</h1>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white shadow-soft p-4 text-center">
                                <p className="text-2xl font-bold text-geru-red">{stat.value}</p>
                                <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 border-b border-gray-200 mb-6">
                        {tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? 'border-geru-red text-geru-red' : 'border-transparent text-gray-500 hover:text-charcoal'}`}>
                                <tab.icon className="w-4 h-4" /> {tab.label}
                            </button>
                        ))}
                        <button onClick={logout} className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-red-500 hover:text-red-600 ml-auto">
                            <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                    </div>

                    {activeTab === 'orders' && (
                        <div className="bg-white shadow-soft p-6">
                            <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Recent Orders</h2>
                            <p className="text-sm text-gray-500">No orders yet. Start exploring our collection!</p>
                            <Link to="/shop" className="btn-primary mt-4 inline-block">Browse Products</Link>
                        </div>
                    )}
                    {activeTab === 'wishlist' && (
                        <div className="bg-white shadow-soft p-6">
                            <h2 className="font-heading text-xl font-bold text-charcoal mb-4">Saved Items</h2>
                            <p className="text-sm text-gray-500">Your wishlist is empty.</p>
                            <Link to="/wishlist" className="btn-primary mt-4 inline-block">View Wishlist</Link>
                        </div>
                    )}
                    {(activeTab === 'addresses' || activeTab === 'settings') && (
                        <div className="bg-white shadow-soft p-6">
                            <h2 className="font-heading text-xl font-bold text-charcoal mb-4">{activeTab === 'addresses' ? 'Saved Addresses' : 'Account Settings'}</h2>
                            <p className="text-sm text-gray-500">Coming soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
