import axios, { Axios } from "axios";
import ILocationsRepository from "./ILocationsRepository";
import Location from "./models/Location";

export class LocationsRepository implements ILocationsRepository {
  protected axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
    });
  }

  search(value: string) {
    return this.axios
      .get<Location[]>("/locations/search", {
        params: {
          data: value,
        },
      })
      .then((response) => response.data);
  }
}

const locationsRepository = new LocationsRepository();

export default locationsRepository;
