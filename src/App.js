import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Community } from './pages/Community';
import { Error } from './pages/Error';
import { GlobalStyles } from './styles/GlobalStyles';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/community' element={<Community />} />
        <Route path='/404' element={<Error />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </Router>
  )
}
