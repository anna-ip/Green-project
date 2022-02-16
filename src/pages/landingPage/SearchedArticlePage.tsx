import React, { useState } from "react";
import { CardSection } from "../../components/card/CardSection";
import { FetchResults } from "../../components/hooks/types/fetchNewsTypes";
import { Wrapper } from "./styles";

const SearchedArticlePage = (props: any) => {
  console.log("inside searchPage:", props.data.response);
  return (
    <Wrapper>
      <CardSection
        data={props.data.response}
        status={props.status}
        error={props.error}
      />
    </Wrapper>
  );
};

type StatusType = "idle" | "error" | "loading" | "success";
interface SearchArticlePageProps {
  data: FetchResults;
  status: StatusType;
  error: any;
}

export { SearchedArticlePage };
