import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisV,
  faExpandArrowsAlt,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, BoxProps, IconButton } from "@mui/material";
import muiTheme from "../styles/muiTheme";

type DashboardCardProps = {
  children: React.ReactNode;
  icon: IconProp;
  title: string;
  onExpand?: () => void;
  onRefresh?: () => void;
  menu?: boolean;
  loading?: boolean;
  contentProps?: BoxProps;
} & BoxProps;

type DashboardCardHeaderProps = {
  icon: IconProp;
  title: string;
  onExpand?: () => void;
  onRefresh?: () => void;
  menu?: boolean;
  loading?: boolean;
};

function DashboardCardHeader({
  icon,
  title,
  onExpand,
  onRefresh,
  menu,
  loading,
}: DashboardCardHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 1,
        borderBottom: "1px solid #e6e6e6",
        "& > *": {
          flexGrow: 1,
        },
        "& > *:first-of-type": {
          display: "flex",
          alignItems: "center",
        },
        "& > *:last-child": {
          display: "flex",
          alignItems: "center",
        },
        "& .MuiButtonBase-root": {
          fontSize: 16,
          color: "#C2C2C2",
        },
      }}
    >
      <Box mr="0">
        <FontAwesomeIcon icon={icon} color={muiTheme.palette.secondary.main} />
        <Box ml={2} color={muiTheme.palette.primary.main}>
          {title}
        </Box>
      </Box>
      {onRefresh && (
        <IconButton size="small" onClick={onRefresh}>
          <FontAwesomeIcon icon={faSyncAlt} spin={loading} />
        </IconButton>
      )}
      {onExpand && (
        <IconButton size="small" onClick={onExpand}>
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
        </IconButton>
      )}
      {menu && (
        <IconButton size="small">
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>
      )}
    </Box>
  );
}

export default function DashboardCard({
  children,
  icon,
  title,
  onExpand,
  onRefresh,
  menu,
  loading,
  contentProps,
  ...props
}: DashboardCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        border: "1px solid #e6e6e6",
        overflow: "hidden",
      }}
      {...props}
    >
      <DashboardCardHeader
        icon={icon}
        title={title}
        onExpand={onExpand}
        onRefresh={onRefresh}
        menu={menu}
        loading={loading}
      />
      <Box {...contentProps}>{children}</Box>
    </Box>
  );
}
