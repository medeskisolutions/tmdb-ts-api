export interface Result {
  iso_3166_1: string
  title: string
  type: string
}

export interface TvShowAlternativeTitles {
  id: number
  results: Result[]
}

export const mockTvShowAlternativeTitles: TvShowAlternativeTitles = {
  id: 2316,
  results: [
    {
      iso_3166_1: "BR",
      title: "Vida de Escritório",
      type: "",
    },
    {
      iso_3166_1: "BR",
      title: "O Escritório",
      type: "",
    },
    {
      iso_3166_1: "CN",
      title: "美版办公室",
      type: "",
    },
    {
      iso_3166_1: "DE",
      title: "The Office (US) – Das Büro",
      type: "",
    },
    {
      iso_3166_1: "US",
      title: "The Office (U.S.)",
      type: "",
    },
  ],
}
