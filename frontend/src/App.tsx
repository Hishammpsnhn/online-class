import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import VedioPage from './pages/VedioPage/VedioPage';
import AdminHome from './pages/Admin-class/AdminHome';
import Header from './components/Header/Header';
import AdminSubjects from './pages/Admin-subject/AdminSubjects';
import AdminVedios from './pages/Admin-vedios/AdminVedios';


function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route  path="/login" element={<LoginPage/>} />     
          <Route  path="/signup" element={<SignUpPage/>} />     
          <Route  path="/" element={<HomePage/>} />     
          <Route  path="/vedios" element={<VedioPage/>} />     
          <Route  path="/admin" element={<AdminHome/>} />     
          <Route  path="/admin/subject" element={<AdminSubjects/>} />     
          <Route  path="/admin/vedios" element={<AdminVedios/>} />     
       </Routes>
    </BrowserRouter>
  );
}

export default App;
