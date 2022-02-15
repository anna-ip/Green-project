// import React, { useState } from "react";
// import { SearchContainer, Title } from "./styles";
// import useSearchFetchService from "../hooks/useSearchFetchService";
// import { SearchInput } from "./SearchInput";

// //onSuccess route to searchPage from Landing page
// const onSuccess = (data: any): void => {
//   console.log("Route to search page and display data", data);
// };

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const { data, status, isLoading, error, isFetching } = useSearchFetchService(
//     onSuccess,
//     query
//   );

//   console.log(isLoading, isFetching);
//   const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     return setQuery(event.currentTarget?.value);
//   };

//   return (
//     <SearchContainer>
//       <SearchInput name="query" value={query} onChange={handleSearch} />
//       {error && <p>Something went wrong...</p>}
//       {isLoading && <p>Loading.....</p>}
//       {status === "success" && console.log(data)}
//     </SearchContainer>
//   );
// };

// export default Search;
