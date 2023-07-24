import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const formattedBooks = (data) => data.map((rocket) => ({
  id: rocket.id,
  rocketname: rocket.rocket_name,
  type: rocket.rocket_type,
  image: rocket.flickr_images[0],
}));

export const getRocketData = createAsyncThunk('rockets/getRocketData', async () => {
  try {
    const rocketsDataLink = 'https://api.spacexdata.com/v3/rockets';
    const response = await fetch(rocketsDataLink);
    const data = await response.json();
    const formattedData = formattedBooks(data);
    return formattedData;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: true,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.rockets.length === 0) {
          state.rockets = action.payload;
        }
      })
      .addCase(getRocketData.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default rocketsSlice.reducer;
