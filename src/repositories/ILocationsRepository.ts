import Location from "./models/Location";

export default interface ILocationsRepository {
  search(value: string): Promise<Location[]>;
}
