import React from "react";
import {
  Title,
  Article,
  CardWrapper,
  FlipCardFront,
  FlipCardBack,
  FlipCardInner,
  LinkToNYT,
  Author,
  Image,
  Container,
} from "./styles";
import { MediaStackNews } from "../hooks/types/techNewsTypes";

const Card = (props: CardProps) => {
  const { result } = props;

  return (
    <CardWrapper>
      <FlipCardInner>
        <FlipCardFront>
          <Container>
            <Title>{result.title}</Title>
            {result.media.map((meta) => (
              <Image
                key={meta.caption}
                src={meta["media-metadata"][1].url}
                alt={meta.caption}
              />
            ))}
          </Container>
          <Author>{result.byline}</Author>
        </FlipCardFront>
        <FlipCardBack>
          <Article>{result.abstract}</Article>
          <Author>{result.byline}</Author>
          <LinkToNYT href={result.url}>{result.url}</LinkToNYT>
        </FlipCardBack>
      </FlipCardInner>
    </CardWrapper>
  );
};

interface CardProps {
  result: MediaStackNews;
}

export default Card;
