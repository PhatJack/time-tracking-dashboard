/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"blue": "hsl(246, 80%, 60%)",
				"work": "hsl(15, 100%, 70%)",
				"study": "hsl(348, 100%, 68%)",
				"exercise": "hsl(145, 58%, 55%)",
				"social": "hsl(264, 64%, 52%)",
				"play": "hsl(195, 74%, 62%)",
				"self-care": "hsl(43, 84%, 65%)",
				"very-dark-blue": "hsl(226, 43%, 10%)",
				"dark-blue": "hsl(235, 46%, 20%)",
				"desatured-blue": "hsl(235, 45%, 61%)",
				"pale-blue": "hsl(236, 100%, 87%)"
			},
			gridTemplateColumns: {
				"custom-desktop": "repeat(auto-fit, minmax(0, 255px))",
			},
			gridTemplateRows: {
				"custom-desktop": "repeat(auto-fit, 244px)"
			}
		},
	},
	plugins: [],
}