import React, { useState } from "react";
import { CardSection } from "../../components/card/CardSection";
import { Wrapper } from "./styles";

const SearchedArticlePage = (props: any) => {
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

export { SearchedArticlePage };
