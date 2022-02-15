import React, { useState } from "react";
import { CardSection } from "../../components/card/CardSection";
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

export { SearchedArticlePage };
