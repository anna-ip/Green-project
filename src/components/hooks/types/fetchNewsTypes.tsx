type MetaType = {
  url: string,
};
type MediaType = {
  "media-metadata": MetaType[],
  caption: string,
};
export interface NYTNews {
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

type Title = { main: string };
type Author = { original: string };

type MultimediaType = {
  url: string,
  caption: string,
};

export interface SearchNews {
  web_url: string;
  section_name: string;
  byline: Author;
  headline: Title;
  abstract: string;
  pub_date: string;
  source: string;
  _id: string;
  multimedia: MultimediaType[];
}
export interface FetchResults {
  results?: NYTNews[];
  docs?: SearchNews[];
}
