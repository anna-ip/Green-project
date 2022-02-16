import styled from "styled-components";
import backgroundImageDesktop from "../../images/shape-2.svg";
import backgroundImageSmallDevice from "../../images/shape-5.svg";

const tabletUp = "min-width: 768px";
const desktopUp = "min-width: 1200px";

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
`;
export const BackgroundImage = styled.div`
  background-image: url(${backgroundImageSmallDevice});
  aspect-ratio: 675/750;
  border-radius: 15px;
  width: 100%;
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  /* Move border radius to the page container */

  @media (${tabletUp}) {
    background-image: url(${backgroundImageDesktop});
    aspect-ratio: 960/300;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 55%;
  left: 16px;
  font-family: "Roboto", sans-serif;
  color: #f3f1ee;
  font-size: 3rem;
  margin: 0;

  @media (${tabletUp}) {
    font-size: 4rem;
    top: 45%;
  }
  @media (${desktopUp}) {
    font-size: 8rem;
    bottom: 90px;
  }
`;
