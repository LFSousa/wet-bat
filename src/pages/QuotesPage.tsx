import PendingQuotesCard from "../components/cards/pendingQuotes/PendingQuotesCard";
import QuickQuoteCard from "../components/cards/quickQuote/QuickQuoteCard";
import PageLayout from "../components/PageLayout";

export default function QuotesPage() {
  return (
    <PageLayout display="flex" gap={3} flexDirection="column">
      <PendingQuotesCard full />
      <QuickQuoteCard />
    </PageLayout>
  );
}
