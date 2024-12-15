import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const Lazyhome = React.lazy( () => import('./pages/Home'))
import Notfound from './utils/not-found';
import Profile from './pages/auth/Profile/Profile';
import Navbar from './common/header/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
       
        <Route path="/" element={
           <React.Suspense fallback={<div>Loading...</div>}>
           <Lazyhome />
           </React.Suspense>
        } />
       
        <Route path="/newroutre"  >
        <Route index />
        </Route>
        <Route path="users/:userid"  />
        <Route path='profile' element={<Profile />} />
        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
