import { Property } from "@tsed/schema";

export default class LocationSearchResponse {
  @Property()
  id: number;

  @Property()
  name: string;

  @Property()
  country: string;

  @Property()
  municipality: string;

  @Property()
  iata: string;

  @Property()
  latitude: number;

  @Property()
  longitude: number;
}
