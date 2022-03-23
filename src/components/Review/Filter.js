import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../store/reviewSlice';
import FilterItem from './FilterItem';

const Filter = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const isOpenFilterModal = () => {
    setIsOpen(!isOpen);
  };
  const onChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };
  const onSubmitFilter = () => {
    setIsOpen(!isOpen);
    setFilterValue(filterValue);
    dispatch(addFilter(filterValue));
  };
  const onRemoveFilterTag = () => {
    setFilterValue('');
  };
  return (
    <>
      {isOpen ? (
        <>
          <FilterButton onClick={isOpenFilterModal}>
            <span>정렬</span>
            <i class="fa-solid fa-chevron-down"></i>
          </FilterButton>
          <FilterModal onClick={isOpenFilterModal}>
            <form onClick={(e) => e.stopPropagation()}>
              <span onClick={isOpenFilterModal}>정렬</span>
              <FilterItem name="최신순" onChange={onChangeFilter} />
              <FilterItem name="좋아요많은순" onChange={onChangeFilter} />
              <FilterItem name="댓글많은순" onChange={onChangeFilter} />
              <button type="submit" onClick={onSubmitFilter}>
                적용하기
              </button>
            </form>
          </FilterModal>
        </>
      ) : (
        <>
          <FilterButton onClick={isOpenFilterModal}>
            <span>정렬</span>
            <i class="fa-solid fa-chevron-down"></i>
          </FilterButton>
          <FilterTagBox>
            <div>
              <FilterTagItem>
                <span>전체</span>
              </FilterTagItem>
              {filterValue === '' ? (
                <FilterTagItem>
                  <span>최신순</span>
                </FilterTagItem>
              ) : (
                <FilterTagItem onClick={onRemoveFilterTag}>
                  <span>{filterValue}</span>
                  <i class="fa-solid fa-minus"></i>
                </FilterTagItem>
              )}
            </div>
            <i class="fa-solid fa-arrow-rotate-left"></i>
          </FilterTagBox>
        </>
      )}
    </>
  );
};

export default Filter;

const FilterModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  form {
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.5rem;
    }
    button {
      width: 90%;
      border: none;
      background: #000;
      color: #fff;
      font-size: 1.5rem;
      padding: 0.8rem;
      box-sizing: border-box;
    }
  }
`;

const FilterButton = styled.div`
  display: inline-block;
  padding: 0.6rem 0.8rem;
  border: 1px solid #868ceb;
  border-radius: 2rem;
  cursor: pointer;

  span {
    padding-right: 0.4rem;
    color: #4348a2;
    font-weight: 600;
  }
  .fa-chevron-down {
    color: #ccc;
  }

  :hover {
    background: #868ceb;
    span {
      color: #fff;
    }
    .fa-chevron-down {
      color: #fff;
    }
  }
`;

const FilterTagBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
  }
`;

const FilterTagItem = styled.div`
  height: 1.2rem;
  background: #e7e8f9;
  color: #4348a2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 0.6rem 0.8rem;
  margin: 0.2rem;
  cursor: pointer;

  .fa-minus {
    padding-left: 0.6rem;
  }
`;
