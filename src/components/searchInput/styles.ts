import styled, { css } from "styled-components";
import close from "../../assets/close.svg";

export const Label = styled.label`
  display: block;
  /* width: 100%; */
  color: transparent;
  transform: translate(3px, -50%);
  pointer-events: none;
  transition: all 0.14s ease-in-out;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const inputSize = css`
  width: 95%;
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
    background-image: url(${close});
    height: 1em;
    width: 1em;
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
  /* width: 100%; */
  /* To position so it want jump when label is displayed */
  position: absolute;
  top: 10px;
  right: 0px;
  left: 0px;
  padding: 10px 8px 10px 12px;
  background-color: #ffffff;
  opacity: 0.2;
  color: #000;
  border: none;
  border-radius: 8px;
`;

interface SearchContainerProps {
  isMobile: Boolean;
}
export const SearchContainer =
  styled.div <
  SearchContainerProps >
  `
  display: block;

  max-width: 300px;
  position: absolute;
  top: 58%;
  left: 16px;
  right: 0px;
  margin: 0 15px 0 10px;

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

  ${(p) =>
    !p.isMobile &&
    `
      width: 300px;
      top: 20px;
      left: unset;
      right: 65px;
  `}

`;
