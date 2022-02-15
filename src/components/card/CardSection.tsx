import React from "react";
import { FetchResults } from "../hooks/types/fetchNewsTypes";
import Card from "./Card";
import { CardContainer, ErrorText } from "./styles";

const CardSection: React.FC<CardSectionProps> = (props) => {
  const { status, data, error } = props;
  const newsResult = data?.results;
  const searchResult = data?.docs;

  return (
    <>
      <CardContainer>
        {status === "success" &&
          newsResult &&
          newsResult?.map((result: any) => (
            <div key={result.id}>
              <Card result={result} />
            </div>
          ))}
        {status === "success" &&
          searchResult &&
          searchResult.map((response: any) => (
            <div key={response._id}>
              <Card response={response} />
            </div>
          ))}
      </CardContainer>
      {error && <ErrorText>No news at the moment</ErrorText>}
    </>
  );
};

type StatusType = "idle" | "error" | "loading" | "success";

interface CardSectionProps {
  data?: FetchResults;
  status?: StatusType;
  error?: any;
}

export { CardSection };
