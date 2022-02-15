import React from "react";
import { FetchResults } from "../hooks/types/techNewsTypes";
import Card from "./Card";
import { CardContainer, ErrorText } from "./styles";

const CardSection: React.FC<CardSectionProps> = (props) => {
  const { status, data, error } = props;

  return (
    <>
      <CardContainer>
        {status === "success" &&
          data?.results?.map((result: any) => (
            <div key={result.id}>
              <Card result={result} />
            </div>
          ))}
      </CardContainer>
      {error && <ErrorText>No news at the moment</ErrorText>}
    </>
  );
};

type StatusType = "idle" | "error" | "loading" | "success";

interface CardSectionProps {
  data: FetchResults;
  status: StatusType;
  error: any;
}

export { CardSection };
