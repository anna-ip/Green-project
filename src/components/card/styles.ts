import styled, { css } from "styled-components";

const mobile = "max-width: 767px";
const tabletUp = "min-width: 768px";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  top: -70px;
  left: 8px;

  @media (${tabletUp}) {
    flex-direction: row;
    flex-wrap: wrap;
    position: inherit;
    justify-content: center;
    padding: 0 0 20px 0;
  }
`;

export const ErrorText = styled.p``;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.9s;
  transform-style: preserve-3d;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px 0px 0px 40px;
  padding: 15px 15px 15px 25px;
  margin: 0 8px 0 15px;
  min-height: 200px;
  cursor: pointer;
  background: #edf3ef; /* add a random background color function */

  @media (${mobile}) {
    &:before {
      content: "";
      position: absolute;
      top: -40px;
      right: 8px;
      height: 40px;
      width: 40px;
      border-bottom-right-radius: 50%;
      box-shadow: 0 20px 0 0 #edf3ef;
    }
  }

  @media (${tabletUp}) {
    border-radius: 8px;
    width: 15rem;
    height: 260px;
    justify-content: space-between;
  }

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media (${tabletUp}) {
    flex-direction: column;
  }
`;

const cardDesign = css`
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background: #edf3ef; /* add a random background color function */
`;
export const FlipCardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${cardDesign}

  @media (${tabletUp}) {
    bottom: 0;
  }
`;

export const FlipCardBack = styled.div`
  ${cardDesign}
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: rotateY(180deg);

  @media (${tabletUp}) {
    bottom: 0;
  }
`;
export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #585654;
  width: 100%;
  padding-right: 10px;
  margin: 0;
`;
export const Article = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin: 0;
`;
export const Author = styled.h5`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  padding-top: 5px;
  margin: 0;
`;

export const LinkToNYT = styled.a`
  word-break: break-all;
  color: #518d7a;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 75px;
  max-width: 320px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 0px 0px 40px;

  @media (${tabletUp}) {
    height: 120px;
    border-radius: 8px;
  }
`;
