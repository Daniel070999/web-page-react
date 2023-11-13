import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainC from './pages/home/Main';
import MainAppInfoC from './pages/appInfo/MainAppInfoC';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainC />} />
          <Route path='appinfo/:app' element={<MainAppInfoC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
