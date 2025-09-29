import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./PremiumContentSection.css.proxy.js";
import "../CoinPoinSection/CoinPoinSection.css.proxy.js";
import ExchangeModal from "../Modal/ExchangeModal.js";
import backArrow from "../../assets/images/backArrow2.png.proxy.js";
import voucher from "../../assets/images/voucher1.png.proxy.js";
import coin from "../../assets/images/coin.png.proxy.js";
import poin from "../../assets/images/poin.png.proxy.js";
const PremiumDetail = (props) => {
  const [showEM, setShowEM] = useState(false);
  const [showEM1, setShowEM1] = useState(false);
  const openModal = () => {
    setShowEM(true);
    setShowEM1(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "ap-cp-v3 ap-text-darkgrey"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center ap-mb-20"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/ap-loyalty-web/cp/pa",
    className: "ap-flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: backArrow,
    alt: "Kembali",
    className: "ap-mr-10 ap-pointer"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-24 ap-content-700"
  }, "Detail Rewards")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-pcs-d-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher,
    alt: "Voucher Pintar",
    className: "ap-pcs-img"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-pcs-img-detail ap-text-darkgrey"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-22"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3"
  }, "Jenis Reward"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2 ap-font-20"
  }, "Voucher Pintar")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-22"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3"
  }, "Mitra"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2 ap-font-20"
  }, "Gramedia Pustaka")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-22"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3"
  }, "Masa Berlaku"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2 ap-font-20"
  }, "22 Desember 2021 - 30 Maret 2022")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-22"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3 ap-mb-10"
  }, "Metode Penukaran"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-pcs-method"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-mr-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coin,
    alt: "Coin Pintar",
    className: "ap-pcs-icon ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-text-orange"
  }, "1000 AP Coin")), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2 ap-font-18 ap-mr-10"
  }, "atau"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: poin,
    alt: "Pin Pintar",
    className: "ap-pcs-icon-v2 ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-text-darkblue"
  }, "1000 AP Poin"))))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-pcs-btn-v3",
    onClick: openModal
  }, /* @__PURE__ */ React.createElement("p", null, "Tukar")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-22 ap-text-darkblue ap-mb-20"
  }, "Gramedia Voucher Rp10.000"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-18 ap-text-black ap-mb-10"
  }, "Deskripsi"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-mb-30"
  }, "Kamu bisa mendapatkan potongan harga Rp10.000 untuk semua jenis pembelian di Gramedia dengan menukarkan 1.000 AP Poin atau AP Coin."), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-18 ap-text-black ap-mb-10"
  }, "Syarat dan Ketentuan"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-content-400-v2 ap-font-16 ap-text-black ap-ml-20 ap-mb-30 ap-pcs-ol"
  }, /* @__PURE__ */ React.createElement("li", null, "Redeem voucher hanya bisa dilakukan di aplikasi Aku Pintar."), /* @__PURE__ */ React.createElement("li", null, "Voucher hanya bisa dilakukan dalam satu kali transaksi."), /* @__PURE__ */ React.createElement("li", null, "Voucher bisa digunakan baik transaksi langsung atau online."), /* @__PURE__ */ React.createElement("li", null, "Voucher berlaku hingga 30 hari dari masa pertama klaim."), /* @__PURE__ */ React.createElement("li", null, "Voucher tidak dapat digabungkan dengan voucher lainnya."), /* @__PURE__ */ React.createElement("li", null, "Voucher tidak dapat diuangkan."), /* @__PURE__ */ React.createElement("li", null, "Voucher bisa dibatalkan sewaktu-waktu bila ditemukan kecurangan atau penyalahgunaan yang dapat merugikan Aku Pintar, mitra, dan pihak-pihak lainnya."), /* @__PURE__ */ React.createElement("li", null, "Syarat dan Ketentuan dapat berubah sewaktu-waktu, kamu bisa cek secara berkala."), /* @__PURE__ */ React.createElement("li", null, "Ketersediaan voucher terbatas.")), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-18 ap-text-black ap-mb-10"
  }, "Cara penggunaan"), /* @__PURE__ */ React.createElement("ol", {
    className: "ap-content-400-v2 ap-font-16 ap-text-black ap-ml-20 ap-pcs-ol"
  }, /* @__PURE__ */ React.createElement("li", null, "Pilih voucher yang kamu inginkan."), /* @__PURE__ */ React.createElement("li", null, "Baca Syarat dan Ketentuan terlebih dahulu."), /* @__PURE__ */ React.createElement("li", null, "Tukarkan voucher tersebut dengan AP Poin atau AP Coin sesuai dengan ketentuan."), /* @__PURE__ */ React.createElement("li", null, "Voucher yang sudah ditukar bisa Sobat Pintar lihat di menu “Voucher Saya”."), /* @__PURE__ */ React.createElement("li", null, "Voucher sudah siap digunakan deh.")))), /* @__PURE__ */ React.createElement(ExchangeModal, {
    showEM,
    setShowEM,
    showEM1,
    setShowEM1
  }));
};
export default PremiumDetail;
