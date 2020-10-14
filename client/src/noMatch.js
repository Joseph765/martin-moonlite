import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { NoMatchTitle } from './noMatch.styles';

export const NoMatch = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <NoMatchTitle>ERROR 400: URL NOT FOUND: NO MATCH</NoMatchTitle>
    </>
  );
}