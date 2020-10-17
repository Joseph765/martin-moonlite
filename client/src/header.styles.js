import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  margin-bottom: 6%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-bottom: 3px solid magenta;
  display: flex;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #541363;

  .hamburger {
    font-size: 50px;
    margin-left: auto;
    margin-right: 3%;
    cursor: pointer;
  }
`;

export const NavLinks = styled.div `

  margin-top: 10%;

  .block {
    display: flex!important;
    flex-direction: column;
  }

  .navLink {
    display: none;
    height: 30px;
    margin-right: 15px;
    font-size: 20px;
    border-bottom: 2px solid white;
    cursor: pointer;
    color: white;
    text-decoration: none;
    flex-direction: column;
  }
`;

export const LinkStyled = styled(Link)`
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  border-bottom: 2px solid white;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const Socials = styled.div`
  margin-left: 20%;
  display: flex;
  justify-content: center;
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
