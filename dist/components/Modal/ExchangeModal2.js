import React from "../../../_snowpack/pkg/react.js";
import "./Modal.css.proxy.js";
const ExchangeModal2 = (props) => {
  const closeModal = () => {
    props.setShowEM2(false);
    props.setShowEM(false);
  };
  const openEM3 = () => {
    props.setShowEM2(false);
    props.setShowEM3(true);
  };
  return /* @__PURE__ */ React.createElement("div", null, props.showEM2 ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v6 ap-text-black ap-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-19 ap-mb-40"
  }, "Konfirmasi Penukaran"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-contnet-400-v2 ap-font-17 ap-mb-16"
  }, "Kamu akan menukarkan ", /* @__PURE__ */ React.createElement("span", {
    className: "ap-content-500-v2"
  }, "1000 AP Coin"), " untuk ", /* @__PURE__ */ React.createElement("span", {
    className: "ap-content-500-v2"
  }, "Gramedia Rp10.000 Voucher")), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-700-v2 ap-font-17 ap-mb-30"
  }, "Apakah kamu yakin?"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-justify-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-em2-btn",
    onClick: closeModal
  }, "Tidak"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-em2-btn ap-yes-btn",
    onClick: openEM3
  }, "Yakin")))) : null);
};
export default ExchangeModal2;
