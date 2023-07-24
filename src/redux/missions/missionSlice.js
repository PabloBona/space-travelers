import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  error: null,
};

const missionsURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await axios.get(missionsURL);
      console.log([...response.data]);
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const AllMissions = (state) => state.missions.missions;
export const getLoading = (state) => state.missions.isLoading;
export const getError = (state) => state.missions.error;

export default missionsSlice.reducer;
