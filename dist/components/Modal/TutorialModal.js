import React, {useState} from "../../../_snowpack/pkg/react.js";
import {useSpring, animated} from "../../../_snowpack/pkg/react-spring.js";
import "./Modal.css.proxy.js";
import astrid from "../../assets/images/astrid.png.proxy.js";
import timesIcon from "../../assets/images/times2.png.proxy.js";
import carousel1 from "../../assets/images/carousel1.png.proxy.js";
import carousel2 from "../../assets/images/carousel2.png.proxy.js";
import carousel3 from "../../assets/images/carousel3.png.proxy.js";
import carousel4 from "../../assets/images/carousel4.png.proxy.js";
const TutorialModal = (props) => {
  const [carouselPage, setCarouselPage] = useState(1);
  const maxPage = 4;
  const nextPage = () => {
    if (carouselPage < 4) {
      setCarouselPage(carouselPage + 1);
    }
  };
  const prevPage = () => {
    if (carouselPage > 1) {
      setCarouselPage(carouselPage - 1);
    }
  };
  const setPage = (page) => {
    if (page >= 1 && page <= 4 && page != carouselPage) {
      setCarouselPage(page);
    }
  };
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showTutorial ? 1 : 0,
    transform: props.showTutorial ? `translateY(0%)` : `translateY(-100%)`
  });
  return /* @__PURE__ */ React.createElement("div", null, props.showTutorial ? /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-bg"
  }, /* @__PURE__ */ React.createElement(animated.div, {
    style: animation
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-position"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-modal-container-v3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-close-modal ap-close-modal-v2",
    onClick: () => props.setShowTutorial(false)
  }, /* @__PURE__ */ React.createElement("img", {
    src: timesIcon,
    alt: "Close Modal",
    className: "ap-icon-v5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ap-w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-space ap-align-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: astrid,
    alt: "Astrid",
    className: "ap-carousel-astrid"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "ap-carousel-header ap-font-25 ap-content-700 ap-right ap-text-white ap-mb-10"
  }, "Lebih Seru Belajar Bersama Teman-Temanmu di AkuPintar"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-carousel-header ap-content-400-v2 ap-font-16 ap-right ap-text-white ap-mb-10"
  }, "Ajak Temanmu Gabung Dengan Kode Referralmu!"))), /* @__PURE__ */ React.createElement("div", {
    className: "ap-carousel-c"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-carousel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 1 ? "active" : "ap-carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: carousel1,
    alt: "Referral AkuPintar",
    className: "ap-carousel-img ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white ap-mb-30"
  }, 'Buka Menu "Ajak Teman" di bagian "Account"')), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 2 ? "active" : "ap-carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: carousel2,
    alt: "Referral AkuPintar",
    className: "ap-carousel-img ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white"
  }, "Gampang banget!"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white ap-mb-20"
  }, "Salin dan bagikan Kode Referralmu ke semua teman")), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 3 ? "active" : "ap-carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: carousel3,
    alt: "Referral AkuPintar",
    className: "ap-carousel-img ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white ap-mb-20"
  }, "Kamu juga bisa salin kodemu dan bagikan secara manual ke teman-temanmu")), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 4 ? "active" : "ap-carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: carousel4,
    alt: "Referral AkuPintar",
    className: "ap-carousel-img ap-mb-20"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white"
  }, "Ajak sepuluh teman bergabung menjadi Sobat Pintar!"), /* @__PURE__ */ React.createElement("p", {
    className: "ap-font-18 ap-content-600 ap-text-white ap-mb-20"
  }, "Dapatkan ratusan poin dan tukarkan ke beragam benefitnya!"))), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 1 ? "ap-carousel-btn ap-prev disable" : "ap-carousel-btn ap-prev",
    onClick: prevPage
  }, "‹"), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 4 ? "ap-carousel-btn ap-next disable" : "ap-carousel-btn ap-next",
    onClick: nextPage
  }, "›")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-flex ap-justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-carousel-bullet-c ap-font-18 ap-content-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 1 ? "ap-carousel-bullet bullet-active" : "ap-carousel-bullet",
    onClick: () => setPage(1)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-bullet-num"
  }, "1")), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 2 ? "ap-carousel-bullet bullet-active" : "ap-carousel-bullet",
    onClick: () => setPage(2)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-bullet-num"
  }, "2")), /* @__PURE__ */ React.createElement("div", {
    className: "ap-carousel-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 3 ? "ap-carousel-bullet bullet-active" : "ap-carousel-bullet",
    onClick: () => setPage(3)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-bullet-num"
  }, "3")), /* @__PURE__ */ React.createElement("div", {
    className: carouselPage === 4 ? "ap-carousel-bullet bullet-active" : "ap-carousel-bullet",
    onClick: () => setPage(4)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ap-bullet-num"
  }, "4"))))))))) : null);
};
export default TutorialModal;
