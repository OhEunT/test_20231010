import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  ul,ol,li {
    list-style: none;
  }
  a {
    outline: 0; text-decoration: none; color: #bbb;
  }
  img {
    border: 0;
  }
`;

export default GlobalStyle;
