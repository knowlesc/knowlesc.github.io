const colors = {
  lightGray: "#D9DFE0",
  darkGray: "#1F1C19",
  reddish: "rgba(187, 47, 47, 0.8)",
  blueish: "#6C9AD2",
  purplish: "#BB6CAA",
  yellowish: "#F1D28D",
  greenish: "#10976F",
};

export const THEMES = {
  dark: {
    text: colors.lightGray,
    textAlt: colors.darkGray,
    bg: colors.darkGray,
    header: colors.blueish,
    footer: colors.blueish,
  },
  light: {
    text: colors.darkGray,
    textAlt: colors.lightGray,
    bg: colors.lightGray,
    header: colors.darkGray,
    footer: colors.darkGray,
  },
  common: {
    primary: colors.yellowish,
    accent: colors.purplish,
  },
};

export const HEIGHTS = {
  HEADER: "80px",
  FOOTER: "200px",
};
