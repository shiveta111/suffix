module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",

        "./*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
            },
            colors: {
                primary: "#006E81",
                'teal-gradient-start': '#4FB3B3',
                'teal-gradient-end': '#3AA8C1',
            },
        },
    },
    plugins: [],
};