import React from "react";
import { useQuery } from "react-query";

const fetchArticles = async () => {
  const key = process.env.REACT_APP_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`;

  const res = await fetch(url);
  return res.json();
};
const useMediaFetchService = () => {
  return useQuery("articles", fetchArticles, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }); //? add select to destruct data => data.docs
};

export default useMediaFetchService;
