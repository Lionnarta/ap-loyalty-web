// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".ap-footer {\r\n    background: radial-gradient(circle at -15% 115%, #067bc8, #2457a6 140%);\r\n}\r\n\r\n.ap-footer-c {\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 70px;\r\n    padding: 1% 5%;\r\n    background-color: rgba(0,0,0,0.13);\r\n}\r\n\r\n.ap-logo-v2 {\r\n    width: 150px;\r\n}\r\n\r\n.ap-f-section-4 {\r\n    width: 25%;\r\n    padding-right: 30px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.ap-f-section-4:first-of-type {\r\n    padding-left: 0 !important;\r\n}\r\n\r\n.ap-f-section-4:last-of-type {\r\n    padding-right: 0 !important;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .ap-f-section-4 {\r\n        width: 100%;\r\n        padding-right: 0 !important;\r\n        padding-left: 0 !important;\r\n    }\r\n\r\n    .ap-footer-block {\r\n        display: block;\r\n    }\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}