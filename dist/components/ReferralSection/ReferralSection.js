import React, {useState} from "../../../_snowpack/pkg/react.js";
import ShareModal from "../Modal/ShareModal.js";
import "./ReferralSection.css.proxy.js";
import BoxReferral from "./BoxReferral.js";
import BoxFriends from "./BoxFriends.js";
import TermModal from "../Modal/TermModal.js";
import astroYes from "../../assets/images/astroYes.png.proxy.js";
const ReferralSection = (props) => {
  const [detailState, setDetailState] = useState(false);
  const [showTerm, setShowTerm] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const setDetailValue = (val) => {
    setDetailState(val);
  };
  const openTerm = () => {
    setShowTerm(!showTerm);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "ap-referral ap-text-white ap-content-400 ap-font-18"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.sideState && props.width <= 1100 ? "ap-referral-container ap-flex-col" : " ap-flex ap-referral-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.sideState && props.width <= 1100 ? "ap-referral-responsive ap-center ap-mb-20" : "ap-referral-ls"
  }, /* @__PURE__ */ React.createElement("img", {
    src: astroYes,
    alt: "Astro",
    className: "ap-referral-astro ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-25 ap-content-600 ap-mb-10"
  }, "Ajak teman kamu untuk belajar bersama di Aku Pintar"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-20 ap-content-500-v2"
  }, "Senang belajar menggunakan Aku Pintar? Mari ajak temanmu untuk mengetahui minat dan bakatnya serta belajar bersama menggunakan Aku Pintar")), /* @__PURE__ */ React.createElement("div", {
    className: props.sideState && props.width <= 1100 ? "ap-referral-responsive" : "ap-referral-rs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex-col ap-align-center"
  }, !detailState ? /* @__PURE__ */ React.createElement(BoxReferral, {
    setDetailValue,
    setShowShare
  }) : /* @__PURE__ */ React.createElement(BoxFriends, {
    setDetailValue,
    setShowShare
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-underline ap-pointer",
    onClick: openTerm
  }, "Syarat dan Ketentuan"))))), /* @__PURE__ */ React.createElement(ShareModal, {
    showShare,
    setShowShare
  }), /* @__PURE__ */ React.createElement(TermModal, {
    showTerm,
    setShowTerm
  }));
};
export default ReferralSection;
