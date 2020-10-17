import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Nav, LinkStyled, Socials, SocialLink, Instagram, Twitter, Youtube, Soundcloud, Spotify, NavLinks } from './header.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faSoundcloud,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";

import Home from './home';
import Music from './music';
import Photos from './photos';
import Biography from './biography';
import Discography from './discography';


export const Header = () => {

  const [display, setDisplay] = useState('none');

  useEffect(() => {

  }, []);

  function changeDisplay(boolean) {
    // const nodeList = document.querySelectorAll('.navLink');
    // const navLinks = Array.prototype.slice.call(nodeList);
    // navLinks.forEach(item => {
    //   item.style.display = display;
    // });
    // if (display === 'block') {
    //   setDisplay('none')
    // } else {
    //   setDisplay('flex');
    // }
    if (display === 'block') {
      $('.navLink').addClass('block');
      setDisplay('none');
    } else {
      $('.navLink').removeClass('block');
      setDisplay('block');
    }
  }

  return (
    <>
    <Nav>
      {/* <LinkStyled to="/" component={Home}>Home</LinkStyled>
      <LinkStyled to="/music" component={Music}>Music</LinkStyled>
      <LinkStyled to="/photos" component={Photos}>Photos</LinkStyled>
      <LinkStyled to="/biography" component={Biography}>Biography</LinkStyled>
      <LinkStyled to="/discography" component={Discography}>Discography</LinkStyled>
      <Socials>
        <Soundcloud
          href="https://soundcloud.com/martinmoonlite"
          className="soundcloud social"
          target="_blank">
          <FontAwesomeIcon icon={faSoundcloud} size="2x" />
        </Soundcloud>
        <Spotify
          href="https://open.spotify.com/artist/59b0Mfvoqzt5TCoFZoWSXs?si=vIHVbGj4TJORNUgwAAGOuQ"
          className="spotify social"
          target="_blank">
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </Spotify>
        <Youtube
          href="https://www.youtube.com/channel/UCmlfuwX2B8Xiopt_q7q2sUQ"
          className="youtube social"
          target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Youtube>
        <Instagram
          href="https://www.instagram.com/martinmoonlite/"
          className="instagram social"
          target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Instagram>
        <Twitter
          href="https://twitter.com/MartinMoonlite"
          className="twitter social"
          target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Twitter>
      </Socials> */}
      <h1>Moonlite</h1>
      <FontAwesomeIcon className="hamburger" icon={faAlignJustify} onClick={ () => changeDisplay()} />
    </Nav>
    <NavLinks>
      <Link className="navLink" id="home-link" to="/" component={Home}>Home</Link>
      <Link className="navLink" id="music-link" to="/music" component={Music}>Music</Link>
      <Link className="navLink" id="photos-link" to="/photos" component={Photos}>Photos</Link>
      <Link className="navLink" id="biography-link" to="/biography" component={Biography}>Biography</Link>
      <Link className="navLink" id="discography-link" to="/discography" component={Discography}>Discography</Link>
    </NavLinks>
    </>
  );
}