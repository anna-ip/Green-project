import React from "react";
import {
  Title,
  Article,
  CardWrapper,
  FlipCardFront,
  FlipCardBack,
  FlipCardInner,
} from "./styles";
import { MediaStackNews } from "../hooks/types/techNewsTypes";

const Card = (props: CardProps) => {
  const { result } = props;
  return (
    <CardWrapper>
      <FlipCardInner>
        <FlipCardFront>
          <Title>{result.title}</Title>
          {result.author && <Article>by {result.author}</Article>}
        </FlipCardFront>
        <FlipCardBack>
          <Article>{result.description}</Article>
        </FlipCardBack>
      </FlipCardInner>
    </CardWrapper>
  );
};

interface CardProps {
  result: MediaStackNews;
}

export default Card;
