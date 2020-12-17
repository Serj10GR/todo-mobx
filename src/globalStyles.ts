import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 5em 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;