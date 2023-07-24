import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {

  },
});

export const { dragonsLoading, dragonsReceived } = dragonsSlice.actions;
export default dragonsSlice.reducer;
