import { Box, CardMedia, Typography } from "@mui/material";
import { loremIpsum } from "lorem-ipsum";
import ReactTooltip from "react-tooltip";
import CustomButton from "../../inputs/CustomButton";
import "./tooltipStyle.css";

export default function PackageTooltip({
  locationName,
  onDetailsClick,
}: {
  locationName: string;
  onDetailsClick: () => void;
}) {
  return (
    <ReactTooltip
      id="packageTip"
      place="right"
      className="react-tooltip"
      arrowColor="white"
      clickable={true}
      backgroundColor="white"
    >
      <Box display="flex" flexDirection="column" p={3} gap={1} maxWidth={250}>
        <CardMedia
          image="https://images.unsplash.com/photo-1521170813716-0b3f42fcfb65"
          sx={{ width: 200, height: 100, borderRadius: 3 }}
        />
        <Typography color="primary" variant="h6" fontWeight="bold">
          {locationName}
        </Typography>
        <Typography sx={{ color: "#00000066" }}>
          {loremIpsum({ count: 1 })}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column" flex={2}>
            <Typography
              color="primary"
              variant="h6"
              fontWeight="bold"
              lineHeight={1}
            >
              $12345
            </Typography>
            <Typography
              color="primary"
              variant="subtitle2"
              fontWeight="bold"
              lineHeight={1}
            >
              PRE-NIGHT
            </Typography>
          </Box>
          <CustomButton sx={{ flex: 1 }} size="small" onClick={onDetailsClick}>
            Details
          </CustomButton>
        </Box>
      </Box>
    </ReactTooltip>
  );
}
