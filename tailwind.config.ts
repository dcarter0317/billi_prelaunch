import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#94A3B8",
        tertiary: "#5B75B3",
        btnPrimary: "#64748B"
      },
    },
  },
  plugins: [],
};

export default config;
