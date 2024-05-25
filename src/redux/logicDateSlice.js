import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: '',
  month: '',
  year: '',
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export const { setDay, setMonth, setYear } = dateSlice.actions;
export default dateSlice.reducer;
