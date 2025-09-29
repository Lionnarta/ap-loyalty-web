import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./CoinPoinSection.css.proxy.js";
import CoinHistory from "./CoinHistory.js";
import PoinHistory from "./PoinHistory.js";
import TermModalCP from "../Modal/TermModalCP.js";
import coinIcon from "../../assets/images/coin.png.proxy.js";
import poinIcon from "../../assets/images/poin.png.proxy.js";
import poinIcon2 from "../../assets/images/poin2.png.proxy.js";
import topupcoin from "../../assets/images/topup.png.proxy.js";
const CoinPoinInformation = (props) => {
  const [curState, setCurState] = useState("coin");
  const [showTermCP, setShowTermCP] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "ap-cp-v2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info ap-cp-info-noside" : "ap-cp-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-ls ap-cp-info-ls-noside" : "ap-cp-info-ls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav-c ap-cp-info-nav-c-noside" : "ap-cp-info-nav-c",
    onClick: () => setCurState("coin")
  }, /* @__PURE__ */ React.createElement("div", {
    className: curState == "coin" ? props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-active ap-cp-info-nav-noside ap-cp-info-nav-top-noside" : "ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-active" : props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-nav-noside ap-cp-info-nav-top-noside" : "ap-cp-info-nav ap-cp-info-nav-top"
  }), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-content ap-cp-info-content-noside" : "ap-cp-info-content"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coinIcon,
    alt: "Coin Aku Pintar"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-coin-text ap-font-20 ap-content-600"
  }, "1500 AP Coin")), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-coin-topup ap-coin-topup-wside" : "ap-coin-topup",
    onClick: () => props.setShowDownload(true)
  }, /* @__PURE__ */ React.createElement("img", {
    src: topupcoin,
    alt: "Top Up Aku Pintar",
    className: "ap-mr-5"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-12 ap-content-500 ap-center ap-text-darkblue"
  }, "Top Up"))), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav-c ap-cp-info-nav-c-noside" : "ap-cp-info-nav-c",
    onClick: () => setCurState("poin")
  }, /* @__PURE__ */ React.createElement("div", {
    className: curState == "poin" ? props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-active ap-cp-info-nav-noside ap-cp-info-nav-bottom-noside" : "ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-active" : props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-nav-noside ap-cp-info-nav-botton-noside" : "ap-cp-info-nav ap-cp-info-nav-bottom"
  }), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-content ap-cp-info-content-noside" : "ap-cp-info-content"
  }, /* @__PURE__ */ React.createElement("img", {
    src: poinIcon,
    alt: "Poin Aku Pintar"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-ml-30"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-poin-text ap-font-20 ap-content-600"
  }, "2000 AP Poin"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-poin-text-v2 ap-font-10 ap-content-400-v2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: poinIcon2,
    alt: "Poin Aku Pintar"
  }), " Expired pada 31 Desember 2021"))))), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-info-rs ap-cp-info-rs-noside" : "ap-cp-info-rs"
  }, curState == "coin" ? /* @__PURE__ */ React.createElement(CoinHistory, null) : /* @__PURE__ */ React.createElement(PoinHistory, null), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-justify-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-text-silvergrey-v2 ap-cp-info-term-text",
    onClick: () => setShowTermCP(true)
  }, "Syarat dan Ketentuan"))))), /* @__PURE__ */ React.createElement(TermModalCP, {
    showTermCP,
    setShowTermCP
  }));
};
export default CoinPoinInformation;
