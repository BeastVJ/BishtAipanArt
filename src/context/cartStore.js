import { create } from 'zustand';

// Load cart from localStorage
const loadCart = () => {
    try {
        const saved = localStorage.getItem('bisht_cart');
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

const useCartStore = create((set, get) => ({
    items: loadCart(),

    addItem: (product, quantity = 1) => {
        set((state) => {
            const existingIndex = state.items.findIndex((item) => item.id === product.id);
            let newItems;

            if (existingIndex >= 0) {
                newItems = state.items.map((item, index) =>
                    index === existingIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                newItems = [...state.items, { ...product, quantity }];
            }

            localStorage.setItem('bisht_cart', JSON.stringify(newItems));
            window.dispatchEvent(new Event('bisht_cart_updated'));
            return { items: newItems };
        });
    },

    removeItem: (productId) => {
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== productId);
            localStorage.setItem('bisht_cart', JSON.stringify(newItems));
            window.dispatchEvent(new Event('bisht_cart_updated'));
            return { items: newItems };
        });
    },

    updateQuantity: (productId, quantity) => {
        set((state) => {
            if (quantity <= 0) {
                const newItems = state.items.filter((item) => item.id !== productId);
                localStorage.setItem('bisht_cart', JSON.stringify(newItems));
                window.dispatchEvent(new Event('bisht_cart_updated'));
                return { items: newItems };
            }
            const newItems = state.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            localStorage.setItem('bisht_cart', JSON.stringify(newItems));
            window.dispatchEvent(new Event('bisht_cart_updated'));
            return { items: newItems };
        });
    },

    clearCart: () => {
        localStorage.removeItem('bisht_cart');
        window.dispatchEvent(new Event('bisht_cart_updated'));
        set({ items: [] });
    },

    get subtotal() {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    get shipping() {
        const sub = get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return sub >= 1000 ? 0 : 149;
    },

    get total() {
        return get().subtotal + get().shipping;
    },

    get itemCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
    },
}));

export default useCartStore;
