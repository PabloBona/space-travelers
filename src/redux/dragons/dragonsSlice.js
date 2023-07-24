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
    dragonsLoading(state) {
      if (state.status === 'idle') {
        state.status = 'pending';
      }
    },
    dragonsReceived(state, action) {
      if (state.status === 'pending') {
        state.status = 'idle';
        state.dragons = action.payload;
      }
    },
  },
});

export const { dragonsLoading, dragonsReceived } = dragonsSlice.actions;
export default dragonsSlice.reducer;
