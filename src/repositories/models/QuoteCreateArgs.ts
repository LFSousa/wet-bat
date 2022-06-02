import Quote from "./Quote";

type QuoteCreateArgs = Omit<
  Quote,
  "id" | "createdAt" | "origin" | "destination"
>;
export default QuoteCreateArgs;
