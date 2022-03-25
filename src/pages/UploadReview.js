import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReview } from '../store/reviewSlice';
import moment from 'moment';
import UploadImage from '../components/Review/UploadImage';

//리뷰제목, 이미지선택, 평점(5점만점) 등록
//리뷰등록 페이지는 등록 기능만
//추가날짜 --> 필터링 최신순 때문에
//미리보기, 별점은 라이브러리쓰기?
//uploadReview 누르면 데이터가 리덕스에 올라가도록 dispatch사용

const UploadReview = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moment = require('moment');
  let date = moment();
  const shortid = require('shortid');
  const [contents, setContents] = useState('');
  const [image, setImage] = useState(['']);
  const [star, setLike] = useState();
  // const [delivery, setDelivery]= useState();
  // const [reviewSize, setReviewSize] = useState();
  // const [opt, setOpt] = useState();

  const submitReview = (uploadImage) => {
    let review = {
      id: shortid.generate(),
      regdt: date.format().split('T')[0],
      nickname: 'anonymous',
      contents,
      img: image,
      star,
    };
    console.log(review);
    dispatch(addReview(review));
    navigate('/');
  };

  return (
    <div>
      <Contents>
        <span>내용</span>
        <textarea
          type="text"
          placeholder="내용을 입력하세요"
          onChange={(e) => setContents(e.target.value)}
        />
      </Contents>
      <Star />
      <UploadImage uploadImage={image} />
      <button onClick={submitReview}>등록하기</button>
    </div>
  );
};

export default UploadReview;

const Info = styled.div`
  display: none;
`;

const Image = styled.div``;

const Contents = styled.div``;

const Star = styled.div``;
