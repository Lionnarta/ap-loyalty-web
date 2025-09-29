import React from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
const TermModal = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showTerm ? 1 : 0,
    transform: props.showTerm ? `translateY(0%)` : `translateY(-100%)`
  });
  return /* @__PURE__ */ React.createElement("div", null, props.showTerm ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: () => props.setShowTerm(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-22 ap-content-600 ap-center ap-mb-20"
  }, "Syarat dan Ketentuan"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-term-ol-container"
  }, /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-ol"
  }, /* @__PURE__ */ React.createElement("li", null, 'Program "Ajak Teman" berlaku untuk seluruh pengguna Aku Pintar.'), /* @__PURE__ */ React.createElement("li", null, "Kode referralmu hanya bisa digunakan maksimal oleh 10 teman."), /* @__PURE__ */ React.createElement("li", null, "Setiap satu teman yang menggunakan kode referralmu kamu akan mendapatkan 2 XP dan 100 poin. Berlaku kelipatan 2 untuk jumlah XP dan kelipatan 100 untuk jumlah poin."), /* @__PURE__ */ React.createElement("li", null, "Kamu akan mendapatkan maksimal 184 XP dan 5500 poin, dengan ketentuan:"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-term-sub-ol",
    type: "a"
  }, /* @__PURE__ */ React.createElement("li", null, "XP berlaku selamanya yang bisa digunakan untuk fitur AP Loyalty guna mendapatkan benefit yang lebih besar;"), /* @__PURE__ */ React.createElement("li", null, "Poin bisa ditukarkan dalam bentuk Coin atau benefit lainnya, dan akan hangus dalam waktu enam bulan dihitung dari tanggal pertama klaim.")), /* @__PURE__ */ React.createElement("li", null, 'Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk mendiskualifikasi atau tidak mengikutsertakan kamu lebih lanjut pada progrom "Ajak Teman" dan program Aku Pintar lainnya tanpa perlu memberikan pemberitahuan dan penjelasan lebih lanjut.'), /* @__PURE__ */ React.createElement("li", null, 'Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan Program "Ajak Teman". Disarankan untuk melihat dan membacanya secara berkala. Penggunaan fitur "Ajak Teman" berarti kamu sudah menyetujui dan memahami syarat dan ketentuan yang berlaku.'))))))) : null);
};
export default TermModal;
