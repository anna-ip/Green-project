import { useEffect, useState } from "react";
import { MediaStackNews } from "./types/techNewsTypes";
import { Service } from "./types/service";

export interface News {
  results: MediaStackNews[];
}

const useMediaFetchService = () => {
  const [result, setResult] = useState< Service <News> > ({ status: "loading" });

  const key = process.env.REACT_APP_NYT_API_KEY
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setResult({status: 'loaded', payload: res}))
    .catch(error => setResult({status: 'error', error}))
  }, []);
  return result;
};

export default useMediaFetchService;
