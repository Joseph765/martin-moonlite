import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    margin-left: 5%;
    margin-right: 5%;
    padding: 0;
    background-color: #333333;
    background-image: url('./img/starry.gif');
    color: white;
  }
`;