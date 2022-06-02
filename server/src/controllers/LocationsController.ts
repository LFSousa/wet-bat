import { Controller } from "@tsed/di";
import { QueryParams } from "@tsed/platform-params";
import { Get, Returns, Summary } from "@tsed/schema";
import { LocationsRepository } from "@tsed/prisma";
import LocationSearchResponse from "./models/LocationSearchResponse";

@Controller("/locations")
export class LocationsController {
  constructor(protected locationsRepository: LocationsRepository) {}

  @Get("/search")
  @Summary("Search for locations by name or IATA code")
  @Returns(200, Array).Of(LocationSearchResponse)
  async search(@QueryParams("data") data: string) {
    return this.locationsRepository.findMany({
      where: {
        OR: [
          {
            name: {
              contains: data,
              mode: "insensitive"
            }
          },
          {
            iata: {
              contains: data,
              mode: "insensitive"
            }
          },
          {
            municipality: {
              contains: data,
              mode: "insensitive"
            }
          }
        ]
      }
    });
  }
}
