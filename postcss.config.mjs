const config = {
  plugins: ["@tailwindcss/postcss"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        danger: "#dc2626",
      },
    },
  },
};

export default config;
