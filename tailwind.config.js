module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple_900: "#242294",
        light_green_800: "#549422",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
      },
      boxShadow: { bs: "0px 4px  12px 0px #0000003f" },
      fontFamily: {
        hiraginomarugothicpro: "Hiragino Maru Gothic Pro",
        inknutantiqua: "Inknut Antiqua",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
