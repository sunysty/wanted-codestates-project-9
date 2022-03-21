import React from 'react';
import styled from 'styled-components';

const FilterItem = ({ name, onChange }) => {
  return (
    <Container>
      <label for={name}>{name}</label>
      <input
        type="radio"
        id={name}
        name="filter"
        value={name}
        onChange={onChange}
      />
    </Container>
  );
};

export default FilterItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: 1.3rem;
  width: 90%;
  label {
    margin: 1rem;
    width: 100%;
  }
  input {
    margin: 1rem;
    transform: scale(1.5);
  }
`;
