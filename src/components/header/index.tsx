import React from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { BackgroundImage, HeaderContainer, HeaderTitle, Nav, StyledIcon, StyledLink } from "./styles";
import {isMobile} from '../../helper/isMobile'

const Header = (props: HeaderProps) => {
  const mobile = isMobile();
  console.log('isMobile', mobile)
  return (
    <HeaderContainer>
      <Nav isMobile={mobile} > 
        {props.showLink && <StyledLink to={'/'} isMobile={mobile}><StyledIcon/></StyledLink>}
         { !mobile && 
          <SearchInput
          isMobile={mobile}
          name="query"
          value={props.query}
          onChange={props.handleSearch}
        />}
      </Nav>
      <BackgroundImage />
      <HeaderTitle>News</HeaderTitle>
      {mobile && 
      <SearchInput
          isMobile={mobile}
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
}

export { Header };
