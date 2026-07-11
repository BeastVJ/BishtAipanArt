/**
 * API Service Layer
 * Provides a clean interface for all backend API calls.
 * Currently uses mock data/localStorage. When a real backend is connected,
 * update the base URL and replace mockRequest with real fetch calls.
 */

const API_BASE = import.meta.env.VITE_API_URL || '';

const mockRequest = async (endpoint, options = {}) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockResponses = {
        'GET /products': { data: [], status: 200 },
        'POST /auth/login': { data: { token: 'mock-token', user: { id: 1, name: 'User' } }, status: 200 },
        'POST /auth/register': { data: { token: 'mock-token', user: { id: 1 } }, status: 201 },
        'POST /orders': { data: { id: 'ORD-' + Date.now(), status: 'confirmed' }, status: 201 },
        'POST /contact': { data: { message: 'Message sent successfully' }, status: 200 },
        'POST /newsletter': { data: { message: 'Subscribed successfully' }, status: 200 },
    };

    const key = `${options.method || 'GET'} ${endpoint}`;
    const response = mockResponses[key] || { data: null, status: 404 };

    if (response.status >= 400) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.data;
};

export const api = {
    // Products
    getProducts: async (params) => mockRequest('/products'),
    getProduct: async (slug) => mockRequest(`/products/${slug}`),
    getCategories: async () => mockRequest('/categories'),

    // Auth
    login: async (credentials) => mockRequest('/auth/login', { method: 'POST', body: credentials }),
    register: async (userData) => mockRequest('/auth/register', { method: 'POST', body: userData }),

    // Orders
    createOrder: async (orderData) => mockRequest('/orders', { method: 'POST', body: orderData }),
    getOrders: async () => mockRequest('/orders'),
    trackOrder: async (orderId) => mockRequest(`/orders/${orderId}/track`),

    // Contact & Newsletter
    submitContact: async (formData) => mockRequest('/contact', { method: 'POST', body: formData }),
    subscribeNewsletter: async (email) => mockRequest('/newsletter', { method: 'POST', body: { email } }),

    // Custom Orders
    submitCustomOrder: async (orderData) => mockRequest('/custom-orders', { method: 'POST', body: orderData }),
};

export default api;
