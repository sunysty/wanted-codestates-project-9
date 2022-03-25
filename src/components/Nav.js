import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  return (
    <Container>
      <div
        onClick={() => navigate('/') & setSelected(true)}
        className={selected ? 'show' : null}
      >
        리뷰보기
      </div>
      <div
        onClick={() => navigate('/uploadReview') & setSelected(false)}
        className={selected ? null : 'upload'}
      >
        리뷰작성하기
      </div>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  height: 3rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 3rem;
    cursor: pointer;
  }
  .show {
    border-bottom: 2px solid black;
  }
  .upload {
    border-bottom: 2px solid black;
  }
`;
