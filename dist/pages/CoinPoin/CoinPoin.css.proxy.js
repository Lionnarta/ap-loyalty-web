// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".ap-r-layout {\r\n    display: flex;\r\n}\r\n\r\n.ap-cp-focus {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index: 15;\r\n    transition: all 200ms ease;\r\n}\r\n\r\n.ap-cp-voucher {\r\n    display: flex;\r\n    align-items: center;\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    z-index: 20;\r\n}\r\n\r\n.ap-cp-voucher-text {\r\n    display: none;\r\n    width: 200px;\r\n    position: fixed;\r\n    right: 40px;\r\n    padding: 10px 22px;\r\n    border-radius: 28px;\r\n    font-weight: 500;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    color: var(--dark-blue);\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25); \r\n}\r\n\r\n.ap-cp-voucher-hov {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;   \r\n    width: 80px;\r\n    padding: 25px 10px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n    background-color: var(--dark-blue);\r\n    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.43));\r\n    cursor: pointer;\r\n}\r\n\r\n.ap-cp-voucher-hov:hover ~ .ap-cp-voucher-text {\r\n    display: block;\r\n}\r\n\r\n.ap-cp-voucher-hov>a {\r\n    display: flex;\r\n}\r\n\r\n.ap-cp-voucher-hov>a>img {\r\n    width: 50px;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}