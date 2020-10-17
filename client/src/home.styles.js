import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const HomeWrapper = styled.div `
  position: absolute;
  z-index: -1;
  left: 0px;
  top: 10%;
`;

export const Profile = styled.div`
  margin-bottom: 10%;
  #img-subtitle {
    margin-top: 2%;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  font-weight: 700;
  font-size: 70px;
  letter-spacing: 2px;
  align-self: center;
  text-shadow: 8px 8px 3px #541363;
`;

export const ProfileImg = styled.img`
  /* border: 5px solid #541463; */
  width: 100%;
  display: block;
  object-fit: cover;
  /* opacity: 0.4; */
  margin: auto;
  ${media.desktop} {
    width: auto;
  }
`;

export const SubTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  align-self: center;
  margin-bottom: 5%;
  text-shadow: 8px 8px 5px #541363;
`;

