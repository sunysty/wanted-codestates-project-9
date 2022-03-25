import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { like } from '../../store/reviewSlice';
import { useParams } from 'react-router-dom';

const Like = ({ id, likeNum, selectedLike }) => {
  const dispatch = useDispatch();
  const onLikeHandler = () => {
    dispatch(like(id));
  };

  return (
    <Container>
      {selectedLike && selectedLike ? (
        <>
          <span>{likeNum}</span>
          <img
            className="like"
            src="https://static.balaan.co.kr/mobile/img/review/like-hand-fill.png?v4"
            alt="like"
            onClick={onLikeHandler}
          />
        </>
      ) : (
        <>
          <img
            className="unlike"
            src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
            alt="unlike"
            onClick={onLikeHandler}
          />
        </>
      )}
    </Container>
  );
};

export default Like;

const Container = styled.div`
  cursor: pointer;
`;
