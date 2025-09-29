import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import ExchangeModal1 from "./ExchangeModal1.js";
import ExchangeModal2 from "./ExchangeModal2.js";
import ExchangeModal3 from "./ExchangeModal3.js";
const ExchangeModal = (props) => {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showEM ? 1 : 0,
    transform: props.showEM ? `translateY(0%)` : `translateY(-100%)`
  });
  const [showEM2, setShowEM2] = useState(false);
  const [showEM3, setShowEM3] = useState(false);
  useEffect(() => {
    const checkClickOutside = (e) => {
      if (props.showEM && e.target.className === "ap-modal-position") {
        props.setShowEM1(false);
        props.setShowEM(false);
        setShowEM2(false);
        setShowEM3(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [props.showEM1]);
  return /* @__PURE__ */ React.createElement("div", null, props.showEM ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ExchangeModal1, {
    showEM1: props.showEM1,
    setShowEM1: props.setShowEM1,
    setShowEM2,
    setShowEM: props.setShowEM
  }), /* @__PURE__ */ React.createElement(ExchangeModal2, {
    showEM2,
    setShowEM2,
    setShowEM3,
    setShowEM: props.setShowEM
  }), /* @__PURE__ */ React.createElement(ExchangeModal3, {
    showEM3,
    setShowEM3,
    setShowEM: props.setShowEM
  })))) : null);
};
export default ExchangeModal;
