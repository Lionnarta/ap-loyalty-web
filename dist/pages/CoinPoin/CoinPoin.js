import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./CoinPoin.css.proxy.js";
import Footer from "../../components/Footer/Footer.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import SideBar from "../../components/SideBar/SideBar.js";
import CoinPoinHeader from "../../components/CoinPoinSection/CoinPoinHeader.js";
import CoinPoinInformation from "../../components/CoinPoinSection/CoinPoinInformation.js";
import CoinPoinPremiumAccess from "../../components/CoinPoinSection/CoinPoinPremiumAccess.js";
import CoinPoinPremiumContent from "../../components/CoinPoinSection/CoinPoinPremiumContent.js";
import CoinPoinVoucher from "../../components/CoinPoinSection/CoinPoinVoucher.js";
import DownloadModal from "../../components/Modal/DownloadModal.js";
import voucher from "../../assets/images/voucher.png.proxy.js";
const CoinPoin = (props) => {
  const [showDownload, setShowDownload] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: showFocus ? "ap-cp-focus" : ""
  }), /* @__PURE__ */ React.createElement(NavigationBar, {
    toggleSide: props.toggleSide
  }), /* @__PURE__ */ React.createElement("div", {
    style: {paddingTop: "80px"}
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-r-layout"
  }, props.sideState ? /* @__PURE__ */ React.createElement(SideBar, null) : null, /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement(CoinPoinHeader, {
    sideState: props.sideState,
    width: props.width,
    setShowDownload
  }), /* @__PURE__ */ React.createElement(CoinPoinInformation, {
    sideState: props.sideState,
    width: props.width,
    setShowDownload
  }), /* @__PURE__ */ React.createElement(CoinPoinPremiumAccess, {
    sideState: props.sideState,
    width: props.width
  }), /* @__PURE__ */ React.createElement(CoinPoinPremiumContent, {
    sideState: props.sideState,
    width: props.width
  }), /* @__PURE__ */ React.createElement(CoinPoinVoucher, {
    sideState: props.sideState,
    width: props.width
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-voucher"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-cp-voucher-hov",
    onMouseEnter: () => setShowFocus(true),
    onMouseLeave: () => setShowFocus(false)
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/ap-loyalty-web/cp/reward"
  }, /* @__PURE__ */ React.createElement("img", {
    src: voucher,
    alt: "Voucher"
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "ap-cp-voucher-text"
  }, "Reward Saya")), /* @__PURE__ */ React.createElement(DownloadModal, {
    showDownload,
    setShowDownload
  }), /* @__PURE__ */ React.createElement(Footer, null));
};
export default CoinPoin;
