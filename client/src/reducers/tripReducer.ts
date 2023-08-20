import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../util/axios";

const state = {
  isLoading: false,
  trips: [],
};

export const getTrips = createAsyncThunk("getAllTrips", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  return res.data;
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
