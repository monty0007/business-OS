/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ea580c",
        "accent-light": "#fb923c",
        surface: "#111111",
        "surface-2": "#18181b",
      },
      fontFamily: {
        heading: ["Fuzzy Bubbles", "sans-serif"],
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        shimmer: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(calc(-100% - var(--gap)))" },
          to: { transform: "translateX(0)" },
        },
        ripple: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(0.9)" },
        },
        "flip-words": {
          "0%": { transform: "translateY(0%)", opacity: 1 },
          "20%": { transform: "translateY(0%)", opacity: 1 },
          "25%": { transform: "translateY(-100%)", opacity: 0 },
          "45%": { transform: "translateY(-100%)", opacity: 0 },
          "50%": { transform: "translateY(0%)", opacity: 1 },
        },
        "text-generate": {
          "0%": { opacity: 0, filter: "blur(10px)" },
          "100%": { opacity: 1, filter: "blur(0px)" },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-reverse": "marquee-reverse var(--duration) infinite linear",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
    },
  },
  plugins: [],
}

