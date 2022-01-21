import styled from "styled-components";

const mobile = "max-width: 767px";
const tabletUp = "min-width: 768px";
const desktopUp = "min-width: 1200px";

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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px 0px 0px 40px;
  background: #edf3ef; /* add a random background color function */
  padding: 15px 15px 15px 25px;
  margin: 0 8px 0 15px;
  min-height: 200px;
  cursor: pointer;

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
`;
export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #585654;
`;
export const Article = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;
