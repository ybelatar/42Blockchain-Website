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
	  keyframes: {
		"accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		},
		"accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		},
		marquee: {
			from: { transform: "translateX(0)" },
			to: { transform: "translateX(calc(-100% - var(--gap)))" },
		},
		"marquee-vertical": {
			from: { transform: "translateY(0)" },
			to: { transform: "translateY(calc(-100% - var(--gap)))" },
		},
	},
	animation: {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up": "accordion-up 0.2s ease-out",
		marquee: "marquee var(--duration) linear infinite",
		"marquee-vertical": "marquee-vertical var(--duration) linear infinite"
	},
    },
  },
  plugins: [],
};
export default config;
