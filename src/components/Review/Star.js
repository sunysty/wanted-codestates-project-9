import React from 'react';
import styled from 'styled-components';

const Star = () => {
  return (
    <StarBox>
      <img
        src="https://i.balaan.io/mobile/img/icons/icon-star-black.png"
        alt="fill"
      />
      <img
        src="https://i.balaan.io/mobile/img/icons/icon-star-black.png"
        alt="fill"
      />
      <img
        src="https://i.balaan.io/mobile/img/icons/icon-star-black.png"
        alt="fill"
      />
      <img
        src="https://i.balaan.io/mobile/img/icons/icon-star-black.png"
        alt="fill"
      />
      <img
        src="https://i.balaan.io/mobile/img/icons/icon-star-gray.png"
        alt="none"
      />
    </StarBox>
  );
};

export default Star;

const StarBox = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`;
