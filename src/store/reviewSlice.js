import { createSlice } from '@reduxjs/toolkit';
import reviewData from './reviewData';

const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewData,
  reducers: {
    addReview: (state, action) => {
      //   state.data.push(action.payload);
    },
    addComment: (state, action) => {
      //     const review = state.data.find((item) => item.id === action.payload.id);
      //   review.comment.push(action.payload.data);
    },
    likePlus: (state, action) => {
      //   const review = state.data.find((item) => item.id === action.payload.id);
      //   review.like++;
    },
    addFilter: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addReview, addComment, likePlus, addFilter } =
  reviewSlice.actions;

export default reviewSlice.reducer;
