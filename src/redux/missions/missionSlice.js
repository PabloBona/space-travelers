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
    missionsLoading(state) {
      if (state.status === 'idle') {
        state.status = 'pending';
      }
    },
    missionsReceived(state, action) {
      if (state.status === 'pending') {
        state.status = 'idle';
        state.missions = action.payload;
      }
    },
  },
});

export const { missionsLoading, missionsReceived } = missionsSlice.actions;
export default missionsSlice.reducer;
