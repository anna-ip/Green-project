import React from "react";
import { useQuery } from "react-query";

const searchArticlesFetch = async (query: string) => {
  const apiKey = process.env.REACT_APP_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}
  `;
  const res = await fetch(url);
  return res.json();
};

const useSearchFetchService = (
  onSuccess: (data: any) => void,
  query: string
) => {
  return useQuery(
    ["searchArticles", `${query}`],
    () => searchArticlesFetch(query),
    { enabled: Boolean(query.length > 3), onSuccess: onSuccess } //? add select to destruct data => data.docs
  );
};

export default useSearchFetchService;
