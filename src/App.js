import React from 'react';
import styled from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import MainReview from './pages/MainReview';
import DetailReview from './pages/DetailReview';
import UploadReview from './pages/UploadReview';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" exact element={<MainReview />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 780px;
  margin: 0 auto;
`;
