import React from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header";
import { CardSection } from "../../components/card/index";

const LandingPage = () => {
  return (
    <>
      <Header />
      <CardSection />
      <Footer text={"Footer"} />
    </>
  );
};

export { LandingPage };
