import React, { useState } from "react";
import { Input } from "./styles";

const SearchInput = (props: InputProps) => {
  return (
    <>
      <Input
        type="search"
        name={props.name}
        value={props.value}
        placeholder="Search article"
        onChange={props.onChange}
      ></Input>
    </>
  );
};

interface InputProps {
  name: string;
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}

export { SearchInput };
