import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import VedioPage from './pages/VedioPage/VedioPage';
import AdminHome from './pages/Admin-class/AdminHome';
import Header from './components/Header/Header';
import AdminSubjects from './pages/Admin-subject/AdminSubjects';
import AdminVedios from './pages/Admin-vedios/AdminVedios';
import { client } from './utils/utils';
import { UserContext, UserProvider } from './context/UserContext';



function App() {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/vedios" element={<VedioPage />} />

            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/subject/:id" element={<AdminSubjects />} />
            <Route path="/admin/vedios/:id" element={<AdminVedios />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
