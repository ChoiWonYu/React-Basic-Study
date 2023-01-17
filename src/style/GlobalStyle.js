import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    margin : 0 auto;
    padding:0;
    font-family: 'NetflixSans';
    color : white;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'NetflixSans';
    border: none;
    font-weight: 400;
  }
`;
