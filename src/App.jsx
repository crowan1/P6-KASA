import React from 'react';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from '../src/pages/Accueil.jsx'
import About from '../src/pages/Apropos.jsx'
import CardLogement from '../src/pages/PagesLogements.jsx'
import Page404 from '../src/pages/PageEror.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/logement/:id' element={<CardLogement />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
