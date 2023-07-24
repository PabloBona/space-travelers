import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketsLoading(state) {
      if (state.status === 'idle') {
        state.status = 'pending';
      }
    },
    rocketsReceived(state, action) {
      if (state.status === 'pending') {
        state.status = 'idle';
        state.rockets = action.payload;
      }
    },
  },
});

export const { rocketsLoading, rocketsReceived } = rocketsSlice.actions;
export default rocketsSlice.reducer;
