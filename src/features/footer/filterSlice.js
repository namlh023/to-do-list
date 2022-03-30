import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: StatusFilters.All,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    filterStatusChanged(state, action) {
      state.status = action.payload;
    },
  },
});

export const { filterStatusChanged } = filterSlice.actions;

export default filterSlice.reducer;
