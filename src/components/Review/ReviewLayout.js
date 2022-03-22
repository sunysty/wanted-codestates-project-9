import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Star from './Star';

const ReviewLayout = () => {
  //데이터
  const reviewData = useSelector((state) => state.review);
  const imgUrl = 'https://i.balaan.io/review/';

  //   const imgId = reviewData.img[0];
  //   console.log('>', imgId);
  console.log('>>>', reviewData);

  //grid관련
  const [gridLayout, setGridLayout] = useState(true);

  //list관련
  const [like, setLike] = useState(false);
  const onLikeHandler = () => {
    setLike(!like);
    // dispatch(addLike())
  };

  return (
    <>
      <ReviewLayoutSelector>
        <div onClick={() => setGridLayout(true)}>
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png"
            alt="grid"
          />
        </div>
        <div onClick={() => setGridLayout(false)}>
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png"
            alt="list"
          />
        </div>
      </ReviewLayoutSelector>
      {gridLayout ? (
        <ReviewGrid>
          {reviewData.map((el, i) => (
            <GridCardBox key={i}>
              <img src={`${imgUrl}${el.img[0]}`} alt="reviewImage" />
            </GridCardBox>
          ))}
        </ReviewGrid>
      ) : (
        <ReviewList>
          {reviewData.map((el, i) => (
            <div key={i}>
              <InfoBox>
                <p>{el.nickname}</p>
                <InfoBoxRight>
                  <span>{el.regdt.split(' ')[0]}</span>
                  <img
                    src="https://i.balaan.io/mobile/img/icon/icon-more.png"
                    alt="more"
                    className="more"
                  />
                </InfoBoxRight>
              </InfoBox>
              <ImageBox>
                <img src={`${imgUrl}${el.img[0]}`} alt="reviewImage" />
              </ImageBox>
              <EctBox>
                <div>
                  {like ? (
                    <img
                      className="like"
                      src="https://static.balaan.co.kr/mobile/img/review/like-hand-fill.png?v4"
                      alt="like"
                      onClick={() => onLikeHandler}
                    />
                  ) : (
                    <img
                      className="unlike"
                      src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
                      alt="unlike"
                      onClick={() => onLikeHandler}
                    />
                  )}
                  <img
                    className="share"
                    src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
                    alt="share"
                  />
                </div>
                <img
                  className="heart"
                  src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png"
                  alt="heart"
                  onClick={() => alert('로그인후 이용해주세요')}
                />
              </EctBox>
              <Star></Star>
              <OptionBox>
                <span>구매옵션명 : {el.opt}</span>
                <span>
                  {el.memberSize.split('&nbsp;&nbsp;/&nbsp;&nbsp;')[0]}
                </span>
                <span>
                  {el.memberSize.split('&nbsp;&nbsp;/&nbsp;&nbsp;')[1]}
                </span>
                <span>
                  {el.memberSize.split('&nbsp;&nbsp;/&nbsp;&nbsp;')[2]}
                </span>
              </OptionBox>
              <TextBox>{el.contents}</TextBox>
              <ReviewSizeBox>
                <div>
                  <span>{el.reviewSize[0].title} </span>
                  <span className="blue">{el.reviewSize[0].txt}</span>
                </div>
                <div>
                  <span>{el.reviewSize[1].title} </span>
                  <span className="blue">{el.reviewSize[1].txt}</span>
                </div>
              </ReviewSizeBox>
              <DeliveryBox>
                <span>
                  <img
                    className="package"
                    alt="pack"
                    src="https://i.balaan.io/mobile/img/icons/icon-box-20.png"
                  />
                  배송 도착까지&nbsp;
                  <b>{el.delivery_day}일 소요</b>
                </span>
              </DeliveryBox>
              <CommentBox>
                <p>
                  <input placeholder="로그인후 댓글작성이 가능합니다." />
                  <button>게시</button>
                </p>
              </CommentBox>
            </div>
          ))}
        </ReviewList>
      )}
    </>
  );
};
export default ReviewLayout;
const ReviewLayoutSelector = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    :hover {
      border-bottom: 1px solid #ccc;
    }
    img {
      width: 2rem;
    }
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid: auto-flow/repeat(3, 1fr);
  grid-gap: 1rem;

  img {
    width: 100%;
  }
`;

const GridCardBox = styled.div`
  height: 35vh;
  overflow: hidden;
`;

const ReviewList = styled.div``;

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
  height: 60vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 150%;
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

const OptionBox = styled.div`
  margin: 1rem 0;
  span {
    padding-right: 1rem;
    color: #ccc;
    font-size: 1.2rem;
  }
`;

const TextBox = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 3rem 0;
`;

const ReviewSizeBox = styled.div`
  display: flex;
  div {
    border: 1px solid #eee;
    border-radius: 2rem;
    padding: 0.5rem 0.8rem;
    margin-right: 1rem;
    height: 20px;

    .blue {
      color: #122f5c;
    }
  }
`;

const DeliveryBox = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    background: #eee;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    img {
      width: 30px;
      height: 30px;
      margin-right: 0.5rem;
    }
  }
`;

const CommentBox = styled.div`
  background: #eee;
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-top: 5rem;

  p {
    width: 90%;
    border: 1px solid #eee;
    border-radius: 2rem;
    overflow: hidden;
    padding: 0 2rem;
    background: #fff;

    input {
      width: 90%;
      height: 50px;
      border: none;
      font-size: 1.2rem;
    }
    button {
      width: 8%;
      height: 50px;
      border: none;
      background: none;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;
