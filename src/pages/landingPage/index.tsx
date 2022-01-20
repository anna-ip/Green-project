import React from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { CardSection } from "../../components/card/index";
import { Wrapper } from "./styles";

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <CardSection />
      <Footer text={"Footer"} />
    </Wrapper>
  );
};

export { LandingPage };
