import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./RewardSection.css.proxy.js";
import "../CoinPoinSection/CoinPoinSection.css.proxy.js";
import VoucherNav from "./VoucherNav.js";
import AccessNav from "./AccessNav.js";
import backArrow from "../../assets/images/backArrow2.png.proxy.js";
const RewardSection = (props) => {
  const [nav, setNav] = useState("voucher");
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "ap-cp-v4 ap-text-darkgrey"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center ap-mb-20"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/ap-loyalty-web/cp",
    className: "ap-flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: backArrow,
    alt: "Kembali",
    className: "ap-mr-10 ap-pointer"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-24 ap-content-700"
  }, "Rewards Saya")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-mb-40"
  }, /* @__PURE__ */ React.createElement("p", {
    className: nav === "voucher" ? "ap-rs-tab ap-rs-tab-active ap-mr-20" : "ap-rs-tab ap-mr-20",
    onClick: () => setNav("voucher")
  }, "Voucher Pintar"), /* @__PURE__ */ React.createElement("p", {
    className: nav === "akses" ? "ap-rs-tab ap-rs-tab-active" : "ap-rs-tab",
    onClick: () => setNav("akses")
  }, "Akses Premium")), nav === "voucher" ? /* @__PURE__ */ React.createElement(VoucherNav, {
    sideState: props.sideState,
    width: props.width
  }) : /* @__PURE__ */ React.createElement(AccessNav, {
    sideState: props.sideState,
    width: props.width
  })));
};
export default RewardSection;
