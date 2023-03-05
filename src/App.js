import * as React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Album from './pages/Album';
import Login from './pages/Login';
import Register from './pages/Register';

export default function MyApp() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/alumn" element={<Album/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}
