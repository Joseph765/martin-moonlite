import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const NewsContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 6%;
  ${media.desktop} {
    flex-wrap: nowrap;
    width: 80%;
  }
`;

export const NewsTitle = styled.h1 `
  margin: auto;
  margin-bottom: 2%;
  text-align: center;
  width: 5%;
  border-bottom: 2px solid white;
`;

export const NewsEntry = styled.div `
  cursor: pointer;
`;

export const NewsEntryTitle = styled.h1 `
  text-align: center;
  white-space: nowrap;
`;

export const NewsImg = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;