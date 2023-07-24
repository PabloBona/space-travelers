import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

export const fetchDragonsData = createAsyncThunk('dragons/fetchDragonsData', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    const dragonsData = response.data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      flickr_images: dragon.flickr_images,
      description: dragon.description,
      first_flight: dragon.first_flight,
    }));
    return dragonsData;
  } catch (error) {
    throw new Error('Failed to fetch dragons data. Please try again later.');
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDragonsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchDragonsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;
