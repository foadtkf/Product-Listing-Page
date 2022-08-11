module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate",
    ],
  },
  plugins: [require("daisyui")],
}
