import React from "react";
import { BackgroundImage, HeaderContainer, HeaderTitle } from "./styles";

// needs a navbar and styling

const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImage />
      <HeaderTitle>Tech News</HeaderTitle>
    </HeaderContainer>
  );
};

export { Header };
