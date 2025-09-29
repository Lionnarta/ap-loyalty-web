import React from "../../../_snowpack/pkg/react.js";
import "./RewardSection.css.proxy.js";
import "../CoinPoinSection/CoinPoinSection.css.proxy.js";
import discount from "../../assets/images/discount.png.proxy.js";
const AccessNav = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.sideState && (props.width < 1024 && props.width > 768) ? "ap-an-box ap-an-box-wside" : "ap-an-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: discount,
    alt: "Akses Premium",
    className: props.sideState && (props.width < 1024 && props.width > 768) ? "ap-an-img ap-an-img-wside" : "ap-an-img"
  }), /* @__PURE__ */ React.createElement("div", {
    className: props.sideState && (props.width < 1024 && props.width > 768) ? "ap-an-text ap-an-text-wside" : "ap-an-text"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-22 ap-mb-10"
  }, "Whoops!"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-18"
  }, "Belum ada Akses Premium yang tersedia nih Sobat Pintar, tukarkan poin dan coinmu sekarang juga!")), /* @__PURE__ */ React.createElement("a", {
    href: "/ap-loyalty-web/cp",
    className: props.sideState && (props.width < 1024 && props.width > 768) ? "ap-an-btn ap-an-btn-wside" : "ap-an-btn"
  }, "Tukar AP Coin & Poin")));
};
export default AccessNav;
