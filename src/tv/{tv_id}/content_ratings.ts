export interface Result {
  iso_3166_1: string
  rating: string
}

export interface TvShowContentRatings {
  results: Result[]
  id: number
}

export const mockTvShowContentRatings: TvShowContentRatings = {
  results: [
    {
      iso_3166_1: "AU",
      rating: "M",
    },
    {
      iso_3166_1: "US",
      rating: "TV-14",
    },
    {
      iso_3166_1: "FR",
      rating: "NR",
    },
    {
      iso_3166_1: "RU",
      rating: "16+",
    },
    {
      iso_3166_1: "DE",
      rating: "12",
    },
    {
      iso_3166_1: "KR",
      rating: "15",
    },
    {
      iso_3166_1: "GB",
      rating: "12",
    },
    {
      iso_3166_1: "BR",
      rating: "14",
    },
    {
      iso_3166_1: "ES",
      rating: "13",
    },
  ],
  id: 2316,
}
