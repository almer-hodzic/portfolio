import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Instrument Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#111111",
        paper: "#f7f6f2",
        bone: "#eeece6",
        line: "#d8d4ca",
        muted: "#6c675f",
        accent: "#6f7f63",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
