import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: true,
  error: null,
};

const fetchDragonsData = createAsyncThunk('dragons/fetchDragonsData', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    return [...response.data];
  } catch (error) {
    throw new Error('Failed to fetch dragons data. Please try again later.');
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragonId = action.payload;
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== dragonId) { return dragon; }
        return { ...dragon, reserved: !dragon.reserved };
      });
      state.dragons = newState;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDragonsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dragons = action.payload;
      })
      .addCase(fetchDragonsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;
export { fetchDragonsData };
export const { reserveDragon } = dragonsSlice.actions;
