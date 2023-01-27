/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./commonComponents/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        blue: {
          98: "#F7FBFD",
          92: "#DEEEF6",
          86: "#C4E1EE",
          61: "#61AFD2",
          37: "#007DB6",
          19: " #00405D",
        },
        red: {
          98: "#FEF8F7",
          92: "#FDE3E0",
          86: "#FBCDC8",
          61: "#F3776C",
          37: "#934842",
          19: "#4C2522",
        },
        yellow: {
          98: "#FEFCE1",
          92: "#FBF486",
          86: "#F7EC2B",
          61: "#B0A81F",
          37: "#6A6612",
          19: "#373409",
        },
      },
      borderRadius: {
        "4xl": "3.125rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      fontSize: {
        "10xl": "1.125rem",
        "11xl": "1.3125rem",
        "12xl": "1.5rem",
        "13xl": "4.5rem",
        "14xl": "25rem",
      },
      lineHeight: {
        11: "1.5625rem",
        12: "2.1875rem",
        13: "4.0625rem",
        14: "20rem",
      },
      fontFamily: {
        manukaThin: "manukaThin",
        manukaBold: "manukaBold",
        manukaUltra: "manukaUltra",
        sohneBuch: "sohneBuch",
        sohneExtrafett: "sohneExtrafett",
        sohneExtrafettKursiv: "sohneExtrafettKursiv",
        sohneExtraleicht: "sohneExtraleicht",
        sohneExtraleichtKursiv: "sohneExtraleichtKursiv",
        sohneHalbfett: "sohneHalbfett",
        sohneHalbfettKursiv: "sohneHalbfettKursiv",
        sohneBreitBuch: "sohneBreitBuch",
        sohneBreitBuchKursiv: "sohneBreitBuchKursiv",
        sohneBreitDreiviertelfett: "sohneBreitDreiviertelfett",
        sohneBreitDreiviertelfettKursiv: "sohneBreitDreiviertelfettKursiv",
        sohneBreitExtrafett: "sohneBreitExtrafett",
        sohneBreitExtrafettKursiv: "sohneBreitExtrafettKursiv",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
