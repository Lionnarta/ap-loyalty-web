import React from "../../../_snowpack/pkg/react.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
import transaksi from "../../assets/images/transaksi.png.proxy.js";
const ExchangeModal3 = (props) => {
  const closeModal = () => {
    props.setShowEM3(false);
    props.setShowEM(false);
  };
  return /* @__PURE__ */ React.createElement("div", null, props.showEM3 ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v6 ap-modal-padding ap-text-black ap-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: closeModal
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("img", {
    src: transaksi,
    alt: "Transaksi Berhasil",
    className: "ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-19 ap-mb-20"
  }, "Transaksi Berhasil"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-17 ap-mb-16"
  }, "Kumpulkan poin lebih banyak lagi dan tukar dengan coin untuk keuntungan lebih besar"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-17 ap-mb-40"
  }, "Cek 'Rewards Saya' untuk melihat semua rewards kamu"), /* @__PURE__ */ React.createElement("a", {
    href: "/ap-loyalty-web/cp/reward",
    className: "ap-reward-check-btn",
    onClick: closeModal
  }, "Cek Rewards Kamu"))) : null);
};
export default ExchangeModal3;
