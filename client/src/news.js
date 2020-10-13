import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsContainer, NewsTitle, NewsEntry, NewsEntryTitle } from './news.styles';
import { GlobalStyle } from './global.styles';
import { Header } from './header';

export const News = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <GlobalStyle />
      <NewsTitle>News</NewsTitle>
      <NewsContainer>
        <NewsEntry>
          <NewsEntryTitle>Black Halos Out Now!</NewsEntryTitle>
          <img src="./img/blackhalos.jpg" />
        </NewsEntry>
        <NewsEntry>
          <NewsEntryTitle>New Single "Ki" Out Now!</NewsEntryTitle>
          <img src="./img/ki.jpg" />
        </NewsEntry>
      </NewsContainer>
    </>
  );
}