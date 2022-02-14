import React from "react";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { SearchedArticlePage } from "./pages/landingPage/SearchedArticlePage";

//Add routes SearchedArticlePage will have a search/${query} route
const App = () => {
  return (
    <>
      <LandingPage />
      <SearchedArticlePage />
    </>
  );
};

export default App;
