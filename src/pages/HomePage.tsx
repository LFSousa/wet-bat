import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import CloseRatioCard from "../components/cards/closeRatio/CloseRatioCard";
import NewLeadsCard from "../components/cards/newLeads/NewLeadsCard";
import PendingQuotesCard from "../components/cards/pendingQuotes/PendingQuotesCard";
import PopularDestinationsCard from "../components/cards/popularDestinations/PopularDestinationsCard";
import PotentialRevenueCard from "../components/cards/potentialRevenue/PotentialRevenueCard";
import QuickQuoteCard from "../components/cards/quickQuote/QuickQuoteCard";
import RevenueCard from "../components/cards/revenue/RevenueCard";
import TeamChatCard from "../components/cards/teamChat/TeamChatCard";
import PageLayout from "../components/PageLayout";
import Welcome from "../components/Welcome";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Welcome />
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        mt={{ xs: 0, sm: 0, md: 0 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={4.2}>
          <QuickQuoteCard height="100%" onExpand={() => navigate("/quotes")} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4.2}>
          <PendingQuotesCard
            height="100%"
            onExpand={() => navigate("/quotes")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3.6}>
          <NewLeadsCard height="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={8.4}>
          <PopularDestinationsCard height="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3.6}>
          <TeamChatCard height="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4.2}>
          <RevenueCard height="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4.2}>
          <PotentialRevenueCard height="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3.6}>
          <CloseRatioCard height="100%" />
        </Grid>
      </Grid>
    </PageLayout>
  );
}
