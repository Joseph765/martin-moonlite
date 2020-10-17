import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Purple, Magenta, Maroon, Indigo, Title, HomeWrapper, SubTitle, Profile, ProfileImg } from './home.styles';
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
        <Profile>
          <div id="img-subtitle">
            <Title>Martin Moonlite &#x263E;</Title>
            <SubTitle>Music Producer | Songwriter</SubTitle>
          </div>
          <ProfileImg src="./img/profile.jpg" />
        </Profile>
        <News />
        <Blog />
      </HomeWrapper>
    </>
  );
}