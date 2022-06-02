import { useEffect, useState } from "react";
import { useParams } from "react-router";
import QuoteDetailsCard from "../components/cards/quoteDetails/QuoteDetailsCard";
import PageLayout from "../components/PageLayout";
import Quote from "../repositories/models/Quote";
import quotesRepository from "../repositories/QuotesRepository";

export default function QuoteDetailsPage() {
  const params = useParams();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const quoteId = params.id;
    quotesRepository.get(+quoteId!).then(setQuote);
  }, [params]);

  return <PageLayout>{quote && <QuoteDetailsCard quote={quote} />}</PageLayout>;
}
