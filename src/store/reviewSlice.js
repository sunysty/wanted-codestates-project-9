import { createSlice } from '@reduxjs/toolkit';
import reviewData from './reviewData';

const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewData,
  reducers: {
    addReview: (state, action) => {
      state.push(action.payload);
    },
    addReply: (state, action) => {
      // const review = state.data.find((item) => item.id === action.payload.id);
      // review.comment.push(action.payload.data);
    },
    like: (state, action) => {
      console.log('like');
      const updateReview = state.map((el) => {
        if (el.id === action.payload) {
          if (el.selectedLike === false || undefined) {
            return { ...el, like: Number(el.like) + 1, selectedLike: true };
          }
        } else {
          return { ...el, like: Number(el.like) - 1, selectedLike: false };
        }
      });
      return { updateReview };
    },
    filtering: (sate, action) => {
      // const filter = state.data.slice;
    },
  },
});

export const { addReview, addComment, like, addFilter } = reviewSlice.actions;

export default reviewSlice.reducer;
