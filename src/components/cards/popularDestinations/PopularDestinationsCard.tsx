import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  BoxProps,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DashboardCard from "../../DashboardCard";
import MapChart from "./MapChart";
import PackageTooltip from "./PackageTooltip";

const BorderLinearProgress = styled(LinearProgress)(
  ({ bg, flex }: { bg: string; flex: number }) => ({
    flex,
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "transparent",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: bg,
    },
  })
);

export default function PopularDestinationsCard({
  ...props
}: Omit<BoxProps, "children">) {
  const [tooltipContent, setTooltipContent] = useState<string | null>("any");
  return (
    <DashboardCard
      {...props}
      icon={faPaperPlane}
      title="Popular destinations & packages"
      menu
      contentProps={{
        display: "flex",
        height: "100%",
      }}
    >
      <Box
        flex="1"
        p={1}
        borderRight="1px solid #e6e6e6"
        display={{ sm: "none", xs: "none", lg: "block" }}
      >
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#32AFA9"
          />
        </Box>
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#F0CE84"
          />
        </Box>
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#F67474"
          />
        </Box>
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#B6E2FF"
          />
        </Box>
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#DCB1E9"
          />
        </Box>
        <Box display="flex" alignItems="center" p={1} gap={2}>
          <Typography flex="3" variant="body2">
            Lorem ipsum dolor sit
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={Math.random() * 100}
            flex={5}
            bg="#B0D69B"
          />
        </Box>
      </Box>
      <Box flex="2">
        <MapChart setTooltipContent={setTooltipContent} />
      </Box>
      {tooltipContent && (
        <PackageTooltip
          locationName={tooltipContent || ""}
          onDetailsClick={() => {
            setTooltipContent("");
          }}
        />
      )}
    </DashboardCard>
  );
}
