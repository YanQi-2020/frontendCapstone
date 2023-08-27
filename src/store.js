// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sharedData: null,
};

const sharedDataSlice = createSlice({
  name: 'sharedData',
  initialState,
  reducers: {
    updateSharedData: (state, action) => {
      state.sharedData = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    sharedData: sharedDataSlice.reducer,
  },
});

export const { updateSharedData } = sharedDataSlice.actions;

export default store;
