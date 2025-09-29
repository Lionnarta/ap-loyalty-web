import React from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import timesIcon from "../../assets/images/times.png.proxy.js";
import share from "../../assets/images/copy-2.png.proxy.js";
import whatsapp from "../../assets/images/whatsapp.png.proxy.js";
import line from "../../assets/images/line.png.proxy.js";
import facebook from "../../assets/images/facebook.png.proxy.js";
import instagram from "../../assets/images/instagram.png.proxy.js";
import ln from "../../assets/images/ln.png.proxy.js";
import telegram from "../../assets/images/telegram.png.proxy.js";
import discord from "../../assets/images/discord.png.proxy.js";
import twitter from "../../assets/images/twitter.png.proxy.js";
const ShareModal = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showShare ? 1 : 0,
    transform: props.showShare ? `translateY(0%)` : `translateY(-100%)`
  });
  return /* @__PURE__ */ React.createElement("div", null, props.showShare ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal",
    onClick: () => props.setShowShare(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-22 ap-content-600 ap-center ap-mb-40"
  }, "Ajak teman Melalui"), /* @__PURE__ */ React.createElement("div", {
    className: "ap-font-18 ap-content-400-v2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-mb-30"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-flex-col ap-align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-copy"
  }, /* @__PURE__ */ React.createElement("img", {
    src: share,
    alt: "Salin Info"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ap-content-500-v2"
  }, "Salin Info")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: whatsapp,
    alt: "Whatsapp"
  }), /* @__PURE__ */ React.createElement("p", null, "Whatsapp")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: line,
    alt: "Line"
  }), /* @__PURE__ */ React.createElement("p", null, "Line"))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-mb-30"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: facebook,
    alt: "Facebook"
  }), /* @__PURE__ */ React.createElement("p", null, "Facebook")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: instagram,
    alt: "Instagram"
  }), /* @__PURE__ */ React.createElement("p", null, "Instagram")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: ln,
    alt: "Linkedin"
  }), /* @__PURE__ */ React.createElement("p", null, "Linkedin"))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: telegram,
    alt: "Telegram"
  }), /* @__PURE__ */ React.createElement("p", null, "Telegram")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: discord,
    alt: "Discord"
  }), /* @__PURE__ */ React.createElement("p", null, "Discord")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-icon ap-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: twitter,
    alt: "Twitter"
  }), /* @__PURE__ */ React.createElement("p", null, "Twitter")))))))) : null);
};
export default ShareModal;
