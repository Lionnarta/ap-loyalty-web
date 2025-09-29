// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".ap-sidebar {\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n    min-width: 280px;\r\n    background-color: white;\r\n    border-right: 0.5px solid #d7dadd;\r\n}\r\n\r\n.ap-s-profil {\r\n    padding-left: 11%;\r\n}\r\n\r\n.ap-s-link {\r\n    width: 90%;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-left: 11%;\r\n    color: var(--dark-grey);\r\n    text-decoration: none;\r\n}\r\n\r\n.ap-s-link:hover {\r\n    background-color: #d1d0d0;\r\n    border-top-right-radius: 26.5px;\r\n    border-bottom-right-radius: 26.5px;\r\n}\r\n\r\n.ap-s-active {\r\n    font-weight: 600;\r\n    background-color: #e7e7e7;\r\n    border-top-right-radius: 26.5px;\r\n    border-bottom-right-radius: 26.5px;\r\n}\r\n\r\n.ap-s-link-border {\r\n    width: 90%;\r\n    border-bottom: 0.5px solid #d7dadd;\r\n}\r\n\r\n.ap-s-new {\r\n    background-color: var(--red);\r\n    margin-left: 20px;\r\n    padding: 3px 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .ap-sidebar {\r\n        position: fixed;\r\n        z-index: 10;\r\n        height: calc(100vh - 80px);\r\n        overflow-y: scroll;\r\n    }\r\n\r\n    .ap-sidebar::-webkit-scrollbar {\r\n        width: 5px;\r\n    }\r\n    \r\n    .ap-sidebar::-webkit-scrollbar-thumb {\r\n        border-radius: 2px;\r\n        background-color: #979797;\r\n    }\r\n    \r\n    .ap-sidebar::-webkit-scrollbar-thumb:hover {\r\n        background-color: #868686;\r\n    }\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}