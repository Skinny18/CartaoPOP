import logo from './logo.svg';
import './App.css';
import { Switch,  Route, Link, Routes, Router, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Pageprinc from "./pages/pagePrinc";
import Pageusuario from './pages/pageUsuario';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pageprinc/>}/>
        <Route exact path="/usuario" element={<Pageusuario/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
