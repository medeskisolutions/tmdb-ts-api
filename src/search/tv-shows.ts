import { PaginatedResponse } from ".."

export interface TvShowSearchResult {
  backdrop_path: string | null
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  vote_average: number
  vote_count: number
}

export type TvShowsSearchResults = PaginatedResponse<TvShowSearchResult>

export const mockTvShowsSearchResults: TvShowsSearchResults = {
  page: 1,
  results: [
    {
      backdrop_path: "/5s9XHTB9SLPdg3mNU6BlSLnZ9Qq.jpg",
      first_air_date: "2011-01-09",
      genre_ids: [18, 35],
      id: 34307,
      name: "Shameless",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Shameless",
      overview:
        "Chicagoan Frank Gallagher is the proud single dad of six smart, industrious, independent kids, who without him would be... perhaps better off. When Frank's not at the bar spending what little money they have, he's passed out on the floor. But the kids have found ways to grow up in spite of him. They may not be like any family you know, but they make no apologies for being exactly who they are.",
      popularity: 161.183,
      poster_path: "/9akij7PqZ1g6zl42DQQTtL9CTSb.jpg",
      vote_average: 8,
      vote_count: 1519,
    },
    {
      backdrop_path: "/1FWw7Q5gn74tYVsyLdo3AcO3LNR.jpg",
      first_air_date: "2004-01-13",
      genre_ids: [35, 18],
      id: 1906,
      name: "Shameless",
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Shameless",
      overview:
        "The story of a young group of siblings pretty much abandoned by their parents, surviving by their wits - and humor - on a rough Manchester council estate. Whilst they won't admit it, they need help and find it in Steve, a young middle class lad who falls for Fiona, the oldest sibling, and increasingly finds himself drawn to this unconventional and unique family. Anarchic family life seen through the eyes of an exceptionally bright fifteen year old, who struggles to come of age in the context of his belligerent father, closeted brother, psychotic sister and internet porn star neighbors.",
      popularity: 22.948,
      poster_path: "/kE30UWJvJZ03KIIJMmL6m6YoG0l.jpg",
      vote_average: 7.5,
      vote_count: 82,
    },
    {
      backdrop_path: "/7orXIm0RVG4CijVhfpeeOKHGjEW.jpg",
      first_air_date: "2020-12-27",
      genre_ids: [18, 35],
      id: 136773,
      name: "Shameless Hall of Shame",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Shameless Hall of Shame",
      overview:
        "Shameless Hall of Shame is a mini series that airs during the eleventh season of Shameless (US). The series contains new and original scenes that are juxtaposed with flashbacks of the series' lead characters throughout the past ten seasons. Six episodes are set to air, with the final episode airing on February 28, 2021.",
      popularity: 4.457,
      poster_path: "/uD2M54SCOeif6LgzZrKOztpqQnf.jpg",
      vote_average: 0,
      vote_count: 0,
    },
    {
      backdrop_path: null,
      first_air_date: "2020-09-09",
      genre_ids: [],
      id: 109353,
      name: "Shameless",
      origin_country: [],
      original_language: "nb",
      original_name: "Skamløs",
      overview:
        "Sofia Srour and Nancy Herz about sex, virginity, faith, honour, and social control.",
      popularity: 0.639,
      poster_path: null,
      vote_average: 0,
      vote_count: 0,
    },
  ],
  total_pages: 1,
  total_results: 4,
}
