// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOAI from './pages/HOAI';
import Home from './pages/Home';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router basename="/vfpages">
      <Routes > 
        <Route  path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/HOAI" element={<HOAI />} />
            <Route path="*" element={<HOAI />} />
        </Route>
      </Routes>
    </Router>
  );
};
// 
export default App;
