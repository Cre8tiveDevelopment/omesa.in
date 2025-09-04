/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                'fs-10': ['10px', { lineHeight: '1' }],
                'fs-12': ['12px', { lineHeight: '1' }],
                'fs-14': ['14px', { lineHeight: '1' }],
                'fs-15': ['15px', { lineHeight: '1' }],
                'fs-16': ['16px', { lineHeight: '1' }],
                'fs-18': ['18px', { lineHeight: '1' }],
                'fs-20': ['20px', { lineHeight: '1' }],
                'fs-21': ['20px', { lineHeight: '2' }],
                'fs-24': ['24px', { lineHeight: '1' }],
                'fs-32': ['32px', { lineHeight: '1' }],
                'fs-46': ['46px', { lineHeight: '1' }],
                'fs-54': ['52px', { lineHeight: '1' }],
                'fs-58': ['58px', { lineHeight: '1' }],
                'fs-64': ['64px', { lineHeight: '1' }],
            },
        },
    },
    plugins: [],
}