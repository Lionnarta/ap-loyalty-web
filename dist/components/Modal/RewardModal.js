import React from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
import voucher from "../../assets/images/voucher1.png.proxy.js";
import time from "../../assets/images/time.png.proxy.js";
const RewardModal = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showReward ? 1 : 0,
    transform: props.showReward ? `translateY(0%)` : `translateY(-100%)`
  });
  const openModal = () => {
    props.setShowReward(false);
    props.setShowDownload(true);
  };
  return /* @__PURE__ */ React.createElement("div", null, props.showReward ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: () => props.setShowReward(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ap-rd-header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher,
    alt: "Voucher",
    className: "ap-rd-img"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-rd-header-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-60"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-text-darkgrey ap-content-400-v2 ap-font-14"
  }, "Gramedia Pustaka"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-text-darkblue ap-content-600 ap-font-22"
  }, "Gramedia Voucher Rp10.000")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: time,
    alt: "Expire at",
    className: "ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-text-darkgrey ap-content-400-v2 ap-font-16"
  }, "Berlaku hingga 30 Maret 2022")))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-text-black ap-rm-box ap-mb-20"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-mb-10"
  }, "Deskripsi"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-lh-v1 ap-mb-20"
  }, "Kamu bisa mendapatkan potongan harga Rp10.000 untuk semua jenis pembelian di Gramedia dengan menukarkan 1.000 AP Poin atau AP Coin."), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-mb-10"
  }, "Syarat dan Ketentuan"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-rm-box-list ap-mb-20"
  }, /* @__PURE__ */ React.createElement("li", null, "Redeem voucher hanya bisa dilakukan di aplikasi Aku Pintar."), /* @__PURE__ */ React.createElement("li", null, "Voucher hanya bisa dilakukan dalam satu kali transaksi."), /* @__PURE__ */ React.createElement("li", null, "Voucher bisa digunakan baik transaksi langsung atau online."), /* @__PURE__ */ React.createElement("li", null, "Voucher berlaku hingga 30 hari dari masa pertama klaim."), /* @__PURE__ */ React.createElement("li", null, "Voucher tidak dapat digabungkan dengan voucher lainnya."), /* @__PURE__ */ React.createElement("li", null, "Voucher tidak dapat diuangkan."), /* @__PURE__ */ React.createElement("li", null, "Voucher bisa dibatalkan sewaktu-waktu bila ditemukan kecurangan atau penyalahgunaan yang dapat merugikan Aku Pintar, mitra, dan pihak-pihak lainnya."), /* @__PURE__ */ React.createElement("li", null, "Syarat dan Ketentuan dapat berubah sewaktu-waktu, kamu bisa cek secara berkala."), /* @__PURE__ */ React.createElement("li", null, "Ketersediaan voucher terbatas.")), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-mb-10"
  }, "Cara Penggunaan"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-rm-box-list ap-mb-20"
  }, /* @__PURE__ */ React.createElement("li", null, "Pilih voucher yang kamu inginkan."), /* @__PURE__ */ React.createElement("li", null, "Baca Syarat dan Ketentuan terlebih dahulu."), /* @__PURE__ */ React.createElement("li", null, "Tukarkan voucher tersebut dengan AP Poin atau AP Coin sesuai dengan ketentuan."), /* @__PURE__ */ React.createElement("li", null, "Voucher yang sudah ditukar bisa Sobat Pintar lihat di menu “Voucher Saya”."), /* @__PURE__ */ React.createElement("li", null, "Voucher sudah siap digunakan deh."))), /* @__PURE__ */ React.createElement("p", {
    className: "ap-rm-btn",
    onClick: openModal
  }, "Gunakan Melalui Aplikasi Aku Pintar"))))) : null);
};
export default RewardModal;
