import { PaginatedResponse } from ".."

export interface KeywordSearchResult {
  name: string
  id: number
}

export type KeywordsSearchResults = PaginatedResponse<KeywordSearchResult>

export const mockKeywordsSearchResults: KeywordsSearchResults = {
  page: 1,
  results: [
    {
      name: "science fiction writer",
      id: 268889,
    },
    {
      name: "science fiction",
      id: 287404,
    },
  ],
  total_pages: 1,
  total_results: 2,
}
