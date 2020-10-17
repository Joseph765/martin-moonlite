import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Purple, Magenta, Maroon, Indigo, Title, HomeWrapper } from './home.styles';
import { GlobalStyle } from './global.styles';
import { Header } from './header';
import { News } from './news';
import { Blog } from './blog';

export const Home = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeWrapper>
        <Title>Martin Moonlite</Title>
        <News />
        <Blog />
      </HomeWrapper>
    </>
  );
}