import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
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
        <Route path='/' element={<Navigate to="/ap-loyalty-web" />} />
        <Route path="ap-loyalty-web" element={<Referral sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="ap-loyalty-web/cp" element={<CoinPoin sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="ap-loyalty-web/cp/pa" element={<PremiumAccess sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="ap-loyalty-web/cp/vc" element={<Voucher sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="ap-loyalty-web/cp/reward" element={<Reward sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
        <Route path="ap-loyalty-web/cp/pa/d" element={<PremiumAccessDetail sideState={ sideState } width={ width } toggleSide={ toggleSide } />} />
      </Routes>
    </Router>
  );
}

export default App;
