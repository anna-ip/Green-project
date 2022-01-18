import React from "react";
import Card from "./card";
import { CardContainer } from "./styles";

//Here I need to fetch the API
// populate the cards with info/news

const index = () => {
  return (
    <CardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardContainer>
  );
};

export { index as CardSection };
