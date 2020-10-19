import styled from 'styled-components';

export const PhotosTitle = styled.h1 `
  font-size: 45px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 5%;
  margin-top: 10%;
`;

export const ImageCarousel = styled.div `
  width: 80%;
  margin: auto;
  position: relative;
  margin-bottom: 10%;
  .arrow-left, .arrow-right {
    font-size: 30px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    user-select: none;
  }
  .arrow-right {
    right: 0;
  }

  img {
    height: 500px;
    user-select: none;
    display: block;
    margin: auto;
  }
`;

export const AllPhotos = styled.div `
  width: 80%;
  margin: auto;
  img {
    height: 300px;
  }
`;