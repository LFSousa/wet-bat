import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faDollarSign,
  faFile,
  faGear,
  faHouse,
  faLifeRing,
  faPaperPlane,
  faRectangleList,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const routes = [
    {
      name: "Home",
      icon: faHouse,
      path: "/",
    },
    {
      name: "Quotes",
      icon: faDollarSign,
      path: "/quotes",
    },
    {
      name: "Leads",
      icon: faRectangleList,
      path: "/leads",
    },
    {
      name: "Tours",
      icon: faPaperPlane,
      path: "/tours",
    },
    {
      divider: true,
    },
    {
      name: "Invoices",
      icon: faFile,
      path: "/invoices",
    },
    {
      name: "Analytics",
      icon: faChartPie,
      path: "/analytics",
    },
    {
      name: "Team",
      icon: faUserGroup,
      path: "/team",
    },
    {
      name: "Admin",
      icon: faGear,
      path: "/admin",
    },
    {
      name: "Support",
      icon: faLifeRing,
      path: "/support",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 170,
        flexShrink: 0,
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: 170,
          boxSizing: "border-box",
          backgroundColor: "#e6e6e6",
          color: "#5f6caf",
          fontWeight: "bold",
          border: "0px",
          "& .MuiListItemButton-root": {
            padding: "12px 8px",
            "& .MuiListItemIcon-root": {
              color: "inherit",
              "& svg": {
                margin: "auto",
              },
            },
            "&.active": {
              backgroundColor: "#5f6caf44",
            },
          },
        },
      }}
    >
      <Toolbar style={{ marginBottom: "-8px" }} />
      <List>
        {routes.map((route, index) =>
          route.divider ? (
            <Divider sx={{ marginY: "6px" }} key={index} />
          ) : (
            <ListItem key={index} disablePadding>
              <ListItemButton {...{ component: NavLink, to: route.path }}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={route.icon as IconProp} />
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          color: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Divider />
        <Typography
          variant={"body2"}
          paddingX={2}
          paddingY={1}
          align="center"
          sx={{
            padding: "24px",
          }}
        >
          All rights received by wetbat 2020 ©
        </Typography>
      </div>
    </Drawer>
  );
}
