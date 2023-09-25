import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      dim1: "#B0E1B7",
      dim: "#C5E3D5",
      light: "#57BC90",
      main: "#015249",
      dark: "#043933",
      gradient: "linear-gradient(to right, #57BC90, #004B40)",
    },
    secondary: {
      main: "#A5A5AF",
      dark: "#5A5F65",
    },
    error: {
      light: "#EF9999",
      main: "#D80000",
    },
  },
  typography: {
    fontFamily: [
      "'Lato'",
      "'Montserrat'",
      "'Roboto'",
      "'Sora'",
      "'Recoleta'",
      "sans-serif",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 528,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
