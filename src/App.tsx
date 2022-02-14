import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { SearchedArticlePage } from "./pages/landingPage/SearchedArticlePage";

//Add routes SearchedArticlePage will have a search/${query} route
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="search" element={<SearchedArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
