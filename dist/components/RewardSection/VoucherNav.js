import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./RewardSection.css.proxy.js";
import "../CoinPoinSection/CoinPoinSection.css.proxy.js";
import RewardModal from "../Modal/RewardModal.js";
import DownloadModal from "../Modal/DownloadModal.js";
import voucher1 from "../../assets/images/voucher1.png.proxy.js";
import time from "../../assets/images/time.png.proxy.js";
const VoucherNav = (props) => {
  const [showReward, setShowReward] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-18 ap-mb-30"
  }, "Belum Digunakan"), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-card-container ap-cp-card-container-wside ap-wrap ap-mb-20" : "ap-cp-card-container ap-wrap ap-mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: () => setShowReward(true),
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-card ap-cp-card-wside ap-mb-40" : "ap-cp-card ap-mb-40"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher1,
    alt: "Voucher"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-card-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-my-auto"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-darkgrey"
  }, "Gramedia"), /* @__PURE__ */ React.createElement("p", {
    className: props.width <= 950 && props.width > 768 && !props.sideState ? "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside" : "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1"
  }, "Gramedia Rp10.000 Voucher")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: time,
    alt: "Time",
    className: "ap-vn-icon"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-darkgrey"
  }, "Berlaku hingga 23 Februari 2022")))), /* @__PURE__ */ React.createElement("div", {
    onClick: () => setShowReward(true),
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-card ap-cp-card-wside ap-mb-40" : "ap-cp-card ap-mb-40"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher1,
    alt: "Voucher"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-card-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-my-auto"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-darkgrey"
  }, "Gramedia"), /* @__PURE__ */ React.createElement("p", {
    className: props.width <= 950 && props.width > 768 && !props.sideState ? "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside" : "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1"
  }, "Gramedia Rp10.000 Voucher")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: time,
    alt: "Time",
    className: "ap-vn-icon"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-darkgrey"
  }, "Berlaku hingga 23 Februari 2022"))))), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-18 ap-mb-30"
  }, "Sudah Digunakan"), /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-card-container ap-cp-card-container-wside ap-wrap ap-mb-20" : "ap-cp-card-container ap-wrap ap-mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: props.width <= 1200 && props.width > 768 && props.sideState ? "ap-cp-card ap-cp-card-wside ap-mb-40 ap-vn-used" : "ap-cp-card ap-mb-40 ap-vn-used"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher1,
    alt: "Voucher"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-card-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-my-auto"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-16 ap-text-darkgrey"
  }, "Gramedia"), /* @__PURE__ */ React.createElement("p", {
    className: props.width <= 950 && props.width > 768 && !props.sideState ? "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside" : "ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1"
  }, "Gramedia Rp10.000 Voucher")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: time,
    alt: "Time",
    className: "ap-vn-icon"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-darkgrey"
  }, "Berlaku hingga 23 Februari 2022"))))), /* @__PURE__ */ React.createElement(RewardModal, {
    showReward,
    setShowReward,
    setShowDownload
  }), /* @__PURE__ */ React.createElement(DownloadModal, {
    showDownload,
    setShowDownload
  }));
};
export default VoucherNav;
