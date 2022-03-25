import React from 'react';
import styled from 'styled-components';

const Comment = () => {
  return (
    <Container>
      <p>
        <input type="text" placeholder="댓글을 입력하세요" />
        <button type="submit">등록</button>
      </p>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
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
