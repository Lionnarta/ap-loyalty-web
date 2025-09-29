import React, {useState} from "../../../_snowpack/pkg/react.js";
import TutorialModal from "../Modal/TutorialModal.js";
import copyIcon from "../../assets/images/copy.png.proxy.js";
import shareIcon from "../../assets/images/share.png.proxy.js";
import friendIcon from "../../assets/images/moreFriend.png.proxy.js";
import arrowIcon from "../../assets/images/arrow.png.proxy.js";
const BoxReferral = (props) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [referralCode, setReferralCode] = useState("OCT23981");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full ap-flex-col ap-align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-referral-box ap-mb-30"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-mb-16"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-referral-code ap-content-700-v2 ap-font-18 ap-text-darkgrey"
  }, referralCode), /* @__PURE__ */ React.createElement("div", {
    className: "ap-referral-copy ap-flex ap-align-center ap-text-darkblue",
    onClick: copyToClipboard
  }, /* @__PURE__ */ React.createElement("img", {
    src: copyIcon,
    alt: "Salin Kode Referral",
    className: "ap-mr-10"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-500-v2"
  }, "Salin"))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-referral-blue ap-flex ap-justify-center ap-align-center ap-mb-16"
  }, /* @__PURE__ */ React.createElement("img", {
    src: shareIcon,
    alt: "Share Kode Referral",
    className: "ap-mr-10 ap-icon-v5"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2",
    onClick: () => props.setShowShare(true)
  }, "Bagikan Kode Referralmu")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-justify-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-14 ap-referral-tutorial ap-mb-30",
    onClick: () => setShowTutorial(true)
  }, "Tutorial Ajak Teman")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-referral-friend ap-flex ap-align-center",
    onClick: () => props.setDetailValue(true)
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-12"
  }, "Teman yang diundang"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-700"
  }, "3 Teman")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-align-center ap-flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: friendIcon,
    alt: "Teman",
    className: "ap-teman"
  }), /* @__PURE__ */ React.createElement("img", {
    src: arrowIcon,
    alt: "Referral"
  })))), /* @__PURE__ */ React.createElement(TutorialModal, {
    showTutorial,
    setShowTutorial
  }));
};
export default BoxReferral;
