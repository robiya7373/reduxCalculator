import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: '',
  month: '',
  year: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
