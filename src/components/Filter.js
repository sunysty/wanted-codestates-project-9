import React, { useState } from 'react';
import styled from 'styled-components';

const Filter = () => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      {selected ? (
        <FilterList>
          <h1>정렬</h1>
          <FilterItem>
            <label for="recent">최신순</label>
            <input type="radio" id="recent" />
          </FilterItem>
          <FilterItem>
            <label for="like">좋아요 많은순</label>
            <input type="radio" id="like" />
          </FilterItem>
          <FilterItem>
            <label for="comment">댓글 많은순</label>
            <input type="radio" id="comment" />
          </FilterItem>
        </FilterList>
      ) : (
        <FilterButton onClick={() => setSelected(true)}>정렬</FilterButton>
      )}
    </>
  );
};

export default Filter;

const FilterList = styled.div``;

const FilterItem = styled.div``;

const FilterButton = styled.div``;
