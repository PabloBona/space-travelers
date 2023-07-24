import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
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
