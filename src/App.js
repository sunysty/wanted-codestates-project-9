import React from 'react';
import styled from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Nav from './components/Nav';
import MainReview from './pages/MainReview';
import DetailReview from './pages/DetailReview';
import UploadReview from './pages/UploadReview';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" exact element={<MainReview />} />
            <Route path="/uploadReview" exact element={<UploadReview />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;
