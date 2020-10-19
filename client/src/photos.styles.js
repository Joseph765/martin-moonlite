import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const PhotosTitle = styled.h1 `
  font-size: 45px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 5%;
  margin-top: 10%;
`;

export const ImageCarousel = styled.div `
  width: 100%;
  margin: auto;
  position: relative;
  margin-bottom: 10%;

  ${media.desktop} {
    width: 80%;
  }

  .arrow-left, .arrow-right {
    font-size: 60px;
    font-weight: 900;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
  }
  .arrow-right {
    right: 0;
  }

  img {
    width: 100%;
    user-select: none;
    display: block;
    margin: auto;
    ${media.desktop} {
      height: 500px;
      width: auto;
    }
  }
`;

export const AllPhotos = styled.div `
  width: 100%;
  margin: auto;

  ${media.desktop} {
    width: 80%;
  }

  img {
    height: 300px;
  }
`;