import { useEffect, useState } from "react";
import { MediaStackNews } from "./types/techNewsTypes";
import { Service } from "./types/service";

export interface News {
  data: MediaStackNews[];
}

const useMediaFetchService = () => {
  const [result, setResult] = useState< Service <News> > ({ status: "loading" });

  const key = process.env.REACT_APP_MEDIA_STACK_API_KEY
  const url = `http://api.mediastack.com/v1/news?access_key=${key}&technology&sources=en&keywords=tech`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setResult({status: 'loaded', payload: res}))
    .catch(error => setResult({status: 'error', error}))
  }, []);
  return result;
};

export default useMediaFetchService;
