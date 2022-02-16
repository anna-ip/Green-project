import React from "react";
import { Link } from 'react-router-dom';
import { SearchInput } from "../search/SearchInput";
import { BackgroundImage, HeaderContainer, HeaderTitle, Nav } from "./styles";

// needs a navbar and styling

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <Nav>
     <Link to={'/'}>Home</Link> 
      <SearchInput
        name="query"
        value={props.query}
        onChange={props.handleSearch}
      />
      </Nav>
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
