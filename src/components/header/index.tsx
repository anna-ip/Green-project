import React from "react";
import { SearchInput } from "../search/SearchInput";
import { BackgroundImage, HeaderContainer, HeaderTitle, Nav, StyledIcon, StyledLink } from "./styles";

// needs a navbar and styling

const Header = (props: HeaderProps) => {
  let {isMobile = true} = props;
  return (
    <HeaderContainer>
      <Nav isMobile={isMobile} > 
        {props.showLink && <StyledLink to={'/'}><StyledIcon/></StyledLink>}
         { !isMobile && 
          <SearchInput
          isMobile={isMobile}
          name="query"
          value={props.query}
          onChange={props.handleSearch}
        />}
      </Nav>
      <BackgroundImage />
      <HeaderTitle>News</HeaderTitle>
      {isMobile && 
      <SearchInput
          isMobile={isMobile}
          name="query"
          value={props.query}
          onChange={props.handleSearch}
        />
      } 
    </HeaderContainer>
  );
};

interface HeaderProps {
  query?: string | undefined;
  handleSearch?(event: React.ChangeEvent<HTMLInputElement>): void;
  showLink: Boolean;
  isMobile?: Boolean;
}

export { Header };
