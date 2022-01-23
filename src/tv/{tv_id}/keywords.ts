export interface Result {
  name: string
  id: number
}

export interface TvShowKeywords {
  id: number
  results: Result[]
}

export const mockTvShowKeywords: TvShowKeywords = {
  id: 2316,
  results: [
    { name: "work", id: 3640 },
    { name: "boss", id: 5306 },
    { name: "office", id: 1438 },
    { name: "mockumentary", id: 11800 },
    { name: "remake", id: 9714 },
    { name: "employer employee relationship", id: 167925 },
    { name: "sitcom", id: 193171 },
    { name: "employment", id: 208768 },
    { name: "workplace comedy", id: 210605 },
  ],
}
