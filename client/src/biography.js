import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { BiographyTitle } from './biography.styles';

export const Biography = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <BiographyTitle>Biography</BiographyTitle>
    </>
  );
}