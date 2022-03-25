import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GridReview = ({ reviewData, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <ReviewGrid>
      {reviewData.map((el, i) => (
        <GridCardBox key={i} onClick={() => navigate(`/${el.id}`)}>
          <img src={`${imgUrl}${el.img[0]}`} alt="reviewImage" />
        </GridCardBox>
      ))}
    </ReviewGrid>
  );
};
export default GridReview;

const ReviewGrid = styled.div`
  display: grid;
  grid: auto-flow/repeat(3, 1fr);
  grid-gap: 0.3rem;
`;

const GridCardBox = styled.div`
  height: 20vh;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
