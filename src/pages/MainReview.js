import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '../components/Review/Filter';
import ReviewLayout from '../components/Review/ReviewLayout';
//무한스크롤
//정렬(최신순, 리뷰카운트순, 랜덤)
//리뷰 목록표시형태 선택(그리드뷰, 리스트뷰)

const MainReview = () => {
  return (
    <>
      <Filter />
      <ReviewLayout />
    </>
  );
};

export default MainReview;
