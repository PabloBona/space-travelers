import { createSlice } from '@reduxjs/toolkit';

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setDragonsData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setDragonsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setDragonsData, setDragonsError } = dragonsSlice.actions;

export default dragonsSlice.reducer;
