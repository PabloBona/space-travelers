import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: true,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export const { missionsLoading, missionsReceived } = missionsSlice.actions;
export default missionsSlice.reducer;
