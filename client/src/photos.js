import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { PhotosTitle } from './photos.styles';

const Photos = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <GlobalStyle />
      <PhotosTitle>Photos</PhotosTitle>
    </>
  );
}

export default Photos;