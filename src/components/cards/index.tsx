import React from "react";
import Card from "./card";
import { CardContainer } from "./styles";
import useTechCrunchService from "../hooks/useTechCrunchService";

//Here I need to fetch the API
// populate the cards with info/news

const Index: React.FC<{}> = () => {
  const service = useTechCrunchService();
  console.log("service:", service);
  return (
    <>
      {service.status === "loading" && <div>Loading...</div>}
      <CardContainer>
        {service.status === "loaded" &&
          service.payload.results?.map((result) =>
            console.log("result:", result)
          )}
        <Card />
      </CardContainer>
    </>
  );
};

export { Index as CardSection };
