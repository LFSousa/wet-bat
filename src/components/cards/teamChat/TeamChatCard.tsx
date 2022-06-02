import { faker } from "@faker-js/faker";
import { faCommentDots, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Badge,
  BoxProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
} from "@mui/material";
import muiTheme from "../../../styles/muiTheme";
import DashboardCard from "../../DashboardCard";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    margin: -5,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function TeamChatCard({ ...props }: Omit<BoxProps, "children">) {
  return (
    <DashboardCard {...props} icon={faMessage} title="Team chat" menu>
      <List sx={{ p: 0 }}>
        {[0, 1, 2, 3].map((id) => (
          <ListItem
            button
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <FontAwesomeIcon
                icon={faCommentDots}
                color={muiTheme.palette.secondary.main}
              />
            }
          >
            <ListItemAvatar>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} variant="rounded" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                fontWeight: "bold",
                color: "#00000099",
              }}
              primary={faker.name.findName()}
              secondaryTypographyProps={{
                variant: "caption",
              }}
              secondary="Customer service available"
            />
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
}
