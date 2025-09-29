import React from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
import astrid from "../../assets/images/astrid.png.proxy.js";
import googlePlay from "../../assets/images/googleplay.png.proxy.js";
import appStore from "../../assets/images/appstore.png.proxy.js";
import downloadimg from "../../assets/images/downloadimg.png.proxy.js";
const DownloadModal = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showDownload ? 1 : 0,
    transform: props.showDownload ? `translateY(0%)` : `translateY(-100%)`
  });
  return /* @__PURE__ */ React.createElement("div", null, props.showDownload ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: () => props.setShowDownload(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-space ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: astrid,
    alt: "Astrid",
    className: "ap-download-astrid"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-carousel-header ap-font-25 ap-content-700 ap-right ap-text-darkgrey ap-mb-10"
  }, "Belajar Pintar Dibikin Seru dalam Genggamanmu!"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-carousel-header ap-content-400-v2 ap-font-16 ap-right ap-text-darkgrey ap-mb-20"
  }, "Dapatkan aplikasi Aku Pintar dengan klik di bawah ini:"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-download-app"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-mr-20"
  }, /* @__PURE__ */ React.createElement("img", {
    src: googlePlay,
    alt: "Aplikasi AkuPintar"
  })), /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: appStore,
    alt: "Aplikasi AkuPintar"
  }))))), /* @__PURE__ */ React.createElement("img", {
    src: downloadimg,
    alt: "Aku Pintar",
    className: "ap-download-img"
  }))))) : null);
};
export default DownloadModal;
