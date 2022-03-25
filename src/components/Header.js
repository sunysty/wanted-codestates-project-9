import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <Logo onClick={() => Navigate('/')}>
        <img
          src="https://i.balaan.io/mobile/img/icon/ico_logo.png"
          alt="logo"
        />
      </Logo>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-cart-shopping"></i>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    text-align: center;
    cursor: pointer;
    width: 50%;
  }
  .fa-bars {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .fa-magnifying-glass {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .fa-heart {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .fa-cart-shopping {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
