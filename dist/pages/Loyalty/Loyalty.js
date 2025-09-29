import React from "../../../_snowpack/pkg/react.js";
import "./Loyalty.css.proxy.js";
import Footer from "../../components/Footer/Footer.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";
import SideBar from "../../components/SideBar/SideBar.js";
const Loyalty = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(NavigationBar, {
    toggleSide: props.toggleSide
  }), /* @__PURE__ */ React.createElement("div", {
    style: {paddingTop: "80px"}
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ap-r-layout"
  }, props.sideState ? /* @__PURE__ */ React.createElement(SideBar, null) : null), /* @__PURE__ */ React.createElement(Footer, null));
};
export default Loyalty;
