import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        orbit: 'spin 4s linear forwards infinite',
        orbit2: 'spin 7s linear reverse infinite',
        orbit3: 'spin 9s linear forwards infinite',
        orbit4: 'spin 10s linear reverse infinite',
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-gasoek-one)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;