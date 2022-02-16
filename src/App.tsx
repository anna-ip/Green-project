import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";
import useMediaFetchService from "./components/hooks/useMediaFetchService";
import useSearchFetchService from "./components/hooks/useSearchFetchService";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { SearchedArticlePage } from "./pages/landingPage/SearchedArticlePage";

//? Add routes SearchedArticlePage should have a search/${query} route
const App = () => {
  const [query, setQuery] = useState("");
  const onSuccess = (searchData: []) => {
    console.log("Route to search page and display data", searchData);
    navigate("/search");
  };
  const { data, status, isLoading, error } = useMediaFetchService();
  const {
    data: searchData = [],
    status: searchStatus,
    isLoading: searchIsLoading,
    error: searchError,
  } = useSearchFetchService(onSuccess, query);
  const navigate = useNavigate();

  console.log("landingPageArticles:", data);

  console.log("searchedPageData:", query, searchData, searchStatus);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    return setQuery(event.currentTarget?.value);
  };

  return (
    <>
      <Header query={query} handleSearch={handleSearch} />
      {isLoading && <div>Loading...</div>}
      {searchIsLoading && <div>Search is loading...</div>}
      <Routes>
        <Route
          path="/"
          element={<LandingPage data={data} status={status} error={error} />}
        />

        <Route
          path="/search"
          element={
            <SearchedArticlePage
              data={searchData}
              status={searchStatus}
              isLoading={searchIsLoading}
              error={searchError}
            />
          }
        />
      </Routes>

      <Footer text={"Footer"} />
    </>
  );
};

export default App;
