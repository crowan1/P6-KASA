import React from 'react';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from '/Users/charloo/Desktop/workflow/kasa/src/pages/Accueil.js'
import About from '/Users/charloo/Desktop/workflow/kasa/src/pages/Apropos.js'
import CardLogement from '/Users/charloo/Desktop/workflow/kasa/src/pages/PagesLogements.js'
import Page404 from '/Users/charloo/Desktop/workflow/kasa/src/pages/PageEror.js'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/logement/:id' element={<CardLogement/>} />
        <Route path='*' element={<Page404/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
