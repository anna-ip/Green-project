import React from "react";
import { CardSection } from "../../components/card/CardSection";
import { FetchResults } from "../../components/hooks/types/fetchNewsTypes";
import { Wrapper } from "./styles";

const LandingPage = (props: LandingPageProps) => {
  return (
    <Wrapper>
      <CardSection
        data={props.data}
        status={props.status}
        error={props.error}
      />
    </Wrapper>
  );
};

type StatusType = "idle" | "error" | "loading" | "success";
interface LandingPageProps {
  data: FetchResults;
  status: StatusType;
  error: any;
}

export { LandingPage };
