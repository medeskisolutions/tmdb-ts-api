import { PaginatedResponse } from ".."

export interface CollectionSearchResult {
  adult: boolean
  backdrop_path: string
  id: number
  name: string
  original_language: string
  original_name: string
  overview: string
  poster_path: string
}

export type CollectionsSearchResults = PaginatedResponse<CollectionSearchResult>

export const mockCollectionsSearchResults: CollectionsSearchResults = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/bRm2DEgUiYciDw3myHuYFInD7la.jpg",
      id: 2344,
      name: "The Matrix Collection",
      original_language: "en",
      original_name: "The Matrix Collection",
      overview:
        "The Matrix collection depicts a complex science fiction story incorporating many philosophical elements. Written and directed by the Wachowskis and produced by Joel Silver.",
      poster_path: "/bV9qTVHTVf0gkW0j7p7M0ILD4pG.jpg",
    },
  ],
  total_pages: 1,
  total_results: 1,
}
