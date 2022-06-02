import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  BoxProps,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Quote from "../../../repositories/models/Quote";
import DashboardCard from "../../DashboardCard";
import { fetchPendingQuotesPage, selectQuotes } from "./pendingQuotesSlicer";

export default function PendingQuotesCard({
  onExpand,
  full,
  ...props
}: Omit<BoxProps, "children"> & { full?: boolean; onExpand?: () => void }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pendingQuotes = useAppSelector(selectQuotes);
  const quotesStatus = useAppSelector((state) => state.pendingQuotes.status);

  const loadPage = useCallback(
    (page = pendingQuotes?.page || 0, limit = pendingQuotes?.size || 10) => {
      dispatch(fetchPendingQuotesPage({ page, limit }));
    },
    [dispatch, pendingQuotes]
  );

  useEffect(() => {
    if (quotesStatus === "idle" && !pendingQuotes) {
      loadPage(0);
    }
  }, [quotesStatus, dispatch, pendingQuotes, loadPage]);

  const loadQuote = (quote: Quote) => {
    navigate(`/quotes/${quote.id}`);
  };

  return (
    <DashboardCard
      {...props}
      icon={faClockRotateLeft}
      title="Pending quotes"
      onRefresh={() => loadPage()}
      onExpand={onExpand}
      loading={quotesStatus === "loading"}
    >
      {pendingQuotes ? (
        <TableContainer>
          <Table
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "none",
                padding: "6px 12px",
              },
            }}
          >
            <TableHead>
              {full ? (
                <TableRow>
                  <TableCell>ID #</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>DEPARTURE</TableCell>
                  <TableCell>DESTINATION</TableCell>
                  <TableCell>PEOPLE</TableCell>
                  <TableCell>TRANSPORTATION</TableCell>
                  <TableCell>PRICE</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>ID #</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>DESTINATION</TableCell>
                  <TableCell>PRICE</TableCell>
                </TableRow>
              )}
            </TableHead>
            <TableBody sx={{ cursor: "pointer" }}>
              {pendingQuotes.data.map((quote) =>
                full ? (
                  <TableRow
                    key={quote.id}
                    onClick={() => loadQuote(quote)}
                    hover
                  >
                    <TableCell>{quote.id}</TableCell>
                    <TableCell>{quote.name}</TableCell>
                    <TableCell>{quote.origin.municipality}</TableCell>
                    <TableCell>{quote.destination.municipality}</TableCell>
                    <TableCell>{quote.people}</TableCell>
                    <TableCell>{quote.transportation}</TableCell>
                    <TableCell>$1500</TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    key={quote.id}
                    onClick={() => loadQuote(quote)}
                    hover
                  >
                    <TableCell>{quote.id}</TableCell>
                    <TableCell>{quote.name}</TableCell>
                    <TableCell>{quote.destination.municipality}</TableCell>
                    <TableCell>$1500</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[1, 5, 10, 25]}
                  colSpan={full ? 7 : 4}
                  count={pendingQuotes.totalCount || 0}
                  rowsPerPage={pendingQuotes.size || 10}
                  page={pendingQuotes.page || 0}
                  onPageChange={(_, newPage) => loadPage(newPage)}
                  onRowsPerPageChange={(event) =>
                    loadPage(0, +event.target.value)
                  }
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <Box width="100%" height="100%" display="flex">
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      )}
    </DashboardCard>
  );
}
