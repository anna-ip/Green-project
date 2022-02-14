import React from "react";
import Search from "../search/Search";
import { BackgroundImage, HeaderContainer, HeaderTitle } from "./styles";

// needs a navbar and styling

const Header = () => {
  return (
    <HeaderContainer>
      <Search />
      <BackgroundImage />
      <HeaderTitle>News</HeaderTitle>
    </HeaderContainer>
  );
};

export { Header };
