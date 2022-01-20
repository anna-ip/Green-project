import styled from "styled-components";

const tabletUp = "min-width: 768px";
const desktopUp = "min-width: 1200px";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  position: absolute;
  top: 365px;
  left: 25px;

  @media (${tabletUp}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ErrorText = styled.p``;
export const CardWrapper = styled.div`
  border-radius: 8px 0px 0px 40px;
  background: #edf3ef; /* add a random background color function */
  padding: 15px 15px 15px 25px;
  margin: 0 8px 0 15px;

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
