module.exports = {
    darkMode: 'class',
    content: ["./themes/EG/layouts/**/*.{html,js}", "./themes/EG/assets/**/*.{html,js}", './layouts/**/*.html', "./content/**/*.md"],
    theme: {
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
