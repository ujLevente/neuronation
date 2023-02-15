/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#496e8e',
                secondary: '#7b7fc9',
                // #5b90be
            },
            borderWidth: {
                3: '3px',
            },
            opacity: {
                9: 0.9,
            },
        },
    },
    plugins: [],
};
