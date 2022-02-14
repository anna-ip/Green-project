import React from "react";
import Card from "./Card";
import { CardContainer, ErrorText } from "./styles";
import useMediaFetchService from "../hooks/useMediaFetchService";

const Index: React.FC<{}> = () => {
  const service = useMediaFetchService();
  console.log("service:", service);
  return (
    <>
      {service.status === "loading" && <div>Loading...</div>}
      <CardContainer>
        {service.status === "loaded" &&
          service.payload.results.map((result) => (
            <div key={result.id}>
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
