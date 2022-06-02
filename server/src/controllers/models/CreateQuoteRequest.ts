import { Required } from "@tsed/schema";

export default class CreateQuoteRequest {
  @Required()
  originId: number;

  @Required()
  destinationId: number;

  @Required()
  departureDate: Date;

  @Required()
  returnDate: Date;

  @Required()
  people: number;

  @Required()
  transportation: string;

  @Required()
  name: string;
}
