import { Injectable } from "@tsed/di";
import { BadRequest } from "@tsed/exceptions";
import { LocationsRepository, QuotesRepository } from "@tsed/prisma";
import QuoteCreateModel from "./models/QuoteCreateModel";

@Injectable()
export default class QuotesService {
  constructor(protected quotesRepository: QuotesRepository, protected locationsRepository: LocationsRepository) {}

  async createQuote(quote: QuoteCreateModel) {
    if (quote.departureDate > quote.returnDate) {
      throw new BadRequest("Departure date must be before return date");
    }
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    if (quote.departureDate < startOfDay) {
      throw new BadRequest("Departure must be a future date");
    }

    const origin = await this.locationsRepository.findUnique({
      where: {
        id: quote.originId
      }
    });

    if (!origin) {
      throw new BadRequest("Origin location not found");
    }

    const destination = await this.locationsRepository.findUnique({
      where: {
        id: quote.destinationId
      }
    });

    if (!destination) {
      throw new BadRequest("Destination location not found");
    }

    return this.quotesRepository.create({ data: quote });
  }
}
