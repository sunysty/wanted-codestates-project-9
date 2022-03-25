import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Filter from '../components/Review/Filter';
import ListReview from '../components/Review/ListReview';
import GridReview from '../components/Review/GridReview';

//무한스크롤
//정렬(최신순, 리뷰카운트순, 랜덤)
// //리뷰 목록표시형태 선택(그리드뷰, 리스트뷰)

const MainReview = () => {
  const [gridLayout, setGridLayout] = useState(true);
  const currentUrl = window.location.href;
  const reviewData = useSelector((state) => state.review);
  const imgUrl = 'https://i.balaan.io/review/';

  return (
    <>
      <Filter />
      <SelectLayoutTab>
        <div
          onClick={() => setGridLayout(true)}
          className={gridLayout ? 'line' : null}
        >
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png"
            alt="grid"
          />
        </div>
        <div
          onClick={() => setGridLayout(false)}
          className={gridLayout ? null : 'line'}
        >
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png"
            alt="list"
          />
        </div>
      </SelectLayoutTab>
      {gridLayout ? (
        <GridReview reviewData={reviewData} imgUrl={imgUrl} />
      ) : (
        <ListReview
          reviewData={reviewData}
          imgUrl={imgUrl}
          currentUrl={currentUrl}
        />
      )}
    </>
  );
};

export default MainReview;

const SelectLayoutTab = styled.div`
  display: flex;
  justify-content: space-around;
  .line {
    border-bottom: 2px solid #000;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    img {
      width: 2rem;
      cursor: pointer;
    }
  }
`;
