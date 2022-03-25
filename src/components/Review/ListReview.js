import React, { useState } from 'react';
import styled from 'styled-components';
import ListReviewItem from './ListReviewItem';

const ListReview = ({ reviewData, imgUrl }) => {
  return (
    <>
      {reviewData.map((el, i) => (
        <ListReviewItem currentReview={el} key={i} imgUrl={imgUrl} />
      ))}
    </>
  );
};

export default ListReview;
