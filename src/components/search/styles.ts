import styled, { css } from "styled-components";

export const Label = styled.label`
  display: block;
  color: transparent;
  transform: translate(3px, -50%);
  pointer-events: none;
  transition: all 0.14s ease-in-out;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const inputSize = css`
  width: 200px;
  height: 25px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  margin: 10px 8px 10px 12px;
  position: absolute;
  top: 10px;
  ${inputSize}
  color: #ffffff;
  ::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #ffffff;
    opacity: inherit;
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    /* Add  background-image: url(icon)  */
    height: 10px;
    width: 10px;
    background: white;
  }
  &:focus {
    left: 0;
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  ${inputSize}
  /* To position so it want jump when label is displayed */
  position: absolute;
  top: 10px;
  padding: 10px 8px 10px 12px;
  background-color: #ffffff;
  opacity: 0.2;
  color: #000;
  border: none;
  border-radius: 8px;
`;

export const SearchContainer = styled.div`
  margin-left: 10px;
  display: block;
  width: 100%;
  max-width: 300px;
  height: 100%;
  position: relative;

  input {
    padding: 0;
  }
  &${Label} {
    color: red;
  }
  &:focus-within ${Label} {
    color: #ffffff;
    display: inline-block;
  }
`;
