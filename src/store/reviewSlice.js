import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './data';

const reviewSlice = createSlice({
  name: 'review',
  initialState,
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
  },
});

export const { addReview, addComment, likePlus } = reviewSlice.actions;

export default reviewSlice.reducer;
