import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImageDesktop from "../../images/shape-2.svg";
import backgroundImageSmallDevice from "../../images/shape-5.svg";
import home from "../../assets/home.svg";

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

interface NavProps {
  isMobile: Boolean;
}
export const Nav =
  styled.nav <
  NavProps >
  `
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  justify-content: flex-end;
  @media (${tabletUp}) {
  ${(p) =>
    !p.isMobile &&
    `
  width: 100%;
  `}

  }
`;
interface StyledLinkProps {
  isMobile: Boolean;
}

export const StyledLink =
  styled(Link) <
  StyledLinkProps >
  `
  padding: 15px 15px 0 0;
  @media (${tabletUp}) {
  ${(p) =>
    !p.isMobile &&
    `
    padding: 35px 15px 0 0;
  `}

  }
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 40%;
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

export const StyledIcon = styled.svg`
  background-image: url(${home});
  background-repeat: none;
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
`;
