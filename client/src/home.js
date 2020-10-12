import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Purple, Magenta, Maroon, Indigo, Title } from './home.styles';
import { GlobalStyle } from './global.styles';
import { Header } from './header';

export const Home = () => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Martin Moonlite</Title>
      <Purple>sadasd</Purple>
      <Magenta>sadasd</Magenta>
      <Maroon>sadasd</Maroon>
      <Indigo>sadasd</Indigo>
    </div>
  );
}