import styled from 'styled-components';
import { Link } from 'react-router-dom';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  .hamburger {
    font-size: 50px;
    margin-left: auto;
    margin-right: 3%;
    cursor: pointer;
    ${media.desktop} {
      display: none;
    }
  }

  #logo {
    ${media.desktop} {
      display: none;
    }
  }

`;

export const HeaderDiv = styled.div `
  display: block;
  z-index: 1;
  padding-top: 1%;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #541363;
  ${media.desktop} {
    padding-bottom: 1%;
    border-bottom: 3px solid magenta;
  }
`;


export const NavLinks = styled.div `

  .block {
    display: flex!important;
    flex-direction: column;
  }

  .navLink {
    user-select: none;
    display: none;
    height: 30px;
    padding: 4%;
    border: 3px solid magenta;
    font-size: 20px;
    background-color: indigo;
    cursor: pointer;
    color: white;
    text-decoration: none;
    flex-direction: column;
  }
`;

export const LinkStyled = styled(Link)`
  display: none;
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  border-bottom: 2px solid white;
  cursor: pointer;
  color: white;
  text-decoration: none;
  ${media.desktop} {
    display: block;
  }
`;

export const Socials = styled.div`
  display: none;
  margin-left: 20%;
  justify-content: center;
  ${media.desktop} {
    display: flex;
  }
`;

export const Youtube = styled.a`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  color: #eb3223;
`;

export const Instagram = styled.a`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  color: white;
`;

export const Twitter = styled.a`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  color: #49a1eb;
`;

export const Soundcloud = styled.a`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  color: #ff7700;
`;

export const Spotify = styled.a`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  color: #1DB954;
`;
