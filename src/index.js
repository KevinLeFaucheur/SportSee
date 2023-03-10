import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { Header } from './layout/Header';
import { Side } from './layout/Side';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Community } from './pages/Community';
import { Error } from './pages/Error';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Header />
      <Side />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/community' element={<Community />} />
        <Route path='/404' element={<Error />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </Router>
  </React.StrictMode>
);