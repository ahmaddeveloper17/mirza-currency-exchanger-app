
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CurrencyState {
  rates: Record<string, number>;
  baseCurrency: string;
  targetCurrency: string;
  amount: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
export const fetchExchangeRates = createAsyncThunk(
  'currency/fetchExchangeRates',
  async (baseCurrency: string) => {
    try {
      const response = await axios.get(`  https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/latest?access_key=4c9fea4e264cd6f8266a884feb4b839b`);
      const responseData = response.data.rates;
      // console.log(response);

      return responseData;
    } catch (error) {
      // console.error('Error fetching exchange rates:', error);
      throw Error('Failed to fetch exchange rates');
    }
  }
);

// export const fetchCountryNames = createAsyncThunk(
//   'currency/fetchExchangeRates',
//   async (baseCurrency: string) => {
//     try {
//       const response = await axios.get(` https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/symbols?access_key=4c9fea4e264cd6f8266a884feb4b839b`);
//       const responseData = response.data.symbols;
//       console.log(response);

//       return responseData;
//     } catch (error) {
//      // console.error('Error fetching exchange rates:', error);
//       throw Error('Failed to fetch exchange rates');
//     }
//   }
// );

const initialState: CurrencyState = {
  rates: {},
  baseCurrency: 'USD',
  targetCurrency: 'PKR',
  amount: 0,
  loading: 'idle',
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action) => {
      state.targetCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.rates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state) => {
        state.loading = 'failed';
        state.error = 'Failed to fetch exchange rates';
      })

  },
});

export const { setBaseCurrency, setTargetCurrency, setAmount } = currencySlice.actions;

export const selectCurrency = (state: { currency: CurrencyState }) => state.currency;

export default currencySlice.reducer;
