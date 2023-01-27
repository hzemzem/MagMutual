import React from 'react';
import SearchByText from './pages/SearchByName';
import SearchByDate from './pages/SearchByDateRange';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/search-by-text" element={<SearchByText />} />
        <Route path="/search-by-date" element={<SearchByDate />} />
      </Routes>
    </BrowserRouter>
  );
}
