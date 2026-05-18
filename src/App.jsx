import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  ) }

export default App;
