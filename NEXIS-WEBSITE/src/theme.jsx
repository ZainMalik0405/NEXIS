// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#06070b",
    },
    primary: {
      main: "#00e5ff", // cyan
    },
    secondary: {
      main: "#9b5cff", // purple
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    h1: {
      fontFamily: "Space Grotesk, Inter, sans-serif",
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: "Space Grotesk, Inter, sans-serif",
      fontWeight: 700,
      lineHeight: 1.08,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.2px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

export default theme;
