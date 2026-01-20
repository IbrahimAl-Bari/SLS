/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Add custom font families
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },

            // Add custom colors (optional but recommended!)
            colors: {
                // Orange & Carrot
                'orange': {
                    primary: '#FF6B35',
                    light: '#FF8C42',
                    dark: '#E85D30',
                    accent: '#FFB627',
                },
                // Guava
                'guava': {
                    primary: '#FF6B9D',
                    light: '#FFB3C6',
                    dark: '#E54F7D',
                    accent: '#FFC9D9',
                },
                // Pineapple Mango
                'pineapple': {
                    primary: '#FFB627',
                    light: '#FFCA3A',
                    dark: '#FF9F1C',
                    accent: '#FFF5CC',
                },
                // Backgrounds
                'cream': {
                    DEFAULT: '#F8F7F4',
                    light: '#FFF8E7',
                    white: '#FFFEF9',
                },
            },
        },
    },
    plugins: [],
}