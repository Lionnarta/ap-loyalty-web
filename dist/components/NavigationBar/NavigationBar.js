import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./NavigationBar.css.proxy.js";
import NavigationBarMobile from "./NavigationBarMobile.js";
import logo from "../../assets/images/apLogo.png.proxy.js";
import burgerIcon from "../../assets/images/burgerIcon.png.proxy.js";
import searchIcon from "../../assets/images/search.png.proxy.js";
import notifIcon from "../../assets/images/notif.png.proxy.js";
import astroIcon from "../../assets/images/astroIcon.png.proxy.js";
;
const NavigationBar = (props) => {
  const [searchState, setSearchState] = useState(false);
  const toggle = () => {
    setSearchState(!searchState);
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "ap-navigation ap-py-15 ap-w-full ap-text-darkgrey"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-navigation-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: burgerIcon,
    alt: "Icon Burger",
    className: "ap-icon ap-mr-40 ap-pointer",
    onClick: props.toggleSide
  }), /* @__PURE__ */ React.createElement("img", {
    src: logo,
    alt: "Logo AkuPintar",
    className: "ap-logo ap-pointer"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "ap-nav-desktop",
    className: "ap-flex ap-font-16 ap-content-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-darkgrey"
  }, "BERANDA")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-darkgrey"
  }, "BLOG")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-darkgrey"
  }, "LAYANAN")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-darkgrey"
  }, "TENTANG KAMI")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-darkgrey"
  }, "FAQ")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-nav-item-last ap-font-14"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "ap-text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-follow"
  }, "FOLLOW US")))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: searchIcon,
    alt: "Pencarian",
    className: "ap-icon ap-mx-8 ap-pointer"
  }), /* @__PURE__ */ React.createElement("img", {
    src: notifIcon,
    alt: "Notifikasi",
    className: "ap-icon ap-mx-8 ap-pointer"
  }), /* @__PURE__ */ React.createElement("img", {
    src: astroIcon,
    alt: "Notifikasi",
    className: "ap-icon-v2 ap-mx-12 ap-pointer"
  }), /* @__PURE__ */ React.createElement("svg", {
    id: "ap-nav-mobile",
    className: "ap-fill-darkgrey ap-pointer",
    onClick: toggle,
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z",
    fill: "#1040e2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
  })))), searchState ? /* @__PURE__ */ React.createElement(NavigationBarMobile, null) : null);
};
export default NavigationBar;
