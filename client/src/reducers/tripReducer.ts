import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../util/axios";

export interface ITripState {
  isLoading: boolean;
  trips: [];
}

const state: ITripState = {
  isLoading: false,
  trips: [],
};

export const getTrips = createAsyncThunk("getAllTrips", async () => {
  const res = await axios.get(`trips`);
  return res?.data?.data?.trips ?? [];
});

const tripSlice = createSlice({
  name: "trip",
  initialState: state,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrips.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTrips.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trips = action.payload;
    });
  },
});

export default tripSlice.reducer;
