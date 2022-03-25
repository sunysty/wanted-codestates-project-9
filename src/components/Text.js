import React from 'react';
import styled from 'styled-components';

const Text = (color, size, weight) => {
  return <P color={color} size={size} weight={weight}></P>;
};

export default Text;

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
`;
