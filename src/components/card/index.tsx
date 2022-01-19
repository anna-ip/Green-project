import React from "react";
import Card from "./card";
import { CardContainer, ErrorText } from "./styles";
import useTechCrunchService from "../hooks/useTechCrunchService";

const Index: React.FC<{}> = () => {
  const service = useTechCrunchService();
  console.log("service:", service);
  return (
    <>
      {service.status === "loading" && <div>Loading...</div>}
      <CardContainer>
        {service.status === "loaded" &&
          service.payload.articles.map((result, index) => (
            <div key={index}>
              <Card result={result} />
            </div>
          ))}
      </CardContainer>
      {service.status === "error" && (
        <ErrorText>No news at the moment</ErrorText>
      )}
    </>
  );
};

export { Index as CardSection };
