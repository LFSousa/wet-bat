import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider } from "react-redux";
import Header from "./components/Header";
import MainRouter from "./navigation/MainRouter";
import { store } from "./redux/store";
import muiTheme from "./styles/muiTheme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Header />
          <MainRouter />
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
