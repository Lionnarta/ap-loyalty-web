import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Referral from './pages/Refferal/Referral';
import CoinPoin from './pages/CoinPoin/CoinPoin';
import PremiumAccess from './pages/PremiumAccess/PremiumAccess';
import PremiumAccessDetail from './pages/PremiumAccessDetail/PremiumAccessDetail';
import Voucher from './pages/Voucher/Voucher';
import Reward from './pages/Rewards/Reward';

function App() {

  const [sideState, setSideState] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
    
  const toggleSide = () => {
    setSideState(!sideState);
  }
  
  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width <= 768) {
        setSideState(false);
      }
      else {
        setSideState(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  })

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 768) {
        setSideState(false);
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Referral sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="cp" element={<CoinPoin sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="cp/pa" element={<PremiumAccess sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="cp/vc" element={<Voucher sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="cp/reward" element={<Reward sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="cp/pa/d" element={<PremiumAccessDetail sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
      </Routes>
    </Router>
  );
}

export default App;
