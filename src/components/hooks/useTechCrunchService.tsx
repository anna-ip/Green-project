import { useEffect, useState } from "react";
import { TechCrunchNews } from "./types/techNewsTypes";
import { Service } from "./types/service";

export interface News {
  articles: TechCrunchNews[];
}

const useTechCrunchService = () => {
  const [result, setResult] = useState< Service <News> > ({ status: "loading" });

  const key = process.env.REACT_APP_TECH_CRUNCH_API_KEY
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setResult({status: 'loaded', payload: res}))
    .catch(error => setResult({status: 'error', error}))
  }, []);
  return result;
};

export default useTechCrunchService;
