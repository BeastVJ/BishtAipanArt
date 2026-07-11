import { create } from 'zustand';

const loadWishlist = () => {
    try {
        const saved = localStorage.getItem('bisht_wishlist');
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

const useWishlistStore = create((set, get) => ({
    items: loadWishlist(),

    toggleItem: (product) => {
        set((state) => {
            const exists = state.items.find((item) => item.id === product.id);
            let newItems;
            if (exists) {
                newItems = state.items.filter((item) => item.id !== product.id);
            } else {
                newItems = [...state.items, product];
            }
            localStorage.setItem('bisht_wishlist', JSON.stringify(newItems));
            return { items: newItems };
        });
    },

    isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
    },

    removeItem: (productId) => {
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== productId);
            localStorage.setItem('bisht_wishlist', JSON.stringify(newItems));
            return { items: newItems };
        });
    },

    clearWishlist: () => {
        localStorage.removeItem('bisht_wishlist');
        set({ items: [] });
    },
}));

export default useWishlistStore;
