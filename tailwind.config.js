import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#3D97BA',      // Your primary blue
                'primary-light': '#5CB0D1',
                'primary-dark': '#2C7FA3',
                'secondary': '#CDBD79',    // Your gold/beige
                'secondary-light': '#E4D7A0',
                'secondary-dark': '#B4A65C',
                'accent': '#1a1a1a',       // Your dark accent
                'accent-light': '#333333',
                'neutral': '#264653',      // Your dark blue-gray
                'neutral-light': '#3A5A6F',
                'neutral-dark': '#1C3A4A',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #3D97BA 0%, #5CB0D1 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #CDBD79 0%, #E4D7A0 100%)',
                'gradient-dark': 'linear-gradient(135deg, #264653 0%, #3A5A6F 100%)',
            }
        },
    },

    plugins: [forms],
};
