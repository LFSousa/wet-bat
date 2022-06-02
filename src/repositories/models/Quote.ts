import Location from "./Location";

export default interface Quote {
  id: number;
  createdAt: Date;
  originId: number;
  origin: Location;
  destinationId: number;
  destination: Location;
  departureDate: Date;
  returnDate: Date;
  people: number;
  transportation: string;
  name: string;
}
