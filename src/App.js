import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainReview from './pages/MainReview';
import DetailReview from './pages/DetailReview';
import UploadReview from './pages/UploadReview';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" exact element={<MainReview />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
