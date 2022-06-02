import { Controller } from "@tsed/di";
import { Get, Post, Returns, Summary } from "@tsed/schema";
import { QuoteModel, QuotesRepository } from "@tsed/prisma";
import { BodyParams, PathParams, QueryParams } from "@tsed/platform-params";
import CreateQuoteRequest from "./models/CreateQuoteRequest";
import { Pagination } from "./models/Pagination";
import { Pageable } from "./models/Pageable";
import QuotesService from "../domain/QuotesService";
import { BadRequest } from "@tsed/exceptions";

@Controller("/quotes")
export class QuotesController {
  constructor(protected quotesRepository: QuotesRepository, protected quotesService: QuotesService) {}

  @Get("/")
  @Summary("List all quotes")
  @Returns(200, Pagination).Of(QuoteModel)
  async list(@QueryParams() pageableOptions: Pageable): Promise<Pagination<QuoteModel>> {
    const totalResults = await this.quotesRepository.aggregate({
      _count: true
    });

    const results = await this.quotesRepository.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        destination: true,
        origin: true
      },
      skip: pageableOptions.offset,
      take: pageableOptions.limit
    });

    return new Pagination<QuoteModel>({
      data: results,
      pageable: pageableOptions,
      totalCount: +(totalResults._count || 0)
    });
  }

  @Get("/:quoteId")
  @Summary("Get a quote by id")
  @Returns(200, QuoteModel)
  async get(@PathParams("quoteId") quoteId: number) {
    const quote = await this.quotesRepository.findUnique({
      where: {
        id: quoteId
      },
      include: {
        destination: true,
        origin: true
      }
    });
    if (!quote) {
      throw new BadRequest("Quote not found");
    }
    return quote;
  }

  @Post("/")
  @Summary("Create a new quote")
  async create(@BodyParams() quote: CreateQuoteRequest) {
    return this.quotesService.createQuote({
      originId: quote.originId,
      destinationId: quote.destinationId,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      people: quote.people,
      transportation: quote.transportation,
      name: quote.name
    });
  }
}
