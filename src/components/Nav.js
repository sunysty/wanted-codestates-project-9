import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <div>특가</div>
      <div>당일배송</div>
      <div>디자이너</div>
      <div>리뷰</div>
      <div>이벤트</div>
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
