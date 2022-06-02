import { faker } from "@faker-js/faker";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  BoxProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardCard from "../../DashboardCard";

export default function NewLeadsCard({ ...props }: Omit<BoxProps, "children">) {
  return (
    <DashboardCard
      {...props}
      icon={faEnvelope}
      title="New Leads"
      onRefresh={() => alert("refreshing")}
      onExpand={() => {}}
    >
      <List sx={{ p: 0 }}>
        {[0, 1, 2, 3].map((id) => (
          <ListItem
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <Typography variant="caption">13:40 PM</Typography>
            }
          >
            <ListItemAvatar>
              <Avatar src={faker.image.avatar()} />
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
              secondary="Hey! I want to place my package"
            />
          </ListItem>
        ))}
      </List>
    </DashboardCard>
  );
}
