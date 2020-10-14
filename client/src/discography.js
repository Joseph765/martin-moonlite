import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { DiscographyTitle } from './discography.styles';

export const Discography = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <DiscographyTitle>Discography</DiscographyTitle>
    </>
  );
}