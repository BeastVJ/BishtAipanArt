/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'geru-red': '#A83B2C',
                'deep-geru': '#7A2418',
                'rice-white': '#FBFBF8',
                'warm-sand': '#F5E6D3',
                'soft-cream': '#FFF9F0',
                'deep-ochre': '#8B3220',
                charcoal: '#292522',
                'muted-gold': '#C59A52',
            },
            fontFamily: {
                heading: ['Cormorant Garamond', 'serif'],
                body: ['Poppins', 'sans-serif'],
                devanagari: ['Tiro Devanagari Hindi', 'serif'],
            },
            animation: {
                'mandala-spin': 'mandala-spin 60s linear infinite',
                'mandala-slow': 'mandala-spin 120s linear infinite',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.4s ease-out',
                'line-draw': 'lineDraw 2s ease forwards',
                'pattern-reveal': 'patternReveal 0.8s ease forwards',
                'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'mandala-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                lineDraw: {
                    '0%': { strokeDashoffset: '1000' },
                    '100%': { strokeDashoffset: '0' },
                },
                patternReveal: {
                    '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
                    '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
                },
                gentlePulse: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
