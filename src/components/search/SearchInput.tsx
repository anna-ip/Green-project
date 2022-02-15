import React from "react";
import { Input, SearchContainer } from "./styles";

const SearchInput = (props: InputProps) => {
  return (
    <SearchContainer>
      <Input
        type="search"
        name={props.name}
        value={props.value}
        placeholder="Search article"
        onChange={props.onChange}
      ></Input>
    </SearchContainer>
  );
};

interface InputProps {
  name: string;
  value: string | undefined;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export { SearchInput };
