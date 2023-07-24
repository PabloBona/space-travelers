import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
});

export const { rocketsLoading, rocketsReceived } = rocketsSlice.actions;
export default rocketsSlice.reducer;
