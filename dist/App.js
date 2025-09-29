import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "../_snowpack/pkg/react-router-dom.js";
import "./App.css.proxy.js";
import Referral from "./pages/Refferal/Referral.js";
import CoinPoin from "./pages/CoinPoin/CoinPoin.js";
import Loyalty from "./pages/Loyalty/Loyalty.js";
import PremiumAccess from "./pages/PremiumAccess/PremiumAccess.js";
import PremiumAccessDetail from "./pages/PremiumAccessDetail/PremiumAccessDetail.js";
import Voucher from "./pages/Voucher/Voucher.js";
import Reward from "./pages/Rewards/Reward.js";
function App() {
  const [sideState, setSideState] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const toggleSide = () => {
    setSideState(!sideState);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width <= 768) {
        setSideState(false);
      } else {
        setSideState(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 768) {
      setSideState(false);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Navigate, {
      to: "/ap-loyalty-web"
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web",
    element: /* @__PURE__ */ React.createElement(Referral, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/cp",
    element: /* @__PURE__ */ React.createElement(CoinPoin, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/lyl",
    element: /* @__PURE__ */ React.createElement(Loyalty, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/cp/pa",
    element: /* @__PURE__ */ React.createElement(PremiumAccess, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/cp/vc",
    element: /* @__PURE__ */ React.createElement(Voucher, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/cp/reward",
    element: /* @__PURE__ */ React.createElement(Reward, {
      sideState,
      width,
      toggleSide
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "ap-loyalty-web/cp/pa/d",
    element: /* @__PURE__ */ React.createElement(PremiumAccessDetail, {
      sideState,
      width,
      toggleSide
    })
  })));
}
export default App;
