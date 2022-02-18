import React from "react";
import { Input, Label, SearchContainer, StyledInput} from "./styles";

const SearchInput = (props: InputProps) => {
  return (
    <SearchContainer>
      <Label htmlFor={props.name}>Search</Label>
      <StyledInput />
      <Input
        type="search"
        name={props.name}
        value={props.value}
        placeholder="Search"
        onChange={props.onChange}
      />
   </SearchContainer>
  );
};

interface InputProps {
  name: string;
  value: string | undefined;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  isMobile?: Boolean;
}

export { SearchInput };
