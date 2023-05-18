import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import VedioPage from './pages/VedioPage/VedioPage';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route  path="/login" element={<LoginPage/>} />     
          <Route  path="/signup" element={<SignUpPage/>} />     
          <Route  path="/" element={<HomePage/>} />     
          <Route  path="/vedios" element={<VedioPage/>} />     
       </Routes>
    </BrowserRouter>
  );
}

export default App;
