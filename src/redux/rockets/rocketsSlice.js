import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const formattedRocketData = (data) => data.map((rocket) => ({
  id: rocket.id,
  isReserved: false,
  rocketName: rocket.rocket_name,
  description: rocket.description,
  imageRocket: rocket.flickr_images[0],
}));

export const getRocketData = createAsyncThunk('rockets/getRocketData', async () => {
  try {
    const rocketsDataLink = 'https://api.spacexdata.com/v3/rockets';
    const response = await fetch(rocketsDataLink);
    const data = await response.json();
    const formattedData = formattedRocketData(data);
    return formattedData;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newRocketList = state.rockets.map((rocket) => {
        if (rocket.id !== rocketId) { return rocket; }
        return { ...rocket, isReserved: !rocket.isReserved };
      });
      state.rockets = newRocketList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.rockets.length === 0) {
          state.rockets = action.payload;
        }
      })
      .addCase(getRocketData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
