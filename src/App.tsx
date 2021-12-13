import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Refferal from './pages/Refferal/Refferal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Refferal />}>
          <Route path="blogs" element={<Refferal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
