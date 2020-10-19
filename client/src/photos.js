import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { PhotosTitle, ImageCarousel, AllPhotos } from './photos.styles';

export const Photos = () => {

  const [images, setImages] = useState(["./img/profile.jpg", "./img/profile2.jpg", "./img/ki.jpg", "./img/mixinsoda.jpg", "./img/keepquiet.jpg", "./img/mixinsoda2.jpg", "./img/cat.jpg"]);
  const [currentImage, setCurrentImage] = useState("./img/profile.jpg");
  const [index, setIndex] = useState(0);

  useEffect(() => {

  }, []);

  function changePhoto(direction) {
    if (direction === "right") {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
    setCurrentImage(images[index]);
  }

  const allPhotos = images.map(item => {
    return <img src={item} />
  });

  return (
    <>
      <Header />
      <GlobalStyle />
      <PhotosTitle>Photos</PhotosTitle>
      <ImageCarousel>
        <a className="arrow-left" onClick={() => changePhoto("left")}>&#10094;</a>
        <a className="arrow-right" onClick={() => changePhoto("right")} >&#10095;</a>
        <img src={currentImage} />
      </ImageCarousel>
      <AllPhotos>
      <PhotosTitle>All Photos</PhotosTitle>
        {allPhotos}
      </AllPhotos>
    </>
  );
}