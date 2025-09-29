import React from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
const TermModalCP = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showTermCP ? 1 : 0,
    transform: props.showTermCP ? `translateY(0%)` : `translateY(-100%)`
  });
  return /* @__PURE__ */ React.createElement("div", null, props.showTermCP ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: () => props.setShowTermCP(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-22 ap-content-600 ap-center ap-mb-20"
  }, "Syarat dan Ketentuan"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-term-ol-container"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-mb-10 ap-content-600 ap-term-pos"
  }, "AP Poin"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-ol"
  }, /* @__PURE__ */ React.createElement("li", null, 'Program "AP Poin" berlaku untuk seluruh pengguna Aku Pintar.'), /* @__PURE__ */ React.createElement("li", null, "AP Poin dapat hangus dalam waktu enam bulan sejak pertama diklaim."), /* @__PURE__ */ React.createElement("li", null, "AP Poin dapat ditukarkan dalam bentuk:"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-sub-ol",
    type: "a"
  }, /* @__PURE__ */ React.createElement("li", null, "Konten Premium"), /* @__PURE__ */ React.createElement("li", null, "Voucher Merchant")), /* @__PURE__ */ React.createElement("li", null, "AP Poin bisa didapat melalui:"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-sub-ol",
    type: "a"
  }, /* @__PURE__ */ React.createElement("li", null, "Weekly Check-in"), /* @__PURE__ */ React.createElement("li", null, "Ajak Teman"), /* @__PURE__ */ React.createElement("li", null, "Challenge")), /* @__PURE__ */ React.createElement("li", null, 'Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk mendiskualifikasi atau tidak mengikutsertakan kamu lebih lanjut pada program "AP Poin" dan program Aku Pintar lainnya tanpa perlu memberikan pemberitahuan dan penjelasan lebih lanjut.'), /* @__PURE__ */ React.createElement("li", null, 'Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan Program "AP Poin". Disarankan untuk melihat dan membacanya secara berkala. Penggunaan fitur "AP Poin" berarti kamu sudah menyetujui dan memahami syarat dan ketentuan yang berlaku.')), /* @__PURE__ */ React.createElement("p", {
    className: "ap-mb-10 ap-mt-20 ap-content-600 ap-term-pos"
  }, "AP Coin"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-ol"
  }, /* @__PURE__ */ React.createElement("li", null, 'Program "AP Coin" berlaku untuk seluruh pengguna Aku Pintar.'), /* @__PURE__ */ React.createElement("li", null, "AP Coin berlaku selamanya, tanpa ada masa kadaluarsa."), /* @__PURE__ */ React.createElement("li", null, "AP Coin dapat ditukarkan dalam bentuk:"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-sub-ol",
    type: "a"
  }, /* @__PURE__ */ React.createElement("li", null, "Premium access"), /* @__PURE__ */ React.createElement("li", null, "Konten premium"), /* @__PURE__ */ React.createElement("li", null, "Voucher merchant")), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-sub-ol",
    type: "a"
  }, /* @__PURE__ */ React.createElement("li", null, "Top-up")), /* @__PURE__ */ React.createElement("li", null, "Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk mendiskualifikasi atau tidak mengikutsertakan kamu lebih lanjut pada program “AP Coin” dan program Aku Pintar lainnya tanpa perlu memberikan pemberitahuan dan penjelasan lebih lanjut."), /* @__PURE__ */ React.createElement("li", null, 'Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan Program "AP Coin". Disarankan untuk melihat dan membacanya secara berkala. Penggunaan fitur "AP Coin" berarti kamu sudah menyetujui dan memahami syarat dan ketentuan yang berlaku.'))))))) : null);
};
export default TermModalCP;
