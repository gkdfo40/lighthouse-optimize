import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import SpoqaHanSansNeoThin from "./fonts/SpoqaHanSansNeo-Thin.woff2";
import SpoqaHanSansNeoRegular from "./fonts/SpoqaHanSansNeo-Regular.woff2";
import SpoqaHanSansNeoBold from "./fonts/SpoqaHanSansNeo-Bold.woff2";
import SpoqaHanSansNeoLight from "./fonts/SpoqaHanSansNeo-Light.woff2";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family:"Spoqa Han Sans Neo", "sans-serif" ;
  }
  @font-face {
    font-family:"Spoqa Han Sans Neo";
    src: url(${SpoqaHanSansNeoThin}) format('woff2');
    font-style:lighter;
    font-display:swap;
  }
  @font-face {
    font-family:"Spoqa Han Sans Neo";
    src: url(${SpoqaHanSansNeoRegular}) format('woff2');
    font-style:normal;
    font-display:swap;
  }
  @font-face {
    font-family:"Spoqa Han Sans Neo";
    src: url(${SpoqaHanSansNeoBold}) format('woff2');
    font-style:bold;
    font-display:swap;
  }
  @font-face {
    font-family:"Spoqa Han Sans Neo";
    src: url(${SpoqaHanSansNeoLight}) format('woff2');
    font-style:normal;
    font-weight:500;
    font-display:swap;
  }
`;
