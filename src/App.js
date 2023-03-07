import * as React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Album from './pages/Album';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import FooterEx from './components/Footer';
export default function MyApp() {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/alumn" element={<Album/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <FooterEx/>
    </div>
  );
}
