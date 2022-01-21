import styled from "styled-components";

const mobile = "max-width: 767px";
const tabletUp = "min-width: 768px";
const desktopUp = "min-width: 1200px";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50px;
  width: 100%;
  background: #7cbd97;
  border-radius: 0 0 8px 8px;
  margin-bottom: 5px;

  @media (${tabletUp}) {
    padding: 20px 0;
    margin: 5px 0;
  }
`;
export const FooterText = styled.p``;
