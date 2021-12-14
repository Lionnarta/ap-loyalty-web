import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Referral from './pages/Refferal/Referral';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Referral />}>
          <Route path="blogs" element={<Referral />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
