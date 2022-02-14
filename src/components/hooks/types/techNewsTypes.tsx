type MetaType = {
  url: string,
};
type MediaType = {
  "media-metadata": MetaType[],
  caption: string,
};
export interface MediaStackNews {
  url: string;
  section: string;
  byline: string; //author
  title: string;
  abstract: string;
  published_date: string;
  source: string;
  id: number;
  media: MediaType[];
}

export interface FetchResults {
  results: MediaStackNews[];
}
