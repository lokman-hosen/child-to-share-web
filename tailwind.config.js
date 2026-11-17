import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/**
 * ThreeWish design tokens.
 *
 * Color names are kept backward compatible with the existing markup
 * (`text-primary`, `bg-primary-dark`, `from-secondary`, `text-accent`, `text-neutral` …)
 * while adding full 50–900 scales for the new design system.
 *
 * Contrast (WCAG AA, 4.5:1 for body text):
 *   primary-600 (#2A7898) on white 4.95 ✓ — DEFAULT, use for text, links, buttons
 *   primary-500 (#3D97BA) brand blue — decorative / large text only
 *   secondary-600 (#8C7322) on white 4.57 ✓ — use when gold must be text
 *   secondary-300 (#CDBD79) brand gold — backgrounds, highlights only
 *
 * @type {import('tailwindcss').Config}
 */
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
                primary: {
                    DEFAULT: '#2A7898',
                    light: '#5CB0D1',
                    dark: '#1F5A73',
                    50: '#EEF7FB',
                    100: '#D5ECF5',
                    200: '#ABD7EA',
                    300: '#78BDDA',
                    400: '#5CB0D1',
                    500: '#3D97BA',
                    600: '#2A7898',
                    700: '#246A87',
                    800: '#1F5A73',
                    900: '#18465A',
                },
                secondary: {
                    DEFAULT: '#CDBD79',
                    light: '#E4D7A0',
                    dark: '#B4A65C',
                    50: '#FBF8EC',
                    100: '#F5EDCD',
                    200: '#EBDDA3',
                    300: '#CDBD79',
                    400: '#BFA650',
                    500: '#A68A2E',
                    600: '#8C7322',
                    700: '#6E5A1A',
                    800: '#574716',
                    900: '#3F3311',
                },
                // Legacy: "accent" is the near-black text color used across existing pages.
                accent: {
                    DEFAULT: '#1a1a1a',
                    light: '#333333',
                },
                neutral: {
                    DEFAULT: '#264653',
                    light: '#3A5A6F',
                    dark: '#1C3A4A',
                },
                // Stock slate-500 (#64748B) is 4.49:1 on canvas, just under AA. This is a hair darker
                // (4.89 on canvas, 4.73 on slate-100) and keeps every other slate step stock.
                slate: { 500: '#5F6E84' },
                // Page background (warm off-white) and surfaces
                canvas: '#FAF8F5',
                success: { 50: '#ECFDF5', 100: '#D1FAE5', 600: '#059669', 700: '#047857' },
                warning: { 50: '#FFFBEB', 100: '#FEF3C7', 600: '#D97706', 700: '#B45309' },
                danger: { 50: '#FFF1F2', 100: '#FFE4E6', 600: '#E11D48', 700: '#BE123C' },
            },
            fontSize: {
                // Display sizes for marketing headings
                'display-sm': ['2.25rem', { lineHeight: '2.6rem', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display': ['3rem', { lineHeight: '3.35rem', letterSpacing: '-0.025em', fontWeight: '700' }],
                'display-lg': ['3.75rem', { lineHeight: '4rem', letterSpacing: '-0.03em', fontWeight: '700' }],
            },
            boxShadow: {
                'xs': '0 1px 2px 0 rgb(15 23 42 / 0.05)',
                'card': '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)',
                'card-hover': '0 4px 6px -1px rgb(15 23 42 / 0.06), 0 10px 24px -4px rgb(15 23 42 / 0.10)',
                'pop': '0 12px 32px -8px rgb(15 23 42 / 0.18)',
                'focus': '0 0 0 3px rgb(61 151 186 / 0.35)',
            },
            borderRadius: {
                'card': '1rem',
            },
            maxWidth: {
                'content': '80rem',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #2A7898 0%, #3D97BA 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #CDBD79 0%, #E4D7A0 100%)',
                'gradient-dark': 'linear-gradient(135deg, #18465A 0%, #246A87 100%)',
            },
        },
    },

    plugins: [forms],
};
