import { configureStore } from "@reduxjs/toolkit";
import pendingQuotesReducer from "../components/cards/pendingQuotes/pendingQuotesSlicer";
import quickQuoteReducer from "../components/cards/quickQuote/quickQuoteSlicer";

export const store = configureStore({
  reducer: {
    pendingQuotes: pendingQuotesReducer,
    quickQuote: quickQuoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
