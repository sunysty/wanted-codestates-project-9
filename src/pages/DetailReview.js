import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Like from '../components/Review/Like';
import Share from '../components/Review/Share';
import Comment from '../components/Review/Comment';

//리뷰상세이미지
//리뷰댓글달기
//좋아요
//링크공유

const DetailReview = () => {
  const { id } = useParams();
  const reviews = useSelector((state) => state.review);
  const [currentReview] = reviews.filter((el) => el.id == id);
  console.log(reviews, currentReview);
  const imgUrl = 'https://i.balaan.io/review/';
  const currentUrl = window.location.href;

  return (
    <>
      <InfoBox>
        <p>{currentReview.nickname}</p>
        <InfoBoxRight>
          <span>{currentReview.regdt.split(' ')[0]}</span>
          <img
            src="https://i.balaan.io/mobile/img/icon/icon-more.png"
            alt="moreIcon"
            className="moreIcon"
          />
        </InfoBoxRight>
      </InfoBox>
      <ImageBox>
        <img src={`${imgUrl}${currentReview.img[0]}`} alt="reviewImage" />
      </ImageBox>
      <EctBox>
        <Like
          id={currentReview.id}
          likeNum={currentReview.like}
          selectedLike={currentReview.selectedLike}
        />
        <Share currentUrl={currentUrl} />
      </EctBox>
      <TextBox>{currentReview.contents}</TextBox>
      <Comment />
    </>
  );
};

export default DetailReview;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const InfoBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18%;
  img {
    width: 30px;
    height: 30px;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    object-position: 50% 50%;
  }
`;

const EctBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    padding-right: 1rem;
  }
  .heart {
    width: 30px;
    height: 30px;
    padding-right: 0rem;
  }
`;

const TextBox = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 3rem 0;
`;
