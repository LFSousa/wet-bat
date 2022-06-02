import PaginatedResponse from "./models/PaginatedResponse";
import Quote from "./models/Quote";
import QuoteCreateArgs from "./models/QuoteCreateArgs";

export default interface IQuotesRepository {
  list(page: number, limit: number): Promise<PaginatedResponse<Quote>>;
  get(id: number): Promise<Quote>;
  create(data: QuoteCreateArgs): Promise<Quote>;
}
