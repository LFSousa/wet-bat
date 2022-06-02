import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#5f6caf",
    },
    secondary: {
      main: "#5bbfba",
      contrastText: "#ffffff",
    },
    background: {
      default: "#EDF0F9",
    },
  },
});

export default muiTheme;
