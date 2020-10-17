import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const BlogTitle = styled.h1 `
  margin: auto;
  margin-bottom: 2%;
  text-align: center;
  width: 4%;
  border-bottom: 2px solid white;
`;

export const BlogEntry = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  /* width: 100%; */
  border: 5px solid #541363;
  padding: 10px;
  margin-bottom: 3%;
  ${media.desktop} {
    width: 60%;
  }
`;