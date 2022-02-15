import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";
import useMediaFetchService from "./components/hooks/useMediaFetchService";
import useSearchFetchService from "./components/hooks/useSearchFetchService";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { SearchedArticlePage } from "./pages/landingPage/SearchedArticlePage";

const onSuccess = (data: any) => {
  console.log("Route to search page and display data", data);
  <Link to={"/search"} />;
};

//? Add routes SearchedArticlePage should have a search/${query} route
const App = () => {
  const [query, setQuery] = useState("");
  const { data, status, isLoading, error, isFetching } = useMediaFetchService();

  const {
    data: searchData,
    status: searchStatus,
    isLoading: searchIsLoading,
    error: searchError,
    isFetching: searchIsFetch,
  } = useSearchFetchService(onSuccess, query);

  console.log("landingPageArticles:", data);

  console.log(
    "searchedPageData:",
    query,
    searchData,
    searchIsLoading,
    searchIsFetch,
    searchStatus,
    searchError
  );

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
          element={
            <LandingPage
              data={data}
              status={status}
              isLoading={isLoading}
              error={error}
            />
          }
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
