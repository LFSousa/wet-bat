import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { loremIpsum } from "lorem-ipsum";
import { useSelector } from "react-redux";
import office from "../assets/office.png";
import { RootState } from "../redux/store";

function Information({ value, label }: { value: number; label: string }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography
        variant="h3"
        fontWeight="500"
        color="#f0cf85"
        sx={{
          textShadow: "-2px 2px 4px #00000045",
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="h6"
        textTransform="uppercase"
        lineHeight={1}
        sx={{
          wordSpacing: 1000,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Welcome() {
  const totalQuotes = useSelector(
    (state: RootState) => state.pendingQuotes.quotes?.totalCount || 0
  );

  return (
    <Box
      sx={{
        background:
          "linear-gradient(128deg, rgba(63,202,197,1) 0%, rgba(67,100,199,0.9682247899159664) 68%, rgba(67,100,199,1) 100%)",
        color: "white",
        padding: 3,
        borderRadius: 2,
        display: { md: "flex", sm: "none", xs: "none" },
        flexDirection: "row",
        gap: 4,
      }}
    >
      <Box flex={3}>
        <Typography variant="h4" fontWeight="500" mb={2}>
          Welcome to your dashboard
        </Typography>
        <Typography variant="body2">{loremIpsum({ count: 8 })}</Typography>
      </Box>
      <Box flex={5} display="flex" flexDirection="column" maxWidth="700px">
        <CardMedia
          image={office}
          sx={{ height: "100%", backgroundSize: "contain" }}
        />
        <Box display="flex" flexDirection="row" gap={3}>
          <Information value={101} label="New Leads" />
          <Information value={totalQuotes} label="Quotes Created" />
          <Information value={40} label="Pending Orders" />
        </Box>
      </Box>
    </Box>
  );
}
