import React from "react";
import { CardSection } from "../../components/card/CardSection";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header";
import { Wrapper } from "./styles";

const SearchedArticlePage = () => {
  return (
    <Wrapper>
      <Header />
      {/* <CardSection /> */}
      <p>Hello Search</p>
      <Footer text={"Footer"} />
    </Wrapper>
  );
};

export { SearchedArticlePage };
