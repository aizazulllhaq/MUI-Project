import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    blacky: {
      main: "#121212",
    },
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
