import React from "react";
import useMediaFetchService from "../../components/hooks/useMediaFetchService";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header";
import { CardSection } from "../../components/card/CardSection";
import { Wrapper } from "./styles";

const LandingPage = () => {
  const { data, status, isLoading, error, isFetching } = useMediaFetchService();
  console.log(isFetching);
  console.log("service:", data);
  return (
    <Wrapper>
      <Header />
      <CardSection
        data={data}
        status={status}
        isLoading={isLoading}
        error={error}
      />
      <Footer text={"Footer"} />
    </Wrapper>
  );
};

export { LandingPage };
