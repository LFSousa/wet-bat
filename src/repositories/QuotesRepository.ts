import axios, { Axios } from "axios";
import IQuotesRepository from "./IQuotesRepository";
import PaginatedResponse from "./models/PaginatedResponse";
import Quote from "./models/Quote";
import QuoteCreateArgs from "./models/QuoteCreateArgs";

export class QuotesRepository implements IQuotesRepository {
  protected axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
    });
  }

  get(id: number): Promise<Quote> {
    return this.axios
      .get<Quote>(`/quotes/${id}`)
      .then((response) => response.data);
  }

  async create(data: QuoteCreateArgs): Promise<any> {
    return this.axios
      .post<Quote>("/quotes", data)
      .then((response) => response.data);
  }

  list(page: number, size: number = 10) {
    return this.axios
      .get<PaginatedResponse<Quote>>("/quotes", {
        params: {
          page,
          size,
        },
      })
      .then((response) => response.data);
  }
}

const quotesRepository = new QuotesRepository();

export default quotesRepository;
