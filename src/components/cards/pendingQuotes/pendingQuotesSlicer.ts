import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import PaginatedResponse from "../../../repositories/models/PaginatedResponse";
import Quote from "../../../repositories/models/Quote";
import quotesRepository from "../../../repositories/QuotesRepository";

export interface PendingQuotesState {
  quotes?: PaginatedResponse<Quote>;
  status: "idle" | "loading" | "error";
  error?: string;
}

const initialState: PendingQuotesState = {
  status: "idle",
};

export const pendingQuotesSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingQuotesPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPendingQuotesPage.fulfilled, (state, action) => {
        state.status = "idle";
        state.quotes = action.payload;
      })
      .addCase(fetchPendingQuotesPage.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const fetchPendingQuotesPage = createAsyncThunk<
  PaginatedResponse<Quote>,
  { page: number; limit: number }
>("quotes/list", (data) => {
  return quotesRepository.list(data.page, data.limit);
});

export const selectQuotes = (state: RootState) => state.pendingQuotes.quotes;

export default pendingQuotesSlicer.reducer;
