import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding:0;
    margin:0;
    outline:none;
    box-sizing:border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7151c9;
    -webkit-font-smoothing: antialised !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
