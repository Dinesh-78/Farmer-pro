import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const Lazyhome = React.lazy( () => import('./pages/Home'))
const Lazyshop = React.lazy( () => import('./pages/Shop/Shop'));
import Notfound from './utils/not-found';
import Profile from './pages/auth/Profile/Profile';
import Navbar from './common/header/Navbar';
import Footer from './common/footer/Footer';
import Login from './pages/auth/Login';
import About from './pages/About';
import OtpLogin from './pages/auth/otplogin';

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
       <Route path="/shop" element={
         <React.Suspense fallback={<div>Loading...</div>}>
          <Lazyshop />
         </React.Suspense>
       } />
       
        <Route path="/newroutre"  >
        <Route index />
        </Route>
        <Route path="users/:userid"  />
        <Route path='profile' element={<Profile />} />
        
        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otplogin" element={<OtpLogin />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
