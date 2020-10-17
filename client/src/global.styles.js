import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: Arial;
    font-weight: 300;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #333333;
    background-image: url('./img/starry.gif');
    color: white;
  }

`;