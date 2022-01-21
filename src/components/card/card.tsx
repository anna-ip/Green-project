import React from "react";
import {
  Title,
  Article,
  CardWrapper,
  FlipCardFront,
  FlipCardBack,
  FlipCardInner,
} from "./styles";
import { TechCrunchNews } from "../hooks/types/techNewsTypes";

const Card = (props: CardProps) => {
  const { result } = props;
  return (
    <CardWrapper>
      <FlipCardInner>
        <FlipCardFront>
          <Title>{result.title}</Title>
          <Article>by {result.author}</Article>
        </FlipCardFront>
        <FlipCardBack>
          <Article>{result.description}</Article>
        </FlipCardBack>
      </FlipCardInner>
    </CardWrapper>
  );
};

interface CardProps {
  result: TechCrunchNews;
}

export default Card;
