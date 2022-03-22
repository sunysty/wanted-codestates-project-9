import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div onClick={() => navigate('/')}>리뷰보기</div>
      <div onClick={() => navigate('/uploadReview')}>리뷰작성하기</div>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  height: 3rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 3rem;
    cursor: pointer;
    :hover {
      border-bottom: 2px solid black;
    }
  }
`;
