import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
