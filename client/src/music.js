import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { MusicTitle } from './music.styles';

export const Music = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <GlobalStyle />
      <MusicTitle>Music</MusicTitle>
    </>
  );
}