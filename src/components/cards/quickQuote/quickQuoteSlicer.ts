import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import Quote from "../../../repositories/models/Quote";
import QuoteCreateArgs from "../../../repositories/models/QuoteCreateArgs";
import quotesRepository from "../../../repositories/QuotesRepository";

export interface QuickQuoteSlicer {
  quote?: Quote;
  status: "idle" | "loading" | "error";
  error?: string;
}

const initialState: QuickQuoteSlicer = {
  status: "idle",
};

export const quickQuoteSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuickQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createQuickQuote.fulfilled, (state, action) => {
        state.status = "idle";
        state.quote = action.payload;
        state.error = undefined;
      })
      .addCase(createQuickQuote.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const createQuickQuote = createAsyncThunk<Quote, QuoteCreateArgs>(
  "quotes/create",
  async (data) => {
    try {
      return await quotesRepository.create(data);
    } catch (e: any) {
      throw e.response.data;
    }
  }
);

export const selectQuote = (state: RootState) => state.quickQuote.quote;

export default quickQuoteSlicer.reducer;
