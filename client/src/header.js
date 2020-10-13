import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import { Nav, NavLink, Socials, SocialLink, Instagram, Twitter, Youtube, Soundcloud, Spotify } from './header.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faSoundcloud,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <GlobalStyle />
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>Music</NavLink>
        <NavLink>Photos</NavLink>
        <NavLink>Biography</NavLink>
        <NavLink>Discography</NavLink>
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
        </Socials>
      </Nav>
    </div>
  );
}