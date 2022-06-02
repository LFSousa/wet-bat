import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { BoxProps, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Quote from "../../../repositories/models/Quote";
import DashboardCard from "../../DashboardCard";

export default function QuoteDetailsCard({
  quote,
  ...props
}: Omit<BoxProps, "children"> & { quote: Quote }) {
  return (
    <DashboardCard {...props} icon={faInfo} title="Quote details">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Quote ID</TableCell>
            <TableCell>{quote.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Created At</TableCell>
            <TableCell>{new Date(quote.createdAt).toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Origin</TableCell>
            <TableCell>
              {quote.origin.name} - {quote.origin.country} -{" "}
              {quote.origin.municipality}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Destination</TableCell>
            <TableCell>
              {quote.destination.name} - {quote.destination.country} -{" "}
              {quote.destination.municipality}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Departure date</TableCell>
            <TableCell>
              {new Date(quote.departureDate).toLocaleDateString()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Return date</TableCell>
            <TableCell>
              {new Date(quote.returnDate).toLocaleDateString()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of travelers</TableCell>
            <TableCell>{quote.people}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contact name</TableCell>
            <TableCell>{quote.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DashboardCard>
  );
}
