import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const green = "#18BA51";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1258,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: green,
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["SF Pro Text", "Comfortaa", "Poppins", "GIP"].join(","),
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 16,
      fontFamily: "SF Pro Text",
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
