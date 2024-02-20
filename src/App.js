// App.js

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HOAI from './pages/HOAI';
import Home from './pages/Home';
import Layout from './pages/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/HOAI" element={<HOAI />} />
            <Route path="*" element={<HOAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
// 
export default App;
