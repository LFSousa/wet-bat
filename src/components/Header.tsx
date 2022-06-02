import {
  alpha,
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  styled,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../assets/Logo.svg";
import { faker } from "@faker-js/faker";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  color: "#717271",
  height: theme.spacing(5),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: theme.spacing(6),
  backgroundColor: theme.palette.primary.main,
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <DashboardIcon />
          </IconButton>
          <img
            src={logo}
            alt="Wet Bat"
            width="100"
            style={{ marginRight: "auto" }}
          />
          <Search sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>

          <IconButton
            size="small"
            color="inherit"
            aria-label="open notifications"
            sx={{ m: 2, display: { xs: "none", sm: "flex" } }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="open chat"
            sx={{ m: 2, display: { xs: "none", sm: "flex" } }}
          >
            <ChatBubbleIcon />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="open settings"
            sx={{ m: 2, display: { xs: "none", sm: "flex" } }}
          >
            <SettingsIcon />
          </IconButton>
          <IconButton sx={{ m: 2 }} size="small">
            <Avatar src={faker.image.avatar()} />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
