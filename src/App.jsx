import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AipanLoader from './components/aipan/AipanLoader';

// Lazy-load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const About = lazy(() => import('./pages/About'));
const Craftsmanship = lazy(() => import('./pages/Craftsmanship'));
const Heritage = lazy(() => import('./pages/Heritage'));
const CustomAipanOrder = lazy(() => import('./pages/CustomAipanOrder'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Policies = lazy(() => import('./pages/Policies'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const OrderTracking = lazy(() => import('./pages/OrderTracking'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-rice-white">
            <Header />
            <main className="flex-1">
                <Suspense fallback={
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <AipanLoader />
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Shop */}
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/shop/:category" element={<Shop />} />
                        <Route path="/product/:slug" element={<ProductDetail />} />

                        {/* Cart & Checkout */}
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/wishlist" element={<Wishlist />} />

                        {/* Info Pages */}
                        <Route path="/about" element={<About />} />
                        <Route path="/craftsmanship" element={<Craftsmanship />} />
                        <Route path="/aipan-heritage" element={<Heritage />} />
                        <Route path="/custom-aipan" element={<CustomAipanOrder />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />

                        {/* Policies */}
                        <Route path="/policies/:type" element={<Policies />} />

                        {/* Auth */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/order-tracking" element={<OrderTracking />} />

                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;
