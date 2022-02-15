import React from "react";
import { SearchInput } from "../search/SearchInput";
import { BackgroundImage, HeaderContainer, HeaderTitle } from "./styles";

// needs a navbar and styling

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <SearchInput
        name="query"
        value={props.query}
        onChange={props.handleSearch}
      />
      <BackgroundImage />
      <HeaderTitle>News</HeaderTitle>
    </HeaderContainer>
  );
};

interface HeaderProps {
  query?: string | undefined;
  handleSearch?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export { Header };
