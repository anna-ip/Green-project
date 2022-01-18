import React from "react";
import { FooterText, Container } from "./styles";

const Footer: React.VFC<FooterProps> = (props) => {
  const { text } = props;
  return (
    <Container>
      <FooterText>{text}</FooterText>
    </Container>
  );
};

interface FooterProps {
  text: string;
}

export { Footer };
