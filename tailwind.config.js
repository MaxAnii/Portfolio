const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				dancing: ["Pacifico", "cursive"],
			},

			animation: {
				pulse: "pulse 2s ease-in-out infinite", // Custom animation duration
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	darkMode: ["class", "class"],
	plugins: [nextui(), require("tailwindcss-animate")],
};
