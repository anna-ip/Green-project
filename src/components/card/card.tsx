import React from "react";
import { Title, Article, CardWrapper } from "./styles";
import { TechCrunchNews } from "../hooks/types/techNewsTypes";

const Card = (props: CardProps) => {
  const { result } = props;
  return (
    <CardWrapper>
      <Title>{result.title}</Title>
      <Article>by {result.author}</Article>
    </CardWrapper>
  );
};

interface CardProps {
  result: TechCrunchNews;
}

export default Card;
