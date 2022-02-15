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
import { NYTNews, SearchNews } from "../hooks/types/fetchNewsTypes";

const Card = (props: CardProps) => {
  const { result, response } = props;

  return (
    <CardWrapper>
      <FlipCardInner>
        {result && (
          <FlipCardFront>
            <Container>
              <Title>{result.title}</Title>
              {result.media.map((meta) => (
                <Image
                  key={meta.caption}
                  src={meta["media-metadata"][1]?.url}
                  alt={meta.caption}
                />
              ))}
            </Container>
            <Author>{result.byline}</Author>
          </FlipCardFront>
        )}
        {response && (
          <FlipCardFront>
            <Container>
              <Title>{response?.headline?.main}</Title>
              <Image
                src={`https://static01.nyt.com/${response?.multimedia[0]?.url}`}
                alt={response.multimedia[0].caption}
              />
            </Container>
            <Author>{response?.byline?.original}</Author>
          </FlipCardFront>
        )}
        {result && (
          <FlipCardBack>
            <Article>{result.abstract}</Article>
            <Author>{result.byline}</Author>
            <LinkToNYT href={result.url}>{result.url}</LinkToNYT>
          </FlipCardBack>
        )}
        {response && (
          <FlipCardBack>
            <Article>{response.abstract}</Article>
            <Author>{response.byline.original}</Author>
            <LinkToNYT href={response.web_url}>{response.web_url}</LinkToNYT>
          </FlipCardBack>
        )}
      </FlipCardInner>
    </CardWrapper>
  );
};

interface CardProps {
  result?: NYTNews;
  response?: SearchNews;
}

export default Card;
