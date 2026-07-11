import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,

    login: async (email, password) => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = { id: 1, name: 'Vijay', email, phone: '+91 9045236987' };
        set({ user, isAuthenticated: true, isLoading: false });
        return true;
    },

    register: async (userData) => {
        set({ isLoading: true });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = { id: 1, ...userData };
        set({ user, isAuthenticated: true, isLoading: false });
        return true;
    },

    logout: () => {
        set({ user: null, isAuthenticated: false });
    },

    updateProfile: async (profileData) => {
        set({ isLoading: true });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ user: { ...state.user, ...profileData }, isLoading: false }));
        return true;
    },
}));

export default useAuthStore;
