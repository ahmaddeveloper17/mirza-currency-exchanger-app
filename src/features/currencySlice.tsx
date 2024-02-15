import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface CurrencyState {
  rates: Record<string, number>;
  symbols: Record<string, string>;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  baseCurrency?: string;
  targetCurrency?: string;
}
export const fetchData = createAsyncThunk("currencyData", async () => {
  try {
    const response1 = await axios.get(
      `https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/symbols?access_key=4c9fea4e264cd6f8266a884feb4b839b`
    );
    const response2 = await axios.get(
      `https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/latest?access_key=4c9fea4e264cd6f8266a884feb4b839b`
    );
    return {
      rates: response2.data.rates,
      symbols: response1.data.symbols,
    } as {
      rates: Record<string, number>;
      symbols: Record<string, string>;
    };
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});
const initialState: CurrencyState = {
  rates: {},
  symbols: {},
  baseCurrency: "USD",
  targetCurrency: "PKR",
  loading: "idle",
  error: null,
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action) => {
      state.targetCurrency = action.payload;
    },
    baseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    targetCurrency: (state, action) => {
      state.targetCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.rates = action.payload?.rates || {};
        state.symbols = action.payload?.symbols || {};
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const { setBaseCurrency, baseCurrency, setTargetCurrency } =
  currencySlice.actions;
export const selectCurrency = (state: { currency: CurrencyState }) =>
  state.currency;
export const selectSymbols = (state: { currency: CurrencyState }) =>
  state.currency.symbols;
export default currencySlice.reducer;
