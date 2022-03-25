import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});

export default store;
