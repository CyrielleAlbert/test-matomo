const colors = require("@telia/styleguide/utils/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["../*/src/**/*.{html,tsx, ts}"],
  theme: {
    screens: {
      xs: "440px",
      sm: "640px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: false,
      padding: {
        DEFAULT: "0",
      },
    },
    spacing: {
      ...defaultTheme.spacing,
      "side-menu": "240px",
      "side-menu-narrow": "68px",
      "top-menu": "3rem",
    },
    colors: {
      ...colors.colorDefinitions,
      "grey-hover": "rgba(0,0,0,0.08)",
      white: "#ffffff",
      greyLight: "#F4F4F9",
      purpleDeep: "#29003E",
      blackOff: "#121214",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontFamily: {
      TeliaSans: ["TeliaSans", "Helvetica Neue", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
        1: 1,
        2: 2,
        3: 3,
      },
      maxHeight: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
      },
      maxWidth: {
        45: "45%",
        75: "75%",
      },
      minWidth: {
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "5rem",
        92: "22.5rem",
      },
      height: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
      },
      transitionProperty: {
        margin: "margin",
        visibility: "visibility",
      },
      gridTemplateColumns: {
        filterSectionTable: "0.5fr 1.5fr auto",
        filterSectionList: "1fr auto",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "last"],
    display: ["responsive", "hover", "focus", "group-hover", "last"],
    margin: ["responsive", "last"],
    padding: ["responsive", "last"],
    visibility: ["responsive", "hover", "focus", "group-hover", "last"],
    transitionProperty: ["responsive", "hover", "focus"],
    fontWeight: ["hover", "focus", "last"],
  },
};
