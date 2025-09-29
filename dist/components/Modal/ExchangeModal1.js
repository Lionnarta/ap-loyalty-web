import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./Modal.css.proxy.js";
import coin from "../../assets/images/coin.png.proxy.js";
import poin from "../../assets/images/poin.png.proxy.js";
const ExchangeModal1 = (props) => {
  const [radioValue, setRadioValue] = useState("");
  const closeModal = () => {
    if (radioValue !== "") {
      props.setShowEM1(false);
      setRadioValue("");
      props.setShowEM2(true);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, props.showEM1 ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v5 ap-text-black ap-flex-col ap-space"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-18 ap-center ap-mb-40"
  }, "Metode Penukaran"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-mb-40"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-16 ap-mb-16"
  }, "Saldo"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coin,
    alt: "Coin Pintar",
    className: "ap-em-icon ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-text-orange-v2 ap-mr-30"
  }, "1500 AP Coin"), /* @__PURE__ */ React.createElement("img", {
    src: poin,
    alt: "Poin Pintar",
    className: "ap-em-icon ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-600 ap-font-16 ap-text-darkblue"
  }, "2000 AP Poin"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500 ap-font-16 ap-mb-16"
  }, "Pilih Metode Penukaran"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-space ap-payment-method ap-mb-16",
    onClick: () => setRadioValue("coin")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coin,
    alt: "Coin Pintar",
    className: "ap-em-icon ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-black"
  }, "AP Coin")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-darkgrey ap-mr-20"
  }, "1000 AP Coin"), /* @__PURE__ */ React.createElement("div", {
    className: radioValue === "coin" ? "ap-radio ap-radio-selected" : "ap-radio"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-space ap-payment-method",
    onClick: () => setRadioValue("poin")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: poin,
    alt: "Poin Pintar",
    className: "ap-em-icon ap-mr-15"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-black"
  }, "AP Poin")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-400-v2 ap-font-14 ap-text-darkgrey ap-mr-20"
  }, "1000 AP Poin"), /* @__PURE__ */ React.createElement("div", {
    className: radioValue === "poin" ? "ap-radio ap-radio-selected" : "ap-radio"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: radioValue === "" ? "ap-method-btn-disable ap-content-500-v2 ap-font-18" : "ap-method-btn ap-content-500-v2 ap-font-18",
    onClick: closeModal
  }, "Tukar"))) : null);
};
export default ExchangeModal1;
