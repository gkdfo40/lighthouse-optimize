import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family:"Spoqa Han Sans Neo", "sans-serif" ;
    font-display: swap;
    src: url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css) format('text/css');
  }

`;
