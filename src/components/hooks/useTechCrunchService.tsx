import { useEffect, useState } from "react";
import { TechCrunchNews } from "./types/techNewsTypes";
import { Service } from "./types/service";

export interface News {
  articles: TechCrunchNews[];
}

const useTechCrunchService = () => {
  const [result, setResult] = useState< Service <News> > ({ status: "loading" });

  const key = process.env.TECH_CRUNCH_API_KEY

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`)
    .then(res => res.json())
    .then(res => setResult({status: 'loaded', payload: res}))
    .catch(error => setResult({status: 'error', error}))
  }, []);
  console.log('inside hook', result)
  return result;
};

export default useTechCrunchService;
